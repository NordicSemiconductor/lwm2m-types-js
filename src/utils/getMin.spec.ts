import { getMin } from "./getMin";

describe("getMin", () => {
    it.each([
      [[1, 2, 3, 4, 5], 1],
      [[5, 4, 3, 2, 1], 1],
      [[5, 4, 1, 2, 3], 1],
      [[4, 1, 5, 2, 3], 1],
      [[4, 2, 5, 1, 3], 1],
      [[], null],
      [[null, null, null], null],
      [[null, null, -1], -1],
      [[-100, null, -1], -100],
      [[3, 3, 3], 3],
    ])("Should find maximum value in list : %p -> %p", (value, expected) =>
      expect(getMin(value)).toStrictEqual(expected)
    );
  });