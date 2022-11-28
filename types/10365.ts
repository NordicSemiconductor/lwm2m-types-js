/**
 * Gas-Dust Sensor
 *
 * This LWM2M Object includes Gas-Dust information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10365.xml
 *
 * ID: 10365
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type Gas_DustSensor_10365 = Readonly<{
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
 * The objectURN for Gas-Dust Sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10365'
