import { TSchema } from '@sinclair/typebox'
import {
	LwM2MObjectDefinition,
	LwM2MType,
} from '../xml2js-to-plain/LwM2MJSONfromXML2js'
import { TypeBoxObjectFactory } from './TypeBoxObjectFactory'
import {
	TypeBoxBooleanObjectPropertyFactory,
	TypeBoxIntegerObjectPropertyFactory,
	TypeBoxNumberObjectPropertyFactory,
} from './TypeBoxObjectPropertyFactory'

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
}: LwM2MObjectDefinition): TSchema => {
	const typeBoxDefFactory = new TypeBoxObjectFactory()
	typeBoxDefFactory
		.setTitle(`${ObjectID}: ${Name}`)
		.addToDescription(Description1)
		.addToDescription(`LWM2MVersion: ${LWM2MVersion}`)
		.addToDescription(`ObjectVersion: ${ObjectVersion}`)
		.addToDescription(`MultipleInstances: ${MultipleInstances}`)
		.addToDescription(`Mandatory: ${Mandatory}`)

	for (const [
		ResourceID,
		{ Name, Type, RangeEnumeration, Description, Units, Mandatory },
	] of Object.entries(Resources)) {
		let propFactory:
			| TypeBoxNumberObjectPropertyFactory
			| TypeBoxBooleanObjectPropertyFactory
			| TypeBoxIntegerObjectPropertyFactory
		switch (Type) {
			case LwM2MType.Float:
			case LwM2MType.Integer:
				propFactory = new TypeBoxNumberObjectPropertyFactory()
				if (RangeEnumeration !== undefined) {
					if ('min' in RangeEnumeration) {
						;(propFactory as TypeBoxNumberObjectPropertyFactory).setRange(
							RangeEnumeration.min,
							RangeEnumeration.max,
						)
					}
					// FIXME: Implement integer enum
				}
				break
			case LwM2MType.Boolean:
				// In LwM2M Boolean is an 8 bit unsigned integer with the value 0 for False and the value 1 for True.
				propFactory = new TypeBoxIntegerObjectPropertyFactory()
				;(propFactory as TypeBoxIntegerObjectPropertyFactory).setRange(0, 1)
				break
			default:
				throw new Error(
					`Unknown type: '${Type}' on Object ${ObjectID}, Resource ${ResourceID}!`,
				)
		}
		if (Mandatory) {
			propFactory.require()
		}
		propFactory.setTitle(Name)
		propFactory.addToDescription(Description)
		if (Units !== undefined) {
			propFactory.addToDescription(`Units: ${Units}.`)
		}
		typeBoxDefFactory.addProperty(ResourceID, propFactory.toProperty())
	}

	return typeBoxDefFactory.toSchema()
}
