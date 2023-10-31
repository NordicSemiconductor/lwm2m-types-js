/**
 * Tilt sensor
 *
 * The uCIFI tilt sensor provides the angle between the object's internal
 * vertical and the perpendicular to the earth.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3429.xml
 *
 * ID: 3429
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Tiltsensor_3429 = Readonly<
	Array<{
		'1': Angle_1
		'2'?: MinimummeasuredAngle_2
		'3'?: Maximummeasuredangle_3
		'5'?: Outofpositionthreshold_5
		'6'?: Outofposition_6
		'5518'?: Timestamp_5518
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Angle
 *
 * Angle between the internal vertical line and the perpendicular to earth.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: rad
 */
type Angle_1 = number
/**
 * Minimum measured Angle
 *
 * Minimum angle measured by the tilt sensor since last reset or since power ON
 * if no reset.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: rad
 */
type MinimummeasuredAngle_2 = number
/**
 * Maximum measured angle
 *
 * Maximum angle measured by the tilt sensor since last reset or since power ON
 * if no reset.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: rad
 */
type Maximummeasuredangle_3 = number
/**
 * Out of position threshold
 *
 * The angle above which the device triggers an out of position event.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: rad
 */
type Outofpositionthreshold_5 = number
/**
 * Out of position
 *
 * Set to True if the angle is above the out of position threshold.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Outofposition_6 = boolean
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
 * The objectURN for Tilt sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3429:1.1'
