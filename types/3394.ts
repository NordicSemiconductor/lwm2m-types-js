/**
 * oA Logical Presence Sensor
 *
 * The 'oA Logical Presence Sensor' represents the logical part of a presence
 * sensor. The corresponding physical device is a sensor that detects presence
 * in its detection area. \nThe Object supports two states 'presence' and
 * 'absence'.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3394.xml
 *
 * ID: 3394
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oALogicalPresenceSensor_3394 = Readonly<
	Array<{
		'5500': DigitalInputState_5500
		'903': ApplicationGroupID_903
		'904': StatusResendTime_904
		'909': ExecutingObject_909
		'919': StatusReportStructureID_919
		'4001'?: ObjectVersion_4001
		'5903'?: BusytoCleardelay_5903
		'5904'?: CleartoBusydelay_5904
		'901'?: DocumentaryDescription_901
		'905'?: DebugModeEnabled_905
		'906'?: InjectTestEvent_906
		'924'?: ObjectEnabled_924
	}>
>
/**
 * Digital Input State
 *
 * The current state of a digital input.
 *
 * ID: 5500
 * MultipleInstances: false
 * Mandatory: true
 */
type DigitalInputState_5500 = boolean
/**
 * Application Group ID
 *
 * The application group ID that the logical object is part of. This ID will
 * define the application group the status reports are sent to. It is internally
 * used as a pointer to the Group Object instance that hosts all the Group
 * configurations.
 *
 * ID: 903
 * MultipleInstances: false
 * Mandatory: true
 */
type ApplicationGroupID_903 = number
/**
 * Status Resend Time
 *
 * The time specified as status resend time is used to resend the actual status
 * to the application group the object is a member of, even if nothing
 * changed.\nThe status resend time is restarted after every event. The actual
 * interval is a random time with the maximum duration given by this resource.
 * Randomization helps to avoid massive ongoing message collisions after system
 * power up.\nFor example: Status resend time is set to 10 seconds;\n* 00:00
 * status is sent\n* 00:05 status changes and is sent immediatly\n* 00:15 (or
 * before, depending on the randomization) status is sent even though it did not
 * change
 *
 * ID: 904
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type StatusResendTime_904 = number
/**
 * Executing Object
 *
 * Link to the Object Instance in CoRE Link Format
 * [RFC6690](https://tools.ietf.org/html/rfc6690)
 *
 * ID: 909
 * MultipleInstances: false
 * Mandatory: true
 */
type ExecutingObject_909 = string
/**
 * Status Report Structure ID
 *
 * The ID of the status resource structure that is used to code the cyclic
 * status report. See object 4012 'oA Status Report Structure' for more
 * information
 *
 * ID: 919
 * MultipleInstances: false
 * Mandatory: true
 */
type StatusReportStructureID_919 = number
/**
 * ObjectVersion
 *
 * LWM2M Object versioning label.
 *
 * ID: 4001
 * MultipleInstances: false
 * Mandatory: false
 */
type ObjectVersion_4001 = string
/**
 * Busy to Clear delay
 *
 * Delay from the detection state to the clear state in ms.
 *
 * ID: 5903
 * MultipleInstances: false
 * Mandatory: false
 * Units: ms
 */
type BusytoCleardelay_5903 = number
/**
 * Clear to Busy delay
 *
 * Delay from the clear state to the busy state in ms.
 *
 * ID: 5904
 * MultipleInstances: false
 * Mandatory: false
 * Units: ms
 */
type CleartoBusydelay_5904 = number
/**
 * Documentary Description
 *
 * Resource to hold a documentary text description of the object.
 *
 * ID: 901
 * MultipleInstances: false
 * Mandatory: false
 */
type DocumentaryDescription_901 = string
/**
 * Debug Mode Enabled
 *
 * Enables the object test mode. The physical representation of the object will
 * be disabled. Stimuli can be injected to test the object remotely using inject
 * test event.
 *
 * ID: 905
 * MultipleInstances: false
 * Mandatory: false
 */
type DebugModeEnabled_905 = boolean
/**
 * Inject Test Event
 *
 * Defines the test events to be injected into the system when debug mode is
 * enabled. Event definition is vendor specific.
 *
 * ID: 906
 * MultipleInstances: false
 * Mandatory: false
 */
type InjectTestEvent_906 = boolean
/**
 * Object Enabled
 *
 * This resource allows to disable an object instance. \nIf an object instance
 * is disabled it does process incoming events but does not create outgoing
 * events.
 *
 * ID: 924
 * MultipleInstances: false
 * Mandatory: false
 */
type ObjectEnabled_924 = boolean
/**
 * The objectURN for oA Logical Presence Sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3394@1.1'
