// ["\n\n", "\n", " ", ""];
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const text = `Hi.
I'm Leeon.
How are you?
Okay then f f f f.
This is a weird text to write, but gotta test the splittingggg some how.
Bye!
-H.`;

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 5,
  chunkOverlap: 0,
});

const output = await splitter.createDocuments([text]);
console.log(output);
