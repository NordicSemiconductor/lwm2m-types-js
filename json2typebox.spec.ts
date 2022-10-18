import { getTypebox, getObjectProps, parseData } from "./json2typebox";

describe("json2jsonSchema", () => {
  describe("getTypebox", () => {
    it("Should return a typebox definition in string with given params", () => {
      const key = "Communication_Retry_Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = false;
      const rangeEnumeration = [""];
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        key,
        type,
        description,
        isOptional,
        rangeEnumeration,
        id,
        units
      );
      const result = `Communication_Retry_Count: Type.Number({$id: '16', description: "The number of successive communication attempts before which a communication sequence is considered as failed."})`;

      expect(typeboxDefinition).toContain(`$id: '${id}'`);
      expect(typeboxDefinition).toContain(`description: "${description}"`);
      expect(typeboxDefinition).toBe(result);
    });

    it("Should return a typebox definition in string specifying minimum and maximun value with given params", () => {
      const key = "Communication_Retry_Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = false;
      const rangeEnumeration = ["1", "65534"];
      const minimun = 1;
      const maximun = 65534;
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        key,
        type,
        description,
        isOptional,
        rangeEnumeration,
        id,
        units
      );

      const result = `Communication_Retry_Count: Type.Number({$id: '16', description: "The number of successive communication attempts before which a communication sequence is considered as failed.", minimun: 1, maximun: 65534})`;

      expect(typeboxDefinition).toContain(`minimun: ${minimun}`);
      expect(typeboxDefinition).toContain(`maximun: ${maximun}`);
      expect(typeboxDefinition).toBe(result);
    });

    it("Should return a typebox definition in string specifying units with given params", () => {
      const key = "Communication_Retry_Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = false;
      const rangeEnumeration = [""];
      const id = "16";
      const units = "s";
      const typeboxDefinition = getTypebox(
        key,
        type,
        description,
        isOptional,
        rangeEnumeration,
        id,
        units
      );
      const result = `Communication_Retry_Count: Type.Number({$id: '16', description: "The number of successive communication attempts before which a communication sequence is considered as failed.", units: 's'})`;

      expect(typeboxDefinition).toContain(`units: '${units}'`);
      expect(typeboxDefinition).toBe(result);
    });

    it("Should return a typebox definition in string specifying optional value with given params", () => {
      const key = "Communication_Retry_Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = true;
      const rangeEnumeration = [""];
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        key,
        type,
        description,
        isOptional,
        rangeEnumeration,
        id,
        units
      );
      const result = `Communication_Retry_Count: Type.Optional(Type.Number({$id: '16', description: "The number of successive communication attempts before which a communication sequence is considered as failed."}))`;

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
        key: "Short_Server_ID",
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
      const result = `Short_Server_ID: Type.Number({$id: '0', description: \"Used as link to associate server Object Instance.\", minimun: 1, maximun: 65534})`;
      expect(getObjectProps(items)).toBe(result);
    });
  });
});
