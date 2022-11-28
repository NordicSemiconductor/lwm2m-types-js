/**
 * Edge computing script
 *
 * The uCIFI edge computing scripts object defines a particular script to be
 * executed by a device under a time or any other condition set by a "Edge
 * Computing Time Condition" or "Edge Computing Generic Condition" object.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3437.xml
 *
 * ID: 3437
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Edgecomputingscript_3437 = Readonly<
	Array<{
		'4': Script_4
		'1'?: Name_1
		'2'?: Signature_2
		'3'?: Version_3
		'5'?: Scriptformat_5
		'6'?: Nonsupportedscript_6
		'7'?: Nonauthorizedscript_7
	}>
>
/**
 * Script
 *
 * Vendor-specific script.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type Script_4 = string
/**
 * Name
 *
 * Name of the script.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type Name_1 = string
/**
 * Signature
 *
 * Unique hash or signature associated to the script to be verified by the
 * end-device before execution. The format of the hash or signature is
 * vendor-specific.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type Signature_2 = string
/**
 * Version
 *
 * Version of the script, as defined by the vendor.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Version_3 = string
/**
 * Script format
 *
 * Script format to enable the device to select the script interpreter in case
 * it supports multiple (e.g. LUA). The format of this resource is free to
 * support vendor-specific formats.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Scriptformat_5 = string
/**
 * Non supported script
 *
 * Set to True if the script is not supported or if the device has identified
 * errors in the script.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Nonsupportedscript_6 = boolean
/**
 * Non authorized script
 *
 * Set to True if the hash/signature is not correct.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type Nonauthorizedscript_7 = boolean
/**
 * The objectURN for Edge computing script
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3437'
