// npm install cheerio

import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";

const loader = new CheerioWebBaseLoader(
  "https://cn.vuejs.org/guide/essentials/application.html",
  {
    selector: ".vt-doc", // 只需要返回网页的.vt-doc节点
  },
);

const docs = await loader.load();

console.log(docs);
