import { tokenizeName } from './tokenizeName.js'

describe('tokenizeName', () => {
	it.each([
		['LwM2M Server', 'LwM2MServer'],
		// Dash -> underline
		['LTE-MTC Band Config', 'LTE_MTCBandConfig'],
		// Number at the Beginning, prefix with n
		['5GNR Connectivity', 'n5GNRConnectivity'],
		// Slash -> underline
		['On/Off Switch', 'On_OffSwitch'],
		// Dot -> underline
		['LwM2M v1.1 Test Object', 'LwM2Mv1_1TestObject'],
		// & -> and
		['AT&T Connectivity Extension', 'ATandTConnectivityExtension'],
		// Remove whitespace
		[' Server ', 'Server'],
	])(`should replace %s to %s`, (name, expected) =>
		expect(tokenizeName(name)).toEqual(expected),
	)
})
