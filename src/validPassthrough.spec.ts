import { validPassthrough } from './validPassthrough'

describe('validPassthrough()', () => {
	it('should drop invalid parts of the document', () =>
		expect(
			validPassthrough({
				'3303:1.1': [
					{
						'5518': 1665149633,
						'5601': 23.51,
						'5602': 23.51,
						'5603': -40,
						'5604': 85,
						'5700': 24.57,
						'5701': 'Celsius degrees',
					},
				],
				'666': {
					'1': 'invalid',
				},
				foo: 'bar',
			} as any),
		).toMatchObject({
			valid: {
				'3303:1.1': [
					{
						'5518': 1665149633,
						'5601': 23.51,
						'5602': 23.51,
						'5603': -40,
						'5604': 85,
						'5700': 24.57,
						'5701': 'Celsius degrees',
					},
				],
			},
			invalid: {
				'666': {
					'1': 'invalid',
				},
				foo: 'bar',
			},
		}))
})
