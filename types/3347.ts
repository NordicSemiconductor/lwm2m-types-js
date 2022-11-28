/**
 * Push button
 *
 * This IPSO object is used to report the state of a momentary action push
 * button control and to count the number of times the control has been operated
 * since the last observation.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3347.xml
 *
 * ID: 3347
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Pushbutton_3347 = Readonly<
	Array<{
		'5500': DigitalInputState_5500
		'5501'?: DigitalInputCounter_5501
		'5518'?: Timestamp_5518
		'5750'?: ApplicationType_5750
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
 * The objectURN for Push button
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3347:1.1'
