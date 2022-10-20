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
    `description: "${description}"`,
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
 * General description of processed object
 */
export const getObjectDescription = (description: string): string =>
  description.replaceAll(`"`, "'").replaceAll("’", "'").replaceAll("\n", " ");

/**
 * name of processed object
 */
export const getObjectName = (name: string): string =>
  name.replaceAll(" ", "_");

/**
 * Generates the typescript code of the typebox object definition
 */
export const createDefinition = (
  description: string,
  items: any[],
  name: string
): string => {
  const object = `export const ${getObjectName(
    name
  )} = Type.Object({${getObjectProps(
    items
  )}}, { additionalProperties: false }, {description: "${getObjectDescription(
    description
  )}"})`;

  return `${importTypeBox}\n ${object}`;
};
