/**
 * CmdhBuffer
 *
 * This Object defines limits in usage of buffers for temporarily storing
 * information that needs to be forwarded to other CSEs during processing of
 * CMDH-related requests in a CSE.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/2056.xml
 *
 * ID: 2056
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CmdhBuffer_2056 = Readonly<
	Array<{
		'0': ApplicableEventCategory_0
		'1': MaxBufferSize_1
		'2': StoragePriority_2
	}>
>
/**
 * ApplicableEventCategory
 *
 * Contains a list of event category values
 *
 * ID: 0
 * MultipleInstances: true
 * Mandatory: true
 */
type ApplicableEventCategory_0 = Array<number>
/**
 * MaxBufferSize
 *
 * Contains the max Buffer size of the CmdhBuffer Object Instance
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: B
 */
type MaxBufferSize_1 = number
/**
 * StoragePriority
 *
 * Storage priority for the buffered data associated to that CmdhBuffer Object
 * Instance. t
 * Buffered requests associated with a lower storage priority shall be purged
 * before buffered requests with a higher storage priority.
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type StoragePriority_2 = number
/**
 * The objectURN for CmdhBuffer
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '2056'
