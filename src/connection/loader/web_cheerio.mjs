// npm install cheerio

import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";

const loader = new CheerioWebBaseLoader(
  "https://cn.vuejs.org/guide/essentials/application.html",
  {
    selector: ".vt-doc",
  },
);

const docs = await loader.load();

console.log(docs);
