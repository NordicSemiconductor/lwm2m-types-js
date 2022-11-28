/**
 * On/Off switch
 *
 * This IPSO object should be used with an On/Off switch to report the state of
 * the switch.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3342.xml
 *
 * ID: 3342
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type On_Offswitch_3342 = Readonly<
	Array<{
		'5500': DigitalInputState_5500
		'5501'?: DigitalInputCounter_5501
		'5518'?: Timestamp_5518
		'5750'?: ApplicationType_5750
		'5852'?: Ontime_5852
		'5854'?: OffTime_5854
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Digital Input State
 *
 * The current state of a digital input.
 *
 * ID: 5500
 * MultipleInstances: false
 * Mandatory: true
 */
type DigitalInputState_5500 = boolean
/**
 * Digital Input Counter
 *
 * The cumulative value of active state detected.
 *
 * ID: 5501
 * MultipleInstances: false
 * Mandatory: false
 */
type DigitalInputCounter_5501 = number
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
 * The objectURN for On/Off switch
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3342:1.1'
