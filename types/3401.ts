/**
 * oA Physical Push-Button Sensor
 *
 * The 'oA_Physical_Push-Button_Sensor' represents the physical part of a
 * push-button sensor. All logical push-button sensors (object instances of 'oA
 * Push-Button Sensor') are mapped to one physical push-button sensor.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3401.xml
 *
 * ID: 3401
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oAPhysicalPush_ButtonSensor_3401 = Readonly<
	Array<{
		'201': Push_ButtonStatusValue_201
		'907': ErrorStatus_907
		'908': MountingLocation_908
		'5502': DigitalInputPolarity_5502
		'5503': DigitalInputDebounce_5503
		'901'?: DocumentaryDescription_901
		'4001'?: ObjectVersion_4001
	}>
>
/**
 * Push-Button Status Value
 *
 * This Resource represents the current PRESSED/RELEASED state of the
 * push-button.\n* 0: RELEASED - the switch/push-button is pressed or contact is
 * opened\n* 1: PRESSED - the switch/push-button is pressed or contact is
 * closed\n* 2: FAULT - the contact is in a faulty condition (e.g. stuck or
 * non-reactive)
 *
 * ID: 201
 * MultipleInstances: false
 * Mandatory: true
 */
type Push_ButtonStatusValue_201 = number
/**
 * Error Status
 *
 * Error status is a bit coded value that shows all current errors on the
 * object. The error status changes as soon as a new error occurs or an old one
 * is resolved. Bitwise: 0 (LSB): Hardware_Error, 1: Quality_Error, 2:
 * Invalid_State
 *
 * ID: 907
 * MultipleInstances: false
 * Mandatory: true
 */
type ErrorStatus_907 = number
/**
 * Mounting Location
 *
 * Describes the location of the device within the building. The content of the
 * string is site specific.
 *
 * ID: 908
 * MultipleInstances: false
 * Mandatory: true
 */
type MountingLocation_908 = string
/**
 * Digital Input Polarity
 *
 * The polarity of the digital input as a Boolean (False = Normal, True =
 * Reversed).
 *
 * ID: 5502
 * MultipleInstances: false
 * Mandatory: true
 */
type DigitalInputPolarity_5502 = boolean
/**
 * Digital Input Debounce
 *
 * The debounce period in ms.
 *
 * ID: 5503
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type DigitalInputDebounce_5503 = number
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
 * The objectURN for oA Physical Push-Button Sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3401@1.1'
