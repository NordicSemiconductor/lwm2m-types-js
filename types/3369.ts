/**
 * macTimingAdvanceEvent
 *
 * Timing advance information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3369.xml
 *
 * ID: 3369
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type macTimingAdvanceEvent_3369 = Readonly<{
	'0': timerValue_0
	'1': timingAdvance_1
}>
/**
 * timerValue
 *
 * Timer Value
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type timerValue_0 = number
/**
 * timingAdvance
 *
 * Timing Advance
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type timingAdvance_1 = number
/**
 * The objectURN for macTimingAdvanceEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3369'
