import { createURN } from './createURN.js'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('createURN()', () => {
	void it('should create a fully qualified URN', () =>
		assert.equal(
			createURN({
				ObjectID: 42,
				ObjectVersion: '1.1',
				LWM2MVersion: '1.2',
			}),
			`42:1.1@1.2`,
		))
	void it('should omit the LwM2M version if it is 1.0', () =>
		assert.equal(
			createURN({
				ObjectID: 42,
				ObjectVersion: '1.1',
				LWM2MVersion: '1.0',
			}),
			`42:1.1`,
		))
	void it('should omit the object version if it is 1.0', () =>
		assert.equal(
			createURN({
				ObjectID: 42,
				ObjectVersion: '1.0',
				LWM2MVersion: '1.2',
			}),
			`42@1.2`,
		))
	void it('should omit the object version and the LwM2M version if both are 1.0', () =>
		assert.equal(
			createURN({
				ObjectID: 42,
				ObjectVersion: '1.0',
				LWM2MVersion: '1.0',
			}),
			`42`,
		))
})
