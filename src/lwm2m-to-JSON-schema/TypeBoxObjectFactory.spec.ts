import { TypeBoxObjectFactory } from './TypeBoxObjectFactory'
import {
	TypeBoxIntegerObjectPropertyFactory,
	TypeBoxNumberObjectPropertyFactory,
} from './TypeBoxObjectPropertyFactory'

describe('TypeBoxObjectFactory()', () => {
	it('can be instantiated', () =>
		expect(new TypeBoxObjectFactory()).toBeInstanceOf(TypeBoxObjectFactory))
	test('that comments can be added', () => {
		const f = new TypeBoxObjectFactory()
		f.addToDescription('foo')
		f.addToDescription('')
		f.addToDescription('bar')

		const schema = f.toSchema()
		expect(schema.description).toEqual(['foo', '', 'bar'].join(' '))
	})

	test('that title can be set', () => {
		const f = new TypeBoxObjectFactory()
		f.setTitle('Some Title')

		const schema = f.toSchema()
		expect(schema.title).toEqual('Some Title')
	})

	describe('defining properties', () => {
		test('Number', () => {
			const f = new TypeBoxObjectFactory()
			f.addToDescription(
				'The uCIFI water pressure monitoring sensor measures water pressure and help identify water leaks in water distribution pipelines.',
			)
			const p1 = new TypeBoxNumberObjectPropertyFactory()
				.setTitle('Pressure')
				.addToDescription(
					'Last or current pressure value measured by the sensor. Units: Pa.',
				)
				.require()

			const p3 = new TypeBoxIntegerObjectPropertyFactory()
				.setTitle('Leak detected')
				.addToDescription(
					'Set to True if a water leak is detected by the sensor.',
				)
				.setRange(0, 1)
			f.addProperty('1', p1.toProperty())
			f.addProperty('3', p3.toProperty())
			const schema = f.toSchema()
			expect(schema).toMatchObject({
				description:
					'The uCIFI water pressure monitoring sensor measures water pressure and help identify water leaks in water distribution pipelines.',
				type: 'object',
				properties: {
					'1': {
						title: 'Pressure',
						description:
							'Last or current pressure value measured by the sensor. Units: Pa.',
						type: 'number',
					},
					'3': {
						title: 'Leak detected',
						description:
							'Set to True if a water leak is detected by the sensor.',
						minimum: 0,
						maximum: 1,
						type: 'integer',
					},
				},
				required: ['1'],
			})
		})
	})
})
