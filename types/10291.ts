/**
 * Voltage Transient
 *
 * Object for sampling high frequency values (in this case Voltage readings) in
 * order to aggregate them and summarize them (Avg, Max, Min) and to then
 * time-stamp and log these aggregates for packaging and transmission to the
 * server. This allows for efficient data transfer of high frequency data,
 * without the need to send huge amounts of raw data over the air.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10291.xml
 *
 * ID: 10291
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type VoltageTransient_10291 = Readonly<
	Array<{
		'6000': IntervalPeriod_6000
		'6001': IntervalStartOffset_6001
		'6003': IntervalCollectionStartTime_6003
		'6004': OldestRecordedInterval_6004
		'6005': LastDeliveredInterval_6005
		'6006': LatestRecordedInterval_6006
		'6007': IntervalDeliveryMidnightAligned_6007
		'6029': LatestPayload_6029
		'6040': SampleFrequency_6040
		'6002'?: IntervalUTCOffset_6002
		'6009'?: IntervalHistoricalReadPayload_6009
		'6028'?: Status_6028
	}>
>
/**
 * Interval Period
 *
 * The Interval Period resource is an Integer value representing the width in
 * seconds of the intervals being managed by this interval data object. This
 * resource is read only and can only be changed by resource 11 (Change Interval
 * Configuration). It is recommended that the Interval Period be set to a
 * devisor of 24 hours (86400 seconds) to provide a consistent interval period.
 * Examples of Interval Period include:- 30 = Every 30 seconds 600 = Every 10
 * minutes 1800 = Every 30 minutes 3600 = Hourly 7200 = Every 2 hours 14400 =
 * Every 4 hours 43200 = Every 12 hours 86400 = Every Day 172600 = Every Second
 * Day
 *
 * ID: 6000
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type IntervalPeriod_6000 = number
/**
 * Interval Start Offset
 *
 * The Interval Start Offset resource is a read only resource representing the
 * number of seconds past midnight for which the first interval is recorded. If
 * this resource is empty, it is assumed that the intervals are midnight
 * aligned. This can be used to adjust interval boundaries. As an example, an
 * Interval Period of 3600 seconds and an Interval Start time of 300 represents
 * hourly interval data, starting at 00:05.
 *
 * ID: 6001
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type IntervalStartOffset_6001 = number
/**
 * Interval Collection Start Time
 *
 * The Collection Start Time resource is a read only resource representing the
 * time when the first interval was recorded on the device. Interval times
 * represent the end of the interval, not the beginning. As an example, the
 * first four hourly interval past midnight will have a timestamp of 04:00
 * (adjusting for UTC offset).
 *
 * ID: 6003
 * MultipleInstances: false
 * Mandatory: true
 */
type IntervalCollectionStartTime_6003 = number
/**
 * Oldest Recorded Interval
 *
 * The Oldest Recorded Interval resource is a read-only resource representing
 * the oldest available interval on the device. Interval times represent the end
 * of the interval, not the beginning.
 *
 * ID: 6004
 * MultipleInstances: false
 * Mandatory: true
 */
type OldestRecordedInterval_6004 = number
/**
 * Last Delivered Interval
 *
 * The Last Delivered Interval is a readable and writable resource used to
 * represent the last interval delivered to the LwM2M server. Interval times
 * represent the end of the interval, not the beginning. The setting of this
 * resource is implementation specific but should be updated based on, either a
 * Read request of the Latest Payload from the LwM2M server or via a confirmed
 * delivery of Notify operation of the Latest Payload resource. This resource is
 * writable to allow the server to adjust the Last Delivered Interval value if
 * the server and client is out of sync.
 *
 * ID: 6005
 * MultipleInstances: false
 * Mandatory: true
 */
type LastDeliveredInterval_6005 = number
/**
 * Latest Recorded Interval
 *
 * The Latest Recorded Interval is a readable resource representing the
 * currently highest recorded interval on the device. Interval times represent
 * the end of the interval, not the beginning.
 *
 * ID: 6006
 * MultipleInstances: false
 * Mandatory: true
 */
type LatestRecordedInterval_6006 = number
/**
 * Interval Delivery Midnight Aligned
 *
 * The Delivery Midnight Aligned is a readable and writable resource used to
 * indicate if data is delivered only to the previous midnight (1) or if
 * part-day data can be delivered (0). Calculating Midnight should consider the
 * Interval UTC Offset resource, or if empty, the Device [/3/0/14] object
 * instance resource.
 *
 * ID: 6007
 * MultipleInstances: false
 * Mandatory: true
 */
type IntervalDeliveryMidnightAligned_6007 = boolean
/**
 * Latest Payload
 *
 * The Latest Payload resource is a read-only serialised Opaque (Binary)
 * representation of all the Interval Data between the Last Delivered Interval
 * and the Latest Recorded Interval, accounting for the Delivery Midnight
 * Aligned resource. When this payload is delivered to the LwM2M server, via
 * either a read request or a confirmed observation on this Object, Object
 * Instance or Resource, the Latest Delivered Interval should be updated. When
 * no new data exists, an empty Opaque value should be provided. The payload
 * data can be provided in an implementation specific serialisation, but by
 * default for fixed length values should use the OMA-LwM2M CBOR format encoded
 * as follows: 1. 8-bit integer, value 2 representing OMA-LwM2M CBOR format. 2.
 * Interval Data Instance ID/ Class [16-bit integer] 3. Timestamp of first
 * Interval [32-bit integer] representing the number of seconds since Jan 1st,
 * 1970 in the UTC time zone. 4. Interval Period in seconds [32-bit integer] 5.
 * Number of intervals in Payload [16-bit integer] 6. Number of Values Per
 * Interval [8-bit integer] 7. Size of Value 1 in bits [8-bit integer] 8. Size
 * of Value 2 in bits [8-bit integer] ... 9. Size of Value N in bits [8-bit
 * integer] 10. Interval 1 Value 1 [x bits] 11. Interval 1 Value 2 [x bits] ...
 * 12. Interval 1 Value N [x bits] ... 13. Interval N Value N [x bits] If for
 * some implementation specific reason, there are missing intervals in the
 * sequence, the payload may consist of multiple blocks of the above serialised
 * data (appended into a single binary opaque value), each block representing a
 * continuous series of interval data.
 *
 * ID: 6029
 * MultipleInstances: false
 * Mandatory: true
 */
type LatestPayload_6029 = string
/**
 * Sample Frequency
 *
 * How often the inputs are read/sampled.This value can be changed by doing a
 * write command
 *
 * ID: 6040
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type SampleFrequency_6040 = number
/**
 * Interval UTC Offset
 *
 * The Interval UTC Offset resource is a read only resource representing the
 * time zone offset for this Interval Data instance. If this resource is empty,
 * the application should use the UTC offset provided in the Device [/3/0/14]
 * object instance resource or UTC if not provided. UTC+X [ISO 8601].
 *
 * ID: 6002
 * MultipleInstances: false
 * Mandatory: false
 */
type IntervalUTCOffset_6002 = string
/**
 * Interval Historical Read Payload
 *
 * The Historical Read Payload resource is the representation of the data
 * requested by the Historical Interval Read executable resource. The format of
 * this Opaque value should be identical to the Latest Payload resource. If no
 * Historical Interval Read has been executed, this resource should return and
 * empty Opaque value. This resource can either be Read from the Server or set
 * up as an observation and Notified to the server as soon as the historical
 * data is available. When this payload is delivered to the LwM2M server, via
 * either a read request or a confirmed observation on this Object, Object
 * Instance or Resource, the Historical Read Payload should be set to an empty
 * Opaque value.
 *
 * ID: 6009
 * MultipleInstances: false
 * Mandatory: false
 */
type IntervalHistoricalReadPayload_6009 = string
/**
 * Status
 *
 * Recording Enabled is a read-only resource providing an indication of if
 * interval data is currently being recorded for this object instance. Refer to
 * re-usable resource LogStatus for further details.
 *
 * ID: 6028
 * MultipleInstances: false
 * Mandatory: false
 */
type Status_6028 = number
/**
 * The objectURN for Voltage Transient
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10291'
