import { PAGE_SEO } from "../src/config/seo.js";

// Extract every path except null ones (like 404, which shouldn't be prerendered)
export const ROUTES_TO_PRERENDER = Object.values(PAGE_SEO)
  .map((page) => page.path)
  .filter(Boolean);