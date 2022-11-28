/**
 * cellReselectionEvent
 *
 * cell reselection event information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3354.xml
 *
 * ID: 3354
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type cellReselectionEvent_3354 = Readonly<{
	'0': timeReselectionStart_0
	'3': failureType_3
	'6032': dlEarfcn_6032
	'6033': CellID_6033
}>
/**
 * timeReselectionStart
 *
 * Modem time when reselection is initiated
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type timeReselectionStart_0 = number
/**
 * failureType
 *
 * 0 = Pass
 * 1= S-Failure
 * 2 = Sib-Read-Failure
 * 3 = Weak-Downlink-Indicator
 * 4 = Cell-Barred
 * 5 = Non-Valid-Plmn
 * 6 = Forbidden-Tracking-Area
 * 7 = Aborted
 * 8 = Forbidden-CSG-Id
 * 9 = IRAT-Reselection-Failure
 * 10 = Frequency-Barred
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type failureType_3 = number
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
 * The objectURN for cellReselectionEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3354'
