#!/usr/bin/env node
/**
 * restore-pdf-links.cjs
 * Converts <details data-link="pdf"> blocks into <a href="..."> elements
 * after PreSite finishes building static HTML.
 */

const fs = require('fs');
const path = require('path');

const presiteDir = path.join(process.cwd(), '.presite');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (file.endsWith('.html')) {
      let html = fs.readFileSync(fullPath, 'utf8');

      // Replace <details data-link="pdf"...>...</details> with <a href="...">...</a>
      html = html.replace(
        /<details\s+[^>]*data-link=["']pdf["'][^>]*>\s*<summary>([\s\S]*?)<\/summary>\s*([^<>\s]+)\s*<\/details>/gi,
        (match, summaryContent, pdfPath) => {
          // Clean up any accidental JSX-like tags (Icon → span)
          const cleanedSummary = summaryContent
            .replace(/<Icon\b[^>]*>([\s\S]*?)<\/Icon>/gi, '<span class="icon">$1</span>')
            .trim();

          return `<a href="${pdfPath}" data-discover="true">${cleanedSummary}</a>`;
        }
      );

      fs.writeFileSync(fullPath, html, 'utf8');
    }
  }
}

console.log('🔗 Restoring PDF links in .presite...');
processDir(presiteDir);
console.log('✅ PDF <details> blocks converted to <a> links successfully.');
