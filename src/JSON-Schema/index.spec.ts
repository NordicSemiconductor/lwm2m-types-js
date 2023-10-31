import { createLwm2mJsonSchemaDocument } from './createLwm2mJsonSchemaDocument.js'
import { describe, it } from 'node:test'
import { check, objectMatching } from 'tsmatchers'

void describe('lwM2MDefinitionToJSONSchema()', () => {
	void it('should generate the JSON schema document of LwM2M', async () => {
		const result = await createLwm2mJsonSchemaDocument()
		const expectedSchema = {
			type: 'object',
			properties: {
				'1:1.2@1.2': {
					type: 'array',
					minItems: 1,
					items: {
						type: 'object',
						properties: {
							'0': {
								type: 'integer',
							},
							'1': {
								type: 'integer',
							},
							'2': {
								type: 'integer',
							},
							'3': {
								type: 'integer',
							},
							'5': {
								type: 'integer',
							},
							'6': {
								type: 'integer',
							},
							'7': {
								type: 'string',
							},
							'23': {
								type: 'integer',
							},
						},
						required: ['0', '1', '6', '7'],
					},
				},
				'5:1.1@1.1': {
					type: 'object',
					properties: {
						'0': {
							type: 'string',
						},
						'1': {
							type: 'string',
						},
						'3': {
							type: 'integer',
						},
						'5': {
							type: 'integer',
						},
						'9': {
							type: 'integer',
						},
					},
					required: ['0', '1', '3', '5', '9'],
				},
			},
		}

		check(result).is(objectMatching(expectedSchema))
	})
})
