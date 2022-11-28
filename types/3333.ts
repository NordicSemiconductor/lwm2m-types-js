/**
 * Time
 *
 * This IPSO object is used to report the current time in seconds since January
 * 1, 1970 UTC. There is also a fractional time counter that has a range of less
 * than one second.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3333.xml
 *
 * ID: 3333
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Time_3333 = Readonly<
	Array<{
		'5506': CurrentTime_5506
		'5507'?: FractionalTime_5507
		'5750'?: ApplicationType_5750
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
	}>
>
/**
 * Current Time
 *
 * Unix Time. A signed integer representing the number of seconds since Jan 1st,
 * 1970 in the UTC time zone.
 *
 * ID: 5506
 * MultipleInstances: false
 * Mandatory: true
 */
type CurrentTime_5506 = number
/**
 * Fractional Time
 *
 * Fractional part of the time when sub-second precision is used (e.g., 0.23 for
 * 230 ms).
 *
 * ID: 5507
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type FractionalTime_5507 = number
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
 * The objectURN for Time
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3333:1.1'
