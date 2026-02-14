#!/usr/bin/env node
/**
 * Compresses PNG/JPEG images in public folders to speed up loading.
 * Run: node scripts/compress-images.mjs
 * Requires: npm install sharp --save-dev
 */

import { readdir, stat } from "fs/promises";
import { join, extname } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, "..", "public");

const FOLDERS_TO_COMPRESS = ["CollectionA", "CollectionB", "PantTechPack", "SkirtTechPack"];
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;

async function getImagePaths(dir, base = PUBLIC_DIR) {
  const entries = await readdir(dir, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      paths.push(...(await getImagePaths(full, base)));
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if ([".png", ".jpg", ".jpeg"].includes(ext)) paths.push(full);
    }
  }
  return paths;
}

async function main() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.error("Run: npm install sharp --save-dev");
    process.exit(1);
  }

  for (const folder of FOLDERS_TO_COMPRESS) {
    const folderPath = join(PUBLIC_DIR, folder);
    try {
      await stat(folderPath);
    } catch {
      continue;
    }

    const files = await getImagePaths(folderPath);
    for (const file of files) {
      const ext = extname(file).toLowerCase();
      try {
        let pipeline = sharp(file);
        const meta = await pipeline.metadata();
        const width = meta.width || 0;

        if (width > MAX_WIDTH) {
          pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
        }

        if (ext === ".png") {
          await pipeline.png({ compressionLevel: 9 }).toFile(file + ".tmp");
        } else {
          await pipeline.jpeg({ quality: JPEG_QUALITY }).toFile(file + ".tmp");
        }

        const { rename } = await import("fs/promises");
        await rename(file + ".tmp", file);
        console.log("Compressed:", file.replace(PUBLIC_DIR, "public"));
      } catch (err) {
        console.warn("Skip", file, err.message);
      }
    }
  }

  console.log("Done.");
}

main();
