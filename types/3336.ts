/**
 * Location
 *
 * This IPSO object represents GPS coordinates. This object is compatible with
 * the LwM2M management object for location, but uses reusable resources.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3336.xml
 *
 * ID: 3336
 * LWM2MVersion: 1.0
 * ObjectVersion: 2.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Location_3336 = Readonly<
	Array<{
		'6051': NumericLatitude_6051
		'6052': NumericLongitude_6052
		'5517'?: Velocity_5517
		'5518'?: Timestamp_5518
		'5705'?: CompassDirection_5705
		'5750'?: ApplicationType_5750
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
		'6053'?: NumericUncertainty_6053
	}>
>
/**
 * Numeric Latitude
 *
 * The decimal notation of latitude, e.g. -43.5723 (World Geodetic System 1984).
 *
 * ID: 6051
 * MultipleInstances: false
 * Mandatory: true
 * Units: lat
 */
type NumericLatitude_6051 = number
/**
 * Numeric Longitude
 *
 * The decimal notation of longitude, e.g. 153.21760 (World Geodetic System
 * 1984).
 *
 * ID: 6052
 * MultipleInstances: false
 * Mandatory: true
 * Units: lon
 */
type NumericLongitude_6052 = number
/**
 * Velocity
 *
 * The velocity of the device as defined in 3GPP 23.032 GAD specification. This
 * set of values may not be available if the device is static.
 *
 * ID: 5517
 * MultipleInstances: false
 * Mandatory: false
 */
type Velocity_5517 = string
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
 * Numeric Uncertainty
 *
 * The accuracy of the position in meters.
 *
 * ID: 6053
 * MultipleInstances: false
 * Mandatory: false
 * Units: m
 */
type NumericUncertainty_6053 = number
/**
 * The objectURN for Location
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3336:2.0'
