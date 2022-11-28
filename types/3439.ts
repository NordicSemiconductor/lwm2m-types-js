/**
 * Edge computing generic condition
 *
 * The uCIFI edge computing generic condition object defines a vendor-specific
 * condition (e.g. when a resource or an object is equal to a particular value)
 * at which a particular script should be executed by the device.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3439.xml
 *
 * ID: 3439
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Edgecomputinggenericcondition_3439 = Readonly<
	Array<{
		'2': Scriptidentifier_2
		'1'?: Vendorcondition_1
		'3'?: Nonsupportedtimecondition_3
	}>
>
/**
 * Script identifier
 *
 * Object URN/Resource ID of the script to apply to the time/days defined in the
 * vendor condition resource.
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: true
 */
type Scriptidentifier_2 = string
/**
 * Vendor condition
 *
 * Condition described in a vendor specific way.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type Vendorcondition_1 = string
/**
 * Non supported time condition
 *
 * Set to True if the device can’t support the condition.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Nonsupportedtimecondition_3 = boolean
/**
 * The objectURN for Edge computing generic condition
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3439'
