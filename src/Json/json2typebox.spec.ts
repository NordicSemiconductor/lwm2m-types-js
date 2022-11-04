import {
  getTypebox,
  getObjectProps,
  parseData,
  getRangeEnumeration,
} from "./json2typebox";

describe("json2jsonSchema", () => {
  describe("parseData", () => {
    it.each([
      [
        {
          rangeEnumeration: ["1..65534"],
          mandatory: ["Mandatory"],
          type: ["Integer"],
          units: ["s"],
        },
        {
          rangeEnumeration: [1, 65534],
          isOptional: false,
          type: "Integer",
          units: "s",
        },
      ],
      [
        {
          rangeEnumeration: ["1,655,34"],
          mandatory: ["Optional"],
          type: ["String"],
          units: [""],
        },
        {
          rangeEnumeration: [1, 655, 34],
          isOptional: true,
          type: "String",
          units: "",
        },
      ],
      [
        {
          rangeEnumeration: [""],
          mandatory: ["Optional"],
          type: ["String"],
          units: [""],
        },
        {
          rangeEnumeration: null,
          isOptional: true,
          type: "String",
          units: "",
        },
      ],
    ])(
      "Should pick properties from element and parse data.",
      (value, expected) => {
        const items = [
          {
            ATTR: { ID: "0" },
            Name: ["Short Server ID"],
            Operations: ["R"],
            MultipleInstances: ["Single"],
            Mandatory: value.mandatory,
            Type: value.type,
            RangeEnumeration: value.rangeEnumeration,
            Units: value.units,
            Description: ["Used as link to associate server Object Instance."],
          },
        ];
        expect(parseData(items[0])).toStrictEqual({
          name: "Short Server ID",
          type: expected.type,
          description: "Used as link to associate server Object Instance.",
          isOptional: expected.isOptional,
          rangeEnumeration: expected.rangeEnumeration,
          id: "0",
          units: expected.units,
        });
      }
    );
  });

  describe("getTypebox", () => {
    it("Should return a typebox definition in string", () => {
      const name = "Communication Retry Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = false;
      const rangeEnumeration = null;
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
      const result = `_16: Type.Number({title: 'Communication Retry Count', description: \"The number of successive communication attempts before which a communication sequence is considered as failed.\"})`;

      expect(typeboxDefinition).toContain(`title: '${name}'`);
      expect(typeboxDefinition).toContain(`description: "${description}"`);
      expect(typeboxDefinition).toBe(result);
    });

    it("Should return a typebox definition in string specifying minimum and maximum value", () => {
      const name = "Communication Retry Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = false;
      const rangeEnumeration = [1, 65534];
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

      const result = `_16: Type.Number({title: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed.", minimum: 1, maximum: 65534})`;

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
      const rangeEnumeration = null;
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
      const result = `_16: Type.Number({title: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed.", units: 's'})`;

      expect(typeboxDefinition).toContain(`units: '${units}'`);
      expect(typeboxDefinition).toBe(result);
    });

    it("Should return a typebox definition in string specifying optional value", () => {
      const name = "Communication Retry Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = true;
      const rangeEnumeration = null;
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
      const result = `_16: Type.Optional(Type.Number({title: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed."}))`;

      expect(typeboxDefinition).toBe(result);
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
      const result = `_0: Type.Number({title: 'Short Server ID', description: \"Used as link to associate server Object Instance.\", minimum: 1, maximum: 65534})`;
      expect(getObjectProps(items)).toBe(result);
    });
  });

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
});
