/**
 * Buzzer
 *
 * This IPSO object should be used to actuate an audible alarm such as a buzzer,
 * beeper, or vibration alarm. There is a dimmer control for setting the
 * relative level of the alarm, and an optional duration control to limit the
 * length of time the alarm sounds when turned on. Each time "true" is written
 * to the On/Off resource, the alarm will sound again for the configured
 * duration. If no duration is programmed or the setting is "false", writing a
 * "true" to the On/Off resource will result in the alarm sounding continuously
 * until a "false" is written to the On/Off resource.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3338.xml
 *
 * ID: 3338
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Buzzer_3338 = Readonly<
	Array<{
		'5525': MinimumOff_time_5525
		'5850': On_Off_5850
		'5518'?: Timestamp_5518
		'5521'?: DelayDuration_5521
		'5548'?: Level_5548
		'5750'?: ApplicationType_5750
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Minimum Off-time
 *
 * The duration of the rearm delay (i.e. the delay from the end of one cycle
 * until the beginning of the next, the inhibit time).
 *
 * ID: 5525
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type MinimumOff_time_5525 = number
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
 * Delay Duration
 *
 * The duration of the time delay.
 *
 * ID: 5521
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type DelayDuration_5521 = number
/**
 * Level
 *
 * Used to represent a level control such as audio volume.
 *
 * ID: 5548
 * MultipleInstances: false
 * Mandatory: false
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
 * The objectURN for Buzzer
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3338:1.1'
