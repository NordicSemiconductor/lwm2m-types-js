/**
 * CmdhNetworkAccessRules
 *
 * This Object defines the usage of underlying networks for forwarding
 * information to other CSEs during processing of CMDH-related requests in a
 * CSE.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/2054.xml
 *
 * ID: 2054
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CmdhNetworkAccessRules_2054 = Readonly<
	Array<{
		'0': ApplicableEventCategories_0
		'1'?: NetworkAccessRule_1
	}>
>
/**
 * ApplicableEventCategories
 *
 * Contains a list of Event Category values
 *
 * ID: 0
 * MultipleInstances: true
 * Mandatory: true
 */
type ApplicableEventCategories_0 = number
/**
 * NetworkAccessRule
 *
 * Contains 0 or more references to CmdhNwAccessRule Object Instances
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: false
 */
type NetworkAccessRule_1 = string
/**
 * The objectURN for CmdhNetworkAccessRules
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '2054'
