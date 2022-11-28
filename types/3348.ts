/**
 * Multi-state Selector
 *
 * This IPSO object is used to represent the state of a Multi-state selector
 * switch with a number of fixed positions.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3348.xml
 *
 * ID: 3348
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Multi_stateSelector_3348 = Readonly<
	Array<{
		'5547': Multi_stateInput_5547
		'5518'?: Timestamp_5518
		'5750'?: ApplicationType_5750
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Multi-state Input
 *
 * The current state of a Multi-state input or selector.
 *
 * ID: 5547
 * MultipleInstances: false
 * Mandatory: true
 */
type Multi_stateInput_5547 = number
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
 * The objectURN for Multi-state Selector
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3348:1.1'
