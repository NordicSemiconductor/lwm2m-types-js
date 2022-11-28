/**
 * cellBlacklistEvent
 *
 * Cell blacklist information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3359.xml
 *
 * ID: 3359
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type cellBlacklistEvent_3359 = Readonly<{
	'6032': dlEarfcn_6032
	'6033': CellID_6033
}>
/**
 * dlEarfcn
 *
 * EARFCN - frequency
 *
 * ID: 6032
 * MultipleInstances: false
 * Mandatory: true
 */
type dlEarfcn_6032 = number
/**
 * CellID
 *
 * Cell ID.
 *
 * ID: 6033
 * MultipleInstances: false
 * Mandatory: true
 */
type CellID_6033 = number
/**
 * The objectURN for cellBlacklistEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3359'
