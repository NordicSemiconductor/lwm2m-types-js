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
import { parseLwM2MURN } from "../utils/parseLwM2MURN";

const RegistrySchema = Type.Object(
  {
    Name: NonEmptyArrayWithNonBlankString,
    ObjectURN: nonEmptyArray(
      Type.RegEx(/^urn:oma:lwm2m:(oma|ext|x):\d+(:[1-9]+\.\d+)?$/, {
        description:
          "Unique identifier for this object. The object version is optional.",
      })
    ),
    LWM2MVersion: Type.Optional(
      nonEmptyArray(
        Type.RegEx(/^[1-9]+\.\d+$/, {
          description:
            "LwM2M version. When the minimum LwM2M version supporting the Object is the Initial Version of the LwM2M Enabler (1.0), this information may be omitted.",
        })
      )
    ),
    ObjectVersion: Type.Optional(
      nonEmptyArray(
        Type.RegEx(/^[1-9]+\.\d+$/, {
          description:
            "Object version. When the Object version is the Initial Version of that Object (1.0), the Object Version information may be omitted.",
        })
      )
    ),
    Description1: NonEmptyArrayWithNonBlankString,
    ObjectID: nonEmptyArray(
      Type.RegEx(/^\d+$/, {
        description: "The ID of the LwM2M object, it is globally unique.",
      })
    ),
    Mandatory: Type.Optional(nonEmptyArray(Type.Enum(Mandatory))),
    MultipleInstances: Type.Optional(
      nonEmptyArray(Type.Enum(MultipleInstances))
    ),
    Resources: nonEmptyArray(
      Type.Object({
        Item: nonEmptyArray(
          Type.Object({
            Operations: nonEmptyArray(Type.Enum(Operations)),
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
export const createDefinition = (
  Lwm2mRegistry: Record<string, any>
): string => {
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

  const parsedURN = parseLwM2MURN(ObjectURN[0]);
  const parsedVersion =
    "ObjectVersion" in parsedURN ? parsedURN.ObjectVersion : undefined;
  const version = ObjectVersion?.[0] ?? parsedVersion ?? "1.0"; // default
  const lwm2mVersion = LWM2MVersion?.[0] ?? "1.0";

  const nameDef = `Name: Type.String({examples:["${Name[0]}"]})`;
  const objectUrnDef = `ObjectURN: Type.String({examples:["${ObjectURN[0]}"]})`;
  const lwm2mVersionDef = `LWM2MVersion: Type.Number({examples:[${lwm2mVersion}]})`;
  const objectVersionDef = `ObjectVersion: Type.Number({examples:[${version}]})`;

  let object = `${nameDef}, ${objectUrnDef}, ${lwm2mVersionDef}, ${objectVersionDef}, ${resources}},{description: "${escapeText(
    Description1[0]
  )}"`;

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
