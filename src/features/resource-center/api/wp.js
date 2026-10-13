import {
  WP_API,
  FEATURED_SLUG,
  HIDDEN_CATEGORY_SLUGS,
  POSTS_PER_PAGE,
  BANNER_POST_COUNT,
  BANNER_MIN_POSTS,
  CACHE_TTL_MS,
} from "../../../config/wp";

const POST_FIELDS =
  "id,slug,link,date,title,excerpt,categories,_links,_embedded";
const POST_EMBED = "wp:featuredmedia,wp:term";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

// WordPress returns titles/excerpts as HTML with entities (&#8217; and <p> tags).
// DOMParser decodes them without executing anything.
export function toPlainText(html = "") {
  if (typeof DOMParser === "undefined") {
    return html.replace(/<[^>]*>/g, "").trim();
  }
  const doc = new DOMParser().parseFromString(html, "text/html");
  return (doc.body.textContent || "")
    .replace(/\s+/g, " ")
    .replace(/\s*\[…\]$/, "…")
    .trim();
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function buildSrcSet(sizes = {}) {
  const seen = new Set();
  return Object.values(sizes)
    .filter((s) => s?.source_url && s?.width)
    .sort((a, b) => a.width - b.width)
    .filter((s) => !seen.has(s.source_url) && seen.add(s.source_url))
    .map((s) => `${s.source_url} ${s.width}w`)
    .join(", ");
}

/* ------------------------------------------------------------------ */
/* Fetch + cache                                                       */
/* ------------------------------------------------------------------ */

// Caches the in-flight promise, so two components asking for the same URL
// share one request. Entries expire after CACHE_TTL_MS; failures are not cached.
const cache = new Map();

function buildUrl(path, params) {
  const url = new URL(`${WP_API}${path}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, value);
    }
  });
  return url.toString();
}

function wpFetch(path, params = {}) {
  if (!WP_API) {
    return Promise.reject(new Error("VITE_WP_API_URL is not set"));
  }

  const url = buildUrl(path, params);
  const hit = cache.get(url);
  if (hit && Date.now() - hit.time < CACHE_TTL_MS) return hit.promise;

  const promise = fetch(url, { headers: { Accept: "application/json" } })
    .then(async (res) => {
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        // Asking for a page past the last one returns a 400 in WordPress
        if (res.status === 400 && body?.code === "rest_post_invalid_page_number") {
          return { items: [], total: 0, totalPages: 0, outOfRange: true };
        }
        throw new Error(body?.message || `WordPress request failed (${res.status})`);
      }
      return {
        items: await res.json(),
        total: Number(res.headers.get("X-WP-Total")) || 0,
        totalPages: Number(res.headers.get("X-WP-TotalPages")) || 0,
        outOfRange: false,
      };
    })
    .catch((error) => {
      cache.delete(url);
      throw error;
    });

  cache.set(url, { time: Date.now(), promise });
  return promise;
}

/* ------------------------------------------------------------------ */
/* Normalisers                                                         */
/* ------------------------------------------------------------------ */

function normalizeCategory(c) {
  return {
    id: c.id,
    name: toPlainText(c.name),
    slug: c.slug,
    count: c.count,
    parent: c.parent,
  };
}

export function normalizePost(p) {
  const media = p._embedded?.["wp:featuredmedia"]?.[0];
  const sizes = media?.media_details?.sizes ?? {};

  // wp:term holds categories and tags as separate arrays; keep categories only
  const categories = (p._embedded?.["wp:term"] ?? [])
    .flat()
    .filter((t) => t.taxonomy === "category")
    .map((t) => ({ id: t.id, name: toPlainText(t.name), slug: t.slug }));

  const primary = categories.find((c) => !HIDDEN_CATEGORY_SLUGS.includes(c.slug));
  const title = toPlainText(p.title?.rendered);

  return {
    id: p.id,
    slug: p.slug,
    url: p.link, // article on the blogs subdomain (Option A)
    date: p.date,
    dateLabel: formatDate(p.date),
    title,
    excerpt: toPlainText(p.excerpt?.rendered),
    image: sizes.large?.source_url || media?.source_url || null,
    imageSrcSet: buildSrcSet(sizes) || null,
    imageWidth: media?.media_details?.width ?? null,
    imageHeight: media?.media_details?.height ?? null,
    imageAlt: media?.alt_text || title,
    category: primary?.name ?? null,
    categorySlug: primary?.slug ?? null,
    isFeatured: categories.some((c) => c.slug === FEATURED_SLUG),
  };
}

/* ------------------------------------------------------------------ */
/* Public API                                                          */
/* ------------------------------------------------------------------ */

// Every non-empty category, including Featured. Used internally for slug -> id.
async function getAllCategories() {
  const { items } = await wpFetch("/categories", {
    per_page: 100,
    hide_empty: true,
    orderby: "name",
    order: "asc",
    _fields: "id,name,slug,count,parent",
  });
  return items.map(normalizeCategory);
}

// Categories for the filter pills (Featured / Uncategorized removed)
export async function fetchCategories() {
  const all = await getAllCategories();
  return all.filter((c) => !HIDDEN_CATEGORY_SLUGS.includes(c.slug));
}

// Paginated posts. `category` is a slug; WordPress only filters by ID,
// so it is resolved here. An unknown slug returns an empty result.
export async function fetchPosts({
  category,
  page = 1,
  perPage = POSTS_PER_PAGE,
  search = "",
  exclude = [],
} = {}) {
  let categoryId;
  if (category) {
    const all = await getAllCategories();
    categoryId = all.find((c) => c.slug === category)?.id;
    if (!categoryId) {
      return { posts: [], total: 0, totalPages: 0, outOfRange: false };
    }
  }

  const { items, total, totalPages, outOfRange } = await wpFetch("/posts", {
    per_page: perPage,
    page,
    categories: categoryId,
    search: search.trim(),
    exclude: exclude.join(","),
    orderby: "date",
    order: "desc",
    _embed: POST_EMBED,
    _fields: POST_FIELDS,
  });

  return { posts: items.map(normalizePost), total, totalPages, outOfRange };
}

// Banner posts: latest Featured posts, topped up with the newest other posts
// when there are fewer than BANNER_MIN_POSTS so the layout never looks empty.
export async function fetchFeaturedPosts() {
  const { posts: featured } = await fetchPosts({
    category: FEATURED_SLUG,
    perPage: BANNER_POST_COUNT,
  });

  if (featured.length >= BANNER_MIN_POSTS) return featured;

  const { posts: latest } = await fetchPosts({
    perPage: BANNER_MIN_POSTS - featured.length,
    exclude: featured.map((p) => p.id),
  });

  return [...featured, ...latest];
}