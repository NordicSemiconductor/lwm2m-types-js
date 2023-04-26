/**
 * Event
 *
 * Here lists all items of an event reported by the robot.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10335.xml
 *
 * ID: 10335
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Event_10335 = Readonly<
	Array<{
		'1': Entity_1
		'2': EventType_2
		'3': Time_3
		'4': SequenceNo_4
		'5'?: AdditionalInfo_5
	}>
>
/**
 * Entity
 *
 * Contains the object ID and object instance ID/name, for example: </10320/2>.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Entity_1 = string
/**
 * Event Type
 *
 * The type of this event, for example: APP restart.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type EventType_2 = number
/**
 * Time
 *
 * When was this event reported.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type Time_3 = number
/**
 * Sequence No
 *
 * Sequence No of this event, used to detect event loss. A 63 bit value with
 * range 0..2^63-1.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type SequenceNo_4 = number
/**
 * Additional Info
 *
 * The information related to this event.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type AdditionalInfo_5 = string
/**
 * The objectURN for Event
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10335'
