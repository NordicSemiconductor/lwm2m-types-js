import { addIfNotBlank } from './addIfNotBlank.js'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
void describe('addIfNotBlank()', () => {
	void it('Should add element to object if value is not undefined', () => {
		const object = { a: 'a' }
		const input = { b: 'b' }
		const expected = {
			a: 'a',
			b: 'b',
		}
		addIfNotBlank(object, input)
		assert.deepEqual(object, expected)
	})

	void it('Should not add element to object if value is undefined', () => {
		const object = { a: 'a' }
		const input = { b: undefined }
		const expected = {
			a: 'a',
		}
		addIfNotBlank(object, input)
		assert.deepEqual(object, expected)
		assert.equal('b' in object, false)
	})

	void it('Should not add element to object if value is blank', () => {
		const object = { a: 'a' }
		const input = { b: '' }
		const expected = {
			a: 'a',
		}
		addIfNotBlank(object, input)
		assert.deepEqual(object, expected)
		assert.equal('b' in object, false)
	})
})
