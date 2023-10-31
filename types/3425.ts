/**
 * Irrigation valve
 *
 * The uCIFI irrigation valve provides a way to control and monitor an
 * irrigation valve.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3425.xml
 *
 * ID: 3425
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Irrigationvalve_3425 = Readonly<
	Array<{
		'1'?: Defaultstatus_1
		'2'?: Status_2
		'3'?: Command_3
		'4'?: Commandinaction_4
		'5'?: SchedulerID_5
		'6'?: Invalidscheduler_6
		'5518'?: Timestamp_5518
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Default status
 *
 * Default status (level of opening of the valve from 0 to 100%) that is applied
 * when the device is powered ON.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Defaultstatus_1 = number
/**
 * Status
 *
 * Actual level of opening of the valve (from 0 to 100%).
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Status_2 = number
/**
 * Command
 *
 * Command (e.g. manual override, scheduler) sent to the irrigation valve.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Command_3 = number
/**
 * Command in action
 *
 * For devices connected on slow LPWAN networks, the command in action (this
 * resource) may differ from a command that was sent (resource ID: 3). The
 * command in action is the actual value of the command in action on the
 * irrigation valve.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Commandinaction_4 = number
/**
 * Scheduler ID
 *
 * Identifiers of the schedulers that are assigned to the Command of this
 * irrigation valve.
 *
 * ID: 5
 * MultipleInstances: true
 * Mandatory: false
 */
type SchedulerID_5 = Array<number>
/**
 * Invalid scheduler
 *
 * Set to True when one of the schedulers can’t be executed or is not supported
 * by this irrigation valve. Otherwise set to False.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Invalidscheduler_6 = boolean
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
 * The objectURN for Irrigation valve
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3425:1.1'
