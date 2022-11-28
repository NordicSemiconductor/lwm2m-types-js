/**
 * Ultrasonic Sensor
 *
 * This LWM2M Object includes Ultrasonic Sensor information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10360.xml
 *
 * ID: 10360
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type UltrasonicSensor_10360 = Readonly<
	Array<{
		'1': Name_1
		'50': Status_50
	}>
>
/**
 * Name
 *
 *
 * The display name of the Ultrasonic Sensor.
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
 * The objectURN for Ultrasonic Sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10360'
