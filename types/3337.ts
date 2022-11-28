/**
 * Positioner
 *
 * This IPSO object should be used with a generic position actuator with range
 * from 0 to 100%. This object optionally allows setting the transition time for
 * an operation that changes the position of the actuator, and for reading the
 * remaining time of the currently active transition.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3337.xml
 *
 * ID: 3337
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Positioner_3337 = Readonly<
	Array<{
		'5536': CurrentPosition_5536
		'5518'?: Timestamp_5518
		'5519'?: MinLimit_5519
		'5520'?: MaxLimit_5520
		'5537'?: TransitionTime_5537
		'5538'?: RemainingTime_5538
		'5601'?: MinMeasuredValue_5601
		'5602'?: MaxMeasuredValue_5602
		'5750'?: ApplicationType_5750
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Current Position
 *
 * Current position or desired position of a positioner actuator.
 *
 * ID: 5536
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type CurrentPosition_5536 = number
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
 * Min Limit
 *
 * The minimum value that can be measured by the sensor.
 *
 * ID: 5519
 * MultipleInstances: false
 * Mandatory: false
 */
type MinLimit_5519 = number
/**
 * Max Limit
 *
 * The maximum value that can be measured by the sensor.
 *
 * ID: 5520
 * MultipleInstances: false
 * Mandatory: false
 */
type MaxLimit_5520 = number
/**
 * Transition Time
 *
 * The time expected to move the actuator to the new position.
 *
 * ID: 5537
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type TransitionTime_5537 = number
/**
 * Remaining Time
 *
 * The time remaining in an operation.
 *
 * ID: 5538
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type RemainingTime_5538 = number
/**
 * Min Measured Value
 *
 * The minimum value measured by the sensor since power ON or reset.
 *
 * ID: 5601
 * MultipleInstances: false
 * Mandatory: false
 */
type MinMeasuredValue_5601 = number
/**
 * Max Measured Value
 *
 * The maximum value measured by the sensor since power ON or reset.
 *
 * ID: 5602
 * MultipleInstances: false
 * Mandatory: false
 */
type MaxMeasuredValue_5602 = number
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
 * The objectURN for Positioner
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3337:1.1'
