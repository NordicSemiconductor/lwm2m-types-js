/**
 * Actuation
 *
 * This IPSO object is dedicated to remote actuation such as ON/OFF action or
 * dimming. A multi-state output can also be described as a string. This is
 * useful to send pilot wire orders for instance. It also provides a resource to
 * reflect the time that the device has been switched on.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3306.xml
 *
 * ID: 3306
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Actuation_3306 = Readonly<
	Array<{
		'5850': On_Off_5850
		'5518'?: Timestamp_5518
		'5750'?: ApplicationType_5750
		'5851'?: Dimmer_5851
		'5852'?: Ontime_5852
		'5853'?: Multi_stateOutput_5853
		'6050'?: FractionalTimestamp_6050
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
 * Multi-state Output
 *
 * A string describing a state for multiple level output such as Pilot Wire.
 *
 * ID: 5853
 * MultipleInstances: false
 * Mandatory: false
 */
type Multi_stateOutput_5853 = string
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
 * The objectURN for Actuation
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3306:1.1'
