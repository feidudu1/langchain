// npm install pdf-parse

import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const loader = new PDFLoader("../../assets/es6.pdf", {
  splitPages: true // 是否分割文件，默认是true
});
const docs = await loader.load();
console.log(docs);
