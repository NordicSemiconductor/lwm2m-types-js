import { dataCleaning } from "./../utils/dataCleaning";
import { getRangeEnumeration } from "./getRangeEnumeration";

/**
 * Pick properties from element to generate the typebox definition
 */
export const parseResource = (
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
