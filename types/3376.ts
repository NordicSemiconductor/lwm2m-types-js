/**
 * txPowerBackOffEvent
 *
 * TX Power backoff information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3376.xml
 *
 * ID: 3376
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type txPowerBackOffEvent_3376 = Readonly<{
	'0': TxPowerBackoff_0
}>
/**
 * TxPowerBackoff
 *
 * TX Power Backoff
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type TxPowerBackoff_0 = number
/**
 * The objectURN for txPowerBackOffEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3376'
