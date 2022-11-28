import { cleanWhitespace } from './cleanWhitespace'

describe('cleanWhitespace()', () => {
	it('should clean whitespace', () =>
		expect(
			cleanWhitespace('2: 3GPP PS GSM (GPRS) preferred (including EC-GSM-IoT)'),
		).toEqual('2: 3GPP PS GSM (GPRS) preferred (including EC-GSM-IoT)'))
})
