import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { PAGE_SEO, SITE_URL } from "../src/config/seo.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist");

// Priority/changefreq per page — tweak as you like
const PAGE_META = {
  home: { priority: "1.0", changefreq: "weekly" },
  about: { priority: "0.7", changefreq: "monthly" },
  contact: { priority: "0.6", changefreq: "monthly" },
  resourceCentre: { priority: "0.6", changefreq: "weekly" },
  projects: { priority: "0.8", changefreq: "weekly" },
  survey: { priority: "0.8", changefreq: "monthly" },
  drilling: { priority: "0.8", changefreq: "monthly" },
  equipping: { priority: "0.8", changefreq: "monthly" },
  solarisation: { priority: "0.8", changefreq: "monthly" },
  rehabilitation: { priority: "0.8", changefreq: "monthly" },
  inspection: { priority: "0.8", changefreq: "monthly" },
};

function toUrlEntry(key, page) {
  const meta = PAGE_META[key] || { priority: "0.5", changefreq: "monthly" };
  const loc = page.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${page.path}/`;

  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`;
}

async function generateSitemap() {
  const entries = Object.entries(PAGE_SEO)
    .filter(([, page]) => page.path) // skip notFound (path: null)
    .map(([key, page]) => toUrlEntry(key, page))
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

  const outPath = path.join(DIST_DIR, "sitemap.xml");
  await fs.writeFile(outPath, xml, "utf-8");
  console.log(`Sitemap written to ${path.relative(process.cwd(), outPath)}`);
}

generateSitemap().catch((err) => {
  console.error("Sitemap generation failed:", err);
  process.exit(1);
});
