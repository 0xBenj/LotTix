const fs = require('fs').promises;
const path = require('path');
console.log(__dirname);
(async () => {
  const filePath = path.join(__dirname, '../../lottix-app/src/data/concertData.json');
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('File contents:', data);
  } catch (err) {
    console.error('Read failed:', err.message);
  }
})();
