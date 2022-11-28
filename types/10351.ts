/**
 * Door
 *
 * This LWM2M Object includes the door information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10351.xml
 *
 * ID: 10351
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Door_10351 = Readonly<
	Array<{
		'1': DoorName_1
		'50': DoorStatus_50
	}>
>
/**
 * Door Name
 *
 * The name of the door.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type DoorName_1 = string
/**
 * Door Status
 *
 * The status of the door, 1:Opened, 0:Closed.
 *
 * ID: 50
 * MultipleInstances: false
 * Mandatory: true
 */
type DoorStatus_50 = boolean
/**
 * The objectURN for Door
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10351'
