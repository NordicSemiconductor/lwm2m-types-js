/**
 * rrcTimerExpiryEvent
 *
 * RRC timer expiry event information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3358.xml
 *
 * ID: 3358
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type rrcTimerExpiryEvent_3358 = Readonly<{
	'0': RrcTimerExpiryEvent_0
}>
/**
 * RrcTimerExpiryEvent
 *
 * 1 = t300
 * 2 = t301
 * 3 = t302
 * 4 = t303
 * 5 = t304
 * 6 = t305
 * 7 = t311
 * 8 = t320
 * 9 = t321
 * 10 = other
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type RrcTimerExpiryEvent_0 = number
/**
 * The objectURN for rrcTimerExpiryEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3358'
