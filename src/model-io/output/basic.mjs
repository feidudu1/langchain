import { aiModel } from "../../utils/utils.mjs";
import { PromptTemplate } from "langchain/prompts";
import { StructuredOutputParser } from "langchain/output_parsers";

const parser = StructuredOutputParser.fromNamesAndDescriptions({
  answer: "answer to the user's questions",
  source: "source used to answer the use's question, should be a website",
});

const formatInstructions = parser.getFormatInstructions();

const prompt = new PromptTemplate({
  template:
    "Answer the users question as best as possible.\n{format_instructions}\n{question}",
  inputVariables: ["question"],
  partialVariables: { format_instructions: formatInstructions },
});

const input = await prompt.format({
  question: "第六届奥运会举办地",
});

const res = await aiModel.call(input);

console.log(input);

console.log("--------");

console.log(await parser.parse(res)); // parse将字符串转为json
