/**
 * oA Group
 *
 * The 'oA Group' represents a group. It contains an application group ID, a
 * security group ID and a list of multicast and unicast IP addresses that are
 * used in the group. \nAdditionally it contains a list of all members of the
 * group.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3389.xml
 *
 * ID: 3389
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oAGroup_3389 = Readonly<
	Array<{
		'600': ApplicationGroupID_600
		'601': SecurityGroupID_601
		'602': IPAddresses_602
		'603': Members_603
		'901'?: DocumentaryDescription_901
		'4001'?: ObjectVersion_4001
	}>
>
/**
 * Application Group ID
 *
 * Identifier of the application group
 *
 * ID: 600
 * MultipleInstances: false
 * Mandatory: true
 */
type ApplicationGroupID_600 = number
/**
 * Security Group ID
 *
 * Identifier of the security group
 *
 * ID: 601
 * MultipleInstances: false
 * Mandatory: true
 */
type SecurityGroupID_601 = number
/**
 * IP Addresses
 *
 * List of multicast and unicast IPv6 addresses to be used for outgoing group
 * messages
 *
 * ID: 602
 * MultipleInstances: true
 * Mandatory: true
 */
type IPAddresses_602 = string
/**
 * Members
 *
 * Link to the local object instances (and/or single resources) that are members
 * of that group in CoRE Link Format
 * [RFC6690](https://tools.ietf.org/html/rfc6690)\nNote: instances and resources
 * not listed here will not be addressable on this node through group messages
 * of this group
 *
 * ID: 603
 * MultipleInstances: true
 * Mandatory: true
 */
type Members_603 = string
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
 * The objectURN for oA Group
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3389@1.1'
