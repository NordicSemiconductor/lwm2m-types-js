/**
 * Confidential Data
 *
 * This LWM2M Object is used for reporting data, but in a confidential way
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10253.xml
 *
 * ID: 10253
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type ConfidentialData_10253 = Readonly<{
	'0': PublicKey_0
	'1': ApplicationData_1
}>
/**
 * Public Key
 *
 * Object public key provided from the server side
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type PublicKey_0 = string
/**
 * Application Data
 *
 * Application Data encrypted by the Public Key
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type ApplicationData_1 = string
/**
 * The objectURN for Confidential Data
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10253'
