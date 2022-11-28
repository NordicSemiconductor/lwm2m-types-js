/**
 * Interval Data Delivery
 *
 * The Interval Data Delivery object provides an optimised means for managing
 * the delivery of interval data from multiple Interval Data Object instances.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10262.xml
 *
 * ID: 10262
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type IntervalDataDelivery_10262 = Readonly<
	Array<{
		'0': Name_0
		'1': IntervalDataLinks_1
		'2': LatestPayload_2
		'3'?: Schedule_3
	}>
>
/**
 * Name
 *
 * The Name resource provides a way to identify different Interval Data Delivery
 * instances. Name is a readable and writable attribute. Name is defined as an
 * arbitrary length text string
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Name_0 = string
/**
 * Interval Data Links
 *
 * The Interval Data Links resource is a set of object links that point to each
 * of the Interval Data Object Instances that are managed by this Interval Data
 * Delivery Object Instance. An Object Link is two 16-bit integer values
 * representing the Object ID and the Object Instance ID. This resource can have
 * multiple instances allowing this Interval Data Delivery object to manage many
 * Interval Data instances.
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: true
 */
type IntervalDataLinks_1 = string
/**
 * Latest Payload
 *
 * The Latest Payload resource is a multiple instance resource representing the
 * Latest Payload resource from each of the Interval Data objects defined in the
 * Interval Data Links Resource. When this payload is delivered to the LwM2M
 * server, via either a read request or a confirmed observation on this Object,
 * Object Instance or Resource, the Latest Delivered Interval should for each of
 * the Interval Data objects defined in the Interval Data Links Resource must be
 * updated. When no new data exists for a specific Interval Data instance and
 * empty Opaque value should be provided. When a specific Interval Data Instance
 * is disabled (Recording Enabled Resource = 0), no payload data should be
 * provided at all.
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: true
 */
type LatestPayload_2 = string
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
 * Mandatory: false
 */
type Schedule_3 = string
/**
 * The objectURN for Interval Data Delivery
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10262'
