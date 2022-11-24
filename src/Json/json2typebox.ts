import { Type } from '@sinclair/typebox'
import os from 'node:os'
import { validateWithTypeBox } from 'src/xml2js-to-plain/validateWithTypeBox'
import { createURN } from '../utils/createURN'
import { escapeText } from '../utils/escapeText'
import { filterOutBlankValues } from '../utils/filterOutBlankValues'
import { parseLwM2MURN } from '../utils/parseLwM2MURN'
import { createResourceDefinition } from './createResourceDefinition'
import { excludeWriteOnlyResources } from './excludeWriteOnlyResources'
import {
	Mandatory,
	MultipleInstances,
	nonEmptyArray,
	NonEmptyArrayWithNonBlankString,
	Operations,
	parseResource,
} from './parseResource'
import { typeName } from './typeName'

const RegistrySchema = Type.Object(
	{
		Name: NonEmptyArrayWithNonBlankString,
		ObjectURN: nonEmptyArray(
			Type.RegEx(/^urn:oma:lwm2m:(oma|ext|x):\d+(:[1-9]+\.\d+)?$/, {
				description:
					'Unique identifier for this object. The object version is optional.',
			}),
		),
		LWM2MVersion: Type.Optional(
			nonEmptyArray(
				Type.RegEx(/^[1-9]+\.\d+$/, {
					description:
						'LwM2M version. When the minimum LwM2M version supporting the Object is the Initial Version of the LwM2M Enabler (1.0), this information may be omitted.',
				}),
			),
		),
		ObjectVersion: Type.Optional(
			nonEmptyArray(
				Type.RegEx(/^[1-9]+\.\d+$/, {
					description:
						'Object version. When the Object version is the Initial Version of that Object (1.0), the Object Version information may be omitted.',
				}),
			),
		),
		Description1: NonEmptyArrayWithNonBlankString,
		ObjectID: nonEmptyArray(
			Type.RegEx(/^\d+$/, {
				description: 'The ID of the LwM2M object, it is globally unique.',
			}),
		),
		Mandatory: Type.Optional(nonEmptyArray(Type.Enum(Mandatory))),
		MultipleInstances: Type.Optional(
			nonEmptyArray(Type.Enum(MultipleInstances)),
		),
		Resources: nonEmptyArray(
			Type.Object({
				Item: nonEmptyArray(
					Type.Object({
						Operations: nonEmptyArray(Type.Enum(Operations)),
					}),
				),
			}),
		),
	},
	{
		description: 'A LwM2M object definition, converted from XML to JSON',
	},
)
const validate = validateWithTypeBox(RegistrySchema)

// TODO: add test case
/**
 * Parse object data, get resources definition and generate the typebox object definition
 */
export const createDefinition = (
	Lwm2mRegistry: Record<string, any>,
): string => {
	const sanitized = filterOutBlankValues(Lwm2mRegistry)
	const maybeValidResource = validate(sanitized)

	if ('errors' in maybeValidResource)
		throw new Error(
			`Invalid resource definition: ${JSON.stringify(
				Lwm2mRegistry,
			)}! ${JSON.stringify(maybeValidResource.errors)}`,
		)

	const {
		Name,
		ObjectURN,
		LWM2MVersion,
		ObjectVersion,
		Description1,
		Resources,
		ObjectID,
		MultipleInstances,
		Mandatory,
	} = maybeValidResource.value

	const resources = `${Resources[0]?.Item.filter(excludeWriteOnlyResources)
		.map(parseResource)
		.map(createResourceDefinition)
		.join(`, ${os.EOL}`)}}`
	const importTypeBox = `import { Type } from '@sinclair/typebox'`

	const parsedURN = parseLwM2MURN(ObjectURN[0] ?? '')
	const parsedVersion = parsedURN?.ObjectVersion

	const version = ObjectVersion?.[0] ?? parsedVersion ?? '1.0' // default
	const lwm2mVersion = LWM2MVersion?.[0] ?? '1.0'

	const objectURN = createURN({
		ObjectID: ObjectID[0] ?? '',
		ObjectVersion: version,
		LwM2MVersion: lwm2mVersion,
	})

	const object = `${resources},{description: "${escapeText(
		Description1[0] ?? '',
	)}"`

	// FIXME:  { additionalProperties: false },  --> is creating issues. Error message: Expected 1-2 arguments, but got 3.
	const typeboxDefinition = [
		`/**`,
		` * ${ObjectID[0]}: ${Name[0]}`,
		` *`,
		` * LWM2MVersion: ${LWM2MVersion?.[0] ?? 'not set'}`,
		` * ObjectVersion: ${ObjectVersion?.[0] ?? 'not set'}`,
		` * MultipleInstances: ${MultipleInstances?.[0] ?? 'not set'}`,
		` * Mandatory: ${Mandatory?.[0] ?? 'not set'}`,
		` */`,
		`export const ${typeName(
			ObjectID[0] ?? '',
			Name[0] ?? '',
		)} = Type.Object({${object}})`,
	].join(os.EOL)

	return `${importTypeBox}\n${typeboxDefinition}\nexport const objectURN = '${objectURN}';`
}
