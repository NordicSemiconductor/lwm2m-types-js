/**
 * CoAP Config
 *
 *
 * This object is used to configure the CoAP transmission parameters (RFC7252)
 * and other parameters that affect CoAP transmission.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/500.xml
 *
 * ID: 500
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CoAPConfig_500 = Readonly<
	Array<{
		'0': NetworkBearer_0
		'1': ACK_TIMEOUT_1
		'2': ACK_RANDOM_FACTOR_2
		'3': MAX_RETRANSMIT_3
		'4': NSTART_4
		'5'?: DEFAULT_LEISURE_5
		'6'?: PROBING_RATE_6
		'7'?: DTLSRetransmissionTimer_7
		'8'?: MaxResponseWaitingTime_8
	}>
>
/**
 * Network Bearer
 *
 *
 * Identify the network bearer for which these parameters are applicable. The
 * value is from the network bearer list defined in the Connectivity Monitoring
 * Object (ID: 4). Please, verify the list of currently reserved values.
 *
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type NetworkBearer_0 = number
/**
 * ACK_TIMEOUT
 *
 *
 * The initial value of retransmission timeout in CoAP. Default is set to that
 * of RFC7252, that is 2 seconds.
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type ACK_TIMEOUT_1 = number
/**
 * ACK_RANDOM_FACTOR
 *
 *
 * The initial value of retransmission timeout in CoAP. Default is set to that
 * of RFC7252, that is a value of 1.5.
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type ACK_RANDOM_FACTOR_2 = number
/**
 * MAX_RETRANSMIT
 *
 *
 * The maximum number of retransmissions. Default is set to that of RFC7252,
 * that is 4 retransmissions.
 *
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type MAX_RETRANSMIT_3 = number
/**
 * NSTART
 *
 *
 * Number of simultaneous outstanding interactions that the LwM2M client can
 * accept from a given LwM2M Server. An outstanding interaction is either a CON
 * for which an ACK has not yet been received but is still expected (message
 * layer) or a request for which neither a response nor an Acknowledgment
 * message has yet been received but is still expected. Default is set to that
 * of RFC7252, that is 1 interaction.
 *
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type NSTART_4 = number
/**
 * DEFAULT_LEISURE
 *
 *
 * If a server does decide to respond to a multicast request, it should not
 * respond immediately. Instead, it should pick based on RFC7252, Section 8.2.
 * If the LwM2M Client does not have data to compute the Leisure time it should
 * use that of Default Leisure as specified in RFC7252.
 *
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type DEFAULT_LEISURE_5 = number
/**
 * PROBING_RATE
 *
 *
 * This resource represents the maximum probing rate accepted by this LwM2M
 * Client in bytes per second.
 *
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: B/s
 */
type PROBING_RATE_6 = number
/**
 * DTLS Retransmission Timer
 *
 *
 * The LwM2M Server may modify the initial DTLS retransmission timer value of 1
 * second into a different value. This will have effects on latency as well as
 * on congestion, thus the timer value should be handled carefully.
 *
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type DTLSRetransmissionTimer_7 = number
/**
 * Max Response Waiting Time
 *
 *
 * The maximum time in seconds the device will wait for a separate response to a
 * request.
 *
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type MaxResponseWaitingTime_8 = number
/**
 * The objectURN for CoAP Config
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '500'
