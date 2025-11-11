#!/usr/bin/env node
/**
 * swap-index-files.cjs
 * In .presite: rename index.html -> _index.html
 * Then copy ./index_temp.html -> .presite/index.html
 */

const fs = require('fs');
const path = require('path');

const root = process.cwd();
const presiteDir = path.join(root, '.presite');
const presiteIndex = path.join(presiteDir, 'index.html');
const presiteIndexBackup = path.join(presiteDir, '_index.html');
const tempIndexSrc = path.join(root, 'index_temp.html');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

try {
  ensureDir(presiteDir);

  // 1) Rename .presite/index.html -> .presite/_index.html (overwrite any existing backup)
  if (fs.existsSync(presiteIndex)) {
    if (fs.existsSync(presiteIndexBackup)) fs.rmSync(presiteIndexBackup, { force: true });
    fs.renameSync(presiteIndex, presiteIndexBackup);
    console.log('✅ .presite/index.html → .presite/_index.html');
  } else {
    console.warn('⚠️ .presite/index.html not found — skipping rename.');
  }

  // 2) Copy ./index_temp.html -> .presite/index.html
  if (fs.existsSync(tempIndexSrc)) {
    fs.copyFileSync(tempIndexSrc, presiteIndex);
    console.log('✅ Copied index_temp.html → .presite/index.html');
  } else {
    console.warn('⚠️ index_temp.html not found in project root — skipping copy.');
    // Optional safety: if we removed index.html and no temp exists, restore backup
    if (!fs.existsSync(presiteIndex) && fs.existsSync(presiteIndexBackup)) {
      fs.copyFileSync(presiteIndexBackup, presiteIndex);
      console.warn('↩️ Restored .presite/index.html from _index.html backup.');
    }
  }
} catch (err) {
  console.error('❌ Error swapping index files:', err);
  process.exit(1);
}
