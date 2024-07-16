import { PlanAndExecuteAgentExecutor } from "langchain/experimental/plan_and_execute";
import { Calculator } from "langchain/tools/calculator";
import { chatModel } from "../utils/utils.mjs";
import { serpAPI } from "../utils/utils.mjs";

const tools = [new Calculator(), serpAPI];

const executor = PlanAndExecuteAgentExecutor.fromLLMAndTools({
  llm: chatModel,
  tools,
  verbose: true,
});

const result = await executor.call({
  input: `What is the result of dividing the total value of Musk's wealth by 2?`,
});

console.log({ result });
