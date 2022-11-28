/**
 * Leg
 *
 * This LWM2M Object includes leg information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10345.xml
 *
 * ID: 10345
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Leg_10345 = Readonly<
	Array<{
		'1': LegName_1
		'5905'?: HostDeviceManufacturer_5905
		'5906'?: HostDeviceModelNumber_5906
		'5907'?: HostDeviceUniqueID_5907
	}>
>
/**
 * Leg Name
 *
 *
 * The display name of the leg, Left/Right Leg.
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type LegName_1 = string
/**
 * Host Device Manufacturer
 *
 *
 * Human readable host device manufacturer name.
 *
 *
 * ID: 5905
 * MultipleInstances: false
 * Mandatory: false
 */
type HostDeviceManufacturer_5905 = string
/**
 * Host Device Model Number
 *
 *
 * A host device model identifier (manufacturer specified string).
 *
 *
 * ID: 5906
 * MultipleInstances: false
 * Mandatory: false
 */
type HostDeviceModelNumber_5906 = string
/**
 * Host Device Unique ID
 *
 *
 * The host device unique ID as assigned by an OEM, MNO,
 * or other as the Device ID in the onboarding or manufacturing process.
 *
 *
 * ID: 5907
 * MultipleInstances: false
 * Mandatory: false
 */
type HostDeviceUniqueID_5907 = string
/**
 * The objectURN for Leg
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10345'
