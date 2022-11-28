/**
 * plmnSearchEvent
 *
 * List of all PLMNs found during the initial search/scan
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3352.xml
 *
 * ID: 3352
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type plmnSearchEvent_3352 = Readonly<
	Array<{
		'0': timeScanStart_0
		'6030': plmnID_6030
		'6031': BandIndicator_6031
		'6032': dlEarfcn_6032
	}>
>
/**
 * timeScanStart
 *
 * Modem time when PLMN search is initiated
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type timeScanStart_0 = number
/**
 * plmnID
 *
 * PLMN - mcc/mnc
 *
 * ID: 6030
 * MultipleInstances: false
 * Mandatory: true
 */
type plmnID_6030 = number
/**
 * BandIndicator
 *
 * Band Indicator
 *
 * ID: 6031
 * MultipleInstances: false
 * Mandatory: true
 */
type BandIndicator_6031 = number
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
 * The objectURN for plmnSearchEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3352'
