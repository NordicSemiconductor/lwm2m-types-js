import { TArray, TSchema, Type } from '@sinclair/typebox'

export const nonEmptyArray = <Schema extends TSchema>(
	type: Schema,
): TArray<Schema> =>
	Type.Array(type, {
		minItems: 1,
		description: 'An array with at least one element',
	})

export const NonEmptyString = Type.String({
	minLength: 1,
	description: 'A string with at least one character.',
})
export const NonBlankString = NonEmptyString

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
