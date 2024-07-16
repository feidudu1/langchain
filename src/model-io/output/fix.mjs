import { chatModel } from "../../utils/utils.mjs";
import {
  StructuredOutputParser,
  OutputFixingParser,
} from "langchain/output_parsers";

const parser = StructuredOutputParser.fromNamesAndDescriptions({
  answer: "answer to the user's question",
  source: "source used to answer the user's question, should be a website.",
});
const badOutput = `\`\`\`json
  {
    "answer": "foo",
    "sourc": "foo.com"
  }
  \`\`\``;
try {
  await parser.parse(badOutput);
} catch (e) {
  const fixParser = OutputFixingParser.fromLLM(chatModel, parser);
  const output = await fixParser.parse(badOutput);
  return output;
}
