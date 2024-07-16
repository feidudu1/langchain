import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { Calculator } from "langchain/tools/calculator";
import { serpAPI, chatModel } from "../utils/utils.mjs";

const tools = [serpAPI, new Calculator()];

const executor = await initializeAgentExecutorWithOptions(tools, chatModel, {
  agentType: "zero-shot-react-description",
  verbose: true,
});

const input = `What is the result of dividing the total value of Musk's wealth by 2?`;

const result = await executor.call({ input });
console.log(result);
