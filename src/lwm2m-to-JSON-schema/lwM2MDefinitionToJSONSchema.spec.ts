import { readFile } from 'fs/promises'
import path from 'node:path'
import { Parser } from 'xml2js'
import { LwM2MJSONfromXML2js } from '../xml2js-to-plain/LwM2MJSONfromXML2js'
import { lwM2MDefinitionToJSONSchema } from './lwM2MDefinitionToJSONSchema'

describe('lwM2MDefinitionToJSONSchema()', () => {
	it('should convert a LwM2M definition to a JSON schema', async () => {
		const parser = new Parser({ attrkey: 'ATTR' })
		const sourceFile = path.join(process.cwd(), 'lwm2m-registry', '3427.xml')
		const xml = await readFile(sourceFile, 'utf-8')
		const xmlAsJSON = await parser.parseStringPromise(xml)
		const lwm2mDefinition = LwM2MJSONfromXML2js(xmlAsJSON)

		const expectedSchema = {
			title: '3427: Pressure monitoring sensor',
			description: [
				'The uCIFI water pressure monitoring sensor measures water pressure and help identify water leaks in water distribution pipelines.',
				'LWM2MVersion: 1.0',
				'ObjectVersion: 1.0',
				'MultipleInstances: true',
				'Mandatory: false',
			].join(' '),
			type: 'object',
			properties: {
				'1': {
					title: 'Pressure',
					description:
						'Last or current pressure value measured by the sensor. Units: Pa.',
					type: 'number',
				},
				'2': {
					title: 'Sampling period',
					description: 'Number of seconds between two measurement. Units: s.',
					type: 'integer',
				},
				'3': {
					title: 'Leak detected',
					description: 'Set to True if a water leak is detected by the sensor.',
					minimum: 0,
					maximum: 1,
					type: 'integer',
				},
				'4': {
					title: 'Hammer effect detected',
					description:
						'Set to True if hammer effect is detected in the water pipeline.',
					minimum: 0,
					maximum: 1,
					type: 'integer',
				},
				'5': {
					title: 'Minimum measured pressure value',
					description:
						'Minimum value measured by the sensor since power ON or reset. Units: Pa.',
					type: 'number',
				},
				'6': {
					title: 'Maximum measured pressure value',
					description:
						'Maximum value measured by the sensor since power ON or reset. Units: Pa.',
					type: 'number',
				},
				'7': {
					title: 'Minimum range pressure value',
					description:
						'Minimum value that can be measured by the sensor. Units: Pa.',
					type: 'number',
				},
				'8': {
					title: 'Maximum range pressure value',
					description:
						'Maximum value that can be measured by the sensor. Units: Pa.',
					type: 'number',
				},
			},
			required: ['1'],
		} as const

		const schema = lwM2MDefinitionToJSONSchema(lwm2mDefinition)

		expect(schema).toMatchObject(expectedSchema)
	})
})
