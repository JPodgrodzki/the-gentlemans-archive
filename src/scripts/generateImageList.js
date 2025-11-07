const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../../public/images/database/1850s');
const OUTPUT_FILE = path.join(__dirname, '../assets/database/1850s/images.json');

const isImage = (filename) => /\.(jpe?g|png|gif|webp|bmp)$/i.test(filename);

fs.readdir(IMAGES_DIR, (err, files) => {
  if (err) {
    console.error('Error reading images directory:', err);
    return;
  }

  const images = files
    .filter(isImage)
    .map(file => `images/database/1850s/${file}`);

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(images, null, 2));
});