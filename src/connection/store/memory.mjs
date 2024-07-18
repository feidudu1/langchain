import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { embeddingModel } from "../../utils/utils.mjs";

const vectorStore = await MemoryVectorStore.fromTexts(
  ["Hello world", "Bye bye", "nice world"],
  [{ id: 2 }, { id: 1 }, { id: 3 }],
  embeddingModel,
);

const res = await vectorStore.similaritySearch("hello", 1);
console.log(res); // [Document {pageContent: 'Hello world', metadata: {id: 2}}]
