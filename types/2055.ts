/**
 * CmdhNwAccessRule
 *
 * This Object defines limits in usage of specific underlying networks for
 * forwarding information to other CSEs during processing of CMDH-related
 * requests in a CSE.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/2055.xml
 *
 * ID: 2055
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CmdhNwAccessRule_2055 = Readonly<
	Array<{
		'0': TargetNetwork_0
		'1': SpreadingWaitTime_1
		'2': MinReqVolume_2
		'3': BackOffParameters_3
		'4': OtherConditions_4
		'5': AllowedSchedule_5
	}>
>
/**
 * TargetNetwork
 *
 * Contains identifiers of Underlying networks
 *
 * ID: 0
 * MultipleInstances: true
 * Mandatory: true
 */
type TargetNetwork_0 = Array<string>
/**
 * SpreadingWaitTime
 *
 * Contains a value in ms such that before accessing the underlying network
 * (typically to forward an incoming request), the CSE will wait for an
 * additional amount of time randomly chosen between 0 and this value
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type SpreadingWaitTime_1 = number
/**
 * MinReqVolume
 *
 * Minimum amount of data that needs to be aggregated before any of the
 * Underlying Networks matching with the targetNetwork Resource of the current
 * Instance of the CmdhNwAccessRule Object can be used for forwarding
 * information to other CSEs.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 * Units: B
 */
type MinReqVolume_2 = number
/**
 * BackOffParameters
 *
 * Reference to an Instance of BackOffParameterSet Object defining parameters
 * that define how usage of any of the Underlying Networks matching with the
 * targetNetwork Resource of that Object Instance, shall be handled when
 * attempts to use such networks have failed.
 *
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type BackOffParameters_3 = string
/**
 * OtherConditions
 *
 * List of additional conditions that need to be fulfilled before any of the
 * Underlying Networks matching with the TargetNetwork Resource of this
 * CmdhNwAccessRule Object Instance can be used for forwarding information to
 * other CSEs.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type OtherConditions_4 = string
/**
 * AllowedSchedule
 *
 * Contains time schedules in form of extended crontab syntax defined in oneM2M
 * Protocol TS-0004
 *
 * ID: 5
 * MultipleInstances: true
 * Mandatory: true
 */
type AllowedSchedule_5 = Array<string>
/**
 * The objectURN for CmdhNwAccessRule
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '2055'
