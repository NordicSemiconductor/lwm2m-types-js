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
