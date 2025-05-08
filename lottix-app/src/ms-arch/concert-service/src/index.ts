import express from 'express';
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';

const PORT = 4001;
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

app.post("/enter-concert", async (req, res) => {
  const { concertID } = req.body;

  if (!concertID || typeof concertID !== "number") {
    return res.status(400).json({ error: "Invalid concertID" });
  }

  const dataPath =  "/app/data/concerts.json";

  try {
    const concertsRaw = fs.readFileSync(dataPath, "utf-8");
    const concerts = JSON.parse(concertsRaw);

    const concert = concerts.find((c: any) => c.concertID === concertID);
    if (!concert) {
      return res.status(404).json({ error: "Concert not found" });
    }

    // Ensure we don’t exceed maxEntries
    if (concert.entriesSold >= concert.maxEntries) {
      return res.status(400).json({ error: "All entries sold out" });
    }

    concert.entriesSold += 1;

    fs.writeFileSync(dataPath, JSON.stringify(concerts, null, 2), "utf-8");

    console.log(`🎫 Updated entriesSold for concert ${concertID} to ${concert.entriesSold}`);

    res.json({
      message: `✅ Successfully entered concert ${concertID}`,
      concertID,
      entriesSold: concert.entriesSold
    });
  } catch (err) {
    console.error(`❌ Failed to update concert: ${(err as Error).message}`);
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
  console.log(`🎵 concert-service listening on port ${PORT}`);
  registerWithRetry("concert-service", `http://concert-service:${PORT}`);
});