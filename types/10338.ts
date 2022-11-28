/**
 * Speaker
 *
 * This LWM2M Object includes speaker information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10338.xml
 *
 * ID: 10338
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type Speaker_10338 = Readonly<{
	'1': Speakerstatus_1
	'2': VoiceWarning_2
}>
/**
 * Speaker status
 *
 * If speaker is switched on or not, 1:On, 0:Off.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Speakerstatus_1 = boolean
/**
 * Voice Warning
 *
 * If Voice Warning is enabled or not, 1:Enabled, 0:Disabled.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type VoiceWarning_2 = boolean
/**
 * The objectURN for Speaker
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10338'
