# LwM2M TypeBox types

[TypeBox](https://github.com/sinclairzx81/typebox) definitions for the objects
defined in the
[LwM2M Object Registry](https://github.com/OpenMobileAlliance/lwm2m-registry).

This is useful if you need to validate a _JSON_ representation of those objects.

## Installation

```bash
npm ci
npm test
```

## Building the types

```bash
git clone https://github.com/OpenMobileAlliance/lwm2m-registry.git --depth 1
npx tsx cli/generate-types.ts
npx tsx cli/generate-json-schema.ts
# Format the source
npx prettier --write ./
# Make sure result compiles
npx tsc
# Compile JS exports
npx swc -d types-dist ./types
# Make sure example runs
npx tsx ./example.ts
```

## Usage

See [example.ts](./example.ts)

## JSON document structure

LwM2M values are encoded as a JSON document, where the key is an extended
version of the LwM2M URN: `<ObjectID>:<ObjectVersion>@<LwM2MVersion>` (where
`ObjectVersion` and/or `LwM2MVersion` can be omitted if it is `1.0`).

[Example](./known-good-shadow.json)
