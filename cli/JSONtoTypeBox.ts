import path from "node:path";
import { readFile, writeFile } from "fs/promises";
import { createDefinition } from "../src/Json/json2typebox";

const [, , ...objectFiles] = process.argv;
const outDir = objectFiles.pop();

for (const file of objectFiles
  // only process object JSON files
  .filter((f) => /^[0-9]+\.json$/.test(path.parse(f).base))) {
  const sourceFile = path.join(process.cwd(), file);
  const json = JSON.parse(await readFile(sourceFile, "utf-8"));
  const outFile = path.join(
    process.cwd(),
    outDir as string,
    `${path.parse(sourceFile).name}.ts`
  );
  console.log(sourceFile, "->", outFile);
  const typeBoxDefinition = createDefinition(json.LWM2M.Object[0]);
  await writeFile(outFile, typeBoxDefinition, "utf-8");
}
