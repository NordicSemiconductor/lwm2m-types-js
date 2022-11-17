import { filterOutBlankValues } from './filterOutBlankValues'

describe('filterOutBlankValues()', () => {
	it('should remove blank values from objects', () => {
		const filtered = filterOutBlankValues({ foo: 'bar', blank: '' })
		expect(filtered).not.toHaveProperty('blank')
		expect(filtered).toHaveProperty('foo')
		expect((filtered as Record<string, any>).foo).toEqual('bar')
	})
	it('should also work for objects with arrays', () => {
		const filtered = filterOutBlankValues({ foo: ['bar'], blank: [''] })
		expect(filtered).not.toHaveProperty('blank')
		expect(filtered).toHaveProperty('foo')
		expect((filtered as Record<string, any>).foo).toEqual(['bar'])
	})

	it('should remove arrays with blank strings', () => {
		const input = {
			ATTR: { ID: '0' },
			Name: ['Short Server ID'],
			RangeEnumeration: [''],
		}
		const expected = {
			ATTR: { ID: '0' },
			Name: ['Short Server ID'],
		}
		const sanitized = filterOutBlankValues(input)
		expect(sanitized).toMatchObject(expected)
		expect(sanitized).not.toHaveProperty('RangeEnumeration')
	})
})
