import path from "node:path";
import { readFile, writeFile } from "fs/promises";
import { createDefinition } from "../src/Json/json2typebox";
import { readdirSync } from "fs";

const inputDir = process.argv[process.argv.length - 2];
const outDir = process.argv[process.argv.length - 1];

const objectFiles = readdirSync(inputDir).filter((f) =>
  /^[0-9]+\.json$/.test(path.parse(f).base)
);

for (const file of objectFiles.map((f) => path.join(inputDir, f))) {
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
