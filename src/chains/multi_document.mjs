import { MultiRetrievalQAChain } from "langchain/chains";
import {
  embeddingModel,
  supabaseClient,
  aiChatModel,
} from "../utils/utils.mjs";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

const es6Store = await SupabaseVectorStore.fromExistingIndex(embeddingModel, {
  client: supabaseClient,
  tableName: "documents",
  queryName: "match_documents",
});

const storyStore = await MemoryVectorStore.fromTexts(
  ["小明的爸爸是一名工程师，在深圳工作，小明今年 16 岁，爱好是围棋"],
  { series: "小明基础信息" },
  embeddingModel,
);

const retrieverNames = ["es6Store", "storyStore"];
const retrieverDescriptions = [
  "擅长回答 JavaScript 和 ES6 的知识",
  "擅长回答小明的信息",
];
const retrievers = [es6Store.asRetriever(), storyStore.asRetriever()];

const multiRetrievalQAChain = MultiRetrievalQAChain.fromLLMAndRetrievers(
  aiChatModel,
  {
    retrieverNames,
    retrieverDescriptions,
    retrievers,
    retrievalQAChainOpts: {
      returnSourceDocuments: true,
    },
  },
);

const q1 = multiRetrievalQAChain.call({
  input: "Symbol 如何使用",
});
const q2 = multiRetrievalQAChain.call({
  input: "小明的爸爸是什么工作",
});
const q3 = multiRetrievalQAChain.call({
  input: "小明今年多大",
});

const [
  { text: a1, sourceDocuments: source1 },
  { text: a2, sourceDocuments: source2 },
  { text: a3, sourceDocuments: source3 },
] = await Promise.all([q1, q2, q3]);

console.log({
  a1,
  source1,
  a2,
  source2,
  a3,
  source3,
});
