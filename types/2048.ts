/**
 * CmdhPolicy
 *
 * This Object provides links to a set of rules associated with a specific CSE
 * that governs the behavior of that CSE regarding rejecting, buffering and
 * sending request or response messages via the Mcc reference point.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/2048.xml
 *
 * ID: 2048
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CmdhPolicy_2048 = Readonly<
	Array<{
		'0': Name_0
		'1': DefaultRule_1
		'2': LimiRules_2
		'3': NetworkAccessECRules_3
		'4': BufferRules_4
	}>
>
/**
 * Name
 *
 * Contains the name of a CmdhPolicy Object Instance
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Name_0 = string
/**
 * DefaultRule
 *
 * 1 reference to CmdhDefaults Object Instance
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type DefaultRule_1 = string
/**
 * LimiRules
 *
 * 1 or more references to CmdhLimits Object Instances
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: true
 */
type LimiRules_2 = Array<string>
/**
 * NetworkAccessECRules
 *
 * 1 or more references to CmdhNetworkAccessRules Object Instances
 *
 * ID: 3
 * MultipleInstances: true
 * Mandatory: true
 */
type NetworkAccessECRules_3 = Array<string>
/**
 * BufferRules
 *
 * 1 or more references to CmdhBuffer Object Instances
 *
 * ID: 4
 * MultipleInstances: true
 * Mandatory: true
 */
type BufferRules_4 = Array<string>
/**
 * The objectURN for CmdhPolicy
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '2048'
