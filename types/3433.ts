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
 * ObjectVersion: 1.0
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
 * The objectURN for Noise sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3433'
