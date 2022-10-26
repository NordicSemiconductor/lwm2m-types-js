import { TSchema } from "@sinclair/typebox";
import { validateWithJSONSchema } from "./validateWithJsonSchema";

describe("validateWithJSONSchema", () => {
  describe("it should validate", () => {
    let _1: TSchema | undefined = undefined;
    let v: ReturnType<typeof validateWithJSONSchema> | undefined = undefined;

    beforeAll(async () => {
      const generatedTypes = await import("./data-test/1");
      v = validateWithJSONSchema(generatedTypes._1);
    });

    it("Should check input is valid", async () => {
      const isValid = (v as ReturnType<typeof validateWithJSONSchema>)({
        Name: "LwM2M Server",
        ObjectURN: "urn:oma:lwm2m:oma:1:1.2",
        LWM2MVersion: 1.2,
        ObjectVersion: 1.2,
        Resources: { Short_Server_ID: 42 },
      });
      expect("value" in isValid).toEqual(true);
      expect((isValid as any).value.Resources.Short_Server_ID).toEqual(42);
    });
    it("Should check as 'invalid' values less than 0", () => {
      const isInvalid = (v as ReturnType<typeof validateWithJSONSchema>)({
        Short_Server_ID: -42,
      });
      expect("errors" in isInvalid).toEqual(true);
    });
    it("Should check as 'invalid' values greater than 65534", () => {
      const isInvalid = (v as ReturnType<typeof validateWithJSONSchema>)({
        Short_Server_ID: 655340,
      });
      expect("errors" in isInvalid).toEqual(true);
    });
  });
});
