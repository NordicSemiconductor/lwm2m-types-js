import { cleanUnits } from "./cleanUnits";

describe("cleanUnits", () => {
it.each([
    ["\r\n        ", ""],
    ["", ""],
    ["meters", "meters"],
])("Should remove line breakers from value", (units, expected) =>
    expect(cleanUnits(units)).toBe(expected)
);
});