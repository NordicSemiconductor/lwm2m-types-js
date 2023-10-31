/**
 * Parking Sensor
 *
 * The uCIFI parking sensor provides actual and cumulated occupancy duration as
 * well as forbidden parking detection.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3431.xml
 *
 * ID: 3431
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type ParkingSensor_3431 = Readonly<
	Array<{
		'1': Occupancy_1
		'2'?: Duration_2
		'3'?: DailyDuration_3
		'4'?: Forbiddenparkingdetected_4
		'5'?: TypeofSensor_5
		'5518'?: Timestamp_5518
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Occupancy
 *
 * Set to True if the parking place is occupied. Set to False if the parking
 * place is free.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Occupancy_1 = boolean
/**
 * Duration
 *
 * Number of seconds since the parking place is occupied. If not occupied,
 * duration shows the duration of the last occupation.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Duration_2 = number
/**
 * Daily Duration
 *
 * Cumulated occupation time since beginning of the day.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type DailyDuration_3 = number
/**
 * Forbidden parking detected
 *
 * Set to True if the vehicle present on the parking place is not authorized.
 * Set to False if parking place is free or if the vehicle is authorized.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type Forbiddenparkingdetected_4 = boolean
/**
 * Type of Sensor
 *
 * Type of sensor (e.g. PIR, camera).
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type TypeofSensor_5 = string
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
 * The objectURN for Parking Sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3431:1.1'
