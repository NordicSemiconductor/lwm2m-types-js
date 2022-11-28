/**
 * Set Point
 *
 * This IPSO object should be used to set a desired value to a controller, such
 * as a thermostat. A special resource is added to set the colour of an object.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3308.xml
 *
 * ID: 3308
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type SetPoint_3308 = Readonly<
	Array<{
		'5900': SetPointValue_5900
		'5518'?: Timestamp_5518
		'5701'?: SensorUnits_5701
		'5706'?: Colour_5706
		'5750'?: ApplicationType_5750
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Set Point Value
 *
 * The setpoint value.
 *
 * ID: 5900
 * MultipleInstances: false
 * Mandatory: true
 */
type SetPointValue_5900 = number
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
 * Colour
 *
 * A string representing a value in some color space.
 *
 * ID: 5706
 * MultipleInstances: false
 * Mandatory: false
 */
type Colour_5706 = string
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
 * The objectURN for Set Point
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3308:1.1'
