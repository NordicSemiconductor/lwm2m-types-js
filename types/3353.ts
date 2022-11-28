/**
 * scellID
 *
 * serving cell information that the RRC decides to camp on
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3353.xml
 *
 * ID: 3353
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type scellID_3353 = Readonly<{
	'2': TrackingAreaCode_2
	'6030': plmnID_6030
	'6031': BandIndicator_6031
	'6033': CellID_6033
}>
/**
 * TrackingAreaCode
 *
 * Tracking Area Code
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type TrackingAreaCode_2 = number
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
 * The objectURN for scellID
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3353'
