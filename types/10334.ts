/**
 * Robot Alarm
 *
 * Here lists all items of an alarm reported by the robot.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10334.xml
 *
 * ID: 10334
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type RobotAlarm_10334 = Readonly<
	Array<{
		'1': Entity_1
		'2': ProbableCause_2
		'3': SpecificProblem_3
		'4': AlarmType_4
		'5': Severity_5
		'6': ReportTime_6
		'7': SequenceNo_7
		'8'?: AdditionalInfo_8
	}>
>
/**
 * Entity
 *
 * Contains the object ID and object instance ID/name, for example: </10320/2>.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Entity_1 = string
/**
 * Probable Cause
 *
 * Probable cause of this alarm.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type ProbableCause_2 = number
/**
 * Specific Problem
 *
 * Specific Problem of of this alarm.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type SpecificProblem_3 = string
/**
 * Alarm Type
 *
 * The Alarm Type of this alarm,
 * 2:Communications, 3:Quality of Service (QoS), 4:Processing Error,
 * 5:Equipment, 6:Environmental.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type AlarmType_4 = number
/**
 * Severity
 *
 * The severity of this alarm. Critical(1), Major(2), Minor(3), Warning(4),
 * Cleared(5).
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type Severity_5 = number
/**
 * Report Time
 *
 * When was this alarm reported.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type ReportTime_6 = number
/**
 * Sequence No
 *
 * Sequence No of this alarm, used to detect alarm loss.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type SequenceNo_7 = number
/**
 * Additional Info
 *
 * The information related to this alarm.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type AdditionalInfo_8 = string
/**
 * The objectURN for Robot Alarm
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10334'
