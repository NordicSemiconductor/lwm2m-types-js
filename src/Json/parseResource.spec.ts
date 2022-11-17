import { parseResource } from './parseResource'

const defaults = {
	ATTR: { ID: '0' },
	Name: ['Short Server ID'],
	Operations: ['R'],
	Description: ['Used as link to associate server Object Instance.'],
}

describe('parseResource', () => {
	it.each([
		[
			{
				RangeEnumeration: ['1..65534'],
				Mandatory: ['Mandatory'],
				MultipleInstances: ['Multiple'],
				Type: ['Integer'],
				Units: ['s'],
			},
			{
				rangeEnumeration: '1..65534',
				mandatoryStatus: 'Mandatory',
				multipleInstances: 'Multiple',
				type: 'Integer',
				units: 's',
			},
		],
		[
			{
				RangeEnumeration: ['1,655,34'],
				Mandatory: ['Optional'],
				MultipleInstances: ['Single'],
				Type: ['String'],
				Units: [''],
			},
			{
				rangeEnumeration: '1,655,34',
				mandatoryStatus: 'Optional',
				multipleInstances: 'Single',
				type: 'String',
			},
		],
		[
			{
				RangeEnumeration: [''],
				Mandatory: ['Optional'],
				MultipleInstances: ['Multiple'],
				Type: ['String'],
				Units: [''],
			},
			{
				rangeEnumeration: undefined,
				mandatoryStatus: 'Optional',
				multipleInstances: 'Multiple',
				type: 'String',
			},
		],
	])('should parse %j into %j', (input, expected) => {
		const parsed = parseResource({
			...defaults,
			...input,
		})
		expect(parsed).toMatchObject({
			name: 'Short Server ID',
			type: expected.type,
			description: 'Used as link to associate server Object Instance.',
			mandatoryStatus: expected.mandatoryStatus,
			multipleInstances: expected.multipleInstances,
			id: '0',
		})
		if ('units' in expected !== undefined)
			expect(parsed.units).toEqual((expected as Record<string, any>).units)
		if ('rangeEnumeration' in expected !== undefined)
			expect(parsed.rangeEnumeration).toEqual(
				(expected as Record<string, any>).rangeEnumeration,
			)
	})
})
