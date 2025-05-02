const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to read JSON file
async function readJsonFile(filename) {
  try {
    const filePath = path.join('/app/data', filename);
    console.log('Reading file from:', filePath);
    const data = await fs.readFile(filePath, 'utf8');
    console.log('File contents:', data);
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    throw error;
  }
}


// Routes
app.get('/concerts', async (req, res) => {
  console.log("concerts");
  try {
    const concerts = await readJsonFile('concertData.json');
    console.log("concerts from log");
    console.log(concerts);
    res.json({ message: "Test success 1" });
    res.json(concerts);
    res.json({ message: "Test success 2" });
    console.log("Test success 3");
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch concerts' });
  }
});

/* // Helper function to write JSON file
async function writeJsonFile(filename, data) {
  try {
    await fs.writeFile(path.join('/app/data', filename), JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    throw error;
  }
} */

/* app.put('/concerts/:id/entries', async (req, res) => {
  try {
    const { numberOfEntries } = req.body;
    const concertID = parseInt(req.params.id);
    
    const concerts = await readJsonFile('concertData.json');
    const concert = concerts.concertEvents.find(c => c.concertID === concertID);
    
    if (!concert) {
      return res.status(404).json({ error: 'Concert not found' });
    }
    
    if (concert.entriesSold + numberOfEntries > concert.maxEntries) {
      return res.status(400).json({ error: 'Not enough available entries' });
    }
    
    concert.entriesSold += numberOfEntries;
    await writeJsonFile('concertData.json', concerts);
    
    res.json(concert);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update concert entries' });
  }
}); */

// Start server
app.listen(PORT, () => {
  console.log(`Event service running on port ${PORT}`);
});
