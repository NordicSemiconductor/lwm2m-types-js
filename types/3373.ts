/**
 * txPowerHeadroomEvent
 *
 * TX power headroom information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3373.xml
 *
 * ID: 3373
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type txPowerHeadroomEvent_3373 = Readonly<{
	'2': headroom_value_2
	'6037': sysFrameNumber_6037
	'6038': subFrameNumber_6038
}>
/**
 * headroom-value
 *
 * headroom value in dB (-23..40)
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type headroom_value_2 = number
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
 * The objectURN for txPowerHeadroomEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3373'
