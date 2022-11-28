/**
 * Analog Output
 *
 * This IPSO object is a generic object that can be used with any kind of analog
 * output interface.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3203.xml
 *
 * ID: 3203
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type AnalogOutput_3203 = Readonly<
	Array<{
		'5650': AnalogOutputCurrentValue_5650
		'5518'?: Timestamp_5518
		'5603'?: MinRangeValue_5603
		'5604'?: MaxRangeValue_5604
		'5750'?: ApplicationType_5750
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Analog Output Current Value
 *
 * The current value of the analog output.
 *
 * ID: 5650
 * MultipleInstances: false
 * Mandatory: true
 */
type AnalogOutputCurrentValue_5650 = number
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
 * Min Range Value
 *
 * The minimum value that can be measured by the sensor.
 *
 * ID: 5603
 * MultipleInstances: false
 * Mandatory: false
 */
type MinRangeValue_5603 = number
/**
 * Max Range Value
 *
 * The maximum value that can be measured by the sensor.
 *
 * ID: 5604
 * MultipleInstances: false
 * Mandatory: false
 */
type MaxRangeValue_5604 = number
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
 * The objectURN for Analog Output
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3203:1.1'
