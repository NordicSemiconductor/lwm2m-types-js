import path from "node:path";
import { readFile, writeFile } from "fs/promises";
import { Parser } from "xml2js";
const parser = new Parser({ attrkey: "ATTR" });

const [, , ...objectFiles] = process.argv;
const outDir = objectFiles.pop();

for (const file of objectFiles
  // only process object XML files
  .filter((f) => /\.xml$/.test(path.parse(f).base))) {
  const sourceFile = path.join(process.cwd(), file);
  const xml = await readFile(sourceFile, "utf-8");
  const convertedSchema = await parser.parseStringPromise(xml);
  const outFile = path.join(
    process.cwd(),
    outDir as string,
    `${path.parse(sourceFile).name}.json`
  );
  console.log(sourceFile, "->", outFile);
  await writeFile(outFile, JSON.stringify(convertedSchema), "utf-8");
}
