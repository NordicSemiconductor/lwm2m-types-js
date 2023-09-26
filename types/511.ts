/**
 * Compact Composite
 *
 * This Object enables collecting a set of Resource values from other Objects
 * into a single Resource representation.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/511.xml
 *
 * ID: 511
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CompactComposite_511 = Readonly<
	Array<{
		'0': TargetLinks_0
		'1': CompactData_1
		'2'?: Description_2
	}>
>
/**
 * Target Links
 *
 * One or more CoRE Links to Readable Single Resources and/or Resource Instances
 * of Readable Multiple Resources in the same LwM2M Client, from which the
 * values will be stored in the Compact Data array. Each link corresponds to an
 * item in the Compact Data array: first link points to the resource instance
 * with the value for the first array item, second link to the instance with the
 * second array item, etc.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type TargetLinks_0 = string
/**
 * Compact Data
 *
 * CBOR array of resource values in the same order as the links in the Target
 * Links resource. CBOR simple value of undefined should be used as the array
 * item if an error occurs while reading the value for the corresponding
 * resource (e.g., link pointing to a resource that doesn't exist or the
 * resource is not allowed to be read because of access control rules).
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type CompactData_1 = string
/**
 * Description
 *
 * Human-readable description of the Compact Data resulting from the Target
 * Links.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type Description_2 = string
/**
 * The objectURN for Compact Composite
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '511@1.1'
