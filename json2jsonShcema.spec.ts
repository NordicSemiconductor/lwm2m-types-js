import { getTypebox } from "./json2jsonShcema";

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
});
