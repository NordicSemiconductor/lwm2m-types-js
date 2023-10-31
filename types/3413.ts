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
 * ObjectVersion: 1.1
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
		'5518'?: Timestamp_5518
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
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
 * Measurement Quality Indicator
 *
 * Measurement quality indicator reported by a smart sensor. 0: UNCHECKED No
 * quality checks were done because they do not exist or can not be applied. 1:
 * REJECTED WITH CERTAINTY The measured value is invalid. 2: REJECTED WITH
 * PROBABILITY The measured value is likely invalid. 3: ACCEPTED BUT SUSPICIOUS
 * The measured value is likely OK. 4: ACCEPTED The measured value is OK. 5-15:
 * Reserved for future extensions. 16-23: Vendor specific measurement quality.
 *
 * ID: 6042
 * MultipleInstances: false
 * Mandatory: false
 */
type MeasurementQualityIndicator_6042 = number
/**
 * Measurement Quality Level
 *
 * Measurement quality level reported by a smart sensor. Quality level 100 means
 * that the measurement has fully passed quality check algorithms. Smaller
 * quality levels mean that quality has decreased and the measurement has only
 * partially passed quality check algorithms. The smaller the quality level, the
 * more caution should be used by the application when using the measurement.
 * When the quality level is 0 it means that the measurement should certainly be
 * rejected.
 *
 * ID: 6049
 * MultipleInstances: false
 * Mandatory: false
 */
type MeasurementQualityLevel_6049 = number
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
 * The objectURN for uCIFI Generic Actuator
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3413:1.1'
