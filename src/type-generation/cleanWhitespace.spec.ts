import { cleanWhitespace } from './cleanWhitespace.js'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('cleanWhitespace()', () => {
	void it('should clean whitespace', () =>
		assert.equal(
			cleanWhitespace('2: 3GPP PS GSM (GPRS) preferred (including EC-GSM-IoT)'),
			'2: 3GPP PS GSM (GPRS) preferred (including EC-GSM-IoT)',
		))
})
