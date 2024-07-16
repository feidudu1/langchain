import { aiModel } from "../../utils/utils.mjs";
import { PromptTemplate } from "langchain/prompts";
import { CommaSeparatedListOutputParser } from "langchain/output_parsers";

const parser = new CommaSeparatedListOutputParser();

const formatInstructions = parser.getFormatInstructions();

const prompt = new PromptTemplate({
  template: "List six {subject}, only return subject. \n {format_instructions}",
  inputVariables: ["subject"],
  partialVariables: { format_instructions: formatInstructions },
});

const input = await prompt.format({ subject: "世界 GDP 总量" });
const res = await aiModel.call(input);

console.log(res);
console.log(await parser.parse(res));
