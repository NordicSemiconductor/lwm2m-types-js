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
// TODO: add test cases