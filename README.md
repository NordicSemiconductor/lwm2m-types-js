# LwM2M TypeScript type definitions and JSON schema [![npm version](https://img.shields.io/npm/v/@nordicsemiconductor/lwm2m-types.svg)](https://www.npmjs.com/package/@nordicsemiconductor/lwm2m-types)

[![Test and Release](https://github.com/NordicSemiconductor/lwm2m-types-js/actions/workflows/test-and-release.yaml/badge.svg)](https://github.com/NordicSemiconductor/lwm2m-types-js/actions/workflows/test-and-release.yaml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)
[![Mergify Status](https://img.shields.io/endpoint.svg?url=https://api.mergify.com/v1/badges/NordicSemiconductor/lwm2m-types-js)](https://mergify.io)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier/)
[![ESLint: TypeScript](https://img.shields.io/badge/ESLint-TypeScript-blue.svg)](https://github.com/typescript-eslint/typescript-eslint)

TypeScript type definitions and JSON schema for the objects defined in the
[LwM2M Object Registry](https://github.com/OpenMobileAlliance/lwm2m-registry).

This is useful if you need to validate a _JSON_ representation of those objects.

## Installation

```bash
npm ci
npm test
```

## Usage

See [example.ts](./example.ts)

## JSON document structure

LwM2M values are encoded as a JSON document, where the key is an extended
version of the LwM2M URN: `<ObjectID>:<ObjectVersion>@<LwM2MVersion>` (where
`ObjectVersion` and/or `LwM2MVersion` can be omitted if it is `1.0`).

[Example](./known-good-shadow.json)

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
