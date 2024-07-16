import fs from "fs";
import { openai } from "../utils/utils.mjs";

const resp = await openai.createTranslation(
  fs.createReadStream("src/assets/demo.mp3"),
  "whisper-1",
);
console.log(resp.data);
