/**
 * Data Monitoring
 *
 * Generic interface to set up data monitoring like sensor/log data and
 * mechanism to receive alerts.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10377.xml
 *
 * ID: 10377
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type DataMonitoring_10377 = Readonly<
	Array<{
		'0': MonitoringName_0
		'1': MonitoringDescription_1
		'3': Data_3
		'7': ReferenceA_7
		'8': ComparisonA_8
		'13': MonitoringResults_13
		'2'?: MonitoringSettings_2
		'4'?: DataSamplingStartMask_4
		'5'?: DataSamplingInterval_5
		'6'?: DataSamplingRunPeriod_6
		'9'?: ReferenceB_9
		'10'?: ComparisonB_10
		'11'?: ReferenceC_11
		'12'?: ComparisonC_12
	}>
>
/**
 * Monitoring Name
 *
 * This resource is the Data Monitoring operation's name or string reference
 * declared by device. It cannot be modified externally. Device can support
 * multiple monitoring operation by declaring multiple instances of Data
 * Monitoring object.
 *
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type MonitoringName_0 = string
/**
 * Monitoring Description
 *
 * This resource describes the monitoring operation including data type and
 * supported settings/options, if any.
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type MonitoringDescription_1 = string
/**
 * Data
 *
 * This resource contains the current value of actual data being
 * monitored/sampled in device. The data and data type is formatted as CBOR
 * payload.
 *
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type Data_3 = string
/**
 * Reference A
 *
 * This resource contains the value of reference data that is to be compared
 * with Data resource in conjunction with Comparison A resource. The comparison
 * result is flagged by Status resource. When Status resource is made
 * observable, this effectively becomes a mechanism to signal the server on a
 * hit. The reference data and data type is formatted as CBOR payload.
 *
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type ReferenceA_7 = string
/**
 * Comparison A
 *
 * This resource represents the logical statement to compare Data resource
 * against Reference A resource. The statements are encoded as following:
 * 0: No Comparison
 * 1: Data > Reference A
 * 2: Data >= Reference A
 * 3: Data < Reference A
 * 4: Data <= Reference A
 * 5: Data equals Reference A
 * 6: Data not equal Reference A
 *
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 */
type ComparisonA_8 = number
/**
 * Monitoring Results
 *
 * Monitoring Results resource is a serialized accumulation of comparison
 * results of data and the references, represented by a read-only serialized
 * Opaque (Binary).
 * This resource use CBOR format encoded as following:
 * 1. array(Result Index 1, Result Timestamp 1, Result Value 1)
 * 2. array(Result Index 2, Result Timestamp 2, Result Value 2)
 * ...
 * n. array(Result Index n, Result Timestamp n, Result Value n)
 *
 * Result value is an integer containing bit flags described as per following:
 * bit 0: 0(Comparison A statement is false), 1(Comparison A statement is true)
 * bit 1: 0(Comparison B statement is false), 1(Comparison B statement is true)
 * bit 2: 0(Comparison C statement is false), 1(Comparison C statement is true)
 * other bits: unused
 * New result will be added when there is a change of current Result Value.
 * Result Timestamp is a 32-bit integer representing the number of seconds since
 * Jan 1st, 1970 in the UTC time zone, sampled when the change occurs. Result
 * Index is the running number of the recorded changes.
 * Number of available results is up to device's implementation and maximum
 * result that can be accumulated should be stated in Monitoring Description
 * resource.
 *
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: true
 */
type MonitoringResults_13 = string
/**
 * Monitoring Settings
 *
 * This resource allows the monitoring operation to accept settings or operation
 * options. The available settings, if supported, should be described using
 * Monitoring Description resource.
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type MonitoringSettings_2 = string
/**
 * Data Sampling Start Mask
 *
 * This resource defines when to start data sampling. Data Sampling Start Mask
 * needs to adhere to following string format:
 * "YYMMDDHHmmss"
 * YY: year, e.g 21
 * MM: month, 01 to 12
 * DD: day, 01 to 31
 * HH: hour, 00 to 23
 * mm: minute, 00 to 59
 * ss: second, 00 to 59
 *
 * Any of the above can be replaced by character '-' for "don't care" masking.
 *
 * Example:
 * 1) "211027201801" data sampling will start at exactly 20:18:01 on
 * 2021/10/27.
 * 2) "------201801" data sampling will start at the next 20:18:01.
 * 3) "------------" data sampling will start immediately.
 * 4) "------01000000" data sampling will start at next 1st of the month at
 * 12am.
 *
 * If this resource is not present, data sampling starts at device's specific
 * implementation.
 *
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type DataSamplingStartMask_4 = string
/**
 * Data Sampling Interval
 *
 * This resource represents the time interval between consecutive data
 * samplings. After the sampling starts (via the start mask, if present), the
 * next sampling will run after Data Sampling Interval resource value has
 * elapsed.
 * If this resource is not present, data sampling occurs at device's specific
 * implementation.
 *
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type DataSamplingInterval_5 = number
/**
 * Data Sampling Run Period
 *
 * This resource defines the period to run this data sampling. Data Sampling
 * will stop when the Run Period has elapsed from the start time. Depending on
 * the Data Sampling Start Mask's "don't care" field, sampling may re-start
 * again.
 *
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type DataSamplingRunPeriod_6 = number
/**
 * Reference B
 *
 * This resource contains the value of reference data that is to be compared
 * with Data resource in conjunction with Comparison B resource. The comparison
 * result is flagged by Status resource. When Status resource is made
 * observable, this effectively becomes a mechanism to signal the server on a
 * hit. The reference data and data type is formatted as CBOR payload.
 *
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type ReferenceB_9 = string
/**
 * Comparison B
 *
 * This resource represents the logical statement to compare Data resource
 * against Reference B resource. The statements are encoded as following:
 * 0: No Comparison
 * 1: Data > Reference B
 * 2: Data >= Reference B
 * 3: Data < Reference B
 * 4: Data <= Reference B
 * 5: Data equals Reference B
 * 6: Data not equal Reference B
 *
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type ComparisonB_10 = number
/**
 * Reference C
 *
 * This resource contains the value of reference data that is to be compared
 * with Data resource in conjunction with Comparison B resource. The comparison
 * result is flagged by Status resource. When Status resource is made
 * observable, this effectively becomes a mechanism to signal the server on a
 * hit. The reference data and data type is formatted as CBOR payload.
 *
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type ReferenceC_11 = string
/**
 * Comparison C
 *
 * This resource represents the logical statement to compare Data resource
 * against Reference B resource. The statements are encoded as following:
 * 0: No Comparison
 * 1: Data > Reference C
 * 2: Data >= Reference C
 * 3: Data < Reference C
 * 4: Data <= Reference C
 * 5: Data equals Reference C
 * 6: Data not equal Reference C
 *
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type ComparisonC_12 = number
/**
 * The objectURN for Data Monitoring
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10377'
