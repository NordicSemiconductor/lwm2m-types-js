import {
  cleanUnits,
  dataCleaning,
  getMax,
  getMin,
  getType,
  keyCleaning,
} from "./utils";

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
  rangeEnumeration: [...(number | null)[]] | null,
  id: string,
  units: string
): string => {
  let minimum = undefined;
  let maximum = undefined;
  let enumeration = undefined;

  if (rangeEnumeration !== null) {
    minimum = rangeEnumeration[0];
    maximum = rangeEnumeration[1];
    if (rangeEnumeration.length > 2) {
      minimum = getMin(rangeEnumeration);
      maximum = getMax(rangeEnumeration);
      enumeration = rangeEnumeration;
    }
  }

  const props = [
    `title: '${name}'`,
    `description: "${dataCleaning(description)}"`,
    minimum !== undefined ? `minimum: ${minimum}` : undefined,
    maximum !== undefined ? `maximum: ${maximum}` : undefined,
    enumeration !== undefined ? `enumeration: [${enumeration}]` : undefined,
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
    ? `_${id}: Type.Optional(${definition})`
    : `_${id}: ${definition}`;
};

// TODO: add description
/**
 *
 * @param rangeEnumeration
 * @returns
 */
export const getRangeEnumeration = (
  rangeEnumeration: string
): [...(number | null)[]] | null => {
  //TODO: define if null or undefine
  if (rangeEnumeration.length === 0) return null; // empty string case

  if (rangeEnumeration.includes("..")) {
    const minAndMax = rangeEnumeration.split("..");

    const minimum = minAndMax[0]
      ? Number(minAndMax[0].replace(/\D/g, ""))
      : null;
    const maximum = minAndMax[1]
      ? Number(minAndMax[1].replace(/\D/g, ""))
      : null;
    return [minimum, maximum];
  }

  if (rangeEnumeration.split(",").length > 1)
    return rangeEnumeration
      .split(",")
      .map((element: string) => Number(element));

  return null; // no valid case
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
  rangeEnumeration: [...(number | null)[]] | null;
  id: string;
  units: string;
} => {
  const name = element.Name[0];
  const type = element.Type[0];
  const description = dataCleaning(element.Description[0]);
  const isOptional = element.Mandatory[0] === "Optional";
  const rangeEnumeration = getRangeEnumeration(element.RangeEnumeration[0]);
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
