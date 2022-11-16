# LwM2M TypeBox types

[TypeBox](https://github.com/sinclairzx81/typebox) definitions for the objects defined in the [LwM2M Object Registry](https://github.com/OpenMobileAlliance/lwm2m-registry).

This is useful if you need to validate a _JSON_ representation of those objects.

## Installation

```bash
npm ci
npm test
```

## Building the types

```bash
git clone https://github.com/OpenMobileAlliance/lwm2m-registry.git --depth 1
mkdir lwm2m-registry-json
npx tsx cli/XMLtoJSON.ts ./lwm2m-registry ./lwm2m-registry-json
mkdir types
npx tsx cli/JSONtoTypeBox.ts ./lwm2m-registry-json ./types
npx tsx ./src/TypeScript/createTypeboxDef
npx prettier --write ./
# Make sure result compiles
npx tsc
# Make sure example runs
npx tsx ./example.ts

```

## Usage

```typescript
// This is a JSON representation of LwM2M, for example stored in AWS IoT Shadow
// The JSON notation for LwM2M follows previous work by AVSystem as used in Coiote, but with values follow the LwM2M standard (e.g. numbers are expressed as strings in Coiote, but are Integers in LwM2M standard)
import stateJSON from "./data.json";
// We can validate that the data is correctly defined as LwM2M
const maybeValidLwM2M = validateLwM2MJSON(stateJSON.state.reported);

if ("error" in maybeValidLwM2M) throw new Error(`Validation failed`);

// then we can access LwM2M objects in the shadow
maybeValidLwM2M?.["LwM2M Server"]; // typed as LwM2MServer | undefined
console.log(validateShadow?.["LwM2M Server"][0].Lifetime); // 43200, typeof number
```

## JSON document

LwM2M values are encoded as a JSON document, where the key is an extended version of the LwM2M URN: `<"oma"|"ext"|"x">:<ObjectID>:<ObjectVersion>@<LwM2MVersion>` (where `ObjectVersion` and/or `LwM2MVersion` can be omitted if it is `1.0` ).

```json
{
  "oma:3:1.1@1.1": {
    "0": "Nordic Semiconductor ASA",
    "1": "thingy91_nrf9160",
    "2": "351358815340515",
    "3": "0.0.0-development",
    "7": [4113],
    "11": [0],
    "13": 1665149633,
    "16": "U",
    "18": "nRF9160_SICA",
    "19": "mfw_nrf9160_1.3.2"
  }
}
```
