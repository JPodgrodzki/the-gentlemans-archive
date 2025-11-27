const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../../public/images');
const OUTPUT_FILE = path.join(__dirname, '../assets/database/database.json');

const isImage = (filename) => /\.(jpe?g|png|gif|webp|bmp)$/i.test(filename);

fs.readdir(IMAGES_DIR, (err, files) => {
  if (err) {
    console.error('Error reading images directory:', err);
    return;
  }

  const images = files
    .filter(isImage)
    .map((file, index) => {
      const decade = /^\d{4}/.test(file) ? file.slice(0, 4) : 'Unknown';
      const number = /^\d{4}/.test(file) ? file.slice(5, 7) : 'Unknown';
    
      return  {
        image: file,
        year: 'Unknown',
        decade: decade + 's',
        id: index + 1,
        type: Number(number) > 20 ? 'fashionplate' : 'photograph',
        title: '',
        description: '',
        formality: '',
        daytime: '',
        yeartime: '',
        items: []
      }
    });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(images, null, 2));
});