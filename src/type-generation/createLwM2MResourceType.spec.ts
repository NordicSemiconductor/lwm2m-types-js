import {
	LwM2MType,
	Operations,
	type Resource,
} from '../lwm2m/LwM2MObjectDefinition.js'
import { createResourceType } from './createLwM2MResourceType.js'

describe('createLwM2MResourceType', () => {
	it.skip(`should create the type definition for an array`, () => {
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
			name: 'IPAdresses_4',
			type: Array<number>,
		}

		const result = createResourceType(resourceId, resource)
		expect(result.id).toBe(expected.id)
	})
})
