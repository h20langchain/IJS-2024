import "dotenv/config";
import { DallEAPIWrapper } from "@langchain/openai";

const tool = new DallEAPIWrapper({
  n: 1, // Default
  model: "dall-e-3", // Default
  apiKey: process.env.OPENAI_API_KEY, // Default
});

const imageURL = await tool.invoke("a painting of harry potter");

console.log(imageURL);