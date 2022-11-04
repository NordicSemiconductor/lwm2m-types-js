
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