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
