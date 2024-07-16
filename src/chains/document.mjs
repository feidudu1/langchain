import { RetrievalQAChain } from "langchain/chains";
import { embeddingModel, aiModel, supabaseClient } from "../utils/utils.mjs";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";
const store = await SupabaseVectorStore.fromExistingIndex(embeddingModel, {
  client: supabaseClient,
  tableName: "documents",
  queryName: "match_documents",
});
const retriever = RetrievalQAChain.fromLLM(aiModel, store.asRetriever());
const question = "Symbol 如何使用";
const res = await retriever.call({
  query: question,
});
console.log(res);
