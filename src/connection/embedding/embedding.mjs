import { embeddingModel } from "../../../utils/utils.mjs";
const output = await embeddingModel.embedQuery("hello");
console.log(output);
