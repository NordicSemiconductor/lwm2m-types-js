import {
	ConnectivityMonitoring_4_urn,
	Device_3_urn,
	ECID_SignalMeasurementInformation_10256_urn,
	LwM2MServer_1_urn,
	Temperature_3303_urn,
} from '../../types/LwM2M.js'
import { getUrn } from './getURN.js'

describe('getUrn', () => {
	it('Should return the object URN given the object id', async () => {
		expect(await getUrn('3')).toBe(Device_3_urn)
		expect(await getUrn('10256')).toBe(
			ECID_SignalMeasurementInformation_10256_urn,
		)
		expect(await getUrn('3303')).toBe(Temperature_3303_urn)
		expect(await getUrn('4')).toBe(ConnectivityMonitoring_4_urn)
		expect(await getUrn('1')).toBe(LwM2MServer_1_urn)
	})

	it('Should return undefined if object is not found by the given id', async () => {
		expect(await getUrn('40404')).toBe(undefined)
		expect(await getUrn('-1')).toBe(undefined)
	})
})
