/**
 * PrachReport
 *
 * PRACH report information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3380.xml
 *
 * ID: 3380
 * LWM2MVersion: 1.0
 * ObjectVersion: 2.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type PrachReport_3380 = Readonly<{
	'2': rachTxPower_2
	'3': zadOffSeqNum_3
	'4': prachConfig_4
	'5': preambleFormat_5
	'6': maxTransmissionMsg3_6
	'7': raResponseWindowSize_7
	'8': RachRequestResult_8
	'9': ce_mode_9
	'10': ce_level_10
	'11': num_prach_repetition_11
	'12': prach_repetition_seq_12
	'6037': sysFrameNumber_6037
	'6038': subFrameNumber_6038
}>
/**
 * rachTxPower
 *
 * PRACH tx power in dB (-112..23)
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type rachTxPower_2 = number
/**
 * zadOffSeqNum
 *
 * ZadOFF Sequence Number (0..837)
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type zadOffSeqNum_3 = number
/**
 * prachConfig
 *
 * Random access preamble timing for a range of preamble formats (0..64)
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type prachConfig_4 = number
/**
 * preambleFormat
 *
 * Preamble Format (0..4)
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type preambleFormat_5 = number
/**
 * maxTransmissionMsg3
 *
 * Max number of HARQ re-transmissions from UE for RACH message 3 (1..8)
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type maxTransmissionMsg3_6 = number
/**
 * raResponseWindowSize
 *
 * Window size for reception of RACH message 2 (2..10)
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type raResponseWindowSize_7 = number
/**
 * RachRequestResult
 *
 * RACH Request success/failure - 0=fail, 1=pass
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 */
type RachRequestResult_8 = boolean
/**
 * ce_mode
 *
 * CE_mode
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: true
 */
type ce_mode_9 = number
/**
 * ce_level
 *
 * CE level
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: true
 */
type ce_level_10 = number
/**
 * num_prach_repetition
 *
 * Number of PRACH Repetitions
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: true
 */
type num_prach_repetition_11 = number
/**
 * prach_repetition_seq
 *
 * PRACH Repetition seq
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: true
 */
type prach_repetition_seq_12 = number
/**
 * sysFrameNumber
 *
 * System Frame Number.
 *
 * ID: 6037
 * MultipleInstances: false
 * Mandatory: true
 */
type sysFrameNumber_6037 = number
/**
 * subFrameNumber
 *
 * Sub Frame Number.
 *
 * ID: 6038
 * MultipleInstances: false
 * Mandatory: true
 */
type subFrameNumber_6038 = number
/**
 * The objectURN for PrachReport
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3380:2.0'
