import { validateWithJSONSchema } from './validateWithJsonSchema.js'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('validateWithJSONSchema', () => {
	void it('Should check input is valid', () => {
		const maybeValid = validateWithJSONSchema<number>({
			type: 'number',
		})(42)
		if ('value' in maybeValid) {
			assert.equal(maybeValid.value, 42)
		} else {
			throw new Error(`It should be valid!`)
		}
	})
	void it("Should check as 'invalid' values less than 0", () => {
		const maybeValid = validateWithJSONSchema<number>({
			type: 'number',
			minimum: 0,
		})(-42)
		assert.equal('errors' in maybeValid, true, `It should not be valid!`)
	})
})

void describe('unixTimestampKeyword', () => {
	for (const value of [0, 9999999999, 1476186613]) {
		void it(`should check Unix Time: ${value}`, () => {
			const schema = {
				type: 'integer',
				unixTimestamp: true,
				title: 'Timestamp',
			}
			const maybeValid = validateWithJSONSchema<number>(schema)(value)
			assert.equal(
				'value' in maybeValid && maybeValid.value,
				value,
				`It should be valid!`,
			)
		})
	}

	for (const value of [-1, 10000000000]) {
		void it(`should check when time is out of the allowed range: ${value}`, () => {
			const schema = {
				type: 'integer',
				unixTimestamp: true,
				title: 'Timestamp',
			}

			const maybeValid = validateWithJSONSchema<number>(schema)(value)
			assert.equal('errors' in maybeValid, true, `It should not be valid!`)
		})
	}
})
