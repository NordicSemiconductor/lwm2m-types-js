import type { Resources } from 'src/lwm2m/LwM2MObjectDefinition'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('createLwM2MObjectType', () => {
	void it('should create object type for single instance no mandatory object', () => {
		const expected = {
			Name: 'Connectivity Monitoring',
			Description1:
				'This LwM2M Object enables monitoring of parameters related to network connectivity.\r\n' +
				'In this general connectivity Object, the Resources are limited to the most general cases common to most network bearers. It is recommended to read the description, which refers to relevant standard development organizations (e.g. 3GPP, IEEE).\r\n' +
				'The goal of the Connectivity Monitoring Object is to carry information reflecting the more up to date values of the current connection for monitoring purposes. Resources such as Link Quality, Radio Signal Strength, Cell ID are retrieved during connected mode at least for cellular networks.',
			ObjectID: '4',
			ObjectURN: 'urn:oma:lwm2m:oma:4:1.3',
			LWM2MVersion: '1.1',
			ObjectVersion: '1.3',
			MultipleInstances: false,
			Mandatory: false,
			Resources: {
				'2': {
					Name: 'Radio Signal Strength',
					Operations: 'R',
					Type: 'Integer',
					Description:
						'Indicates the average value of the received signal strength indication used in the\r\n' +
						'current network bearer (as indicated by Resource 0 of this Object). The value is expressed in dBm. For the following network bearers the signal strength parameters indicated below are represented by this resource:\r\n' +
						'GSM:    RSSI\r\n' +
						'UMTS:   RSCP\r\n' +
						'LTE:    RSRP\r\n' +
						'NB-IoT: NRSRP\r\n' +
						'For more details on Network Measurement Report, refer to the appropriate Cellular or Wireless Network standards, (e.g. for LTE Cellular Network\r\n' +
						'refer to 3GPP TS 36.133 specification).',
					MultipleInstances: false,
					Mandatory: true,
					Units: 'dBm',
				},
				'3': {
					Name: 'Link Quality',
					Operations: 'R',
					Type: 'Integer',
					Description:
						'This contains received link quality  e.g. LQI for IEEE 802.15.4 (range 0...255), RxQual Downlink for GSM (range 0...7, refer to [3GPP 44.018] for more details on Network Measurement Report encoding), RSRQ for LTE, (refer to [3GPP 36.214]), NRSRQ for NB-IoT (refer to [3GPP 36.214]).',
					MultipleInstances: false,
					Mandatory: false,
				},
				'4': {
					Name: 'IP Addresses',
					Operations: 'R',
					Type: 'String',
					Description:
						'The IP addresses assigned to the connectivity interface. (e.g. IPv4, IPv6, etc.)',
					MultipleInstances: true,
					Mandatory: true,
				},
				'5': {
					Name: 'Router IP Addresses',
					Operations: 'R',
					Type: 'String',
					Description:
						'The IP address of the next-hop IP router, on each of the interfaces specified in resource 4 (IP Addresses).\r\n' +
						"Note: This IP Address doesn't indicate the Server IP address.",
					MultipleInstances: true,
					Mandatory: false,
				},
			} as Resources,
		}

		assert.notEqual(expected, undefined)
	})
})
