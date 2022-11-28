import { addIfNotBlank } from './addIfNotBlank'

describe('addIfNotBlank()', () => {
	it('Should add element to object if value is not undefined', () => {
		const object = { a: 'a' }
		const input = { b: 'b' }
		const expected = {
			a: 'a',
			b: 'b',
		}
		addIfNotBlank(object, input)
		expect(object).toMatchObject(expected)
	})

	it('Should not add element to object if value is undefined', () => {
		const object = { a: 'a' }
		const input = { b: undefined }
		const expected = {
			a: 'a',
		}
		addIfNotBlank(object, input)
		expect(object).toMatchObject(expected)
		expect(object).not.toHaveProperty('b')
	})

	it('Should not add element to object if value is blank', () => {
		const object = { a: 'a' }
		const input = { b: '' }
		const expected = {
			a: 'a',
		}
		addIfNotBlank(object, input)
		expect(object).toMatchObject(expected)
		expect(object).not.toHaveProperty('b')
	})
})
