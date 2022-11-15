import { cleanUnits } from "../utils/cleanUnits";
import { dataCleaning } from "../utils/dataCleaning";
import { getType } from "../utils/getType";
import { getMandatoryStatus } from "./getMandatoryStatus";
import { getMultipleInstanceStatus } from "./getMultipleInstanceStatus";
import { getRangeEnumeration } from "./getRangeEnumeration";
import { ParsedResource } from "./parseResource";

/**
 * Generate TypeBox definition with received params
 *
 * @see http://www.openmobilealliance.org/release/lightweightm2m/V1_0_2-20180209-A/OMA-TS-LightweightM2M-V1_0_2-20180209-A.pdf
 */
export const createResourceDefinition = ({
  name,
  type,
  description,
  mandatoryStatus,
  multipleInstances,
  rangeEnumeration,
  id,
  units,
}: ParsedResource): string => {
  let rangeEnumObject:
    | {
        invalidFormat: boolean;
        value: string | Number | Number[] | String[] | null;
        dataStruct?: "enum" | "range" | undefined;
      }
    | undefined = undefined;
  if (rangeEnumeration !== undefined)
    rangeEnumObject = getRangeEnumeration(rangeEnumeration);

  const descriptionValue = [dataCleaning(description)];
  if (rangeEnumObject?.invalidFormat === true) {
    descriptionValue.push(
      `RangeEnumeration is not following the defined standard by openmobilealliance.org and for that reason value is not contemplate in the type definition. Original RangeEnumeration value: '${dataCleaning(
        rangeEnumObject.value as any
      )}'.`
    );
  }

  if (units !== undefined) descriptionValue.push(`Units: ${units}.`);

  let minimum = undefined;
  let maximum = undefined;
  if (rangeEnumObject?.dataStruct === "range") {
    minimum = (rangeEnumObject.value as any)[0];
    maximum = (rangeEnumObject.value as any)[1];
  }

  let typeBoxType = getType(type);
  const propDefs = [
    `title: '${name}'`,
    `description: "${descriptionValue.join(" ")}"`,
  ];

  if (type === "Boolean") {
    typeBoxType = "Integer";
    propDefs.push(`minimum: 0`, `maximum: 1`);
  } else {
    if (minimum !== undefined) {
      if (typeBoxType === "String") {
        propDefs.push(`minLength: ${minimum}`);
      } else {
        propDefs.push(`minimum: ${minimum}`);
      }
    }
    if (maximum !== undefined) {
      if (typeBoxType === "String") {
        propDefs.push(`maxLength: ${maximum}`);
      } else {
        propDefs.push(`maximum: ${maximum}`);
      }
    }
  }

  const props = propDefs.reduce((previous, current, index) => {
    if (current) {
      if (index === 0) return current;
      return `${previous}, ${current}`;
    }
    return previous;
  }, "");

  let object = `Type.${typeBoxType}({${props}})`;
  if (rangeEnumObject?.dataStruct === "enum") {
    object = createEnumDefinition(rangeEnumObject.value as any, props as any);
  }

  if (multipleInstances !== undefined)
    object = getMultipleInstanceStatus(multipleInstances, object);
  if (mandatoryStatus !== undefined)
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
