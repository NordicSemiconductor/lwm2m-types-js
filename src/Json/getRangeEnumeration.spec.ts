import { getRangeEnumeration } from "./getRangeEnumeration";

describe("getRangeEnumeration", () => {
  it.each([
    ["", null],
    ["0..125", [0, 125]],
    ["1..256", [1, 256]],
    ["16,32,48", [16, 32, 48]],
    ["0..255 bytes", [0, 255]],
    ["1..64 Bytes", [1, 64]],
    ["0..255 Gigabyte", [0, 255]],
    ["no valid case", null],
    ["noValidCase", null],
  ])("Should return range enumeration: %s -> %p", (value, expected) =>
    expect(getRangeEnumeration(value)).toStrictEqual(expected)
  );
});
