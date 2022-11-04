import { cleanUnits, dataCleaning, getMax, getMin } from "./utils";

describe("Json2Typebox/utils", () => {
  describe("dataCleaning", () => {
    it.each([
      [
        `"`,
        `Periodic voltage measurements that are "logged" into CBOR structure payload`,
        "Periodic voltage measurements that are 'logged' into CBOR structure payload",
      ],
      [
        "’",
        "Array of channels which the access point has determined are ‘in use’.",
        "Array of channels which the access point has determined are 'in use'.",
      ],
      [
        "\n",
        "Link to the target resource in CoRE Link Format [RFC6690](https://tools.ietf.org/html/rfc6690)\nNote taht the default for this entry is always the receiving object /4009/#/923. When Group communication is applied, the /#/ is determined by the group handling mechanisms and can be omitted.",
        "Link to the target resource in CoRE Link Format [RFC6690](https://tools.ietf.org/html/rfc6690) Note taht the default for this entry is always the receiving object /4009/#/923. When Group communication is applied, the /#/ is determined by the group handling mechanisms and can be omitted.",
      ],
      [
        "\r",
        "Examples of Interval Period include:-\r30 = Every 30 seconds",
        "Examples of Interval Period include:- 30 = Every 30 seconds",
      ],
      [
        "\t",
        "The Coverage Enhancement levels are defined and specified in 3GPP TS 36.331 and 36.213.\t0: No Coverage Enhancement in the serving cell",
        "The Coverage Enhancement levels are defined and specified in 3GPP TS 36.331 and 36.213. 0: No Coverage Enhancement in the serving cell",
      ],
    ])(
      "Should remove %s (forbiten characters) from string",
      (forbiten, text, expected) => {
        // characters are consider forbiten because those would cause an error if any is present on the object's description.
        expect(dataCleaning(text)).toBe(expected);
      }
    );
  });

  describe("cleanUnits", () => {
    it.each([
      ["\r\n        ", ""],
      ["", ""],
      ["meters", "meters"],
    ])("Should remove line breakers from value", (units, expected) =>
      expect(cleanUnits(units)).toBe(expected)
    );
  });

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
});
