import S, { type JSONSchema } from 'fluent-json-schema'
import { lwm2mDefinitions } from '../lwm2m/lwm2mDefinitions'
import { createJsonSchema } from './createJsonSchema'

/**
 * Create the LWM2M JSON Schema document
 */
export const createLwm2mJsonSchemaDocument = async (): Promise<
	Record<string, any>
> => {
	let lwm2mDocument = S.object()
		.id(
			'https://github.com/NordicSemiconductor/lwm2m-types-js/blob/saga/LwM2MDocument.schema.json',
		)
		.title('LwM2M JSON Schema')
		.description('JSON schema for expressing LwM2M resources as JSON')

	for (const { jsonSchema, id } of await Promise.all(
		(await lwm2mDefinitions()).map(createJsonSchema),
	)) {
		lwm2mDocument = lwm2mDocument.prop(id, jsonSchema as JSONSchema)
	}

	return lwm2mDocument.valueOf()
}
