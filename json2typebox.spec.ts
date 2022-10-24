import {
  getTypebox,
  getObjectProps,
  parseData,
  dataCleaning,
} from "./json2typebox";

describe("json2jsonSchema", () => {
  describe("getTypebox", () => {
    it("Should return a typebox definition in string", () => {
      const name = "Communication Retry Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = false;
      const rangeEnumeration = [""];
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        name,
        type,
        description,
        isOptional,
        rangeEnumeration,
        id,
        units
      );
      const result = `_16: Type.Number({name: 'Communication Retry Count', description: \"The number of successive communication attempts before which a communication sequence is considered as failed.\"})`;

      expect(typeboxDefinition).toContain(`name: '${name}'`);
      expect(typeboxDefinition).toContain(`description: "${description}"`);
      expect(typeboxDefinition).toBe(result);
    });

    it("Should return a typebox definition in string specifying minimum and maximum value", () => {
      const name = "Communication Retry Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = false;
      const rangeEnumeration = ["1", "65534"];
      const minimum = 1;
      const maximum = 65534;
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        name,
        type,
        description,
        isOptional,
        rangeEnumeration,
        id,
        units
      );

      const result = `_16: Type.Number({name: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed.", minimum: 1, maximum: 65534})`;

      expect(typeboxDefinition).toContain(`minimum: ${minimum}`);
      expect(typeboxDefinition).toContain(`maximum: ${maximum}`);
      expect(typeboxDefinition).toBe(result);
    });

    it("Should return a typebox definition in string specifying units", () => {
      const name = "Communication Retry Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = false;
      const rangeEnumeration = [""];
      const id = "16";
      const units = "s";
      const typeboxDefinition = getTypebox(
        name,
        type,
        description,
        isOptional,
        rangeEnumeration,
        id,
        units
      );
      const result = `_16: Type.Number({name: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed.", units: 's'})`;

      expect(typeboxDefinition).toContain(`units: '${units}'`);
      expect(typeboxDefinition).toBe(result);
    });

    it("Should return a typebox definition in string specifying optional value", () => {
      const name = "Communication Retry Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = true;
      const rangeEnumeration = [""];
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        name,
        type,
        description,
        isOptional,
        rangeEnumeration,
        id,
        units
      );
      const result = `_16: Type.Optional(Type.Number({name: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed."}))`;

      expect(typeboxDefinition).toBe(result);
    });
  });

  describe("parseData", () => {
    it("Should pick properties from element and parse data", () => {
      const items = [
        {
          ATTR: { ID: "0" },
          Name: ["Short Server ID"],
          Operations: ["R"],
          MultipleInstances: ["Single"],
          Mandatory: ["Mandatory"],
          Type: ["Integer"],
          RangeEnumeration: ["1..65534"],
          Units: ["s"],
          Description: ["Used as link to associate server Object Instance."],
        },
      ];
      expect(parseData(items[0])).toStrictEqual({
        name: "Short Server ID",
        type: "Integer",
        description: "Used as link to associate server Object Instance.",
        isOptional: false,
        rangeEnumeration: ["1", "65534"],
        id: "0",
        units: "s",
      });
    });
  });

  describe("getObjectProps", () => {
    it("Should construct a typebox definition of the item", async () => {
      const typeboxDefinition = jest.fn();
      const items = [
        {
          ATTR: { ID: "0" },
          Name: ["Short Server ID"],
          Operations: ["R"],
          MultipleInstances: ["Single"],
          Mandatory: ["Mandatory"],
          Type: ["Integer"],
          RangeEnumeration: ["1..65534"],
          Units: [""],
          Description: ["Used as link to associate server Object Instance."],
        },
      ];
      const result = `_0: Type.Number({name: 'Short Server ID', description: \"Used as link to associate server Object Instance.\", minimum: 1, maximum: 65534})`;
      expect(getObjectProps(items)).toBe(result);
    });
  });

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
});
