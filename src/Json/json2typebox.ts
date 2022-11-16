import { escapeText } from "../utils/escapeText";
import { TArray, TSchema, Type } from "@sinclair/typebox";
import { keyCleaning } from "./../utils/keyCleaning";
import { createResourceDefinition } from "./createResourceDefinition";
import { excludeWriteOnlyResources } from "./excludeWriteOnlyResources";
import { getMandatoryStatus } from "./getMandatoryStatus";
import { getMultipleInstanceStatus } from "./getMultipleInstanceStatus";
import {
  Mandatory,
  MultipleInstances,
  nonEmptyArray,
  NonEmptyArrayWithNonBlankString,
  Operations,
  parseResource,
} from "./parseResource";
import { validateWithJSONSchema } from "../utils/validateWithJsonSchema";
import { filterOutBlankValues } from "../utils/filterOutBlankValues";

const RegistrySchema = Type.Object(
  {
    Name: NonEmptyArrayWithNonBlankString,
    ObjectURN: NonEmptyArrayWithNonBlankString, // TOOD: add constraint regex for this value
    LWM2MVersion: NonEmptyArrayWithNonBlankString, // same format as ObjectVersion
    ObjectVersion: NonEmptyArrayWithNonBlankString, // Object Version format http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.pdf
    // 2 digits separate by "."
    Description1: NonEmptyArrayWithNonBlankString,
    ObjectID: NonEmptyArrayWithNonBlankString, // 0 and positive int
    Mandatory: Type.Optional(nonEmptyArray(Type.Enum(Mandatory))),
    MultipleInstances: Type.Optional(
      nonEmptyArray(Type.Enum(MultipleInstances))
    ),
    Resources: nonEmptyArray(
      Type.Object({
        Item: nonEmptyArray(
          Type.Object({
            Operations: nonEmptyArray(Type.Enum(Operations)), // Type.Array(Type.String()), //
          })
        ),
      })
    ),
  },
  {
    description: "A LwM2M object definition, converted from XML to JSON",
  }
);
const validate = validateWithJSONSchema(RegistrySchema);

// TODO: add test case
/**
 * Parse object data, get resources definition and generate the typebox object definition
 */
export const createDefinition = (Lwm2mRegistry: any): string => {
  const sanitized = filterOutBlankValues(Lwm2mRegistry);
  const maybeValidResource = validate(sanitized);

  if ("errors" in maybeValidResource)
    throw new Error(
      `Invalid resource definition: ${JSON.stringify(
        Lwm2mRegistry
      )}! ${JSON.stringify(maybeValidResource.errors)}`
    );

  const {
    Name,
    ObjectURN,
    LWM2MVersion,
    ObjectVersion,
    Description1,
    Resources,
    ObjectID,
    Mandatory,
    MultipleInstances,
  } = maybeValidResource.value;

  const resources = `Resources: Type.Object({${Resources[0].Item.filter(
    excludeWriteOnlyResources
  )
    .map(parseResource)
    .map(createResourceDefinition)
    .join(", ")}})`;
  const importTypeBox = `import { Type, Static } from '@sinclair/typebox'`;

  let object = `${Name[0]},${ObjectURN[0]},${LWM2MVersion[0]},${
    ObjectVersion[0]
  }, ${resources}},{description: "${escapeText(Description1[0])}"`;

  if (MultipleInstances && MultipleInstances[0] !== undefined)
    object = getMultipleInstanceStatus(
      MultipleInstances[0],
      `Type.Object({${object}})`
    );

  if (Mandatory && Mandatory[0] !== undefined)
    object = getMandatoryStatus(Mandatory[0], object);

  const typeboxDefinition = `export const _${ObjectID[0]} = ${object}`; // FIXME:  { additionalProperties: false },  --> is creating issues. Error message: Expected 1-2 arguments, but got 3.

  const nameSpaceDefinition = `export namespace Object_${
    ObjectID[0]
  } {export type ${keyCleaning(Name[0])} =  Static<typeof _${ObjectID[0]}>}`;

  return `${importTypeBox}\n${typeboxDefinition}\n${nameSpaceDefinition}`;
};
