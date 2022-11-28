/**
 * macRachAttemptEvent
 *
 * RACH information. Logged at RACH TX
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3366.xml
 *
 * ID: 3366
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type macRachAttemptEvent_3366 = Readonly<{
	'0': rachAttemptCounter_0
	'1': MacRachAttemptEventType_1
	'2': contentionBased_2
	'3': rachMessage_3
	'4': preambleIndex_4
	'5': preamblePowerOffset_5
	'6': backoffTime_6
	'7': msg2Result_7
	'8': timingAdjustmentValue_8
}>
/**
 * rachAttemptCounter
 *
 * RACH Attempt Counter
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type rachAttemptCounter_0 = number
/**
 * MacRachAttemptEventType
 *
 * 0 = Success
 * 1 = Failure-At-Msg-2
 * 2 = Failure-At-Msg-4-CT-Timer-Expired
 * 3 = Failure-At-Msg-4-CT-Resolution-Not-Passed
 * 4 = Aborted
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type MacRachAttemptEventType_1 = number
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
 * rachMessage
 *
 * 1 = MSG 1
 * 2 = MSG 2
 * 3 = MSG 3
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type rachMessage_3 = number
/**
 * preambleIndex
 *
 * preambleIndex=There are 64 preambles available in each cell. Range is from
 * 0-63. (3GPP 36.211)
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type preambleIndex_4 = number
/**
 * preamblePowerOffset
 *
 * preamblePowerOffset= stepsize*preamble transmission number
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type preamblePowerOffset_5 = number
/**
 * backoffTime
 *
 * Backoff Time
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type backoffTime_6 = number
/**
 * msg2Result
 *
 * 1 = pass
 * 0 = fail
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type msg2Result_7 = boolean
/**
 * timingAdjustmentValue
 *
 * Timing Adjustment Value
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 */
type timingAdjustmentValue_8 = number
/**
 * The objectURN for macRachAttemptEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3366'
