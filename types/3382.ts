/**
 * SipRegistrationEvent
 *
 * SIP Registration status
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3382.xml
 *
 * ID: 3382
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type SipRegistrationEvent_3382 = Readonly<{
	'0': registrationType_0
	'1': registrationResult_1
}>
/**
 * registrationType
 *
 * 1 = Normal
 * 2 = Emergency
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type registrationType_0 = number
/**
 * registrationResult
 *
 * 0 = Success (when 200 OK is received)
 * 1 = Failure (when any error other than 401 is received, else when 408 timeout
 * occurs)
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type registrationResult_1 = number
/**
 * The objectURN for SipRegistrationEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3382'
