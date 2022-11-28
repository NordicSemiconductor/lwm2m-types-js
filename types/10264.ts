/**
 * Delivery Schedule
 *
 * The Delivery Schedule object provides a means for controlling the periodic
 * delivery of interval and event data to the LwM2M server.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10264.xml
 *
 * ID: 10264
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type DeliverySchedule_10264 = Readonly<
	Array<{
		'0': ScheduleStartTime_0
		'1': ScheduleUTCOffset_1
		'2': DeliveryFrequency_2
		'3'?: RandomisedDeliveryWindow_3
		'4'?: NumberofRetries_4
		'5'?: RetryPeriod_5
	}>
>
/**
 * Schedule Start Time
 *
 * Schedule Start Time is a readable and writable resource representing the
 * number of seconds past midnight for which this schedule commences
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type ScheduleStartTime_0 = number
/**
 * Schedule UTC Offset
 *
 * The Schedule UTC Offset resource is a readable and writable resource
 * representing the time zone offset for the Schedule Start Time Resource for
 * this Delivery Schedule instance. If this resource is empty, the application
 * should use the UTC offset provided in the Device [/3/0/14] object instance
 * resource or UTC if not provided. UTC+X [ISO 8601].
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type ScheduleUTCOffset_1 = string
/**
 * Delivery Frequency
 *
 * The Delivery Frequency resource is a readable and writable resource
 * representing the number of seconds between deliveries. It is recommended that
 * the Delivery Frequency be set to a devisor of 24 hours (86400 seconds) to
 * provide a consistent interval period. Examples of Delivery Frequency
 * include:-
 * 30 = Every 30 seconds
 * 600 = Every 10 minutes
 * 1800 = Every 30 minutes
 * 3600 = Hourly
 * 7200 = Every 2 hours
 * 14400 = Every 4 hours
 * 43200 = Every 12 hours
 * 86400 = Every Day
 * 172600 = Every Second Day
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type DeliveryFrequency_2 = number
/**
 * Randomised Delivery Window
 *
 * The Randomised Delivery Window resource is a readable and writable resource
 * representing a randomisation widow in seconds for the triggering of the
 * notification delivery to the LwM2M server. If not provided, the randomised
 * delivery window should default to 0 and the Notification should be sent
 * immediately. The Randomised Delivery Window resource should be set to a value
 * smaller than the delivery frequency.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type RandomisedDeliveryWindow_3 = number
/**
 * Number of Retries
 *
 * The Number of Retries resource is a readable and writable resource
 * representing the number of retry attempts that should be attempted when the
 * delivery notification is not successful. If not provided, this value defaults
 * to 0 and no retries are attempted. This retry behaviour is at an application
 * level and should be set with consideration of standard CoAP retry behaviour.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type NumberofRetries_4 = number
/**
 * Retry Period
 *
 * The Retry Period resource is a readable and writable resource representing
 * the number of seconds between each application level retry.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type RetryPeriod_5 = number
/**
 * The objectURN for Delivery Schedule
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10264'
