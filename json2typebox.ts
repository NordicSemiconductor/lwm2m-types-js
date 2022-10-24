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
    .replaceAll(".", "_");

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
): string => {
  const minimum = rangeEnumeration ? Number(rangeEnumeration[0]) : null;
  const maximum = rangeEnumeration ? Number(rangeEnumeration[1]) : null;

  const props = [
    `$id: '${id}'`,
    `description: "${dataCleaning(description)}"`,
    minimum ? `minimum: ${minimum}` : undefined,
    maximum ? `maximum: ${maximum}` : undefined,
    units ? `units: '${units}'` : undefined,
  ].reduce((previous, current, index) => {
    if (current) {
      if (index === 0) return current;
      return `${previous}, ${current}`;
    }
    return previous;
  }, "");

  const definition = `Type.${getType(type)}({${props}})`;
  return isOptional
    ? `${key}: Type.Optional(${definition})`
    : `${key}: ${definition}`;
};

/**
 * Pick properties from element to generate the typebox definition
 */
export const parseData = (
  element: any
): {
  key: string;
  type: string;
  description: string;
  isOptional: boolean;
  rangeEnumeration: string[];
  id: string;
  units: string;
} => {
  const key = keyCleaning(element.Name[0]);
  const type = element.Type[0];
  const description = dataCleaning(element.Description[0]);
  const isOptional = element.Mandatory[0] === "Optional";
  const rangeEnumeration = element.RangeEnumeration[0].split("..");
  const id = element.ATTR.ID;
  const units = element.Units[0];
  return { key, type, description, isOptional, rangeEnumeration, id, units };
};

/**
 * Iterates over the items and construct the definition of each element
 */
export const getObjectProps = (items: any[]) =>
  items
    .map(parseData)
    .map((element) =>
      getTypebox(
        element.key,
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
 * Typebox import statement in string
 */
export const importTypeBox = `import { Type } from '@sinclair/typebox'`;

/**
 * Generates the typescript code of the typebox object definition
 */
export const createDefinition = (
  description: string,
  items: any[],
  name: string
): string => {
  const object = `export const ${keyCleaning(
    name
  )} = Type.Object({${getObjectProps(items)}}, {description: "${dataCleaning(
    description
  )}"})`; // FIXME:  { additionalProperties: false },  --> is creating issues. Error message: Expected 1-2 arguments, but got 3.

  return `${importTypeBox}\n ${object}`;
};
