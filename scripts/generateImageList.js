// scripts/generateImageList.js
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/photography');
const outFile = path.join(__dirname, '../imageList.json');

const files = fs.readdirSync(dir)
  .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file)) // 只保留图片文件
  .map(file => `/photography/${ file }`);

fs.writeFileSync(outFile, JSON.stringify(files, null, 2));
console.log('✅ Image list generated!');
