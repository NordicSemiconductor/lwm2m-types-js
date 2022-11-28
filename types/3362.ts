/**
 * nasEmmTimerExpiryEvent
 *
 * NAS EMM timer expiry information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3362.xml
 *
 * ID: 3362
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type nasEmmTimerExpiryEvent_3362 = Readonly<{
	'0': NasEmmTimerExpiryEvent_0
}>
/**
 * NasEmmTimerExpiryEvent
 *
 * 1 = t3410
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type NasEmmTimerExpiryEvent_0 = number
/**
 * The objectURN for nasEmmTimerExpiryEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3362'
