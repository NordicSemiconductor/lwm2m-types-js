import { TArray, TSchema, Type } from "@sinclair/typebox";
import { validateWithJSONSchema } from "../utils/validateWithJsonSchema";
import { escapeText } from "../utils/escapeText";
import { filterOutBlankValues } from "../utils/filterOutBlankValues";

export type ParsedResource = {
  name: string;
  type: string;
  description: string;
  mandatoryStatus?: Mandatory;
  multipleInstances?: MultipleInstances;
  rangeEnumeration?: string;
  id: string;
  units?: string;
};

export const nonEmptyArray = <Schema extends TSchema>(
  type: Schema
): TArray<Schema> =>
  Type.Array(type, {
    minItems: 1,
    description: "An array with at least one element",
  });

export const NonBlankString = Type.String({
  minLength: 1,
  description: "A string with at least one character.",
});
export const NonEmptyArrayWithNonBlankString = nonEmptyArray(NonBlankString);

export enum MultipleInstances {
  Multiple = "Multiple",
  Single = "Single",
}

export enum Mandatory {
  Mandatory = "Mandatory",
  Optional = "Optional",
}

export enum Operations {
  R = "R",
  RW = "RW",
  W = "W",
  E = "E",
}

export const ResourceSchema = Type.Object(
  {
    Name: NonEmptyArrayWithNonBlankString,
    Type: NonEmptyArrayWithNonBlankString,
    Description: NonEmptyArrayWithNonBlankString,
    Mandatory: Type.Optional(nonEmptyArray(Type.Enum(Mandatory))),
    MultipleInstances: Type.Optional(
      nonEmptyArray(Type.Enum(MultipleInstances))
    ),
    RangeEnumeration: Type.Optional(NonEmptyArrayWithNonBlankString),
    ATTR: Type.Object({
      ID: NonBlankString,
    }),
    Units: Type.Optional(NonEmptyArrayWithNonBlankString),
  },
  {
    description: "A LwM2M object definition, converted from XML to JSON",
  }
);
const validate = validateWithJSONSchema(ResourceSchema);

/**
 * Pick properties from element to generate the TypeBox definition
 */
export const parseResource = (element: Record<string, any>): ParsedResource => {
  const sanitized = filterOutBlankValues(element);
  const maybeValidResource = validate(sanitized);

  if ("errors" in maybeValidResource)
    throw new Error(
      `Invalid resource definition: ${JSON.stringify(
        element
      )}! ${JSON.stringify(maybeValidResource.errors)}`
    );

  const {
    Name,
    Type,
    Description,
    Mandatory,
    MultipleInstances,
    RangeEnumeration,
    ATTR,
    Units,
  } = maybeValidResource.value;

  return {
    name: Name[0],
    type: Type[0],
    description: escapeText(Description[0]),
    mandatoryStatus: Mandatory?.[0],
    multipleInstances: MultipleInstances?.[0],
    rangeEnumeration: RangeEnumeration?.[0],
    id: ATTR.ID,
    units: Units?.[0],
  };
};
