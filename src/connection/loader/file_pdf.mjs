// npm install pdf-parse

import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const loader = new PDFLoader("../../assets/es6.pdf");
const docs = await loader.load();
console.log(docs);
