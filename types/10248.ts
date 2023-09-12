/**
 * Connected UE Measurements
 *
 * This LWM2M Object provides a range of measurements of connected UEs and
 * provides an Object link to the Connected UE report.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10248.xml
 *
 * ID: 10248
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type ConnectedUEMeasurements_10248 = Readonly<{
	'0': NumberofConnectedUsers_0
	'1': CumulativeNumberofUniqueUsers_1
	'2': ConnectedUEReport_2
}>
/**
 * Number of Connected Users
 *
 * The number of different UEs currently connected to the eNB (i.e. in
 * RRC_CONNECTED state).
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type NumberofConnectedUsers_0 = number
/**
 * Cumulative Number of Unique Users
 *
 * The number of different UEs that have connected to the eNB over the
 * immediately preceding period specified by the "Cumulative Measurement Window"
 * field.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type CumulativeNumberofUniqueUsers_1 = number
/**
 * Connected UE Report
 *
 * Provides an Object link to the Connected UE Report which provides a range of
 * information related to the connected UEs.
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: true
 */
type ConnectedUEReport_2 = Array<string>
/**
 * The objectURN for Connected UE Measurements
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10248'
