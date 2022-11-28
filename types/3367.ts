/**
 * macRachAttemptReasonEvent
 *
 * RACH Information - reason for initiating RACH
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3367.xml
 *
 * ID: 3367
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type macRachAttemptReasonEvent_3367 = Readonly<{
	'0': MacRachAttemptReasonType_0
	'1': ueID_1
	'2': contentionBased_2
	'3': preamble_3
	'4': preambleGroupChosen_4
}>
/**
 * MacRachAttemptReasonType
 *
 * 1 = Connection-Request
 * 2 = Radio-Link-Failure
 * 3 = UL-Data-Arrival
 * 4 = DL-Data-Arrival
 * 5 = Handover
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type MacRachAttemptReasonType_0 = number
/**
 * ueID
 *
 * UE ID
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type ueID_1 = number
/**
 * contentionBased
 *
 * 1 = Contention based
 * 0 = otherwise
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type contentionBased_2 = boolean
/**
 * preamble
 *
 * preamble= The random access preambles are generated from Zadoff-Chu sequences
 * with zero correlation zone (3GPP TS 36.211)
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type preamble_3 = number
/**
 * preambleGroupChosen
 *
 * 0: Group A, 1: Group B
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type preambleGroupChosen_4 = boolean
/**
 * The objectURN for macRachAttemptReasonEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3367'
