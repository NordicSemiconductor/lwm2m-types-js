/**
 * HostDeviceInfo
 *
 * This LWM2M Object provides a range of host device related information which
 * can be queried by the LWM2M Server. The host device is any integrated device
 * with an embedded cellular radio module.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10241.xml
 *
 * ID: 10241
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type HostDeviceInfo_10241 = Readonly<
	Array<{
		'5905': HostDeviceManufacturer_5905
		'5906': HostDeviceModelNumber_5906
		'5907': HostDeviceUniqueID_5907
		'5908': HostDeviceSoftwareVersion_5908
	}>
>
/**
 * Host Device Manufacturer
 *
 * Human readable host device manufacturer name.
 *
 * ID: 5905
 * MultipleInstances: true
 * Mandatory: true
 */
type HostDeviceManufacturer_5905 = Array<string>
/**
 * Host Device Model Number
 *
 * A host device model identifier (manufacturer specified string).
 *
 * ID: 5906
 * MultipleInstances: true
 * Mandatory: true
 */
type HostDeviceModelNumber_5906 = Array<string>
/**
 * Host Device Unique ID
 *
 * The host device unique ID as assigned by an OEM, MNO, or other as the Device
 * ID in the onboarding or manufacturing process.
 *
 * ID: 5907
 * MultipleInstances: true
 * Mandatory: true
 */
type HostDeviceUniqueID_5907 = Array<string>
/**
 * Host Device Software Version
 *
 * Current software version of the host device (manufacturer specified string).
 *
 * ID: 5908
 * MultipleInstances: true
 * Mandatory: true
 */
type HostDeviceSoftwareVersion_5908 = Array<string>
/**
 * The objectURN for HostDeviceInfo
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10241'
