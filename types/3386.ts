/**
 * VoLTErtpPacketLoss
 *
 * Log is generated at the receiving end of RTP flow when
 * newReceivedSequenceNumber - lastReceivedSequenceNumber > 1
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3386.xml
 *
 * ID: 3386
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type VoLTErtpPacketLoss_3386 = Readonly<{
	'0': ssrc_0
	'1': packetsLost_1
}>
/**
 * ssrc
 *
 * id of RTP stream
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type ssrc_0 = number
/**
 * packetsLost
 *
 * Number of RTP packets lost
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type packetsLost_1 = number
/**
 * The objectURN for VoLTErtpPacketLoss
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3386'
