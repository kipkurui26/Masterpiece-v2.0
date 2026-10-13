// WordPress (headless CMS) settings for the Resource Centre
export const WP_API = (import.meta.env.VITE_WP_API_URL || "").replace(/\/$/, "");

export const FEATURED_SLUG = "featured";

// Categories used for curation/housekeeping, not shown as filter pills or badges
export const HIDDEN_CATEGORY_SLUGS = [FEATURED_SLUG, "uncategorized"];

export const POSTS_PER_PAGE = 9;
export const BANNER_POST_COUNT = 5; // max slides
export const BANNER_MIN_POSTS = 3; // top up with latest posts below this
export const CACHE_TTL_MS = 5 * 60 * 1000;