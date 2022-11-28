// define input format

import { Static, TArray, TSchema, Type } from '@sinclair/typebox'
import {
	LwM2MObjectDefinition,
	LwM2MType,
	Mandatory,
	MultipleInstances,
	Operations,
} from '../lwm2m/LwM2MObjectDefinition'
import { addIfNotBlank } from './addIfNotBlank'
import { convertResources } from './convertResources'
import { filterOutBlankValues } from './filterOutBlankValues'
import { validateWithTypeBox } from './validateWithTypeBox'

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
export const NonEmptyArrayWithNonBlankString = nonEmptyArray(NonBlankString)

export const ObjectDef = Type.Object({
	ATTR: Type.Object({
		ObjectType: NonBlankString,
	}),
	Name: NonEmptyArrayWithNonBlankString,
	Description1: NonEmptyArrayWithNonBlankString,
	Description2: Type.Optional(nonEmptyArray(Type.String())),
	ObjectID: NonEmptyArrayWithNonBlankString,
	ObjectURN: NonEmptyArrayWithNonBlankString, // 'urn:oma:lwm2m:oma:1:1.2'
	LWM2MVersion: NonEmptyArrayWithNonBlankString, // "1.2"
	ObjectVersion: NonEmptyArrayWithNonBlankString, // "1.2"
	MultipleInstances: nonEmptyArray(Type.Enum(MultipleInstances)),
	Mandatory: nonEmptyArray(Type.Enum(Mandatory)),
	Resources: nonEmptyArray(
		Type.Object({
			Item: nonEmptyArray(
				Type.Object({
					ATTR: Type.Object({
						ID: NonBlankString,
					}),
					Name: NonEmptyArrayWithNonBlankString,
					Operations: nonEmptyArray(Type.Enum(Operations)),
					MultipleInstances: nonEmptyArray(Type.Enum(MultipleInstances)),
					Mandatory: nonEmptyArray(Type.Enum(Mandatory)),
					Type: NonEmptyArrayWithNonBlankString,
					RangeEnumeration: Type.Optional(nonEmptyArray(Type.String())),
					Units: Type.Optional(nonEmptyArray(Type.String())),
					Description: NonEmptyArrayWithNonBlankString,
				}),
			),
		}),
	),
})

/**
 * Definition of the object key as result of use xml2js lib
 */
const ObjectDefArray = nonEmptyArray(ObjectDef)

/**
 * Object definition from result of use xml2js lib
 */
const xml2jsDef = Type.Object(
	{
		LWM2M: Type.Object({
			ATTR: Type.Object({
				'xmlns:xsi': NonBlankString, // 'http://www.w3.org/2001/XMLSchema-instance'
				'xsi:noNamespaceSchemaLocation': NonBlankString, // 'http://www.openmobilealliance.org/tech/profiles/LWM2M-v1_1.xsd'
			}),
			Object: ObjectDefArray,
		}),
	},
	{
		description:
			'A LwM2M object definition, converted from XML to JSON using xml2js library',
	},
)

export const toLwM2mType = (type: unknown): LwM2MType => {
	if (
		![
			LwM2MType.Boolean,
			LwM2MType.Float,
			LwM2MType.Integer,
			LwM2MType.UnsignedInteger,
			LwM2MType.Objlnk,
			LwM2MType.Corelnk,
			LwM2MType.Opaque,
			LwM2MType.String,
			LwM2MType.Time,
		].includes(type as any)
	)
		throw new Error(`Not a LwM2M type: ${type}`)
	return type as LwM2MType
}

const validateInput = validateWithTypeBox(xml2jsDef)

/**
 * This function takes the LwM2M definitions parsed using xml2js and turns them
 *  into plain LwM2M object definitions, without the artifacts created by xml2js
 * (for example all values are wrapped in arrays).
 */
export const LwM2MJSONfromXML2js = (
	value: Record<string, any>,
): LwM2MObjectDefinition => {
	const maybeValidValue = validateInput(
		filterOutResourcesWithUnsupportedTypes(
			filterOutBlankValues(value) as Record<string, any>,
		),
	)
	if ('errors' in maybeValidValue)
		throw new Error(
			`Invalid resource definition: ${JSON.stringify(value)}! ${JSON.stringify(
				maybeValidValue.errors,
			)}`,
		)

	const { LWM2M } = maybeValidValue.value

	return convertObject(LWM2M.Object[0] as Static<typeof ObjectDef>)
}

/**
 * This filters out unsupported resource definitions, like write-only or
 * execution resources or resources that have no Type defined.
 */
const filterOutResourcesWithUnsupportedTypes = (
	lwm2mJson: Record<string, any>,
): Record<string, any> => ({
	LWM2M: {
		...lwm2mJson.LWM2M,
		Object: [
			...lwm2mJson.LWM2M.Object.map((Object: Record<string, any>) => ({
				...Object,
				Resources: [
					{
						Item: Object.Resources[0].Item.filter(
							(resource: Record<string, any>) => {
								const type = resource.Type?.[0]
								if (type === undefined) return false
								if ([Operations.Execute, Operations.Write].includes(type))
									return false
								return true
							},
						),
					},
				],
			})),
		],
	},
})

const convertObject = (
	LwM2MObject: Static<typeof ObjectDef>,
): LwM2MObjectDefinition => {
	const converted = {
		Name: LwM2MObject.Name[0] as string,
		Description1: LwM2MObject.Description1[0] as string,
		ObjectID: LwM2MObject.ObjectID[0] as string,
		ObjectURN: LwM2MObject.ObjectURN[0] as string,
		LWM2MVersion: LwM2MObject.LWM2MVersion[0] as string,
		ObjectVersion: LwM2MObject.ObjectVersion[0] as string,
		MultipleInstances:
			LwM2MObject.MultipleInstances[0] === MultipleInstances.Multiple,
		Mandatory: LwM2MObject.Mandatory[0] === Mandatory.Mandatory,
		Resources: convertResources(LwM2MObject.Resources),
	}

	addIfNotBlank(converted, {
		Description2: LwM2MObject.Description2?.[0],
	})

	return converted
}
