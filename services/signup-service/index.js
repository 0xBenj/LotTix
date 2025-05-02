const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to read JSON file
async function readJsonFile(filename) {
  console.log(__dirname);
  try {
    const filePath = path.join(__dirname, '../../lottix-app/src/data', filename);
    console.log('Reading from:', filePath);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error.message);
    throw error;
  }
}

// Routes

app.get('/users/:userId/entries', async (req, res) => {
  try {
    const users = await readJsonFile('userData.json');
    const user = users.find(u => u.userId === req.params.userId);
    res.json(user.entries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user entries' });
  }
});

// Helper function to write JSON file
/* async function writeJsonFile(filename, data) {
  try {
    await fs.writeFile(path.join(__dirname, '../../lottix-app/src/data', filename), JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`Error writing ${filename}:`, error);
    throw error;
  }
}
 */
/* app.post('/users/:userId/entries', async (req, res) => {
  try {
    const { concertID, numberOfEntries } = req.body;
    const userId = req.params.userId;
    
    const users = await readJsonFile('userData.json');
    const user = users.mockUsers.find(u => u.userId === userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const existingEntry = user.entries.find(e => e.concertID === concertID);
    if (existingEntry) {
      existingEntry.numberOfEntries += numberOfEntries;
    } else {
      user.entries.push({ concertID, numberOfEntries });
    }
    
    await writeJsonFile('userData.json', users);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user entries' });
  }
}); */

// Start server
app.listen(PORT, () => {
  console.log(`Signup service running on port ${PORT}`);
});
