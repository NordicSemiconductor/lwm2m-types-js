import { getMax } from "./getMax";

describe("getMax", () => {
  it.each([
    [[1, 2, 3, 4, 5], 5],
    [[5, 4, 3, 2, 1], 5],
    [[1, 4, 5, 2, 3], 5],
    [[4, 5, 1, 2, 3], 5],
    [[4, 2, 1, 5, 3], 5],
    [[], null],
    [[null, null, null], null],
    [[null, null, -1], -1],
    [[-100, null, -1], -1],
    [[3, 3, 3], 3],
  ])("Should find maximum value in list : %p -> %p", (value, expected) =>
    expect(getMax(value)).toStrictEqual(expected)
  );
});
