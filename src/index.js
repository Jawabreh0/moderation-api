import OpenAI from "openai";

const client = new OpenAI();

(async () => {
  try {
    const response = await client.moderations.create({
      model: "omni-moderation-latest",
      input: "Apple", // The text to moderate
    });

    const flagged = response.results[0].flagged;
    // const flagged = JSON.stringify(response, null, 2);

    console.log(flagged);
  } catch (error) {
    console.error("Error creating moderation:", error);
  }
})();
