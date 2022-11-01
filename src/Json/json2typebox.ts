/**
 * Get the equivalent data type
 * @param type
 * @returns string
 */
const getType = (type: string): string => {
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
 * Replace characters from element
 * @param element
 * @returns
 */
export const dataCleaning = (element: string) =>
  element
    .replaceAll(`"`, "'")
    .replaceAll("‘", "'")
    .replaceAll("’", "'")
    .replaceAll(/\n/g, " ")
    .replaceAll(/\r/g, " ")
    .replaceAll(/\t/g, " ");

/**
 * Replace characters from key
 * @param key
 * @returns
 */
export const keyCleaning = (key: string) =>
  key
    .replaceAll(" ", "_")
    .replaceAll("-", "_")
    .replaceAll("(", "_")
    .replaceAll(")", "_")
    .replaceAll(",", "_")
    .replaceAll("/", "_")
    .replaceAll(".", "_")
    .replaceAll("&", "_and_") // TODO: make it generic
    .replaceAll("5", "five_") // TODO: make it generic
    .replaceAll("3", "three"); // TODO: make it generic

/**
 * Remove line breakers from value
 * @param value
 * @returns
 */
export const cleanUnits = (value: string) =>
  value.split(/\s/).filter((x) => x !== "").length === 0 ? "" : value;

/**
 * Generate typebox definition with received params
 * @param name
 * @param type
 * @param description
 * @param isOptional
 * @param rangeEnumeration
 * @param id
 * @param units
 * @returns string
 */
export const getTypebox = (
  name: string,
  type: string,
  description: string,
  isOptional: boolean,
  rangeEnumeration: string[],
  id: string,
  units: string
): string => {
  const minimum = rangeEnumeration[0] ? Number(rangeEnumeration[0]) : null;
  const maximum = rangeEnumeration[1] ? Number(rangeEnumeration[1]) : null;

  const props = [
    `$id: '${id}'`,
    `title: '${name}'`,
    `description: "${dataCleaning(description)}"`,
    minimum !== null ? `minimum: ${minimum}` : undefined,
    maximum !== null ? `maximum: ${maximum}` : undefined,
    units ? `units: '${cleanUnits(units)}'` : undefined,
  ].reduce((previous, current, index) => {
    if (current) {
      if (index === 0) return current;
      return `${previous}, ${current}`;
    }
    return previous;
  }, "");

  const definition = `Type.${getType(type)}({${props}})`;
  return isOptional
    ? `${keyCleaning(name)}: Type.Optional(${definition})`
    : `${keyCleaning(name)}: ${definition}`;
};

/**
 * Pick properties from element to generate the typebox definition
 */
export const parseData = (
  element: any
): {
  name: string;
  type: string;
  description: string;
  isOptional: boolean;
  rangeEnumeration: string[];
  id: string;
  units: string;
} => {
  const name = element.Name[0];
  const type = element.Type[0];
  const description = dataCleaning(element.Description[0]);
  const isOptional = element.Mandatory[0] === "Optional";
  const rangeEnumeration = element.RangeEnumeration[0].split("..");
  const id = element.ATTR.ID;
  const units = element.Units[0];
  return { name, type, description, isOptional, rangeEnumeration, id, units };
};

/**
 * Iterates over the items and construct the definition of each element
 */
export const getObjectProps = (items: any[]) =>
  items
    .map(parseData)
    .map((element) =>
      getTypebox(
        element.name,
        element.type,
        element.description,
        element.isOptional,
        element.rangeEnumeration,
        element.id,
        element.units
      )
    )
    .reduce((previus, current, index) => {
      return index === 0 ? current : `${previus}, ${current}`;
    }, "");

/**
 * Generates the typescript code of the typebox object definition
 */
export const createDefinition = (Lwm2mRegistry: any): string => {
  const description = Lwm2mRegistry.Description1[0];
  const items = Lwm2mRegistry.Resources[0].Item;
  const id: string = Lwm2mRegistry.ObjectID[0];

  // object metadata
  const name = `Name: Type.String({examples:["${Lwm2mRegistry.Name[0]}"]})`;
  const objectUrn = `ObjectURN: Type.String({examples:["${Lwm2mRegistry.ObjectURN[0]}"]})`;
  const lwm2mVersion = `LWM2MVersion: Type.Number({examples:[${Lwm2mRegistry.LWM2MVersion[0]}]})`;
  const objectVersion = `ObjectVersion: Type.Number({examples:[${Lwm2mRegistry.ObjectVersion[0]}]})`;

  const resources = `Resources: Type.Object({${getObjectProps(items)}})`;
  const importTypeBox = `import { Type, Static } from '@sinclair/typebox'`;
  const typeboxDefinition = `export const _${id} = Type.Object({${name},${objectUrn},${lwm2mVersion},${objectVersion}, ${resources}},{description: "${dataCleaning(
    description
  )}"})`; // FIXME:  { additionalProperties: false },  --> is creating issues. Error message: Expected 1-2 arguments, but got 3.

  const nameSpaceDefinition = `export namespace Object_${id} {export type ${keyCleaning(
    Lwm2mRegistry.Name[0]
  )} =  Static<typeof _${id}>}`;
  return `${importTypeBox}\n${typeboxDefinition}\n${nameSpaceDefinition}`;
};
