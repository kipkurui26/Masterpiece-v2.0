import puppeteer from "puppeteer";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { ROUTES_TO_PRERENDER } from "./routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist");
const PORT = 4173;

const BLOCKED_HOSTS = [
  "tawk.to",
  "googletagmanager.com",
  "google-analytics.com",
];

async function serveDist() {
  // Use Vite's preview server to serve the already-built dist/ folder
  const { preview } = await import("vite");
  const server = await preview({
    preview: { port: PORT },
  });
  return server;
}

async function prerender() {
  console.log("Starting preview server...");
  const server = await serveDist();
  const baseUrl = `http://localhost:${PORT}`;

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  // The home page is written LAST. Writing it first would overwrite
  // dist/index.html, which the preview server uses as the template for
  // every other route, leaking the home page's head tags into them.
  let homeHtml = null;

  for (const route of ROUTES_TO_PRERENDER) {
    const url = `${baseUrl}${route}`;
    console.log(`Prerendering: ${route}`);

    const page = await browser.newPage();

    // Keep third-party widgets/analytics out of the static HTML
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (BLOCKED_HOSTS.some((host) => req.url().includes(host))) {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto(url, { waitUntil: "networkidle0" });

    // Give React/Helmet a moment to finish rendering head tags
    await new Promise((r) => setTimeout(r, 300));

    const html = await page.content();
    await page.close();

    if (route === "/") {
      homeHtml = html;
      console.log("  -> held in memory, will be written last");
      continue;
    }

    // "/about" -> dist/about/index.html
    const outPath = path.join(DIST_DIR, route, "index.html");
    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, html, "utf-8");
    console.log(`  -> saved to ${path.relative(DIST_DIR, outPath)}`);
  }

  if (homeHtml) {
    const homePath = path.join(DIST_DIR, "index.html");
    await fs.writeFile(homePath, homeHtml, "utf-8");
    console.log(`  -> saved to ${path.relative(DIST_DIR, homePath)}`);
  }

  await browser.close();
  await server.close();
  console.log("Prerendering complete.");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});