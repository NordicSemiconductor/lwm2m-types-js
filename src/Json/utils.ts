/**
 * Get the equivalent data type
 * @param type
 * @returns string
 */
export const getType = (type: string): string => {
  switch (type) {
    case "Integer":
      return "Number";
    case "Float":
      return "Number";
    case "Unsigned Integer":
      return "Number";
    case "Boolean":
      return "Boolean";
    case "String":
      return "String";
    /*
    // TODO: give a solution for this case. https://github.com/sinclairzx81/typebox/issues/2
    case "Time":
      return "Date";
    */
    default:
      return "Any";
  }
}; // TODO: add test case and show examples of use cases

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
    .replaceAll(".", "_")
    .replaceAll("&", "_and_") // TODO: make it generic
    .replaceAll("5", "five_") // TODO: make it generic
    .replaceAll("3", "three"); // TODO: make it generic

/**
 * Remove line breakers from value
 * @param value
 * @returns
 */
export const cleanUnits = (value: string) =>
  value.split(/\s/).filter((x) => x !== "").length === 0 ? "" : value;

/**
 * Find and return the maximum value in list
 * @param list
 * @returns number | null
 */
export const getMax = (list: (number | null)[]) =>
  list.reduce((prev, current) => {
    if (prev === null) return current;

    if (current === null) return prev;

    return prev > current ? prev : current;
  }, null);

/**
 * Find and return the minimum value in list
 * @param list
 * @returns number | null
 */
export const getMin = (list: (number | null)[]) =>
  list.reduce((prev, current) => {
    if (prev === null) return current;

    if (current === null) return prev;

    return prev < current ? prev : current;
  }, null);
