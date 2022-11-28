/**
 * Connectivity Statistics
 *
 * This LwM2M Objects enables client to collect statistical information and
 * enables the LwM2M Server to retrieve these information, set the collection
 * duration and reset the statistical parameters.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/7.xml
 *
 * ID: 7
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type ConnectivityStatistics_7 = Readonly<{
	'0'?: SMSTxCounter_0
	'1'?: SMSRxCounter_1
	'2'?: TxData_2
	'3'?: RxData_3
	'4'?: MaxMessageSize_4
	'5'?: AverageMessageSize_5
	'8'?: CollectionPeriod_8
}>
/**
 * SMS Tx Counter
 *
 * Indicate the total number of SMS successfully transmitted during the
 * collection period.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: false
 */
type SMSTxCounter_0 = number
/**
 * SMS Rx Counter
 *
 * Indicate the total number of SMS successfully received during the collection
 * period.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type SMSRxCounter_1 = number
/**
 * Tx Data
 *
 * Indicate the total amount of data (IP / non-IP) transmitted during the
 * collection period expressed in kilobytes.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type TxData_2 = number
/**
 * Rx Data
 *
 * Indicate the total amount of data (IP / non-IP) received during the
 * collection period expressed in kilobytes.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type RxData_3 = number
/**
 * Max Message Size
 *
 * The maximum IP message size that is used during the collection period.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type MaxMessageSize_4 = number
/**
 * Average Message Size
 *
 * The average IP message size that is used during the collection period.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type AverageMessageSize_5 = number
/**
 * Collection Period
 *
 * The default collection period in seconds. The value 0 indicates that the
 * collection period is not set.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type CollectionPeriod_8 = number
/**
 * The objectURN for Connectivity Statistics
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '7'
