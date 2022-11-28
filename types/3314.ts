/**
 * Magnetometer
 *
 * This IPSO object can be used to represent a 1-3 axis magnetometer with
 * optional compass direction.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3314.xml
 *
 * ID: 3314
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Magnetometer_3314 = Readonly<
	Array<{
		'5702': XValue_5702
		'5518'?: Timestamp_5518
		'5701'?: SensorUnits_5701
		'5703'?: YValue_5703
		'5704'?: ZValue_5704
		'5705'?: CompassDirection_5705
		'5750'?: ApplicationType_5750
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * X Value
 *
 * The measured value along the X axis.
 *
 * ID: 5702
 * MultipleInstances: false
 * Mandatory: true
 */
type XValue_5702 = number
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
 * Compass Direction
 *
 * The measured compass direction.
 *
 * ID: 5705
 * MultipleInstances: false
 * Mandatory: false
 * Units: deg
 */
type CompassDirection_5705 = number
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
 * The objectURN for Magnetometer
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3314:1.1'
