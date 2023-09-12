/**
 * oA Status Report Structure
 *
 * The 'oA Status_Report_Structure' describes the content of the status reports.
 * Its ID is always the first byte, the following bytes are defined by Keys.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3406.xml
 *
 * ID: 3406
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oAStatusReportStructure_3406 = Readonly<
	Array<{
		'850': StatusReportStructureID_850
		'851': Keys_851
		'901'?: DocumentaryDescription_901
		'4001'?: ObjectVersion_4001
	}>
>
/**
 * Status Report Structure ID
 *
 * The ID of the status report structure. It is always the first byte of the
 * transmitted status report.\nThis needs to be unique per receiving object. ID
 * 255 is used to receive the 'go bootstrap' message.
 *
 * ID: 850
 * MultipleInstances: false
 * Mandatory: true
 */
type StatusReportStructureID_850 = number
/**
 * Keys
 *
 * Defines the list of keys that are part of the status report. Most keys are
 * present in the form 'object ID/resource ID'.\nThere is a simplified form that
 * is used with status reports for objects. This reporting has implicit instance
 * identification (it's the instance that creates reports, so no explicit
 * instance identification is needed). This is using straight forward a list of
 * resource contents that are determined by the list elements in their
 * order.\n\t\t\t\t\nExample of a simple form:\n- The key list for reporting ID
 * 1 is: 4001/101; 4021/5850; 4021/100; 4021/102;\n- The values are:
 * 4001/101:0.5; 4021/5850:false; 4021/100:0.3; 4021/102:7\n- The coded stream
 * will be: 1; 0.5; false; 0.3; 7 with the first byte 1 the reporting
 * ID.\n\t\t\t\t\nThe explicit form, that is used with device status reports,
 * needs to explicitly name the instances the reported values are from. To allow
 * for that two special keys are used:\n- *NoOfInstances:* This key is to allow
 * several object instances to report their status in the same report, e.g. a
 * Device reports the status of all its light point objects.\nThe block of keys
 * following NoOfInstances, always starting with InstanceID, until the next
 * NoOfInstances key is present in the status message for every instance, e.g.
 * NoOfInstances=2 means the following block of keys is present twice.\n-
 * *InstanceID:* This key initiates the report of an object, is the first key
 * before all the resource values. It defines the object instance that reports
 * its status.\n\t\t\t\t\nExample of an explicit form:\n- The key list for
 * reporting ID 2 is: NoOfInstances; InstanceId; 4001/101; NoOfInstances;
 * InstanceId; 4021/100\n- The coded stream will be 2;2;0;0.5;1;0.7;1;0;0.5 with
 * the first byte 2 the ID of the structure definition, the second byte the
 * number of instances (2), the third the instance ID of the first (0) instance,
 * the reported value, the instance ID of the second (1) instance, the reported
 * value, the number of instances (1) for the next object, the ID of the
 * instance (0) and the value.
 *
 * ID: 851
 * MultipleInstances: true
 * Mandatory: true
 */
type Keys_851 = Array<string>
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
 * The objectURN for oA Status Report Structure
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3406@1.1'
