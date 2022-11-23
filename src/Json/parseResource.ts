import { TArray, TSchema, Type } from '@sinclair/typebox'
import { escapeText } from '../utils/escapeText'
import { filterOutBlankValues } from '../utils/filterOutBlankValues'
import { validateWithTypeBox } from '../xml2js-to-plain/validateWithTypeBox'

export type ParsedResource = {
	name: string
	type: string
	description: string
	mandatoryStatus?: Mandatory
	multipleInstances?: MultipleInstances
	rangeEnumeration?: string
	id: string
	units?: string
}

export const nonEmptyArray = <Schema extends TSchema>(
	type: Schema,
): TArray<Schema> =>
	Type.Array(type, {
		minItems: 1,
		description: 'An array with at least one element',
	})

export const NonBlankString = Type.String({
	minLength: 1,
	description: 'A string with at least one character.',
})
export const NonEmptyString = NonBlankString

export const NonEmptyArrayWithNonBlankString = nonEmptyArray(NonBlankString)

export enum MultipleInstances {
	Multiple = 'Multiple',
	Single = 'Single',
}

export enum Mandatory {
	Mandatory = 'Mandatory',
	Optional = 'Optional',
}

export enum Operations {
	Read = 'R',
	ReadWrite = 'RW',
	Write = 'W',
	Execute = 'E',
}

export const ResourceSchema = Type.Object(
	{
		Name: NonEmptyArrayWithNonBlankString,
		Type: NonEmptyArrayWithNonBlankString,
		Description: NonEmptyArrayWithNonBlankString,
		Mandatory: Type.Optional(nonEmptyArray(Type.Enum(Mandatory))),
		MultipleInstances: Type.Optional(
			nonEmptyArray(Type.Enum(MultipleInstances)),
		),
		RangeEnumeration: Type.Optional(NonEmptyArrayWithNonBlankString),
		ATTR: Type.Object({
			ID: NonBlankString,
		}),
		Units: Type.Optional(NonEmptyArrayWithNonBlankString),
	},
	{
		description: 'A LwM2M object definition, converted from XML to JSON',
	},
)
const validate = validateWithTypeBox(ResourceSchema)

/**
 * Pick properties from element to generate the TypeBox definition
 */
export const parseResource = (element: Record<string, any>): ParsedResource => {
	const sanitized = filterOutBlankValues(element)
	const maybeValidResource = validate(sanitized)

	if ('errors' in maybeValidResource)
		throw new Error(
			`Invalid resource definition: ${JSON.stringify(
				element,
			)}! ${JSON.stringify(maybeValidResource.errors)}`,
		)

	const {
		Name,
		Type,
		Description,
		Mandatory,
		MultipleInstances,
		RangeEnumeration,
		ATTR,
		Units,
	} = maybeValidResource.value

	const parsed: ParsedResource = {
		name: Name[0] ?? '',
		type: Type[0] ?? '',
		description: escapeText(Description[0] ?? ''),
		mandatoryStatus: Mandatory?.[0] as Mandatory,
		multipleInstances: MultipleInstances?.[0] as MultipleInstances,
		id: ATTR.ID,
	}

	const rangeEnumeration = RangeEnumeration?.[0]
	if (rangeEnumeration !== undefined) parsed.rangeEnumeration = rangeEnumeration

	const units = Units?.[0]
	if (units !== undefined) parsed.units = units

	return parsed
}
