import { parseURN } from './parseURN'

describe('parseURN()', () => {
	it.each([
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
	])(
		'should obtain ObjectID, ObjectVersion and LWM2MVersion from created URN: %s',
		(value, expected) => expect(parseURN(value)).toMatchObject(expected),
	)
})
