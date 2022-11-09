import { cleanUnits } from "./../utils/cleanUnits";
import { dataCleaning } from "./../utils/dataCleaning";
import { getMax } from "./../utils/getMax";
import { getMin } from "./../utils/getMin";
import { getType } from "./../utils/getType";
import { keyCleaning } from "./../utils/keyCleaning";

/**
 * Generate typebox definition with received params
 * @param name
 * @param type
 * @param description
 * @param mandatoryStatus
 * @param rangeEnumeration
 * @param id
 * @param units
 * @returns string
 */
export const getTypebox = (
  name: string,
  type: string,
  description: string,
  mandatoryStatus: string,
  multipleInstances: string,
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

  const object = getTypeboxDefinition(
    multipleInstances,
    mandatoryStatus,
    definition
  );

  return `_${id}: ${object}`;
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
  mandatoryStatus: string;
  multipleInstances: string;
  rangeEnumeration: [...(number | null)[]] | null;
  id: string;
  units: string;
} => {
  const name = element.Name[0];
  const type = element.Type[0];
  const description = dataCleaning(element.Description[0]);
  const mandatoryStatus = element.Mandatory[0];
  const multipleInstances = element.MultipleInstances[0];
  const rangeEnumeration = getRangeEnumeration(element.RangeEnumeration[0]);
  const id = element.ATTR.ID;
  const units = element.Units[0];
  return {
    name,
    type,
    description,
    mandatoryStatus,
    multipleInstances,
    rangeEnumeration,
    id,
    units,
  };
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
        element.mandatoryStatus,
        element.multipleInstances,
        element.rangeEnumeration,
        element.id,
        element.units
      )
    )
    .reduce((previus, current, index) => {
      return index === 0 ? current : `${previus}, ${current}`;
    }, "");

/**
 * Define if the type box definition of the object is optional or mandatory.
 * following the allowed options specified in http://openmobilealliance.org/tech/profiles/LWM2M-v1_1.xsd
 * @param status
 * @param object
 * @returns
 */
export const getMandatoryStatus = (status: string, object: string) => {
  if (status !== "Mandatory" && status !== "Optional")
    throw new Error("Status specification is not allowed");

  const isMandatory = status === "Mandatory";
  return isMandatory ? `${object}` : `Type.Optional(${object})`;
};

// TODO: update description
/**
 * Define if definition is an array instance or an object instance taking in consideration
 * the MultipleInstances property from the LwM2m registry
 * @param instanceType
 * @param value
 * @returns string
 */
export const getInstanceType = (
  instanceType: string,
  value: string
): string => {
  if (instanceType !== "Multiple" && instanceType !== "Single")
    throw new Error("Instance type is not allowed");

  const isMultipleInstance = instanceType === "Multiple";
  return isMultipleInstance ? `Type.Array(${value})` : `${value}`;
};

// TODO: take the decision if keep it or remove it.
/**
 *
 * @param multipleInstances
 * @param mandatoryStatus
 * @param object
 * @returns
 */
const getTypeboxDefinition = (
  multipleInstances: string,
  mandatoryStatus: string,
  object: string
) => {
  let instance = getInstanceType(multipleInstances, object);
  instance = getMandatoryStatus(mandatoryStatus, instance);
  return instance;
};

// TODO: add test case
/**
 * Generates the typescript code of the typebox object definition
 */
export const createDefinition = (Lwm2mRegistry: any): string => {
  const description = Lwm2mRegistry.Description1[0];
  const items = Lwm2mRegistry.Resources[0].Item;
  const id: string = Lwm2mRegistry.ObjectID[0];
  const mandatoryStatus = Lwm2mRegistry.Mandatory[0];
  const multipleInstances = Lwm2mRegistry.MultipleInstances[0];

  // object metadata
  const name = `Name: Type.String({examples:["${Lwm2mRegistry.Name[0]}"]})`;
  const objectUrn = `ObjectURN: Type.String({examples:["${Lwm2mRegistry.ObjectURN[0]}"]})`;
  const lwm2mVersion = `LWM2MVersion: Type.Number({examples:[${Lwm2mRegistry.LWM2MVersion[0]}]})`;
  const objectVersion = `ObjectVersion: Type.Number({examples:[${Lwm2mRegistry.ObjectVersion[0]}]})`;

  const resources = `Resources: Type.Object({${getObjectProps(items)}})`;
  const importTypeBox = `import { Type, Static } from '@sinclair/typebox'`;
  const objectData = `${name},${objectUrn},${lwm2mVersion},${objectVersion}, ${resources}},{description: "${dataCleaning(
    description
  )}"`;

  /* */
  const object = getTypeboxDefinition(
    multipleInstances,
    mandatoryStatus,
    `Type.Object({${objectData}})`
  );

  /*
  const typeDefinition = getInstanceType(Lwm2mRegistry.MultipleInstances[0]);
  const object = `${getMandatoryStatus(mandatoryStatus, typeDefinition)}`;
  */

  const typeboxDefinition = `export const _${id} = ${object}`; // FIXME:  { additionalProperties: false },  --> is creating issues. Error message: Expected 1-2 arguments, but got 3.

  const nameSpaceDefinition = `export namespace Object_${id} {export type ${keyCleaning(
    Lwm2mRegistry.Name[0]
  )} =  Static<typeof _${id}>}`;
  return `${importTypeBox}\n${typeboxDefinition}\n${nameSpaceDefinition}`;
};
