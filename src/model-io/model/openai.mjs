import "dotenv/config";
import { OpenAI } from "langchain/llms/openai";

const { OPENAI_API_KEY, OPENAI_ENDPOINT } = process.env;

const aiModel = new OpenAI({
  temperature: 0,
  openAIApiKey: OPENAI_API_KEY,
  modelName: "gpt-4",
  configuration: {
    basePath: OPENAI_ENDPOINT,
  },
});

const init = async () => {
  const res = await aiModel.call("hello");
  console.log(res);
};
init();
