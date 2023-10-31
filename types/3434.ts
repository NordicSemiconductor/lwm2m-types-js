/**
 * People counter
 *
 * The uCIFI people counter provides people counting information using Bluetooth
 * beacon or any other method.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3434.xml
 *
 * ID: 3434
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Peoplecounter_3434 = Readonly<
	Array<{
		'1': Actualnumberofpersons_1
		'2'?: Dailynumberofpersons_2
		'3'?: Cumulatednumberofpersons_3
		'5'?: Dailynumberofpassages_5
		'6'?: Cumulatednumberofpassages_6
		'8'?: Typeofsensor_8
		'5518'?: Timestamp_5518
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Actual number of persons
 *
 * Number of persons currently identified by the device.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Actualnumberofpersons_1 = number
/**
 * Daily number of persons
 *
 * Cumulated number of persons detected by the device since beginning of the
 * day.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type Dailynumberofpersons_2 = number
/**
 * Cumulated number of persons
 *
 * Cumulated number of persons detected by the device since last reset.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Cumulatednumberofpersons_3 = number
/**
 * Daily number of passages
 *
 * Number of passages (same people could be counted multiple times if identified
 * several times) today.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Dailynumberofpassages_5 = number
/**
 * Cumulated number of passages
 *
 * Cumulated number of passages since last reset.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Cumulatednumberofpassages_6 = number
/**
 * Type of sensor
 *
 * Type of sensor (e.g. Bluetooth beacon, WIFI detector).
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type Typeofsensor_8 = string
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
 * The objectURN for People counter
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3434:1.1'
