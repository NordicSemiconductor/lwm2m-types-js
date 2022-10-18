import { readFile, writeFile } from "fs/promises";
import { Parser } from "xml2js";
const parser = new Parser({ attrkey: "ATTR" });

// First command line argument
const xmlFile = process.argv[process.argv.length - 2];

// Second command line argument
const jsonPath = process.argv[process.argv.length - 1];

const xmlSource = await readFile(xmlFile, "utf-8");

const convertedSchema = await parser.parseStringPromise(xmlSource);

await writeFile(jsonPath, JSON.stringify(convertedSchema), "utf-8");
