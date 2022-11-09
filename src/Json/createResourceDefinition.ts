import { cleanUnits } from "../utils/cleanUnits";
import { dataCleaning } from "../utils/dataCleaning";
import { getMax } from "../utils/getMax";
import { getMin } from "../utils/getMin";
import { getType } from "../utils/getType";
import { getMandatoryStatus } from "./getMandatoryStatus";
import { getMultipleInstanceStatus } from "./getMultipleInstanceStatus";

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
export const createResourceDefinition = (
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

  let object = `Type.${getType(type)}({${props}})`;
  object = getMultipleInstanceStatus(multipleInstances, object);
  object = getMandatoryStatus(mandatoryStatus, object);

  return `_${id}: ${object}`;
};
