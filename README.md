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

See [example.ts](./example.ts)

## JSON document

LwM2M values are encoded as a JSON document, where the key is an extended version of the LwM2M URN: `<"oma"|"ext"|"x">:<ObjectID>:<ObjectVersion>@<LwM2MVersion>` (where `ObjectVersion` and/or `LwM2MVersion` can be omitted if it is `1.0` ).

```json
{
  "3:1.1@1.1": {
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
