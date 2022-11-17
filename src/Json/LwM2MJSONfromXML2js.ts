// define input format

import { Static, Type } from '@sinclair/typebox'
import { validateWithJSONSchema } from '../utils/validateWithJsonSchema'
import { addIfNotBlank } from './addIfNotBlank'
import { convertResources } from './convertResources'
import {
	Mandatory,
	MultipleInstances,
	NonBlankString,
	nonEmptyArray,
	NonEmptyArrayWithNonBlankString,
	Operations,
} from './types'

export const ObjectDef = Type.Object({
	ATTR: Type.Object({
		ObjectType: NonBlankString,
	}),
	Name: NonEmptyArrayWithNonBlankString,
	Description1: NonEmptyArrayWithNonBlankString,
	Description2: nonEmptyArray(Type.String()),
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
					Type: NonEmptyArrayWithNonBlankString, // TODO: should be a enum
					RangeEnumeration: nonEmptyArray(Type.String()),
					Units: nonEmptyArray(Type.String()),
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

const Resource = Type.Object({
	Name: NonBlankString,
	Operations: Type.Enum(Operations),
	MultipleInstances: Type.Enum(MultipleInstances),
	Mandatory: Type.Enum(Mandatory),
	Type: NonBlankString, // TODO: should be a enum
	RangeEnumeration: Type.Optional(NonBlankString),
	Units: Type.Optional(NonBlankString),
	Description: NonBlankString,
})

export const Resources = Type.Record(Type.String({ minLength: 1 }), Resource)

export const parsedObject = Type.Object({
	Name: NonBlankString,
	Description1: NonBlankString,
	Description2: Type.Optional(NonBlankString),
	ObjectID: NonBlankString,
	ObjectURN: NonBlankString, // 'urn:oma:lwm2m:oma:1:1.2'
	LWM2MVersion: NonBlankString, // "1.2"
	ObjectVersion: NonBlankString, // "1.2"
	MultipleInstances: Type.Enum(MultipleInstances),
	Mandatory: Type.Enum(Mandatory),
	Resources,
})

const validateInput = validateWithJSONSchema(xml2jsDef)

/**
 * This function takes the LwM2M definitions parsed using xml2js and turns them
 *  into plain LwM2M object definitions, without the artifacts created by xml2js
 * (for example all values are wrapped in arrays).
 */
export const LwM2MJSONfromXML2js = (
	value: Record<string, any>,
): Record<string, any> => {
	const maybeValidValue = validateInput(value)
	if ('errors' in maybeValidValue)
		throw new Error(
			`Invalid resource definition: ${JSON.stringify(value)}! ${JSON.stringify(
				maybeValidValue.errors,
			)}`,
		)

	const { LWM2M } = maybeValidValue.value

	return convertObject(LWM2M.Object[0] as Static<typeof ObjectDef>)
}

const convertObject = (
	LwM2MObject: Static<typeof ObjectDef>,
): Static<typeof parsedObject> => {
	const converted = {
		Name: LwM2MObject.Name[0] as string,
		Description1: LwM2MObject.Description1[0] as string,
		ObjectID: LwM2MObject.ObjectID[0] as string,
		ObjectURN: LwM2MObject.ObjectURN[0] as string,
		LWM2MVersion: LwM2MObject.LWM2MVersion[0] as string,
		ObjectVersion: LwM2MObject.ObjectVersion[0] as string,
		MultipleInstances: LwM2MObject.MultipleInstances[0] as MultipleInstances,
		Mandatory: LwM2MObject.Mandatory[0] as Mandatory,
		Resources: convertResources(LwM2MObject.Resources),
	}

	addIfNotBlank(converted, {
		Description2: LwM2MObject.Description2[0],
	})

	return converted
}
