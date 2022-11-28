/**
 * oA Reporting Object
 *
 * The 'oA Reporting Object' packs several status messages available at the node
 * into a single, size optimized message, as e.g. used with data collect or BMS
 * interfacing.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3403.xml
 *
 * ID: 3403
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oAReportingObject_3403 = Readonly<
	Array<{
		'903': ApplicationGroupID_903
		'904': StatusResendTime_904
		'919': StatusReportStructureID_919
		'932': ReportingObjectInstances_932
		'933': TargetResource_933
		'4001'?: ObjectVersion_4001
		'901'?: DocumentaryDescription_901
	}>
>
/**
 * Application Group ID
 *
 * The application group ID that the logical object is part of. This ID will
 * define the application group the status reports are sent to. It is internally
 * used as a pointer to the Group Object instance that hosts all the Group
 * configurations.
 *
 * ID: 903
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type ApplicationGroupID_903 = number
/**
 * Status Resend Time
 *
 * The time specified as status resend time is used to resend the actual status
 * to the application group the object is a member of, even if nothing
 * changed.\nThe status resend time is restarted after every event. The actual
 * interval is a random time with the maximum duration given by this resource.
 * Randomization helps to avoid massive ongoing message collisions after system
 * power up.\nFor example: Status resend time is set to 10 seconds;\n* 00:00
 * status is sent\n* 00:05 status changes and is sent immediatly\n* 00:15 (or
 * before, depending on the randomization) status is sent even though it did not
 * change
 *
 * ID: 904
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type StatusResendTime_904 = number
/**
 * Status Report Structure ID
 *
 * The ID of the status resource structure that is used to code the cyclic
 * status report. See object 4012 'oA Status Report Structure' for more
 * information
 *
 * ID: 919
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type StatusReportStructureID_919 = number
/**
 * Reporting Object Instances
 *
 * List of links to the reporting Object Instances in CoRE Link Format
 * [RFC6690](https://tools.ietf.org/html/rfc6690)
 *
 * ID: 932
 * MultipleInstances: true
 * Mandatory: true
 */
type ReportingObjectInstances_932 = string
/**
 * Target Resource
 *
 * Link to the target resource in CoRE Link Format
 * [RFC6690](https://tools.ietf.org/html/rfc6690)\nNote taht the default for
 * this entry is always the receiving object /4009/#/923. When Group
 * communication is applied, the /#/ is determined by the group handling
 * mechanisms and can be omitted.
 *
 * ID: 933
 * MultipleInstances: false
 * Mandatory: true
 */
type TargetResource_933 = string
/**
 * ObjectVersion
 *
 * LWM2M Object versioning label.
 *
 * ID: 4001
 * MultipleInstances: false
 * Mandatory: false
 */
type ObjectVersion_4001 = string
/**
 * Documentary Description
 *
 * Resource to hold a documentary text description of the object.
 *
 * ID: 901
 * MultipleInstances: false
 * Mandatory: false
 */
type DocumentaryDescription_901 = string
/**
 * The objectURN for oA Reporting Object
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3403@1.1'
