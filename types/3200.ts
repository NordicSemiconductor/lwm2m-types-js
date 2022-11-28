/**
 * Digital Input
 *
 * Generic digital input for non-specific sensors
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3200.xml
 *
 * ID: 3200
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type DigitalInput_3200 = Readonly<
	Array<{
		'5500': DigitalInputState_5500
		'5501'?: DigitalInputCounter_5501
		'5502'?: DigitalInputPolarity_5502
		'5503'?: DigitalInputDebounce_5503
		'5504'?: DigitalInputEdgeSelection_5504
		'5518'?: Timestamp_5518
		'5750'?: ApplicationType_5750
		'5751'?: SensorType_5751
		'6050'?: FractionalTimestamp_6050
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
 * Digital Input Polarity
 *
 * The polarity of the digital input as a Boolean (False = Normal, True =
 * Reversed).
 *
 * ID: 5502
 * MultipleInstances: false
 * Mandatory: false
 */
type DigitalInputPolarity_5502 = boolean
/**
 * Digital Input Debounce
 *
 * The debounce period in ms.
 *
 * ID: 5503
 * MultipleInstances: false
 * Mandatory: false
 * Units: ms
 */
type DigitalInputDebounce_5503 = number
/**
 * Digital Input Edge Selection
 *
 * The edge selection as an integer (1 = Falling edge, 2 = Rising edge, 3 = Both
 * Rising and Falling edge).
 *
 * ID: 5504
 * MultipleInstances: false
 * Mandatory: false
 */
type DigitalInputEdgeSelection_5504 = number
/**
 * Timestamp
 *
 * The timestamp of when the measurement was performed.
 *
 * ID: 5518
 * MultipleInstances: false
 * Mandatory: false
 */
type Timestamp_5518 = number
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
 * Sensor Type
 *
 * The type of the sensor (for instance PIR type).
 *
 * ID: 5751
 * MultipleInstances: false
 * Mandatory: false
 */
type SensorType_5751 = string
/**
 * Fractional Timestamp
 *
 * Fractional part of the timestamp when sub-second precision is used (e.g.,
 * 0.23 for 230 ms).
 *
 * ID: 6050
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type FractionalTimestamp_6050 = number
/**
 * The objectURN for Digital Input
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3200:1.1'
