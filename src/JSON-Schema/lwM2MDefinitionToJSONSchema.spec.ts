import { readFile } from 'fs/promises'
import path from 'node:path'
import { Parser } from 'xml2js'
import type { LwM2MObjectDefinition } from '../lwm2m/LwM2MObjectDefinition'
import { LwM2MJSONfromXML2js } from '../xml2js/LwM2MJSONfromXML2js'
import { lwM2MDefinitionToJSONSchema } from './lwM2MDefinitionToJSONSchema'
const parser = new Parser({ attrkey: 'ATTR' })

const loadDefinition = async (id: number): Promise<LwM2MObjectDefinition> => {
	const sourceFile = path.join(process.cwd(), 'lwm2m-registry', `${id}.xml`)
	const xml = await readFile(sourceFile, 'utf-8')
	const xmlAsJSON = await parser.parseStringPromise(xml)
	return LwM2MJSONfromXML2js(xmlAsJSON)
}

describe('lwM2MDefinitionToJSONSchema()', () => {
	it('should convert a LwM2M definition to a JSON schema', async () => {
		const lwm2mDefinition = await loadDefinition(3427)
		const expectedSchema = {
			type: 'array',
			title: 'Pressure monitoring sensor',
			description: [
				'The uCIFI water pressure monitoring sensor measures water pressure and help identify water leaks in water distribution pipelines.',
				'LWM2MVersion: 1.0',
				'ObjectVersion: 1.0',
				'MultipleInstances: true',
				'Mandatory: false',
			].join(' '),
			items: {
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
						description:
							'Set to True if a water leak is detected by the sensor.',
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
			},
			// Empty arrays should not be allowed
			minItems: 1,
		} as const

		expect(lwM2MDefinitionToJSONSchema(lwm2mDefinition)).toMatchObject(
			expectedSchema,
		)
	})

	it('should implement Objlnk', async () => {
		const lwm2mDefinition = await loadDefinition(508)

		const expectedSchema = {
			properties: {
				'4': {
					title: 'nuSIM Profile',
					description:
						'Points to an instance of the nuSIM profile object which is to be loaded by executing Load Profile, see Resource 5.',
					type: 'string',
					pattern: '^dd:dd$',
				},
			},
		} as const

		expect(
			lwM2MDefinitionToJSONSchema({
				...lwm2mDefinition,
				Resources: {
					'4': lwm2mDefinition.Resources[4] as any,
				},
			}),
		).toMatchObject(expectedSchema)
	})

	it('should implement String', async () => {
		const lwm2mDefinition = await loadDefinition(5)
		const description = `URI from where the device can download the firmware package by an alternative mechanism. As soon the device has received the Package URI it performs the download at the next practical opportunity. \r\nThe URI format is defined in RFC 3986. For example, coaps://example.org/firmware is a syntactically valid URI. The URI scheme determines the protocol to be used. For CoAP this endpoint MAY be a LwM2M Server but does not necessarily need to be. A CoAP server implementing block-wise transfer is sufficient as a server hosting a firmware repository and the expectation is that this server merely serves as a separate file server making firmware images available to LwM2M Clients.`

		const expectedSchema = {
			properties: {
				'1': {
					title: 'Package URI',
					description: description,
					type: 'string',
					minLength: 0,
					maxLength: 255,
				},
			},
		} as const

		expect(
			lwM2MDefinitionToJSONSchema({
				...lwm2mDefinition,
				Resources: {
					'1': lwm2mDefinition.Resources[1] as any,
				},
			}),
		).toMatchObject(expectedSchema)
	})

	it('should implement Time', async () => {
		const lwm2mDefinition = await loadDefinition(3430)

		const expectedSchema = {
			properties: {
				'0': {
					title: 'Fix timestamp',
					description:
						'Timestamp of when the location measurement was performed. Unix Time. A signed integer representing the number of seconds since Jan 1 st, 1970 in the UTC time zone. Units: s.',
					type: 'integer',
					minimum: 1000000000,
				},
			},
		} as const

		expect(
			lwM2MDefinitionToJSONSchema({
				...lwm2mDefinition,
				Resources: {
					'0': lwm2mDefinition.Resources[0] as any,
				},
			}),
		).toMatchObject(expectedSchema)
	})

	it('should implement Opaque', async () => {
		const lwm2mDefinition = await loadDefinition(508)

		const expectedSchema = {
			properties: {
				'2': {
					title: 'nuSIM Capabilities',
					description:
						'Contains the supported nuSIM specification version and optional capabilities of the nuSIM.',
					type: 'string',
				},
			},
		} as const

		expect(
			lwM2MDefinitionToJSONSchema({
				...lwm2mDefinition,
				Resources: {
					'2': lwm2mDefinition.Resources[2] as any,
				},
			}),
		).toMatchObject(expectedSchema)
	})

	it('should implement Unsigned Integer', async () => {
		const lwm2mDefinition = await loadDefinition(3391)

		const expectedSchema = {
			items: {
				properties: {
					'902': {
						title: 'Recall Scene',
						description:
							'When written, the scene with the given ID is recalled.',
						type: 'integer',
						minimum: 0,
						maximum: 65535,
					},
				},
			},
		} as const

		expect(
			lwM2MDefinitionToJSONSchema({
				...lwm2mDefinition,
				Resources: {
					'902': lwm2mDefinition.Resources[902] as any,
				},
			}),
		).toMatchObject(expectedSchema)
	})

	it('should implement Core Link', async () => {
		const lwm2mDefinition = await loadDefinition(18831)
		const expectedSchema = {
			items: {
				properties: {
					'0': {
						title: 'Source',
						description:
							'The source of the data to publish (e.g. </sensors/temp>, or </3303/0/5700>; </3336/0>). If this Resource is empty, the published data are implementation dependent.',
						type: 'string',
						pattern: '^</[^>]+>(;[^=]+="[^"]+")*$',
					},
				},
			},
		} as const

		expect(
			lwM2MDefinitionToJSONSchema({
				...lwm2mDefinition,
				Resources: {
					'0': lwm2mDefinition.Resources[0] as any,
				},
			}),
		).toMatchObject(expectedSchema)
	})

	it('should implement Mandatory', async () => {
		const lwm2mDefinition = await loadDefinition(12)
		const expectedSchema = {
			required: ['0', '1', '3', '4', '5', '8', '9', '14', '15'],
		} as const
		const result = lwM2MDefinitionToJSONSchema(lwm2mDefinition).items.required
		expect(result).toEqual(expectedSchema.required)
	})

	it('should implement MultipleInstances on the property level', async () => {
		const lwm2mDefinition = await loadDefinition(12)
		const result = lwM2MDefinitionToJSONSchema(lwm2mDefinition)
		const expected = {
			type: 'array',
			title: 'Supported Channels',
			description: 'Array of supported radio channels.',
			items: {
				type: 'integer',
			},
			// Empty arrays should not be allowed
			minItems: 1,
		}

		expect(result.items.properties['11']).toMatchObject(expected)
	})

	it('should implement MultipleIntances=Single on the object level', async () => {
		const lwm2mDefinition = await loadDefinition(6)
		const expectedSchema = {
			type: 'object',
			title: 'Location',
			description: [
				'This LwM2M Object provides a range of location telemetry related information which can be queried by the LwM2M Server.',
				'LWM2MVersion: 1.0',
				'ObjectVersion: 1.0',
				'MultipleInstances: false',
				'Mandatory: false',
			].join(' '),
			properties: {
				'0': {
					title: 'Latitude',
					description:
						'The decimal notation of latitude, e.g. -43.5723 [World Geodetic System 1984]. Units: lat.',
					type: 'number',
				},
				// ... others properties
			},
			required: ['0', '1', '5'],
			// Empty arrays should not be allowed
		} as const
		const result = lwM2MDefinitionToJSONSchema(lwm2mDefinition)
		expect(result).toMatchObject(expectedSchema)
	})
})
