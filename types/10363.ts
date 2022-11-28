/**
 * Temperature Sensor
 *
 * This LWM2M Object includes Temperature Sensor information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10363.xml
 *
 * ID: 10363
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type TemperatureSensor_10363 = Readonly<{
	'50': Status_50
}>
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
 * The objectURN for Temperature Sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10363'
