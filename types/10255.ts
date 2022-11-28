/**
 * Device Metadata
 *
 * This object provides a range of information related to device metadata
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10255.xml
 *
 * ID: 10255
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type DeviceMetadata_10255 = Readonly<{
	'0': Protocolsupported_0
	'1': Bootloaderhash_1
	'2': OEMbootloaderhash_2
	'3': Vendor_3
	'4': Class_4
	'5': Device_5
}>
/**
 * Protocol supported
 *
 * Manifest protocol supported
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type Protocolsupported_0 = number
/**
 * Bootloader hash
 *
 * Hash of the bootloader. This is used for tracking the version of the
 * bootloader used.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type Bootloaderhash_1 = string
/**
 * OEM bootloader hash
 *
 * If the end-user has modified the bootloader the hash of the modified
 * bootloader is recorded here
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type OEMbootloaderhash_2 = string
/**
 * Vendor
 *
 * Vendor Class UUID
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type Vendor_3 = string
/**
 * Class
 *
 * Class UUID
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type Class_4 = string
/**
 * Device
 *
 * Device UUID
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type Device_5 = string
/**
 * The objectURN for Device Metadata
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10255'
