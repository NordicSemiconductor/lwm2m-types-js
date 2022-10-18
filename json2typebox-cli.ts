import { readFile, writeFile } from "fs/promises";
import {
  getObjectName,
  getObjectProps,
  getObjectDescription,
  importTypeBox,
} from "./json2typebox";

// First command line argument
const jsonPath = process.argv[process.argv.length - 2];

// Second command line argument
const typeBoxPath = process.argv[process.argv.length - 1];

// Load json
const json = JSON.parse(await readFile(jsonPath, "utf-8"));

const description = json.LWM2M.Object[0].Description1[0];
const items = json.LWM2M.Object[0].Resources[0].Item;
const name = json.LWM2M.Object[0].Name[0];

const object = `export const ${getObjectName(
  name
)} = Type.Object({${getObjectProps(
  items
)}}, {description: "${getObjectDescription(description)}"})`;
const typeBoxDefinition = `${importTypeBox}\n ${object}`;

await writeFile(typeBoxPath, typeBoxDefinition);
