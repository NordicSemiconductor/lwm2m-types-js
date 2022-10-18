import { readFile, writeFile } from "fs/promises";
import { Parser } from "xml2js";
const parser = new Parser({ attrkey: "ATTR" });

// First command line argument
const xmlPath = process.argv[process.argv.length - 2];

// Second command line argument
const jsonPath = process.argv[process.argv.length - 1];

const xml = await readFile(xmlPath, "utf-8");

const convertedSchema = await parser.parseStringPromise(xml);

await writeFile(jsonPath, JSON.stringify(convertedSchema), "utf-8");
