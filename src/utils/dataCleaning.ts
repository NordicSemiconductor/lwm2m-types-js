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
