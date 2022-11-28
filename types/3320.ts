/**
 * Percentage
 *
 * This IPSO object should can be used to report measurements relative to a
 * 0-100% scale. For example it could be used to measure the level of a liquid
 * in a vessel or container in units of %.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3320.xml
 *
 * ID: 3320
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Percentage_3320 = Readonly<
	Array<{
		'5700': SensorValue_5700
		'5518'?: Timestamp_5518
		'5601'?: MinMeasuredValue_5601
		'5602'?: MaxMeasuredValue_5602
		'5603'?: MinRangeValue_5603
		'5604'?: MaxRangeValue_5604
		'5701'?: SensorUnits_5701
		'5750'?: ApplicationType_5750
		'5821'?: CurrentCalibration_5821
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Sensor Value
 *
 * Last or Current Measured Value from the Sensor.
 *
 * ID: 5700
 * MultipleInstances: false
 * Mandatory: true
 */
type SensorValue_5700 = number
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
 * Measurement Quality Indicator
 *
 * Measurement quality indicator reported by a smart sensor. 0: UNCHECKED No
 * quality checks were done because they do not exist or can not be applied. 1:
 * REJECTED WITH CERTAINTY The measured value is invalid. 2: REJECTED WITH
 * PROBABILITY The measured value is likely invalid. 3: ACCEPTED BUT SUSPICIOUS
 * The measured value is likely OK. 4: ACCEPTED The measured value is OK. 5-15:
 * Reserved for future extensions. 16-23: Vendor specific measurement quality.
 *
 * ID: 6042
 * MultipleInstances: false
 * Mandatory: false
 */
type MeasurementQualityIndicator_6042 = number
/**
 * Measurement Quality Level
 *
 * Measurement quality level reported by a smart sensor. Quality level 100 means
 * that the measurement has fully passed quality check algorithms. Smaller
 * quality levels mean that quality has decreased and the measurement has only
 * partially passed quality check algorithms. The smaller the quality level, the
 * more caution should be used by the application when using the measurement.
 * When the quality level is 0 it means that the measurement should certainly be
 * rejected.
 *
 * ID: 6049
 * MultipleInstances: false
 * Mandatory: false
 */
type MeasurementQualityLevel_6049 = number
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
 * The objectURN for Percentage
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3320:1.1'
