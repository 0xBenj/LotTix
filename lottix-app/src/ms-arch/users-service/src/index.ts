import express from 'express';
import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';

const PORT = 4002;
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

app.post("/enter-user", async (req, res) => {
  const { userId, concertID } = req.body;

  if (!userId || !concertID) {
    return res.status(400).json({ error: "Missing userId or concertID" });
  }

  const dataPath = "/app/data/users.json";

  try {
    const usersRaw = fs.readFileSync(dataPath, "utf-8");
    const users = JSON.parse(usersRaw);

    const user = users.find((u: any) => u.userId === userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const existingEntry = user.entries.find((e: any) => e.concertID === concertID);
    if (existingEntry) {
      existingEntry.numberOfEntries += 1;
    } else {
      user.entries.push({ concertID, numberOfEntries: 1 });
    }

    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2), "utf-8");

    res.json({
      message: `✅ Updated entries for user ${userId}`,
      entries: user.entries
    });
  } catch (err) {
    console.error(`❌ Failed to update user: ${(err as Error).message}`);
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
  console.log(`🎵 users-service listening on port ${PORT}`);
  registerWithRetry("users-service", `http://users-service:${PORT}`);
});