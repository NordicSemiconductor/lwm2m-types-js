/**
 * Pressure monitoring sensor
 *
 * The uCIFI water pressure monitoring sensor measures water pressure and help
 * identify water leaks in water distribution pipelines.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3427.xml
 *
 * ID: 3427
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Pressuremonitoringsensor_3427 = Readonly<
	Array<{
		'1': Pressure_1
		'2'?: Samplingperiod_2
		'3'?: Leakdetected_3
		'4'?: Hammereffectdetected_4
		'5'?: Minimummeasuredpressurevalue_5
		'6'?: Maximummeasuredpressurevalue_6
		'7'?: Minimumrangepressurevalue_7
		'8'?: Maximumrangepressurevalue_8
	}>
>
/**
 * Pressure
 *
 * Last or current pressure value measured by the sensor.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: Pa
 */
type Pressure_1 = number
/**
 * Sampling period
 *
 * Number of seconds between two measurement.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Samplingperiod_2 = number
/**
 * Leak detected
 *
 * Set to True if a water leak is detected by the sensor.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Leakdetected_3 = boolean
/**
 * Hammer effect detected
 *
 * Set to True if hammer effect is detected in the water pipeline.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type Hammereffectdetected_4 = boolean
/**
 * Minimum measured pressure value
 *
 * Minimum value measured by the sensor since power ON or reset.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: Pa
 */
type Minimummeasuredpressurevalue_5 = number
/**
 * Maximum measured pressure value
 *
 * Maximum value measured by the sensor since power ON or reset.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: Pa
 */
type Maximummeasuredpressurevalue_6 = number
/**
 * Minimum range pressure value
 *
 * Minimum value that can be measured by the sensor.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: Pa
 */
type Minimumrangepressurevalue_7 = number
/**
 * Maximum range pressure value
 *
 * Maximum value that can be measured by the sensor.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 * Units: Pa
 */
type Maximumrangepressurevalue_8 = number
/**
 * The objectURN for Pressure monitoring sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3427'
