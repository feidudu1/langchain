// npm install -S @supabase/supabase-js

import { embeddingModel, supabaseClient } from "../../utils/utils.mjs";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { SupabaseVectorStore } from "langchain/vectorstores/supabase";

const loader = new PDFLoader("src/assets/es6.pdf");

const docs = await loader.load();

/** 新建向量 */
// const store = await SupabaseVectorStore.fromDocuments(docs, embeddingModel, {
//   client: supabaseClient,
//   tableName: "documents",
//   queryName: "match_documents",
// });

/** 向量查询 */
const store = new SupabaseVectorStore(embeddingModel, {
  client: supabaseClient,
  tableName: "documents",
  queryName: "match_documents",
});

const res = await store.similaritySearch("promise 的用法", 1);
console.log(res);
