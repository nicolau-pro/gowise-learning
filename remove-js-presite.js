import fs from 'fs';
import path from 'path';

const folderPath = path.resolve('.presite');
const assetsPath = path.join(folderPath, 'assets');

// === Remove <script src="/assets/index-*.js"> from HTML ===
function removeJsScripts(filePath) {
  try {
    let html = fs.readFileSync(filePath, 'utf8');

    const cleaned = html.replace(
      /<script[^>]*src="\/assets\/index-[^"]*\.js"[^>]*><\/script>\s*/g,
      ''
    );

    if (cleaned !== html) {
      fs.writeFileSync(filePath, cleaned, 'utf8');
      console.log('🧹 Removed JS import from:', filePath);
    }
  } catch (err) {
    console.error('❌ Error processing:', filePath, err.message);
  }
}

// === Delete index-*.js from .presite/assets ===
function removeJsAssetFiles() {
  if (!fs.existsSync(assetsPath)) return;

  const files = fs.readdirSync(assetsPath);

  for (const file of files) {
    if (/^index-.*\.js$/.test(file)) {
      const fullPath = path.join(assetsPath, file);
      try {
        fs.unlinkSync(fullPath);
        console.log('🗑️ Deleted JS asset:', file);
      } catch (err) {
        console.error('❌ Failed deleting asset:', file, err.message);
      }
    }
  }
}

// === Walk through .presite and clean index.html ===
function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (file === 'index.html') {
      removeJsScripts(fullPath);
    }
  }
}

// === Run cleanup ===
if (fs.existsSync(folderPath)) {
  removeJsAssetFiles(); // <-- NEW: delete index-*.js from assets
  walk(folderPath); // clean HTML imports
  console.log('✅ Finished cleaning JS imports and removing JS assets');
} else {
  console.warn('⚠️ Folder .presite not found — skipping cleanup');
}
