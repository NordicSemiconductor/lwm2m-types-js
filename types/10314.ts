/**
 * Particulates
 *
 * This object should be used to report the concentration of particulates, for
 * example a measurement of a particulates air quality sensor. It also provides
 * resources for minimum/maximum measured values and the minimum/maximum range
 * that can be measured by the particulate sensor. An example measurement unit
 * is microgrammes per cubic metre ug/m3.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10314.xml
 *
 * ID: 10314
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Particulates_10314 = Readonly<
	Array<{
		'5700': SensorValue_5700
		'6043': MeasuredParticleSize_6043
		'5601'?: MinMeasuredValue_5601
		'5602'?: MaxMeasuredValue_5602
		'5604'?: MaxRangeValue_5604
		'5701'?: SensorUnits_5701
		'5750'?: ApplicationType_5750
	}>
>
/**
 * Sensor Value
 *
 * Last or Current Measured Value from the Sensor.
 *
 * ID: 5700
 * MultipleInstances: false
 * Mandatory: true
 */
type SensorValue_5700 = number
/**
 * Measured Particle Size
 *
 * Size of the particle that the sensor is measuring
 *
 * ID: 6043
 * MultipleInstances: false
 * Mandatory: true
 * Units: m
 */
type MeasuredParticleSize_6043 = number
/**
 * Min Measured Value
 *
 * The minimum value measured by the sensor since power ON or reset.
 *
 * ID: 5601
 * MultipleInstances: false
 * Mandatory: false
 */
type MinMeasuredValue_5601 = number
/**
 * Max Measured Value
 *
 * The maximum value measured by the sensor since power ON or reset.
 *
 * ID: 5602
 * MultipleInstances: false
 * Mandatory: false
 */
type MaxMeasuredValue_5602 = number
/**
 * Max Range Value
 *
 * The maximum value that can be measured by the sensor.
 *
 * ID: 5604
 * MultipleInstances: false
 * Mandatory: false
 */
type MaxRangeValue_5604 = number
/**
 * Sensor Units
 *
 * Measurement Units Definition.
 *
 * ID: 5701
 * MultipleInstances: false
 * Mandatory: false
 */
type SensorUnits_5701 = string
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
 * The objectURN for Particulates
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10314'
