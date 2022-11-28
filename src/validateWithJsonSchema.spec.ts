import { validateWithJSONSchema } from './validateWithJsonSchema'

describe('validateWithJSONSchema', () => {
	it('Should check input is valid', () => {
		const maybeValid = validateWithJSONSchema<number>({
			type: 'number',
		})(42)
		if ('value' in maybeValid) {
			expect(maybeValid.value).toEqual(42)
		} else {
			throw new Error(`It should be valid!`)
		}
	})
	it("Should check as 'invalid' values less than 0", (done) => {
		const maybeValid = validateWithJSONSchema<number>({
			type: 'number',
			minimum: 0,
		})(-42)
		if ('errors' in maybeValid) {
			done()
		} else {
			throw new Error(`It should not be valid!`)
		}
	})
})
