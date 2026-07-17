require("dotenv").config();

const { InferenceClient } = require("@huggingface/inference");

// Check if token is loaded
console.log("HF_TOKEN Loaded:", process.env.HF_TOKEN ? "YES" : "NO");

const client = new InferenceClient(process.env.HF_TOKEN);

async function generateContent(prompt) {
  try {
    console.log("Sending request to Qwen...");

    const response = await client.chatCompletion({
      model: "Qwen/Qwen2.5-7B-Instruct",
      messages: [
        {
          role: "system",
          content:
            "You are an expert ATS Resume Analyzer. Give professional, resume-specific suggestions only.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.4,
      max_tokens: 512,
    });

    console.log("========== QWEN RESPONSE ==========");
    console.log(JSON.stringify(response, null, 2));

    return response.choices[0].message.content;
  } catch (error) {
    console.error("========== QWEN ERROR ==========");
    console.error(error);

    throw error;
  }
}

module.exports = {
  generateContent,
};