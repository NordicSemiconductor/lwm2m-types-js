/**
 * oA Logical Push-Button Sensor
 *
 * The 'oA Logical Push-Button Sensor' represents the logical part of a
 * standard, normally open, push-button input. The corresponding physical device
 * is a button with a spring that returns the button to the un-pushed state once
 * it is released.\nThe Object supports several events such as 'click', 'hold',
 * 'double-click' and 'release'. It also indicates if the button is 'stuck'. For
 * physical devices with multiple push-button inputs, an instance of this Object
 * is required to map each input.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3395.xml
 *
 * ID: 3395
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oALogicalPush_ButtonSensor_3395 = Readonly<
	Array<{
		'202': Push_ButtonEventValue_202
		'203': SingleClickTime_203
		'903': ApplicationGroupID_903
		'904': StatusResendTime_904
		'909': ExecutingObject_909
		'919': StatusReportStructureID_919
		'204'?: HoldRepeatTime_204
		'901'?: DocumentaryDescription_901
		'905'?: DebugModeEnabled_905
		'906'?: InjectTestEvent_906
		'924'?: ObjectEnabled_924
		'4001'?: ObjectVersion_4001
	}>
>
/**
 * Push-Button Event Value
 *
 * This Resource represents the last generated Event by the push-button:\n* 0:
 * RELEASE - push-button was released\n* 1: CLICK - single click detected\n* 2:
 * HOLD - long press/hold detected\n* 3: DOUBLE-CLICK - two sequential clicks
 * detected\n* 255: STUCK - button was detected as stuck.\n\t\t\t\n*Note* The
 * Push-Button Event allows to filter part of the behaviour of the press/release
 * actions from a user. Instead of reporting all press/release operations, this
 * resource only reports a new value when a specific operation occurs.
 *
 * ID: 202
 * MultipleInstances: false
 * Mandatory: true
 */
type Push_ButtonEventValue_202 = number
/**
 * Single Click Time
 *
 * Defines the maximum period of time the push-button can be pressed, in order
 * to be recognized as 'click'. If the button is pressed longer than this time
 * period, it is recognized as 'hold' press. See Resource description of
 * Push-Button Event for details.\n*Note* the maximum limit for this value is
 * 60s, as any press longer than that is considered 'stuck button'.
 *
 * ID: 203
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type SingleClickTime_203 = number
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
 * Hold Repeat Time
 *
 * Defines the period of time between repetitions of push-button event reporting
 * messages with 'hold' value. After the 'hold' event is triggered and the first
 * message is sent, the 'hold' message is repeated every time the 'Hold Repeat
 * Time' is past, and until a 'release' or 'button stuck' state is reached.This
 * value should always be higher than 'Single Click Time' and small intervals
 * may significantly affect network performance.\n*Note* the maximum limit for
 * this value is 60s, as any press longer than that is considered 'stuck
 * button'.
 *
 * ID: 204
 * MultipleInstances: false
 * Mandatory: false
 * Units: ms
 */
type HoldRepeatTime_204 = number
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
type InjectTestEvent_906 = number
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
 * The objectURN for oA Logical Push-Button Sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3395@1.1'
