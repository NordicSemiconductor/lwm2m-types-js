import * as json from "./1.json";
import fs from "fs";

/**
 * Get the equivalent data type
 * @param type
 * @returns string
 */
const getType = (type: string) => {
  switch (type) {
    case "Integer":
      return "Number";
    case "Unsigned Integer":
      return "Number";
    case "Boolean":
      return "Boolean";
    case "String":
      return "String";
    default:
      return "Any";
  }
};

/**
 * Generate typebox definition with received params
 * @param key
 * @param type
 * @param description
 * @param isOptional
 * @param rangeEnumeration
 * @param id
 * @param units
 * @returns string
 */
export const getTypebox = (
  key: string,
  type: string,
  description: string,
  isOptional: boolean,
  rangeEnumeration: string[],
  id: string,
  units: string
) => {
  const minimum = rangeEnumeration ? Number(rangeEnumeration[0]) : null;
  const maximun = rangeEnumeration ? Number(rangeEnumeration[1]) : null;

  const params = [
    `$id: '${id}'`,
    `description: "${description}"`,
    minimum ? `minimun: ${minimum}` : undefined,
    maximun ? `maximun: ${maximun}` : undefined,
    units ? `units: '${units}'` : undefined,
  ].reduce((previous, current, index) => {
    if (current) {
      if (index === 0) return current;
      return `${previous}, ${current}`;
    }
    return previous;
  }, "");

  const definition = `Type.${getType(type)}({${params}})`;
  return isOptional
    ? `${key}: Type.Optional(${definition})`
    : `${key}: ${definition}`;
};

/**
 * Iterates over the items and construct the definition of the object
 */
export const defineProperties = (
  items: any[],
  typeboxDefinition = (
    key: string,
    type: string,
    description: string,
    isOptional: boolean,
    rangeEnumeration: any[],
    id: string,
    units: string
  ) =>
    getTypebox(key, type, description, isOptional, rangeEnumeration, id, units)
) =>
  items.reduce((object: string | any[], element: any) => {
    // pick properties from the current element to generate the typebox definition
    const key = element.Name[0].replaceAll(" ", "_").replaceAll("-", "_");
    const type = element.Type[0];
    const description = element.Description[0]
      .replaceAll(`"`, "'")
      .replaceAll("’", "'")
      .replaceAll("\n", " ");
    const isOptional = element.Mandatory[0] === "Optional";
    const rangeEnumeration = element.RangeEnumeration[0].split("..");
    const id = element.ATTR.ID;
    const units = element.Units[0];

    const typebox = typeboxDefinition(
      key,
      type,
      description,
      isOptional,
      rangeEnumeration,
      id,
      units
    );

    return object.length === 0 ? typebox : `${object}, ${typebox}`;
  }, "");

/**
 * Typebox import statement in string
 */
const importTypeBox = `import { Type } from '@sinclair/typebox'`;

/**
 * General description of processed object
 */
const generalObjectDescription = (description: string) =>
  description.replaceAll(`"`, "'").replaceAll("’", "'").replaceAll("\n", " ");

/**
 * name of processed object
 */
const objectName = (name: string) => name.replaceAll(" ", "_");

const main =
  (dir: string, description: string, items: any[], name: string) =>
  (
    importStatement = importTypeBox,
    getGeneralDescription = () => generalObjectDescription(description),
    getProperties = () => defineProperties(items),
    getName = () => objectName(name),
    write = (dir: string, jsonSchema: any) =>
      fs.writeFileSync(dir, jsonSchema, "utf8")
  ) => {
    const object = `export const ${getName()} = Type.Object({${getProperties()}}, {description: "${getGeneralDescription()}"})`;
    const jsonSchema = `${importStatement}\n ${object}`;
    write(dir, jsonSchema);
  };

main(
  "/home/malo/Documents/LWM2M-JSONShcema/1.ts",
  json.LWM2M.Object[0].Description1[0],
  json.LWM2M.Object[0].Resources[0].Item,
  json.LWM2M.Object[0].Name[0]
)();
