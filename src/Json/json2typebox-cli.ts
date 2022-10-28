import { readFile, writeFile } from "fs/promises";
import { createDefinition } from "./json2typebox";

// First command line argument
const jsonPath = process.argv[process.argv.length - 2];

// Second command line argument
const typeBoxPath = process.argv[process.argv.length - 1];

// Load json
const json = JSON.parse(await readFile(jsonPath, "utf-8"));

const typeBoxDefinition = createDefinition(json.LWM2M.Object[0]); //TODO: Update unit tests related to it

await writeFile(typeBoxPath, typeBoxDefinition);
