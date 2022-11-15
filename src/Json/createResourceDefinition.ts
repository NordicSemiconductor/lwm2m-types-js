import { cleanUnits } from "../utils/cleanUnits";
import { dataCleaning } from "../utils/dataCleaning";
import { getType } from "../utils/getType";
import { getMandatoryStatus } from "./getMandatoryStatus";
import { getMultipleInstanceStatus } from "./getMultipleInstanceStatus";
import { getRangeEnumeration } from "./getRangeEnumeration";

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
  rangeEnumeration: string,
  id: string,
  units: string
): string => {
  const rangeEnumObject: {
    invalidFormat: boolean;
    value: string | Number | Number[] | String[] | null;
    dataStruct?: "enum" | "range" | undefined;
  } = getRangeEnumeration(rangeEnumeration);

  let descriptionValue = `${dataCleaning(description)}`;
  if (
    rangeEnumObject.invalidFormat === true &&
    rangeEnumObject.value !== "null"
  ) {
    descriptionValue = `${descriptionValue}. RangeEnumeration is not following the defined standard by openmobilealliance.org and for that reason value is not contemplate in the type definition. Original RangeEnumeration value: '${dataCleaning(
      rangeEnumObject.value as any
    )}'`;
  }

  let minimum = undefined;
  let maximum = undefined;
  if (rangeEnumObject.dataStruct === "range") {
    minimum = (rangeEnumObject.value as any)[0];
    maximum = (rangeEnumObject.value as any)[1];
  }

  const props = [
    `title: '${name}'`,
    `description: "${descriptionValue}"`,
    minimum !== undefined ? `minimum: ${minimum}` : undefined,
    maximum !== undefined ? `maximum: ${maximum}` : undefined,
    units ? `units: '${cleanUnits(units)}'` : undefined,
  ].reduce((previous, current, index) => {
    if (current) {
      if (index === 0) return current;
      return `${previous}, ${current}`;
    }
    return previous;
  }, "");

  let object = `Type.${getType(type)}({${props}})`;
  if (rangeEnumObject.dataStruct === "enum") {
    object = createEnumDefinition(rangeEnumObject.value as any, props as any);
  }

  object = getMultipleInstanceStatus(multipleInstances, object);
  object = getMandatoryStatus(mandatoryStatus, object);

  return `_${id}: ${object}`;
};

/**
 * Create an enumeration definition from a single instance or a list of values
 * @param value
 * @param props
 * @returns
 */
export const createEnumDefinition = (
  value: string | number | number[] | string[],
  props: string
) => {
  if (typeof value === "number" || typeof value === "string") {
    const isString = isNaN(+(value as any));
    return createLiteralDefinition(isString, false, value, props);
  } else {
    // list case
    return `Type.Union([${(value as any).map((element: string | number) => {
      return createLiteralDefinition(isNaN(+element), true, element, props);
    })}],{${props}})`;
  }
};

/**
 * Create custom "literal" type definition
 * @param isString
 * @param isUnion
 * @param value
 * @param props
 * @returns
 */
export const createLiteralDefinition = (
  isString: boolean,
  isUnion: boolean,
  value: string | number,
  props: string
): string =>
  isString
    ? `Type.Literal('${value}' ${isUnion ? "" : `,{${props}}`})`
    : `Type.Literal(${value} ${isUnion ? "" : `,{${props}}`})`;
