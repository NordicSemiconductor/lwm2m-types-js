/**
 * Noise sensor
 *
 * The uCIFI noise sensor reports a noise measurement in decibel. It also
 * provides resources for minimum/maximum measured values and the
 * minimum/maximum range that can be measured by the noise sensor and some
 * specific alarms resulting from noise analysis by the device.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3433.xml
 *
 * ID: 3433
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Noisesensor_3433 = Readonly<
	Array<{
		'3': SensorValue_3
		'1'?: Gunshotdetected_1
		'2'?: Abnormalnoisedetected_2
		'4'?: Minimummeasuredvalue_4
		'5'?: Maximummeasuredvalue_5
		'6'?: Minimumrangevalue_6
		'7'?: Maximumrangevalue_7
		'5518'?: Timestamp_5518
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Sensor Value
 *
 * Last or current measured value from the Sensor.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type SensorValue_3 = number
/**
 * Gunshot detected
 *
 * Set to True when a gunshot is detected.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type Gunshotdetected_1 = boolean
/**
 * Abnormal noise detected
 *
 * Set to True when an abnormal noise is detected.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type Abnormalnoisedetected_2 = boolean
/**
 * Minimum measured value
 *
 * Minimum value measured by the sensor since power ON or reset.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type Minimummeasuredvalue_4 = number
/**
 * Maximum measured value
 *
 * Maximum value measured by the sensor since power ON or reset.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type Maximummeasuredvalue_5 = number
/**
 * Minimum range value
 *
 * Minimum value that can be measured by the sensor.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type Minimumrangevalue_6 = number
/**
 * Maximum range value
 *
 * Maximum value that can be measured by the sensor.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type Maximumrangevalue_7 = number
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
 * The objectURN for Noise sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3433:1.1'
