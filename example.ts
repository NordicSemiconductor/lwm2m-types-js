import * as assert from "node:assert/strict";
import knowGoodShadow from "./known-good-shadow.json";
import { LwM2MType } from "./LWM2MType";
import { validateWithJSONSchema } from "./src/utils/validateWithJsonSchema";

// validate shadow
const validateLwM2MJSON = validateWithJSONSchema(LwM2MType);
const maybeValidLwM2M = validateLwM2MJSON(knowGoodShadow);

// Because is is know to be good, there must be no errors
if ("errors" in maybeValidLwM2M) {
  console.error(maybeValidLwM2M.errors);
  throw new Error(`Validation failed`);
}

// then we can access LwM2M objects in the shadow document
const shadow = maybeValidLwM2M.value;

// Ensure values are as expected
assert.deepStrictEqual(shadow._1?.[0].Resources._1, 43200);
assert.deepStrictEqual(shadow._3?.Resources._1, "thingy91_nrf9160");
assert.deepStrictEqual(shadow._4?.Resources._7?.[0], "ibasis.iot");
assert.deepStrictEqual(shadow._3303?.[0].Resources._5701, "Celsius degrees");
assert.deepStrictEqual(shadow._3323?.[0].Resources._5602, 98.24);

console.log("Validation completed successfully");
