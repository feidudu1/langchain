import "dotenv/config";
import { ChatBaiduWenxin } from "langchain/chat_models/baiduwenxin";
import { HumanMessage } from "langchain/schema";
const { BAIDU_API_KEY, BAIDU_SECRET_KEY } = process.env;

const ernieTurbo = new ChatBaiduWenxin({
  baiduApiKey: BAIDU_API_KEY,
  baiduSecretKey: BAIDU_SECRET_KEY,
});

const messages = [new HumanMessage("你是谁")];

const init = async () => {
  const res = await ernieTurbo.call(messages);
  console.log(res);
};

init();
