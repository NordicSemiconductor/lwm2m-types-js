/**
 * radioLinkFailureEvent
 *
 * Radio Link Failure Event
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3356.xml
 *
 * ID: 3356
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type radioLinkFailureEvent_3356 = Readonly<{
	'0': timeRLF_0
	'1': rlfCause_1
}>
/**
 * timeRLF
 *
 * Modem time when RLF is occurred
 *
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type timeRLF_0 = number
/**
 * rlfCause
 *
 * Radio Link Failure cause
 * 0 = configurationFailue
 * 1 = handoverFailure
 * 2 = rachFailure,
 * 3 = maxRetransmission,
 * 4 = ipCheckFailue
 * 5 = sibReadingFailure
 * 6 = mibChange
 * 7 = other
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type rlfCause_1 = number
/**
 * The objectURN for radioLinkFailureEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3356'
