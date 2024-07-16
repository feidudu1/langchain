import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { Calculator } from "langchain/tools/calculator";
import { chatModel } from "../utils/utils.mjs";
import { serpAPI } from "../utils/utils.mjs";

const tools = [new Calculator(), serpAPI];

const executor = await initializeAgentExecutorWithOptions(tools, chatModel, {
  agentType: "openai-functions",
  verbose: true,
});

const result = await executor.run("张学友 11 月有演唱会吗");
console.log(result);
