import * as assert from "node:assert/strict";
import knowGoodShadow from "./known-good-shadow.json";
import { LwM2MDocument } from "./LwM2MDocument";
import { validateWithJSONSchema } from "./src/utils/validateWithJsonSchema";

// validate shadow
const validateLwM2MJSON = validateWithJSONSchema(LwM2MDocument);
const maybeValidLwM2M = validateLwM2MJSON(knowGoodShadow);

// Because is is know to be good, there must be no errors
if ("errors" in maybeValidLwM2M) {
  console.error(maybeValidLwM2M.errors);
  throw new Error(`Validation failed`);
}

// then we can access LwM2M objects in the shadow document
const shadow = maybeValidLwM2M.value;

// Ensure values are as expected
assert.deepStrictEqual(shadow["oma:1:1.2@1.2"]?.[0].Resources._1, 43200);
assert.deepStrictEqual(
  shadow["oma:3:1.2@1.1"]?.Resources._1,
  "thingy91_nrf9160"
);
assert.deepStrictEqual(
  shadow["oma:4:1.3@1.1"]?.Resources._7?.[0],
  "ibasis.iot"
);
assert.deepStrictEqual(
  shadow["ext:3303:1.1@1.0"]?.[0].Resources._5701,
  "Celsius degrees"
);
assert.deepStrictEqual(shadow["ext:3323:1.1@1.0"]?.[0].Resources._5602, 98.24);

console.log("Validation completed successfully");
