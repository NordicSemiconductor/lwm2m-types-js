/**
 * handoverEvent
 *
 * handover event information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3355.xml
 *
 * ID: 3355
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type handoverEvent_3355 = Readonly<{
	'0': timeHandoverStart_0
	'3': handoverResult_3
	'4': TargetEarfcn_4
	'5': TargetPhysicalCellID_5
	'6': targetCellRsrp_6
	'6032': dlEarfcn_6032
	'6033': CellID_6033
}>
/**
 * timeHandoverStart
 *
 * Modem time when handover is initiated
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type timeHandoverStart_0 = number
/**
 * handoverResult
 *
 * 0 = Pass
 * 1 = InvalidCfg (Validation failure)
 * 2 = PhysicalFailure (Physical layer failure on the target cell)
 * 3 = Rach (T304 expiry due to RACH failure on target cell)
 * 4 = RachMeasConfigIncluded (T304 expiry due to RACH failure on target cell
 * when MeasConfig IE was included)
 * 5 = Other (other failure reason than ones above)
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type handoverResult_3 = number
/**
 * TargetEarfcn
 *
 * Target EARFCN
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type TargetEarfcn_4 = number
/**
 * TargetPhysicalCellID
 *
 * Target Physical Cell ID
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type TargetPhysicalCellID_5 = number
/**
 * targetCellRsrp
 *
 * Target Cell RSRP in dBm
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type targetCellRsrp_6 = number
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
 * The objectURN for handoverEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3355'
