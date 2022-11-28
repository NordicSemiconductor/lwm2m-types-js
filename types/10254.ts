/**
 * Current Loop Input
 *
 * This LWM2M Object provides a representation of a current loop sensor, which
 * indicates the value emitted by a current source.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10254.xml
 *
 * ID: 10254
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CurrentLoopInput_10254 = Readonly<
	Array<{
		'0': CurrentLoopInputCurrentValue_0
		'5601'?: MinMeasuredValue_5601
		'5602'?: MaxMeasuredValue_5602
		'5603'?: MinRangeValue_5603
		'5604'?: MaxRangeValue_5604
		'5701'?: SensorUnits_5701
		'5750'?: ApplicationType_5750
		'5821'?: CurrentCalibration_5821
	}>
>
/**
 * Current Loop Input Current Value
 *
 * The current value of the current loop input. A value of 0 indicates the
 * not-connected state and/or invalid (i.e. out-of-range) values.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 * Units: mA
 */
type CurrentLoopInputCurrentValue_0 = number
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
 * Sensor Units
 *
 * Measurement Units Definition.
 *
 * ID: 5701
 * MultipleInstances: false
 * Mandatory: false
 */
type SensorUnits_5701 = string
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
 * Current Calibration
 *
 * Read or Write the current calibration coefficient.
 *
 * ID: 5821
 * MultipleInstances: false
 * Mandatory: false
 */
type CurrentCalibration_5821 = number
/**
 * The objectURN for Current Loop Input
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10254'
