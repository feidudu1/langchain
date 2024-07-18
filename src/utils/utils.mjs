import dotenv from 'dotenv';
import { OpenAI, OpenAIChat } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { Configuration, OpenAIApi } from "openai";
import { SerpAPI } from "langchain/tools";

import { createClient } from "@supabase/supabase-js";
dotenv.config();
const {
  OPENAI_API_KEY,
  OPENAI_ENDPOINT,
  SUPABSE_URL,
  SUPABASE_KEY,
  SERP_API_KEY,
} = process.env;

const aiModel = new OpenAI({
  temperature: 0,
  openAIApiKey: OPENAI_API_KEY,
  modelName: "gpt-3.5-turbo",
  // modelName: "gpt-3.5-turbo-0613", // apikey没有权限
  configuration: {
    basePath: OPENAI_ENDPOINT,
  },
});

const aiChatModel = new OpenAIChat({
  temperature: 0,
  openAIApiKey: OPENAI_API_KEY,
  modelName: "gpt-3.5-turbo",
  // modelName: "gpt-3.5-turbo-0613",
  configuration: {
    basePath: OPENAI_ENDPOINT,
  },
});

const chatModel = new ChatOpenAI({
  temperature: 0,
  openAIApiKey: OPENAI_API_KEY,
  modelName: "gpt-3.5-turbo-0613",
  // streaming: true,
  verbose: true,
  configuration: {
    basePath: OPENAI_ENDPOINT,
  },
});

const embeddingModel = new OpenAIEmbeddings(
  {
    openAIApiKey: OPENAI_API_KEY,
  },
  {
    basePath: OPENAI_ENDPOINT,
  },
);

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
  basePath: OPENAI_ENDPOINT,
});
const openai = new OpenAIApi(configuration);

const supabaseClient = createClient(SUPABSE_URL, SUPABASE_KEY);

const serpAPI = new SerpAPI(SERP_API_KEY);

export {
  aiModel,
  chatModel,
  embeddingModel,
  supabaseClient,
  openai,
  aiChatModel,
  serpAPI,
};
