import { CharacterTextSplitter } from "langchain/text_splitter";

const text = `Hi.
I'm Harrison.
How? Are? You?
Okay then f f f f.
This is a weird text to write, but gotta test the splittingggg some how.
Bye!
-H.`;

const splitter = new CharacterTextSplitter({
  separator: " ",
  chunkSize: 20,
  chunkOverlap: 3,
});

const output = await splitter.createDocuments([text]);
console.log(output);
