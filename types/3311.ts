/**
 * Light Control
 *
 * This Object is used to control a light source, such as a LED or other light.
 * It allows a light to be turned on or off and its dimmer setting to be control
 * as a % between 0 and 100. An optional colour setting enables a string to be
 * used to indicate the desired colour.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3311.xml
 *
 * ID: 3311
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type LightControl_3311 = Readonly<
	Array<{
		'5850': On_Off_5850
		'5701'?: SensorUnits_5701
		'5706'?: Colour_5706
		'5750'?: ApplicationType_5750
		'5805'?: Cumulativeactivepower_5805
		'5820'?: Powerfactor_5820
		'5851'?: Dimmer_5851
		'5852'?: Ontime_5852
	}>
>
/**
 * On/Off
 *
 * On/off control. Boolean value where True is On and False is Off.
 *
 * ID: 5850
 * MultipleInstances: false
 * Mandatory: true
 */
type On_Off_5850 = boolean
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
 * Cumulative active power
 *
 * The cumulative active power since the last cumulative energy reset or device
 * start.
 *
 * ID: 5805
 * MultipleInstances: false
 * Mandatory: false
 * Units: Wh
 */
type Cumulativeactivepower_5805 = number
/**
 * Power factor
 *
 * If applicable, the power factor of the current consumption.
 *
 * ID: 5820
 * MultipleInstances: false
 * Mandatory: false
 */
type Powerfactor_5820 = number
/**
 * Dimmer
 *
 * This resource represents a dimmer setting, which has an Integer value between
 * 0 and 100 as a percentage.
 *
 * ID: 5851
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Dimmer_5851 = number
/**
 * On time
 *
 * The time in seconds that the device has been on. Writing a value of 0 resets
 * the counter.
 *
 * ID: 5852
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Ontime_5852 = number
/**
 * The objectURN for Light Control
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3311'
