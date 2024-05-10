import express, { json } from "express";
import { createClient } from "redis";

const app = express();
app.use(express.json());
const client = createClient();

client.connect();

app.post("/submit", async (req, res) => {
  const { problemId, userId, language, code } = req.body;
  try {
    await client.lPush(
      "submissions",
      JSON.stringify({ problemId, userId, language, code })
    );

    res.json({ message: "Submission received" });
  } catch (error) {
    res.json({ message: "Submission failed" });
  }
});

app.listen(3000);