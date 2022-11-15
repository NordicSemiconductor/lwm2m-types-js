/**
 * Return true if format is invalid, false if it is valid.
 *
 * allowed formats:
 *  1- VALUE
 *  2- VALUE..VALUE
 *  3- VALUE, VALUE, VALUE
 *
 * @param element
 * @returns
 */
export const isInvalidFormat = (element: string) =>
  element.split(/[..]|,/g).some((element) => /\s/.test(element.trim()));

/**
 * Check if format is followed
 * Format:
 *  VALUE..VALUE
 * @param element
 * @returns
 */
export const isRangeFormat = (element: string) =>
  element.length >= 4 && element.split("..").length === 2;

/**
 * Check if format is followed
 * Format:
 *  VALUE
 * @param element
 * @returns
 */
export const isSingleEnum = (element: string) =>
  element.split(/[..]|,|' '/g).length === 1;

/**
 * Check if format is followed
 * Format:
 *  VALUE, VALUE, VALUE
 * @param element
 * @returns
 */
export const isListEnum = (element: string) => element.split(",").length > 1;

/**
 * Check if value is an empty string
 * @param element
 * @returns
 */
const isEmptyValue = (element: string) => element.trim().length === 0;

/**
 * Create an object after analyze range enumeration composition.
 * RangeEnumeratioan format definition: http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.pdf pag 110
 * @param value
 * @returns
 */
export const getRangeEnumeration = (
  value: string
): {
  invalidFormat: boolean;
  value: Number | string | Number[] | String[] | null;
  dataStruct?: "enum" | "range";
} => {
  if (isInvalidFormat(value)) return { invalidFormat: true, value: value };

  if (isEmptyValue(value)) return { invalidFormat: false, value: null };

  if (isSingleEnum(value)) {
    const enumValue = isNaN(+value) ? value : +value;
    return { invalidFormat: false, value: enumValue, dataStruct: "enum" };
  }

  if (isRangeFormat(value)) {
    const [min, max] = value.split("..");
    if (isNaN(+min) || isNaN(+max))
      return { invalidFormat: true, value: value };

    return { invalidFormat: false, value: [+min, +max], dataStruct: "range" };
  }

  if (isListEnum(value)) {
    const isNumberList = value.split(",").some((element) => !isNaN(+element));
    const enumList = isNumberList
      ? value.split(",").map((element) => +element)
      : value.split(",");
    return { invalidFormat: false, value: enumList, dataStruct: "enum" };
  }

  return { invalidFormat: true, value: value };
};
