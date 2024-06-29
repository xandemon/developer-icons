import fs from "fs";
import path from "path";
import { iconsData } from "../iconsData";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sortedData = iconsData.sort((a, b) =>
  a.name.toLowerCase().localeCompare(b.name.toLowerCase())
);
fs.writeFileSync(
  path.join(__dirname, "../sortedData.json"),
  JSON.stringify(sortedData)
);
