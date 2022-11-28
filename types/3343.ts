/**
 * Dimmer
 *
 * This IPSO object should be used with a dimmer or level control to report the
 * state of the control.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3343.xml
 *
 * ID: 3343
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Dimmer_3343 = Readonly<
	Array<{
		'5548': Level_5548
		'5750'?: ApplicationType_5750
		'5852'?: Ontime_5852
		'5854'?: OffTime_5854
	}>
>
/**
 * Level
 *
 * Used to represent a level control such as audio volume.
 *
 * ID: 5548
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type Level_5548 = number
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
 * Off Time
 *
 * The time in seconds in the off state. Writing a value of 0 resets the
 * counter.
 *
 * ID: 5854
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type OffTime_5854 = number
/**
 * The objectURN for Dimmer
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3343'
