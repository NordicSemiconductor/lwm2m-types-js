/**
 * Presence
 *
 * Presence sensor with digital sensing, optional delay parameters
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3302.xml
 *
 * ID: 3302
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Presence_3302 = Readonly<
	Array<{
		'5500': DigitalInputState_5500
		'5501'?: DigitalInputCounter_5501
		'5518'?: Timestamp_5518
		'5750'?: ApplicationType_5750
		'5751'?: SensorType_5751
		'5903'?: BusytoCleardelay_5903
		'5904'?: CleartoBusydelay_5904
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Digital Input State
 *
 * The current state of a digital input.
 *
 * ID: 5500
 * MultipleInstances: false
 * Mandatory: true
 */
type DigitalInputState_5500 = boolean
/**
 * Digital Input Counter
 *
 * The cumulative value of active state detected.
 *
 * ID: 5501
 * MultipleInstances: false
 * Mandatory: false
 */
type DigitalInputCounter_5501 = number
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
 * Sensor Type
 *
 * The type of the sensor (for instance PIR type).
 *
 * ID: 5751
 * MultipleInstances: false
 * Mandatory: false
 */
type SensorType_5751 = string
/**
 * Busy to Clear delay
 *
 * Delay from the detection state to the clear state in ms.
 *
 * ID: 5903
 * MultipleInstances: false
 * Mandatory: false
 * Units: ms
 */
type BusytoCleardelay_5903 = number
/**
 * Clear to Busy delay
 *
 * Delay from the clear state to the busy state in ms.
 *
 * ID: 5904
 * MultipleInstances: false
 * Mandatory: false
 * Units: ms
 */
type CleartoBusydelay_5904 = number
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
 * The objectURN for Presence
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3302:1.1'
