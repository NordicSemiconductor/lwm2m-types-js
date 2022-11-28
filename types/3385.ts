/**
 * volteCallStateChangeEvent
 *
 * VoLTE call status change
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3385.xml
 *
 * ID: 3385
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type volteCallStateChangeEvent_3385 = Readonly<{
	'0': callStatus_0
	'1': VolteCallStateChangeCause_1
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
 * VolteCallStateChangeCause
 *
 * 0 = Not available
 * 1 = Normal Call Clearing
 * 2 = Call Drop
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type VolteCallStateChangeCause_1 = number
/**
 * The objectURN for volteCallStateChangeEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3385'
