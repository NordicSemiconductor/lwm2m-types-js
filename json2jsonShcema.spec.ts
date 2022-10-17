import { getTypebox, defineProperties } from "./json2jsonShcema";

describe("json2jsonSchema", () => {
  describe("getTypebox", () => {
    it("Should return a typebox definition in string", () => {
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

    it("Should return a typebox definition in string specifying minimum and maximun value", () => {
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

    it("Should return a typebox definition in string specifying units", () => {
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

    it("Should return a typebox definition in string specifying optional value", () => {
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

  describe("defineProperties", () => {
    it("Should construct the definition of the object", () => {
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

      defineProperties(items, typeboxDefinition);

      expect(typeboxDefinition).toHaveBeenCalledWith(
        "Short_Server_ID", // name
        "Integer", // type
        "Used as link to associate server Object Instance.", // description
        false, // is optional
        ["1", "65534"], // range enumeration
        "0", // id
        "" // units
      );
    });

    it("Should iterates over items and return an string object", () => {
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
        {
          ATTR: { ID: "1" },
          Name: ["Lifetime"],
          Operations: ["RW"],
          MultipleInstances: ["Single"],
          Mandatory: ["Mandatory"],
          Type: ["Integer"],
          RangeEnumeration: [""],
          Units: ["s"],
          Description: [
            "Specify the lifetime of the registration in seconds (see Client Registration Interface). If the value is set to 0, the lifetime is infinite.",
          ],
        },
      ];

      expect(defineProperties(items)).toBe(
        `Short_Server_ID: Type.Number({$id: '0', description: "Used as link to associate server Object Instance.", minimun: 1, maximun: 65534}), Lifetime: Type.Number({$id: '1', description: "Specify the lifetime of the registration in seconds (see Client Registration Interface). If the value is set to 0, the lifetime is infinite.", units: 's'})`
      );
    });
  });
});
