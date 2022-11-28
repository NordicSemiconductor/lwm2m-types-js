/**
 * Digital Output
 *
 * Generic digital output for non-specific actuators
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3201.xml
 *
 * ID: 3201
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type DigitalOutput_3201 = Readonly<
	Array<{
		'5550': DigitalOutputState_5550
		'5518'?: Timestamp_5518
		'5551'?: DigitalOutputPolarity_5551
		'5750'?: ApplicationType_5750
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Digital Output State
 *
 * The current state of a digital output.
 *
 * ID: 5550
 * MultipleInstances: false
 * Mandatory: true
 */
type DigitalOutputState_5550 = boolean
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
 * Digital Output Polarity
 *
 * The polarity of the digital output as a Boolean (False = Normal, True =
 * Reversed).
 *
 * ID: 5551
 * MultipleInstances: false
 * Mandatory: false
 */
type DigitalOutputPolarity_5551 = boolean
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
 * The objectURN for Digital Output
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3201:1.1'
