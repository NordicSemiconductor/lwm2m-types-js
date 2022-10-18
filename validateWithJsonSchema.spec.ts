import { validateWithJSONSchema } from "./validateWithJsonSchema";
import { LwM2M_Server } from "./data-test/1";

const typedInputSchema = LwM2M_Server;

describe("validateWithJSONSchema", () => {
  describe("it should validate", () => {
    const v = validateWithJSONSchema(typedInputSchema);
    it("Should check input is valid", () => {
      const isValid = v({ Short_Server_ID: 42 });
      expect("value" in isValid).toEqual(true);
      expect((isValid as any).value.Short_Server_ID).toEqual(42);
    });
    it("Should check as 'invalid' values less than 0", () => {
      const isInvalid = v({ cell: -42 });
      expect("errors" in isInvalid).toEqual(true);
    });
    it("Should check as 'invalid' values greater than 65534", () => {
      const isInvalid = v({ cell: 655340 });
      expect("errors" in isInvalid).toEqual(true);
    });
  });
});
