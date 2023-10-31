import { wrap } from './wrap.js'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('wrap()', () => {
	void it('should wrap long lines', () =>
		assert.deepEqual(
			wrap(72)(
				'If this resource is defined, it contains the most recent TLS / DTLS alert message received from the LwM2M Server respective represented by the AlertDescription defined in Section 7.2 of RFC 5246. This resource set by the LwM2M Client may help the LwM2M Bootstrap-Server to determine the cause of TLS/DTLS connection failure with the respective LwM2M Server.',
			),
			[
				'If this resource is defined, it contains the most recent TLS / DTLS alert',
				'message received from the LwM2M Server respective represented by the',
				'AlertDescription defined in Section 7.2 of RFC 5246. This resource set by',
				'the LwM2M Client may help the LwM2M Bootstrap-Server to determine the',
				'cause of TLS/DTLS connection failure with the respective LwM2M Server.',
			],
		))
})
