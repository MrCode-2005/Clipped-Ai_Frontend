const fs = require('fs');
const path = require('path');

function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  let entries = fs.readdirSync(src, { withFileTypes: true });
  for (let entry of entries) {
    let srcPath = path.join(src, entry.name);
    let destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
try {
  copyDirSync('/Users/vishnu/Desktop/OpusXClipped.Ai/assests', '/Users/vishnu/Desktop/OpusXClipped.Ai/next-app/public/assets');
  console.log("Success");
} catch (e) {
  console.log("Error:", e.message);
}
