import { createLwm2mJsonSchemaDocument } from './createLwm2mJsonSchemaDocument.js'
import { describe, it } from 'node:test'
import { check, objectMatching } from 'tsmatchers'

void describe('lwM2MDefinitionToJSONSchema()', () => {
	void it('should generate the JSON schema document of LwM2M', async () => {
		const result = await createLwm2mJsonSchemaDocument()
		const expectedSchema = {
			type: 'object',
			properties: {
				'1:1.2@1.2': {
					type: 'array',
					minItems: 1,
					title: 'LwM2M Server',
					description:
						'This LwM2M Objects provides the data related to a LwM2M Server. A Bootstrap-Server has no such an Object Instance associated to it. LWM2MVersion: 1.2 ObjectVersion: 1.2 MultipleInstances: true Mandatory: true',
					items: {
						type: 'object',
						$id: 'https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/1.xml',
						title: 'LwM2M Server',
						description:
							'This LwM2M Objects provides the data related to a LwM2M Server. A Bootstrap-Server has no such an Object Instance associated to it. LWM2MVersion: 1.2 ObjectVersion: 1.2 MultipleInstances: true Mandatory: true',
						additionalProperties: false,
						properties: {
							'0': {
								type: 'integer',
								minimum: 1,
								maximum: 65534,
								title: 'Short Server ID',
								description:
									'Used as link to associate server Object Instance.',
							},
							'1': {
								type: 'integer',
								title: 'Lifetime',
								description:
									'Specify the lifetime of the registration in seconds (see Client Registration Interface). If the value is set to 0, the lifetime is infinite. Units: s.',
							},
							'2': {
								type: 'integer',
								title: 'Default Minimum Period',
								description:
									'The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation.\r\nIf this Resource doesn’t exist, the default value is 0. Units: s.',
							},
							'3': {
								type: 'integer',
								title: 'Default Maximum Period',
								description:
									'The default value the LwM2M Client should use for the Maximum Period of an Observation in the absence of this parameter being included in an Observation. Units: s.',
							},
							'5': {
								type: 'integer',
								title: 'Disable Timeout',
								description:
									'A period to disable the Server. After this period, the LwM2M Client MUST perform registration process to the Server. If this Resource is not set, a default timeout value is 86400 (1 day). Units: s.',
							},
							'6': {
								type: 'integer',
								minimum: 0,
								maximum: 1,
								title: 'Notification Storing When Disabled or Offline',
								description:
									'If true, the LwM2M Client stores "Notify" operations to the LwM2M Server while the LwM2M Server account is disabled or the LwM2M Client is offline. After the LwM2M Server account is enabled or the LwM2M Client is online, the LwM2M Client reports the stored "Notify" operations to the Server.\r\nIf false, the LwM2M Client discards all the "Notify" operations or temporarily disables the Observe function while the LwM2M Server is disabled or the LwM2M Client is offline.\r\nThe default value is true.\r\nThe maximum number of storing Notifications per Server is up to the implementation.',
							},
							'7': {
								type: 'string',
								title: 'Binding',
								description:
									'The possible values are those listed in the LwM2M Core Specification. This Resource defines the transport binding configured for the LwM2M Client.\r\nIf the LwM2M Client supports the binding specified in this Resource, the LwM2M Client MUST use that transport for the Current Binding Mode.',
							},
							'10': {
								type: 'string',
								pattern: '^dd:dd$',
								title: 'APN Link',
								description:
									'If this resource is defined, it provides a link to the APN connection profile Object Instance (OMNA registered Object ID:11) to be used to communicate with this server.',
							},
							'11': {
								type: 'integer',
								minimum: 0,
								maximum: 255,
								title: 'TLS-DTLS Alert Code',
								description:
									'If this resource is defined, it contains the most recent TLS / DTLS alert message received from the LwM2M Server respective represented by the AlertDescription defined in Section 7.2 of RFC 5246. This resource set by the LwM2M Client may help the LwM2M Bootstrap-Server to determine the cause of TLS/DTLS connection failure with the respective LwM2M Server.',
							},
							'12': {
								type: 'integer',
								unixTimestamp: true,
								title: 'Last Bootstrapped',
								description:
									'If this resource is defined, it represents the last time that the bootstrap server updated this LwM2M Server Account. The LwM2M Client is responsible for updating this value. When the Bootstrap Server detects that this LwM2M Server Account is "out-of-date", the Bootstrap Server can update the LwM2M Server Account as represented by the LwM2M Server object instance. Unix Time. A signed integer representing the number of seconds since Jan 1 st, 1970 in the UTC time zone.',
							},
							'13': {
								type: 'integer',
								title: 'Registration Priority Order',
								description:
									'The LwM2M Client sequences the LwM2M Server registrations in increasing order of this value. If this value is not defined, registration attempts to this server are not impacted by other server registrations.',
							},
							'14': {
								type: 'integer',
								title: 'Initial Registration Delay Timer',
								description:
									'The delay, in seconds, before registration is attempted for this LwM2M Server based upon the completion of registration of the previous LwM2M Server in the registration order. This is only applied until the first successful registration after a successful bootstrapping sequence. Units: s.',
							},
							'15': {
								type: 'integer',
								minimum: 0,
								maximum: 1,
								title: 'Registration Failure Block',
								description:
									'When set to true and registration to this LwM2M server fails, the LwM2M Client blocks registration to other servers in the order. When set to false, the LwM2M Client proceeds with registration to the next server in the order.',
							},
							'16': {
								type: 'integer',
								minimum: 0,
								maximum: 1,
								title: 'Bootstrap on Registration Failure',
								description:
									'If set to true, this indicates that the LwM2M Client should re-bootstrap when either registration is explicitly rejected by the LwM2M Server or registration is considered as failing as dictated by the other resource settings. If set to false, the LwM2M Client will continue with the registration attempts as dictated by the other resource settings.',
							},
							'17': {
								type: 'integer',
								title: 'Communication Retry Count',
								description:
									'The number of successive communication attempts before which a communication sequence is considered as failed.',
							},
							'18': {
								type: 'integer',
								title: 'Communication Retry Timer',
								description:
									'The delay, in seconds, between successive communication attempts in a communication sequence. This value is multiplied by two to the power of the communication retry attempt minus one (2**(retry attempt-1)) to create an exponential back-off. Units: s.',
							},
							'19': {
								type: 'integer',
								title: 'Communication Sequence Delay Timer',
								description:
									'The delay, in seconds, between successive communication sequences. A communication sequence is defined as the exhaustion of the Communication Retry Count and Communication Retry Timer values. A communication sequence can be applied to server registrations or bootstrapping attempts. MAX_VALUE means do not perform another communication sequence. Units: s.',
							},
							'20': {
								type: 'integer',
								title: 'Communication Sequence Retry Count',
								description:
									'The number of successive communication sequences before which a registration attempt is considered as failed.',
							},
							'21': {
								type: 'integer',
								minimum: 0,
								maximum: 1,
								title: 'Trigger',
								description:
									"Using the Trigger Resource a LwM2M Client can indicate whether it is reachable over SMS (value set to 'true') or not (value set to 'false'). The default value (resource not present) is 'false'. When set to 'true' the LwM2M Server MAY, for example, request the LwM2M Client to perform operations, such as the \"Update\" operation by sending an \"Execute\" operation on \"Registration Update Trigger\" Resource via SMS. No SMS response is expected for such a message.",
							},
							'22': {
								type: 'string',
								title: 'Preferred Transport',
								description:
									'Only a single transport binding SHALL be present. When the LwM2M client supports multiple transports, it MAY use this transport to initiate a connection. This resource can also be used to switch between multiple transports e.g. a non-IP device can switch to UDP transport to perform firmware updates.',
							},
							'23': {
								type: 'integer',
								minimum: 0,
								maximum: 1,
								title: 'Mute Send',
								description:
									'If true or the Resource is not present, the LwM2M Client Send command capability is de-activated. \r\nIf false, the LwM2M Client Send Command capability is activated.',
							},
							'24': {
								type: 'array',
								minItems: 1,
								items: { type: 'string', pattern: '^dd:dd$' },
								title: 'Alternate APN Links',
								description:
									'If this resource is defined, it provides links to alternate APN connection profile Object Instance (OMNA registered Object ID:11) to be used to communicate with this server if Resource 10 has configuration conflicts.',
							},
							'25': {
								type: 'array',
								minItems: 1,
								items: { type: 'string' },
								title: 'Supported Server Versions',
								description:
									'This resource provides the supported enabler versions of the server to the client as a set of strings. Format for each string is 1*DIGIT"."1*DIGIT"."1*DIGIT where the third DIGIT is optional.',
							},
							'26': {
								type: 'integer',
								minimum: 0,
								maximum: 1,
								title: 'Default Notification Mode',
								description:
									'This resource indicates the default mode for observations to be sent: 0 = Non-Confirmable, 1 = Confirmable.',
							},
							'27': {
								type: 'integer',
								minimum: 0,
								maximum: 255,
								title: 'Profile ID Hash Algorithm',
								description:
									"If this resource is defined, it contains the hash algorithm the LwM2M Server would prefer the LwM2M Client to use with the dynamically generated mode of creating Profile IDs. The numerical ID value of the 'Suite Identifiers' registered by RFC 6920 is used in this Resource.",
							},
						},
						required: ['0', '1', '6', '7'],
					},
				},
				'5:1.2@1.1': {
					type: 'object',
					properties: {
						'0': {
							type: 'string',
						},
						'1': {
							type: 'string',
						},
						'3': {
							type: 'integer',
						},
						'5': {
							type: 'integer',
						},
						'9': {
							type: 'integer',
						},
					},
					required: ['0', '1', '3', '5', '9'],
				},
			},
		}

		check(result).is(objectMatching(expectedSchema))
	})
})
