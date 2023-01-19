/**
 * oA Receiving Object
 *
 * The 'oA Receiving Object' provides a resource for sensors/actuators to report
 * their status message to. It is used with control objects as logical object
 * that forwards the sensor and status data to the executing object.\nIt is also
 * used to receive the 'go bootstrap' message, using the Struct-ID 255, in OOTB
 * mode.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3402.xml
 *
 * ID: 3402
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oAReceivingObject_3402 = Readonly<
	Array<{
		'909': ExecutingObject_909
		'923': StatusReport_923
		'901'?: DocumentaryDescription_901
		'4001'?: ObjectVersion_4001
	}>
>
/**
 * Executing Object
 *
 * Link to the Object Instance in CoRE Link Format
 * [RFC6690](https://tools.ietf.org/html/rfc6690)
 *
 * ID: 909
 * MultipleInstances: false
 * Mandatory: true
 */
type ExecutingObject_909 = string
/**
 * Status Report
 *
 * The actuators and sensors report their status to this resource. It is also
 * used to receive the 'go bootstrap' message, using the Struct-ID 255, in OOTB
 * mode.
 *
 * ID: 923
 * MultipleInstances: false
 * Mandatory: true
 */
type StatusReport_923 = string
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
 * The objectURN for oA Receiving Object
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3402@1.1'
