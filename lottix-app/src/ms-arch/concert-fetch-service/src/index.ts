import express from 'express';
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';

const PORT = 4005;
const REGISTRY_URL = 'http://registry:3000';

const app = express();
app.use(express.json());

app.post('/', (req: Request, res: Response) => {
  const { concertID } = req.body;
  if (typeof concertID !== 'number') {
    return res.status(400).json({ error: 'concertID must be a number' });
  }

  console.log(`🎯 Received concertID: ${concertID}`);

  res.json({
    message: `✅ Received request to enter concert ID ${concertID}`,
    concertID,
  });
});

app.get("/concerts", async (req, res) => {
  const dataPath = "/app/data/concerts.json";

  try {
    const concertsRaw = fs.readFileSync(dataPath, "utf-8");
    const concerts = JSON.parse(concertsRaw);

    res.json(concerts);
  } catch (err) {
    console.error(`❌ Failed to read concerts: ${(err as Error).message}`);
    res.status(500).json({ error: "Internal server error" });
  }
});

async function registerWithRetry(name: string, url: string, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const res = await fetch(`${REGISTRY_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, url }),
      });
      if (!res.ok) throw new Error(`Status ${res.status}`);
      console.log("✅ Registered with registry");
      return;
    } catch (err) {
      console.warn(`Retry ${i + 1} failed: ${(err as Error).message}`);
      await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
    }
  }
  console.error("❌ Could not register with registry");
  process.exit(1);
}


app.listen(PORT, () => {
  console.log(`🎵 concert-fetch-service listening on port ${PORT}`);
  registerWithRetry("concert-fetch-service", `http://concert-fetch-service:${PORT}`);
});