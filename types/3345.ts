/**
 * Multiple Axis Joystick
 *
 * This IPSO object can be used to report the position of a shuttle or joystick
 * control. A digital input is provided to report the state of an associated
 * push button.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3345.xml
 *
 * ID: 3345
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type MultipleAxisJoystick_3345 = Readonly<
	Array<{
		'5500'?: DigitalInputState_5500
		'5501'?: DigitalInputCounter_5501
		'5702'?: XValue_5702
		'5703'?: YValue_5703
		'5704'?: ZValue_5704
		'5750'?: ApplicationType_5750
	}>
>
/**
 * Digital Input State
 *
 * The current state of a digital input.
 *
 * ID: 5500
 * MultipleInstances: false
 * Mandatory: false
 */
type DigitalInputState_5500 = boolean
/**
 * Digital Input Counter
 *
 * The cumulative value of active state detected.
 *
 * ID: 5501
 * MultipleInstances: false
 * Mandatory: false
 */
type DigitalInputCounter_5501 = number
/**
 * X Value
 *
 * The measured value along the X axis.
 *
 * ID: 5702
 * MultipleInstances: false
 * Mandatory: false
 */
type XValue_5702 = number
/**
 * Y Value
 *
 * The measured value along the Y axis.
 *
 * ID: 5703
 * MultipleInstances: false
 * Mandatory: false
 */
type YValue_5703 = number
/**
 * Z Value
 *
 * The measured value along the Z axis.
 *
 * ID: 5704
 * MultipleInstances: false
 * Mandatory: false
 */
type ZValue_5704 = number
/**
 * Application Type
 *
 * The application type of the sensor or actuator as a string depending on the
 * use case.
 *
 * ID: 5750
 * MultipleInstances: false
 * Mandatory: false
 */
type ApplicationType_5750 = string
/**
 * The objectURN for Multiple Axis Joystick
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3345'
