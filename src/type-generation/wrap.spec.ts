import { wrap } from './wrap'

describe('wrap()', () => {
	it('should wrap long lines', () =>
		expect(
			wrap(72)(
				'If this resource is defined, it contains the most recent TLS / DTLS alert message received from the LwM2M Server respective represented by the AlertDescription defined in Section 7.2 of RFC 5246. This resource set by the LwM2M Client may help the LwM2M Bootstrap-Server to determine the cause of TLS/DTLS connection failure with the respective LwM2M Server.',
			),
		).toEqual([
			'If this resource is defined, it contains the most recent TLS / DTLS alert',
			'message received from the LwM2M Server respective represented by the',
			'AlertDescription defined in Section 7.2 of RFC 5246. This resource set by',
			'the LwM2M Client may help the LwM2M Bootstrap-Server to determine the',
			'cause of TLS/DTLS connection failure with the respective LwM2M Server.',
		]))
})
