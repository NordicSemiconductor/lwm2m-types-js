import { LwM2MType } from '../lwm2m/LwM2MObjectDefinition.js'
import { convertResources } from './convertResources.js'
import type { ObjectDef } from './LwM2MJSONfromXML2js.js'

const input: (typeof ObjectDef)['Resources'] = [
	{
		Item: [
			{
				ATTR: {
					ID: '0',
				},
				Name: ['Short Server ID'],
				Operations: ['R'],
				MultipleInstances: ['Single'],
				Mandatory: ['Mandatory'],
				Type: ['Integer'],
				RangeEnumeration: ['1..65534'],
				Units: [''],
				Description: ['Used as link to associate server Object Instance.'],
			},
			{
				ATTR: {
					ID: '2',
				},
				Name: ['Default Minimum Period'],
				Operations: ['RW'],
				MultipleInstances: ['Single'],
				Mandatory: ['Optional'],
				Type: ['Integer'],
				RangeEnumeration: [''],
				Units: ['s'],
				Description: [
					'The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation.\r\nIf this Resource doesn’t exist, the default value is 0.',
				],
			},
		],
	},
]

describe('convertResources()', () => {
	it('Shopuld convert resources', () => {
		const expected = {
			'0': {
				Name: 'Short Server ID',
				Operations: 'R',
				MultipleInstances: false,
				Mandatory: true,
				Type: LwM2MType.Integer,
				RangeEnumeration: { min: 1, max: 65534 },
				Description: 'Used as link to associate server Object Instance.',
			},
			'2': {
				Name: 'Default Minimum Period',
				Operations: 'RW',
				MultipleInstances: false,
				Mandatory: false,
				Type: LwM2MType.Integer,
				Description:
					'The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation.\r\nIf this Resource doesn’t exist, the default value is 0.',
			},
		}
		expect(convertResources(input)).toMatchObject(expected)
	})

	it('should remove invalid RangeEnumeration definitions', () => {
		const inputWithTextRangeEnumeration: (typeof ObjectDef)['Resources'] = [
			{
				Item: [
					{
						...input[0].Item[0],
						RangeEnumeration: [
							'The possible values are those listed in the LwM2M Core Specification',
						],
					},
				],
			},
		]
		const result = convertResources(inputWithTextRangeEnumeration)
		expect(result[0]).not.toHaveProperty('RangeEnumeration')
	})
})
