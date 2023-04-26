import { validateWithJSONSchema } from './validateWithJsonSchema.js'

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

describe('unixTimestampKeyword', () => {
	it.each([[0], [9999999999], [1476186613]])(
		'Should check Unix Time: %s',
		(value) => {
			const schema = {
				type: 'integer',
				unixTimestamp: true,
				title: 'Timestamp',
			}
			const maybeValid = validateWithJSONSchema<number>(schema)(value)

			if ('value' in maybeValid) {
				expect(maybeValid.value).toEqual(value)
			} else {
				throw new Error(`It should be valid!`)
			}
		},
	)

	it.each([[-1], [10000000000]])(
		'should check when time is out of the allowed range: %s',
		(value: number) => {
			const schema = {
				type: 'integer',
				unixTimestamp: true,
				title: 'Timestamp',
			}

			const maybeValid = validateWithJSONSchema<number>(schema)(value)

			if ('errors' in maybeValid) {
				expect(true)
			} else {
				throw new Error(`It should not be valid!`)
			}
		},
	)
})
