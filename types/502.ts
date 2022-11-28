/**
 * CO Detector
 *
 * This is an alarm that should be raised if the sensor detects a higher than
 * threshold CO level.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/502.xml
 *
 * ID: 502
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CODetector_502 = Readonly<
	Array<{
		'1': CODetected_1
		'3': COValue_3
		'0'?: COSensorLocationTag_0
		'2'?: AmbientCOValue_2
		'4'?: MinCORangeValue_4
		'5'?: MaxCORangeValue_5
		'5514'?: Latitude_5514
		'5515'?: Longitude_5515
		'6'?: CODetectionAccuracy_6
		'6039'?: Altitude_6039
		'6044'?: BatteryPercentage_6044
		'6048'?: Alarmloudness_6048
		'7'?: MinimumMeasuredCOValue_7
		'8'?: MaximumMeasuredCOValue_8
		'9'?: UpperCOThreshold_9
	}>
>
/**
 * CO Detected
 *
 * 0 = false (CO NOT detected), 1 = true (CO Detected)
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type CODetected_1 = boolean
/**
 * CO Value
 *
 * Last or Current Measured CO Value (in ppm) from the Sensor.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 * Units: ppm
 */
type COValue_3 = number
/**
 * CO Sensor Location Tag
 *
 * Verbose identification of the location of the CO sensor.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: false
 */
type COSensorLocationTag_0 = string
/**
 * Ambient CO Value
 *
 * CO value (in ppm) received for the area.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type AmbientCOValue_2 = number
/**
 * Min CO Range Value
 *
 * The minimum value that can be measured by the sensor (in ppm).
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type MinCORangeValue_4 = number
/**
 * Max CO Range Value
 *
 * The maximum value that can be measured by the sensor.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type MaxCORangeValue_5 = number
/**
 * Latitude
 *
 * The decimal notation of latitude, e.g. -43.5723 (World Geodetic System 1984).
 *
 * ID: 5514
 * MultipleInstances: false
 * Mandatory: false
 */
type Latitude_5514 = string
/**
 * Longitude
 *
 * The decimal notation of longitude, e.g. 153.21760 (World Geodetic System
 * 1984).
 *
 * ID: 5515
 * MultipleInstances: false
 * Mandatory: false
 */
type Longitude_5515 = string
/**
 * CO Detection Accuracy
 *
 * Indicate range of the accuracy for the temperature Sensor.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type CODetectionAccuracy_6 = number
/**
 * Altitude
 *
 * Altitude above sea level in meters.
 *
 * ID: 6039
 * MultipleInstances: false
 * Mandatory: false
 * Units: m
 */
type Altitude_6039 = number
/**
 * Battery Percentage
 *
 * Current remaining battery level.
 *
 * ID: 6044
 * MultipleInstances: false
 * Mandatory: false
 */
type BatteryPercentage_6044 = number
/**
 * Alarm loudness
 *
 * Indicate the loudness of the alarm.
 *
 * ID: 6048
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type Alarmloudness_6048 = number
/**
 * Minimum Measured CO Value
 *
 * The minimum CO value (in ppm) measured by the sensor since power ON or reset.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type MinimumMeasuredCOValue_7 = number
/**
 * Maximum Measured CO Value
 *
 * The maximum CO value measured (in ppm) by the sensor since power ON or reset
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type MaximumMeasuredCOValue_8 = number
/**
 * Upper CO Threshold
 *
 * Indicate the Upper threshold for the CO Value (in ppm).
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type UpperCOThreshold_9 = number
/**
 * The objectURN for CO Detector
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '502'
