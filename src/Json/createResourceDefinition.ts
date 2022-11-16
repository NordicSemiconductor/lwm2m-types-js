import { cleanUnits } from "../utils/cleanUnits";
import { escapeText } from "../utils/escapeText";
import { getTypeBoxType } from "../utils/getType";
import { getMandatoryStatus } from "./getMandatoryStatus";
import { getMultipleInstanceStatus } from "./getMultipleInstanceStatus";
import { getRangeEnumeration } from "./getRangeEnumeration";
import { ParsedResource } from "./parseResource";
import os from "node:os";

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

  const descriptionValue = [escapeText(description)];
  if (rangeEnumObject?.invalidFormat === true) {
    descriptionValue.push(
      `RangeEnumeration is not following the defined standard by openmobilealliance.org and for that reason value is not contemplate in the type definition. Original RangeEnumeration value: '${escapeText(
        rangeEnumObject.value as any
      )}'.`
    );
  }

  if (units !== undefined)
    descriptionValue.push(`Units: ${escapeText(units)}.`);

  let minimum = undefined;
  let maximum = undefined;
  if (rangeEnumObject?.dataStruct === "range") {
    minimum = (rangeEnumObject.value as any)[0];
    maximum = (rangeEnumObject.value as any)[1];
  }

  let typeBoxType = getTypeBoxType(type);
  const props: Record<string, any> = {
    title: name,
    description: descriptionValue.join(" "),
  };

  const comments = [`/**`, ` * ${id}: ${name}`, ` */`];

  switch (type) {
    case "Boolean":
      typeBoxType = "Integer";
      props.minimum = 0;
      props.maximum = 1;
      break;
    case "Objlnk":
      /*
       * The object link is used to
       * refer an Instance of a given Object. An
       * Object link value is composed of two
       * concatenated 16 bit unsigned integers
       * following the Network Byte Order
       * convention. The Most Significant Halfword is an Object ID, the Least
       * Significant Half-word is an Object
       * Instance ID.
       * An Object Link referencing no Object
       * Instance will contain the concatenation
       * of 2 MAX-ID values (null link).
       */
      typeBoxType = "RegEx";
      let regexType = `Type.RegEx(/^\d\d:\d\d$/, ${JSON.stringify(props)})`;
      if (multipleInstances !== undefined)
        regexType = getMultipleInstanceStatus(multipleInstances, regexType);
      if (mandatoryStatus !== undefined)
        regexType = getMandatoryStatus(mandatoryStatus, regexType);
      return [...comments, `_${id}: ${regexType}`].join(os.EOL);
    case "Time":
      let timeType = `Type.Integer({minimum: 1000000000, description: "Unix Time. A signed integer representing the number of seconds since Jan 1 st, 1970 in the UTC time zone."})`;
      if (multipleInstances !== undefined)
        timeType = getMultipleInstanceStatus(multipleInstances, timeType);
      if (mandatoryStatus !== undefined)
        timeType = getMandatoryStatus(mandatoryStatus, timeType);
      return [...comments, `_${id}: ${timeType}`].join(os.EOL);
    default:
      if (minimum !== undefined) {
        if (typeBoxType === "String") {
          props.minLength = minimum;
        } else {
          props.minimum = minimum;
        }
      }
      if (maximum !== undefined) {
        if (typeBoxType === "String") {
          props.maxLength = maximum;
        } else {
          props.maximum = maximum;
        }
      }
  }

  let object = `Type.${typeBoxType}(${JSON.stringify(props)})`;
  if (rangeEnumObject?.dataStruct === "enum") {
    object = createEnumDefinition(rangeEnumObject.value as any, props as any);
  }

  if (multipleInstances !== undefined)
    object = getMultipleInstanceStatus(multipleInstances, object);
  if (mandatoryStatus !== undefined)
    object = getMandatoryStatus(mandatoryStatus, object);

  return [...comments, `_${id}: ${object}`].join(os.EOL);
};

/**
 * Create an enumeration definition from a single instance or a list of values
 * @param value
 * @param props
 * @returns
 */
export const createEnumDefinition = (
  value: string | number | number[] | string[],
  props: Record<string, string>
) => {
  if (typeof value === "number" || typeof value === "string") {
    const isString = isNaN(+(value as any));
    return createLiteralDefinition(isString, false, value, props);
  } else {
    // list case
    return `Type.Union([${(value as any).map((element: string | number) => {
      return createLiteralDefinition(isNaN(+element), true, element, props);
    })}],${JSON.stringify(props)})`;
  }
};

/**
 * Create custom "literal" type definition
 */
export const createLiteralDefinition = (
  isString: boolean,
  isUnion: boolean,
  value: string | number,
  props: Record<string, string>
): string =>
  isString
    ? `Type.Literal('${value}' ${isUnion ? "" : `,${JSON.stringify(props)}`})`
    : `Type.Literal(${value} ${isUnion ? "" : `,${JSON.stringify(props)}`})`;
