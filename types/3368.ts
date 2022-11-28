/**
 * macTimerStatusEvent
 *
 * MAC timer expiry information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3368.xml
 *
 * ID: 3368
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type macTimerStatusEvent_3368 = Readonly<{
	'0': macTimerName_0
}>
/**
 * macTimerName
 *
 * 0 = TA
 * 1 = RA
 * 2 = Contention
 * 3 = RACH_Back_Off
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type macTimerName_0 = number
/**
 * The objectURN for macTimerStatusEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3368'
