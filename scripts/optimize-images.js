import sharp from "sharp";
import fs from "fs";
import path from "path";

const SECTIONS = [
  "home",
  "survey",
  "drilling",
  "equipping",
  "solarisation",
  "rehabilitation",
  "inspection",
];
const WIDTHS = [768, 1280, 1920];
const ORIGINAL_DIR = "src/assets/images/original";
const OPTIMIZED_DIR = "src/assets/images/optimized";

async function optimizeSection(section) {
  const srcDir = path.join(ORIGINAL_DIR, section);
  const outDir = path.join(OPTIMIZED_DIR, section);
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(outDir, { recursive: true });

  // one source hero file per section, e.g. home-hero.jpg
  const files = fs.readdirSync(srcDir).filter((f) => /\.(jpe?g|png)$/i.test(f));

  for (const file of files) {
    const baseName = path.parse(file).name; // "home-hero"
    const srcPath = path.join(srcDir, file);

    for (const width of WIDTHS) {
      const pipeline = () =>
        sharp(srcPath).resize({ width, withoutEnlargement: true });

      await pipeline()
        .avif({ quality: 55 })
        .toFile(path.join(outDir, `${baseName}-${width}.avif`));
      await pipeline()
        .webp({ quality: 78 })
        .toFile(path.join(outDir, `${baseName}-${width}.webp`));

      // fallback for the <img> tag itself — only need it at the mid width
      if (width === 1280) {
        await pipeline()
          .jpeg({ quality: 75, mozjpeg: true })
          .toFile(path.join(outDir, `${baseName}-${width}.jpg`));
      }
      console.log(`✓ ${baseName}-${width}`);
    }
  }
}

(async () => {
  for (const section of SECTIONS) await optimizeSection(section);
})();
