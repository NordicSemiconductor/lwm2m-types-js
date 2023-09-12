/**
 * uCIFI Generic Actuator
 *
 * The uCIFI generic actuator may be used for any actuator but not to replace
 * Outdoor Lamp Controllers nor for an Irrigation Valves which have a specific
 * device type in the uCIFI data model.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3413.xml
 *
 * ID: 3413
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type uCIFIGenericActuator_3413 = Readonly<
	Array<{
		'1'?: Defaultdimminglevel_1
		'2'?: Dimminglevel_2
		'3'?: Command_3
		'4'?: Commandinaction_4
		'5'?: SchedulerID_5
		'6'?: Invalidscheduler_6
	}>
>
/**
 * Default dimming level
 *
 * Default dimming level that the generic actuator applies when the device is
 * powered ON.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Defaultdimminglevel_1 = number
/**
 * Dimming level
 *
 * Actual dimming level (0 for OFF and 100% for ON) measured on the actuator.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Dimminglevel_2 = number
/**
 * Command
 *
 * Command (e.g. manual override, scheduler) sent to the actuator.
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
 * command in action is the actual value of the command in action in the
 * actuator.
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
 * The identifier of the schedulers that are assigned to the Command of this
 * actuator.
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
 * by the actuator. Otherwise set to False.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Invalidscheduler_6 = boolean
/**
 * The objectURN for uCIFI Generic Actuator
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3413'
