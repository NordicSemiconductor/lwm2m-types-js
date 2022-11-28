/**
 * Current Loop Output
 *
 * This LWM2M Object provides a representation of a current loop source, which
 * may be used to carry control signals.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10258.xml
 *
 * ID: 10258
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CurrentLoopOutput_10258 = Readonly<
	Array<{
		'0': CurrentLoopOutputCurrentValue_0
		'5603'?: MinRangeValue_5603
		'5604'?: MaxRangeValue_5604
		'5701'?: SensorUnits_5701
		'5750'?: ApplicationType_5750
		'5821'?: CurrentCalibration_5821
	}>
>
/**
 * Current Loop Output Current Value
 *
 * The current value of the current loop output.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 * Units: mA
 */
type CurrentLoopOutputCurrentValue_0 = number
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
 * The objectURN for Current Loop Output
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10258'
