import type { LwM2MObjectDefinition } from '../lwm2m/LwM2MObjectDefinition'
import { createURN } from '../type-generation/createURN'
import { lwM2MDefinitionToJSONSchema } from './lwM2MDefinitionToJSONSchema'

/**
 * Given the source of a XML file, create its JSON Schema definition and its URN
 */
export const createJsonSchema = async (
	lwm2mDefinition: LwM2MObjectDefinition,
): Promise<{
	jsonSchema: Record<string, any>
	id: string
}> => {
	const jsonSchema = lwM2MDefinitionToJSONSchema(lwm2mDefinition)
	const id = createURN({
		ObjectID: lwm2mDefinition.ObjectID ?? '',
		ObjectVersion: lwm2mDefinition.ObjectVersion,
		LWM2MVersion: lwm2mDefinition.LWM2MVersion ?? '1.0', // default
	})
	return { jsonSchema, id }
}
