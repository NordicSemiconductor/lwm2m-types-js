import {
  getTypebox,
  getObjectProps,
  parseData,
  getRangeEnumeration,
  defineInstaceType,
  defineMandatoryStatus,
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
          mandatoryStatus: "Mandatory",
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
          mandatoryStatus: "Optional",
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
          mandatoryStatus: "Optional",
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
          mandatoryStatus: expected.mandatoryStatus,
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
      const mandatoryStatus = "Mandatory";
      const rangeEnumeration = null;
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        name,
        type,
        description,
        mandatoryStatus,
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
      const mandatoryStatus = "Mandatory";
      const rangeEnumeration = [1, 65534];
      const minimum = 1;
      const maximum = 65534;
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        name,
        type,
        description,
        mandatoryStatus,
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
      const mandatoryStatus = "Mandatory";
      const rangeEnumeration = null;
      const id = "16";
      const units = "s";
      const typeboxDefinition = getTypebox(
        name,
        type,
        description,
        mandatoryStatus,
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
      const mandatoryStatus = "Optional";
      const rangeEnumeration = null;
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        name,
        type,
        description,
        mandatoryStatus,
        rangeEnumeration,
        id,
        units
      );
      const result = `_16: Type.Optional(Type.Number({title: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed."}))`;

      expect(typeboxDefinition).toBe(result);
    });

    it("Should return a typebox definition in string specifying mandatory value", () => {
      const name = "Communication Retry Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const mandatoryStatus = "Mandatory";
      const rangeEnumeration = null;
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        name,
        type,
        description,
        mandatoryStatus,
        rangeEnumeration,
        id,
        units
      );
      const result = `_16: Type.Number({title: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed."})`;

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

  describe("defineInstaceType", () => {
    it("Should create a multiple instance type definition", () => {
      const instanceType = "Multiple";
      const value = "";
      expect(defineInstaceType(instanceType, value)).toStrictEqual(
        `Type.Array(Type.Object({${value}}))`
      );
    });

    it("Should create a single instance type definition", () => {
      const instanceType = "Single";
      const value = "";
      expect(defineInstaceType(instanceType, value)).toStrictEqual(
        `Type.Object({${value}})`
      );
    });

    it("Should return error when instance type is different than allowed options", () => {
      const instanceType = "somethingElse";
      const value = "";
      expect(() => defineInstaceType(instanceType, value)).toThrow(
        `Instance type is not allowed`
      );
    });
  });

  describe("defineMandatoryStatus", () => {
    it("Should create a mandatory instance type definition", () => {
      const instanceType = "Mandatory";
      const value = "";
      expect(defineMandatoryStatus(instanceType, value)).toStrictEqual(
        `${value}`
      );
    });

    it("Should create an optional instance type definition", () => {
      const instanceType = "Optional";
      const value = "";
      expect(defineMandatoryStatus(instanceType, value)).toStrictEqual(
        `Type.Optional(${value})`
      );
    });

    it("Should return error when instance type is different than allowed options", () => {
      const instanceType = "somethingElse";
      const value = "";
      expect(() => defineMandatoryStatus(instanceType, value)).toThrow(
        `Status specification is not allowed`
      );
    });
  });
});
