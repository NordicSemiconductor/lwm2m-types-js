/**
 * LwM2M Access Control
 *
 * Access Control Object is used to check whether the LwM2M Server has access
 * right for performing an operation.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/2.xml
 *
 * ID: 2
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type LwM2MAccessControl_2 = Readonly<
	Array<{
		'0': ObjectID_0
		'1': ObjectInstanceID_1
		'3': AccessControlOwner_3
		'2'?: ACL_2
	}>
>
/**
 * Object ID
 *
 * Resources 0 and 1 point to the Object Instance for which the Instances of the
 * ACL Resource of that Access Control Object Instance are applicable.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type ObjectID_0 = number
/**
 * Object Instance ID
 *
 * See above
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type ObjectInstanceID_1 = number
/**
 * Access Control Owner
 *
 * Short Server ID of a certain LwM2M Server; only such an LwM2M Server can
 * manage the Resources of this Object Instance.
 * The specific value MAX_ID=65535 means this Access Control Object Instance is
 * created and modified during a Bootstrap phase only.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type AccessControlOwner_3 = number
/**
 * ACL
 *
 * The Resource Instance ID MUST be the Short Server ID of a certain LwM2M
 * Server for which associated access rights are contained in the Resource
 * Instance value.
 * The Resource Instance ID 0 is a specific ID, determining the ACL Instance
 * which contains the default access rights.
 * Each bit set in the Resource Instance value, grants an access right to the
 * LwM2M Server to the corresponding operation.
 * The bit order is specified as below.
 * 1st LSB: R(Read, Observe, Write-Attributes)
 * 2nd LSB: W(Write)
 * 3rd LSB: E(Execute)
 * 4th LSB: D(Delete)
 * 5th LSB: C(Create)
 * Other bits are reserved for future use.
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: false
 */
type ACL_2 = number
/**
 * The objectURN for LwM2M Access Control
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '2:1.1'
