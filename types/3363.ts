/**
 * nasEsmExpiryEvent
 *
 * NAS ESM timer expiry information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3363.xml
 *
 * ID: 3363
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type nasEsmExpiryEvent_3363 = Readonly<{
	'0': NasEsmExpiryEvent_0
}>
/**
 * NasEsmExpiryEvent
 *
 * 1 = t3480
 * 2 = t3482
 * 3 = t3481
 * 4 = t3492
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type NasEsmExpiryEvent_0 = number
/**
 * The objectURN for nasEsmExpiryEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3363'
