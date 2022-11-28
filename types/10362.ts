/**
 * Drop Sensor
 *
 * This LWM2M Object includes Drop Sensor information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10362.xml
 *
 * ID: 10362
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type DropSensor_10362 = Readonly<
	Array<{
		'1': Name_1
		'50': Status_50
		'51'?: DropDetection_51
	}>
>
/**
 * Name
 *
 *
 * The display name of the Drop Sensor.
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Name_1 = string
/**
 * Status
 *
 * 0:Normal, 1:Unknown, <0:Failed with error code(negative number).
 *
 * ID: 50
 * MultipleInstances: false
 * Mandatory: true
 */
type Status_50 = number
/**
 * Drop Detection
 *
 * If Drop Detection is enabled or not,
 * the setting of which is a Boolean value (1,0) where 1 is Enabled and 0 is
 * Disabled.
 *
 * ID: 51
 * MultipleInstances: false
 * Mandatory: false
 */
type DropDetection_51 = boolean
/**
 * The objectURN for Drop Sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10362'
