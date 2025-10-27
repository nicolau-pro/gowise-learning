#!/usr/bin/env node

/**
 * Simple sitemap generator
 * Run manually with: npx ./generate-sitemap.js
 * or automatically from package.json
 */

const fs = require('fs');
const path = require('path');

// === CONFIGURATION ===
const BASE_URL = 'https://gowiselearning.co.uk'; // your root URL
const SOURCE_DIR = path.join(process.cwd(), '.presite'); // ← changed to .presite
const OUTPUT_FILE = path.join(process.cwd(), '.presite', 'sitemap.xml');

// === RECURSIVELY GET ALL HTML FILES ===
function getHtmlFiles(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getHtmlFiles(fullPath));
    } else if (item.isFile() && item.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }
  return files;
}

// === GENERATE XML ===
function createSitemap(urls) {
  const xmlUrls = urls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
}

// === MAIN ===
(function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  // Ensure /public exists
  const publicDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Collect all HTML files
  const htmlFiles = getHtmlFiles(SOURCE_DIR);

  // Build full URLs
  const urls = htmlFiles.map((file) => {
    const relPath = path.relative(SOURCE_DIR, file);
    const urlPath = relPath
      .replace(/\\/g, '/')
      .replace(/index\.html$/, '')
      .replace(/\.html$/, '');
    return `${BASE_URL}/${urlPath}`;
  });

  // Generate sitemap content
  const sitemap = createSitemap(urls);

  // Write to /public/sitemap.xml
  fs.writeFileSync(OUTPUT_FILE, sitemap, 'utf8');

  console.log(`✅ Sitemap created: ${OUTPUT_FILE}`);
  console.log(`📄 ${urls.length} URLs added`);
})();
