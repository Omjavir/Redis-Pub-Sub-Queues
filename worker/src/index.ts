import { createClient } from "redis";

const client = createClient();

async function main() {
  await client.connect();

  while (true) {
    try {
      const submission = await client.brPop("submissions", 0);
      console.log(submission);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Processing client's code...");
    } catch (error) {
      console.log("Error processing request: ", error);
    }
  }
}

main();
