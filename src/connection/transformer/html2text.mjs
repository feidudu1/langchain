// npm install html-to-text

import { HtmlToTextTransformer } from "langchain/document_transformers/html_to_text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
const docs = [
  {
    pageContent: "<div>hello</div>",
    metadata: { source: "https://leeon.im" },
  },
];

const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");
const transformer = new HtmlToTextTransformer();
const seq = splitter.pipe(transformer);
const output = await seq.invoke(docs);
console.log(output);
