import S, { JSONSchema } from 'fluent-json-schema'
import {
	LwM2MObjectDefinition,
	LwM2MType,
} from '../xml2js-to-plain/LwM2MJSONfromXML2js'

/**
 * Converts the given LwM2M object definition into a JSON schema
 */
export const lwM2MDefinitionToJSONSchema = ({
	ObjectID,
	Name,
	LWM2MVersion,
	ObjectVersion,
	MultipleInstances,
	Mandatory,
	Description1,
	Resources,
}: LwM2MObjectDefinition): Record<string, any> => {
	let lwm2mObjectSchema = S.object()
		.id(
			`https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/${ObjectID}.xml`,
		)
		.title(`${ObjectID}: ${Name}`)
		.description(
			[
				Description1,
				`LWM2MVersion: ${LWM2MVersion}`,
				`ObjectVersion: ${ObjectVersion}`,
				`MultipleInstances: ${MultipleInstances}`,
				`Mandatory: ${Mandatory}`,
			].join(' '),
		)

	for (const [
		ResourceID,
		{ Name, Type, RangeEnumeration, Description, Units, Mandatory },
	] of Object.entries(Resources)) {
		let prop: JSONSchema | undefined = undefined
		const description = [Description]
		switch (Type) {
			case LwM2MType.Float:
				prop = S.number()
				break
			case LwM2MType.Integer:
			case LwM2MType.UnsignedInteger:
				prop = S.integer()
				if (RangeEnumeration !== undefined) {
					if ('min' in RangeEnumeration) {
						prop = prop.minimum(RangeEnumeration.min)
						prop = prop.maximum(RangeEnumeration.max)
					}
					// FIXME: Implement integer enum
				}
				break
			case LwM2MType.Boolean:
				// In LwM2M Boolean is an 8 bit unsigned integer with the value 0 for False and the value 1 for True.
				prop = S.integer().minimum(0).maximum(1)
				break
			case LwM2MType.Objlnk:
				prop = S.string().pattern('^dd:dd$')
				break
			case LwM2MType.String:
			case LwM2MType.Opaque:
				prop = S.string()
				if (RangeEnumeration !== undefined) {
					if ('min' in RangeEnumeration) {
						prop = prop.minLength(RangeEnumeration.min)
						prop = prop.maxLength(RangeEnumeration.max)
					}
				}
				break
			case LwM2MType.Time:
				prop = S.integer().minimum(1000000000)
				description.push(
					'Unix Time. A signed integer representing the number of seconds since Jan 1 st, 1970 in the UTC time zone.',
				)
				break
			case LwM2MType.Corelnk:
				prop = S.string()
				break
			default:
				throw new Error(
					`Unknown type: '${Type}' on Object ${ObjectID}, Resource ${ResourceID}!`,
				)
		}
		if (Mandatory) {
			prop = prop.required()
		}
		prop = prop.title(Name)

		if (Units !== undefined) {
			description.push(`Units: ${Units}.`)
		}
		prop = prop.description(description.join(' '))
		lwm2mObjectSchema = lwm2mObjectSchema.prop(ResourceID, prop)
	}

	return lwm2mObjectSchema.valueOf()
}
