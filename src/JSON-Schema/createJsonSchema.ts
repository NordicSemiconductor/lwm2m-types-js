import type { LwM2MObjectDefinition } from '../lwm2m/LwM2MObjectDefinition.js'
import { createURN } from '../type-generation/createURN.js'
import { lwM2MDefinitionToJSONSchema } from './lwM2MDefinitionToJSONSchema.js'

/**
 * Given the source of a XML file, create its JSON Schema definition and its URN
 */
export const createJsonSchema = async (
	lwm2mDefinition: LwM2MObjectDefinition,
): Promise<{
	jsonSchema: Record<string, any>
	id: string
}> => {
	const { ObjectID, ObjectVersion, LWM2MVersion } = lwm2mDefinition
	const jsonSchema = lwM2MDefinitionToJSONSchema(lwm2mDefinition)
	const id = createURN({
		ObjectID: parseInt(ObjectID, 10),
		ObjectVersion,
		LWM2MVersion: LWM2MVersion ?? '1.0', // default
	})
	return { jsonSchema, id }
}
