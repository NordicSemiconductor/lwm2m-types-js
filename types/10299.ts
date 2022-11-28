/**
 * HostDevice
 *
 * This LWM2M Object provides a range of host device related information which
 * can be queried by the LWM2M Server. The host device is any integrated device
 * with an embedded cellular radio module.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10299.xml
 *
 * ID: 10299
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type HostDevice_10299 = Readonly<{
	'0': Manufacturer_0
	'1': Model_1
	'2': UniqueID_2
	'3': FirmwareVersion_3
	'4'?: SoftwareVersion_4
	'5'?: HardwareVersion_5
	'6'?: DateStamp_6
}>
/**
 * Manufacturer
 *
 * Host device manufacturers name (OEM).
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Manufacturer_0 = string
/**
 * Model
 *
 * Identifier of the model name or number determined by device manufacturer.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Model_1 = string
/**
 * UniqueID
 *
 * Unique ID assigned by an manufacturer or other body. Used to uniquely
 * identify a host device. Examples include serial # or UUID.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type UniqueID_2 = string
/**
 * FirmwareVersion
 *
 * Current Firmware version of the host device. (manufacturer specified string).
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type FirmwareVersion_3 = string
/**
 * SoftwareVersion
 *
 * Current software version of the host device. (manufacturer specified string).
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type SoftwareVersion_4 = string
/**
 * HardwareVersion
 *
 * Current hardware version of the host device. (manufacturer specified string).
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type HardwareVersion_5 = string
/**
 * DateStamp
 *
 * UTC value of the time and date of the last Firmware or Software update.
 * Format:MM:DD:YYYY HH:MM:SS
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type DateStamp_6 = string
/**
 * The objectURN for HostDevice
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10299'
