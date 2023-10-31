import { parseURN } from './parseURN.js'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
void describe('parseURN()', () => {
	for (const [value, expected] of [
		['3414', { ObjectID: '3414', ObjectVersion: '1.0', LWM2MVersion: '1.0' }],
		['10335', { ObjectID: '10335', ObjectVersion: '1.0', LWM2MVersion: '1.0' }],
		[
			'10:1.1@1.1',
			{ ObjectID: '10', ObjectVersion: '1.1', LWM2MVersion: '1.1' },
		],
		[
			'10260:2.0',
			{ ObjectID: '10260', ObjectVersion: '2.0', LWM2MVersion: '1.0' },
		],
		['24@1.2', { ObjectID: '24', ObjectVersion: '1.0', LWM2MVersion: '1.2' }],
	] as [string, ReturnType<typeof parseURN>][]) {
		void it(`should obtain ObjectID, ObjectVersion and LWM2MVersion from created URN: ${value}`, () => {
			assert.deepEqual(parseURN(value), expected)
		})
	}
})
