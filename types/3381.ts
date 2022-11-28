/**
 * VolteCallEvent
 *
 * VoLTE call status
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3381.xml
 *
 * ID: 3381
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type VolteCallEvent_3381 = Readonly<{
	'0': callStatus_0
	'1': callType_1
}>
/**
 * callStatus
 *
 * 0 = Inactive call
 * 1 = Active call
 * 2 = Attempting
 * 3 = Hold
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type callStatus_0 = number
/**
 * callType
 *
 * 0 = Emergency
 * 1 = Voice call
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type callType_1 = number
/**
 * The objectURN for VolteCallEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3381'
