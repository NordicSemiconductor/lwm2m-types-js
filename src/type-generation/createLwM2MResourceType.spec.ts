import type { Identifier } from 'typescript'
import {
	LwM2MType,
	Operations,
	type Resource,
} from '../lwm2m/LwM2MObjectDefinition.js'
import { createResourceType } from './createLwM2MResourceType.js'

describe('createLwM2MResourceType', () => {
	it(`should create array type definition for a resource`, () => {
		const resourceId = '4'
		const resource: Resource = {
			Name: 'IP Addresses',
			Operations: Operations.Read,
			MultipleInstances: true,
			Mandatory: false,
			Type: LwM2MType.String,
			Description:
				'![CDATA[The IP addresses assigned to the connectivity interface. (e.g. IPv4, IPv6, etc.)]]',
		}
		const expected = {
			id: '4',
			isOptional: false,
			name: 'IPAddresses_4',
			type: Array<number>,
		}

		const result = createResourceType(resourceId, resource)
		const type = (result.type.type as unknown as { typeName: Identifier })
			.typeName.escapedText
		expect(type).toBe('Array')
		expect(result.id).toBe(expected.id)
		expect(result.isOptional).toBe(expected.isOptional)
		expect(result.name).toBe(expected.name)
	})

	it(`should create number type definition for a resource`, () => {
		const resourceId = '3'
		const resource: Resource = {
			Name: 'Link Quality',
			Operations: Operations.Read,
			MultipleInstances: false,
			Mandatory: false,
			Type: LwM2MType.Integer,
			Description: '...',
		}
		const expected = {
			id: '3',
			isOptional: false,
			name: 'LinkQuality_3',
			type: Number,
		}

		const result = createResourceType(resourceId, resource)
		const type = (result.type.type as unknown as { typeName: Identifier })
			.typeName.escapedText
		expect(type).toBe('number')
		expect(result.id).toBe(expected.id)
		expect(result.isOptional).toBe(expected.isOptional)
		expect(result.name).toBe(expected.name)
	})
})
