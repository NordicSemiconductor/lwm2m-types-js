/**
 * Remove line breakers from value
 * @param value
 * @returns
 */
export const cleanUnits = (value: string) =>
  value.split(/\s/).filter((x) => x !== "").length === 0 ? "" : value;
