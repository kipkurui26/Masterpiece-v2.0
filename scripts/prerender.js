import puppeteer from "puppeteer";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { ROUTES_TO_PRERENDER } from "./routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist");
const PORT = 4173;

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

  for (const route of ROUTES_TO_PRERENDER) {
    const url = `${baseUrl}${route}`;
    console.log(`Prerendering: ${route}`);

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0" });

    // Give React/Helmet a moment to finish rendering head tags
    await new Promise((r) => setTimeout(r, 300));

    const html = await page.content();

    // Determine output path: "/" -> dist/index.html, "/about" -> dist/about/index.html
    const outPath =
      route === "/"
        ? path.join(DIST_DIR, "index.html")
        : path.join(DIST_DIR, route, "index.html");

    await fs.mkdir(path.dirname(outPath), { recursive: true });
    await fs.writeFile(outPath, html, "utf-8");

    await page.close();
    console.log(`  -> saved to ${path.relative(DIST_DIR, outPath)}`);
  }

  await browser.close();
  await server.close();
  console.log("Prerendering complete.");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});