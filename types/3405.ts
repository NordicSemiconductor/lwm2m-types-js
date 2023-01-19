/**
 * oA OGC-Security
 *
 * The 'OGC Security' provides the appropriate keying material for a specific
 * OGC Application group in the context of OGC. The keying material will be
 * provided by a key distribution server, and must not be readable by any
 * instance outside the local node.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3405.xml
 *
 * ID: 3405
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oAOGC_Security_3405 = Readonly<
	Array<{
		'0': OGCSecurityID_0
		'3': AcceptedSenders_3
		'5': SecretGroupKey_5
		'901'?: DocumentaryDescription_901
		'4001'?: ObjectVersion_4001
	}>
>
/**
 * OGC Security ID
 *
 * Uniquely identifies the OpenAIS Security group that this instance is using.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type OGCSecurityID_0 = number
/**
 * Accepted Senders
 *
 * Stores the identities (OSCORE / IPv6) and Keys of accepted senders in the
 * group
 *
 * ID: 3
 * MultipleInstances: true
 * Mandatory: true
 */
type AcceptedSenders_3 = string
/**
 * Secret Group Key
 *
 * Stores the shared symmetric key for low latency group communication.This
 * Resource MUST NOT be readable by any server.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type SecretGroupKey_5 = string
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
 * The objectURN for oA OGC-Security
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3405@1.1'
