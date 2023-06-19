import {
	ConnectivityMonitoring_4_urn,
	Device_3_urn,
	ECID_SignalMeasurementInformation_10256_urn,
	LwM2MServer_1_urn,
	Temperature_3303_urn,
} from '../../types/LwM2M.js'
import { getURN } from './getURN.js'

describe('getURN', () => {
	it('Should return the object URN given the object id', async () => {
		expect(await getURN('3')).toBe(Device_3_urn)
		expect(await getURN('10256')).toBe(
			ECID_SignalMeasurementInformation_10256_urn,
		)
		expect(await getURN('3303')).toBe(Temperature_3303_urn)
		expect(await getURN('4')).toBe(ConnectivityMonitoring_4_urn)
		expect(await getURN('1')).toBe(LwM2MServer_1_urn)
	})

	it('Should return undefined if object is not found by the given id', async () => {
		expect(await getURN('40404')).toBe(undefined)
		expect(await getURN('-1')).toBe(undefined)
	})
})
