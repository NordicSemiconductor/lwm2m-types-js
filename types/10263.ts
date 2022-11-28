/**
 * Event Data Delivery
 *
 * The Event Data Delivery object provides a simple means for managing the
 * delivery of event data from multiple Event Data Object instances.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10263.xml
 *
 * ID: 10263
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type EventDataDelivery_10263 = Readonly<
	Array<{
		'0': Name_0
		'1': EventDataLinks_1
		'2': LatestEventlog_2
		'3': Schedule_3
	}>
>
/**
 * Name
 *
 * The Name resource provides a way to identify different Event Data Delivery
 * instances. Name is a readable and writable attribute. Name is defined as an
 * arbitrary length text string
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Name_0 = string
/**
 * Event Data Links
 *
 * The Event Data Links resource is a set of object links that point to each of
 * the Event Data Object Instances that are managed by this Event Data Delivery
 * Object Instance. An Object Link is two 16-bit integer values representing the
 * Object ID and the Object Instance ID. This resource can have multiple
 * instances allowing this Event Data Delivery object to manage many Event Data
 * instances.
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: true
 */
type EventDataLinks_1 = string
/**
 * Latest Eventlog
 *
 * The Latest Eventlog resource is a multiple instance resource representing the
 * Latest Eventlog resource from each of the Event Data objects defined in the
 * Event Data Links Resource. When this payload is delivered to the LwM2M
 * server, via either a read request or a confirmed observation on this Object,
 * Object Instance or Resource, the Latest Delivered Event Time for each of the
 * Event Data objects defined in the Event Data Links Resource must be updated.
 * When no new event data exists for any of the linked Event Data instances an
 * empty Opaque value should be provided.
 *
 * If this resource has an LwM2M server observation and one of the Event Data
 * Instance is configured as Realtime and has been triggered, the Event Data
 * Delivery object must send all undelivered events for all linked Event Data
 * objects.
 *
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: true
 */
type LatestEventlog_2 = string
/**
 * Schedule
 *
 * The Schedule resource provides link to a schedule object. This Schedule
 * object is used to provide fine grain control the Notification schedule
 * delivery when the default LwM2M NOTIFICATION attributes do not provide
 * sufficient control. If no schedule is required, an Object Link referencing no
 * Object Instance will contain the concatenation of 2 MAX-ID values (null
 * link).
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type Schedule_3 = string
/**
 * The objectURN for Event Data Delivery
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10263'
