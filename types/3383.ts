/**
 * sipPublishEvent
 *
 * SIP Publish status
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3383.xml
 *
 * ID: 3383
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type sipPublishEvent_3383 = Readonly<{
	'0': publishResult_0
}>
/**
 * publishResult
 *
 * -1 = Publish message not available
 * 0 = Success (when 200 OK is received)
 * 1 = Failure (when any error other than 401 is received; else when 408 timeout
 * occurs)
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type publishResult_0 = number
/**
 * The objectURN for sipPublishEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3383'
