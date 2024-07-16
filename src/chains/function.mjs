import { openai } from "../utils/utils.mjs";
const fn = async (msg) => {
  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-16k-0613",
    messages: [{ role: "user", content: msg }],
    functions: [
      {
        name: "get_current_weather",
        description: "Get the current weather in a given location",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "The city and state, e.g. San Francisco, CA",
            },
            date: {
              type: "string",
              description: "The date in YYYY-MM-DD format",
            },
            unit: { type: "string", enum: ["celsius", "fahrenheit"] },
          },
          required: ["location"],
        },
      },
      {
        name: "send_email",
        description: "Send an email to a user",
        parameters: {
          type: "object",
          properties: {
            user: {
              type: "string",
              description: "邮件接收人, 例如 小明",
            },
            content: {
              type: "string",
              description: "邮件内容",
            },
          },
          required: ["user", "content"],
        },
      },
    ],
  });
  const callback = res.data["choices"][0]["message"];
  console.log(callback);
  return callback;
};

//  await fn("跟李华说我下周过去取论文");

fn("今天是 2022-10-10，下周三北京天气怎么样");
