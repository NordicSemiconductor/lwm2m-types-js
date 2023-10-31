import {
	ConnectivityMonitoring_4_urn,
	Device_3_urn,
	ECID_SignalMeasurementInformation_10256_urn,
	LwM2MServer_1_urn,
	Temperature_3303_urn,
} from '../../types/LwM2M.js'
import { getURN } from './getURN.js'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('getURN', () => {
	void it('Should return the object URN given the object id', async () => {
		assert.equal(await getURN('3'), Device_3_urn)
		assert.equal(
			await getURN('10256'),
			ECID_SignalMeasurementInformation_10256_urn,
		)
		assert.equal(await getURN('3303'), Temperature_3303_urn)
		assert.equal(await getURN('4'), ConnectivityMonitoring_4_urn)
		assert.equal(await getURN('1'), LwM2MServer_1_urn)
	})

	void it('Should return undefined if object is not found by the given id', async () => {
		assert.equal(await getURN('40404'), undefined)
		assert.equal(await getURN('-1'), undefined)
	})
})
