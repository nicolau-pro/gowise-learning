#!/usr/bin/env node

/**
 * Simple sitemap generator
 * Run manually with: npx ./generate-sitemap.cjs
 * or automatically from package.json
 */

const fs = require('fs');
const path = require('path');

// === CONFIGURATION ===
const BASE_URL = 'https://gowiselearning.co.uk'; // your root URL
const SOURCE_DIR = path.join(process.cwd(), '.presite'); // where HTML + legal files are
const OUTPUT_FILE = path.join(process.cwd(), '.presite', 'sitemap.xml');

// === RECURSIVELY GET ALL FILES (HTML + /legal) ===
function getAllFiles(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getAllFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

// === GENERATE XML ===
function createSitemap(entries) {
  function getPriority(url) {
    const priorityMap = [
      ['/', 1],
      ['/parents', 1],
      ['/tutors', 1],
      ['/schools-and-local-authorities', 1],
      ['/contact', 0.8],
      ['/about-us', 0.6],
      ['/policies', 0.3],
    ];

    try {
      const u = new URL(url);

      // PDF rule — always lowest priority except 0.0
      if (u.pathname.toLowerCase().endsWith('.pdf')) {
        return 0.1;
      }

      let path = u.pathname; // e.g. "/about-us/"

      // Normalize: remove trailing slash except root "/"
      if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1); // "/about-us"
      }

      const match = priorityMap.find(([p]) => p === path);
      return match ? match[1] : 0.5; // fallback default
    } catch {
      return 0.5;
    }
  }

  const xmlUrls = entries
    .map(({ url, lastmod }) => {
      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${getPriority(url).toFixed(1)}</priority>
  </url>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlUrls}
</urlset>`;
}

// === MAIN ===
(function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  // Ensure output directory exists
  const publicDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Collect all files
  allFiles = allFiles.filter((file) => {
    const basename = path.basename(file).toLowerCase();
    const relPath = path.relative(SOURCE_DIR, file).replace(/\\/g, '/').toLowerCase();

    const isGoogleFile = basename.startsWith('google');
    const isEmailFolder = relPath.includes('/email/') || relPath.startsWith('email/');
    const isHtml = file.endsWith('.html');
    const isLegalFolder = relPath.startsWith('legal/') || relPath.includes('/legal/');

    // 🚫 Exclude 404 page
    const is404 =
      relPath === '404.html' || relPath === '404/index.html' || relPath.endsWith('/404.html');

    // Final allow rule
    return !is404 && (isLegalFolder || (isHtml && !isGoogleFile && !isEmailFolder));
  });

  // Build full URL + lastmod
  const urls = allFiles.map((file) => {
    const relPath = path.relative(SOURCE_DIR, file);
    const urlPath = relPath
      .replace(/\\/g, '/')
      .replace(/index\.html$/, '')
      .replace(/\.html$/, '');

    // lastmod = YYYY-MM-DD
    const stats = fs.statSync(file);
    const lastmod = stats.mtime.toISOString().split('T')[0];

    return {
      url: `${BASE_URL}/${urlPath}`,
      lastmod,
    };
  });

  // Generate sitemap content
  const sitemap = createSitemap(urls);

  // Write to .presite/sitemap.xml
  fs.writeFileSync(OUTPUT_FILE, sitemap, 'utf8');

  console.log(`✅ Sitemap created: ${OUTPUT_FILE}`);
  console.log(`📄 ${urls.length} URLs added (with lastmod, including /legal/)`);
})();
