/**
 * rachLatency_delay
 *
 * RACH Latency & delay information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3365.xml
 *
 * ID: 3365
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type rachLatency_delay_3365 = Readonly<{
	'2': rachLatencyVal_2
	'3': delay_3
	'6037': sysFrameNumber_6037
	'6038': subFrameNumber_6038
}>
/**
 * rachLatencyVal
 *
 * time in ms between 1st preamble and response from NW in DL
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type rachLatencyVal_2 = number
/**
 * delay
 *
 * time in ms
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type delay_3 = number
/**
 * sysFrameNumber
 *
 * System Frame Number.
 *
 * ID: 6037
 * MultipleInstances: false
 * Mandatory: true
 */
type sysFrameNumber_6037 = number
/**
 * subFrameNumber
 *
 * Sub Frame Number.
 *
 * ID: 6038
 * MultipleInstances: false
 * Mandatory: true
 */
type subFrameNumber_6038 = number
/**
 * The objectURN for rachLatency_delay
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3365'
