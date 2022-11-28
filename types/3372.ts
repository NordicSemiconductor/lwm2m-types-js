/**
 * TimingAdvance
 *
 * Timing Advance Information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3372.xml
 *
 * ID: 3372
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type TimingAdvance_3372 = Readonly<{
	'2': timingAdvance_2
	'6037': sysFrameNumber_6037
	'6038': subFrameNumber_6038
}>
/**
 * timingAdvance
 *
 * in TA units microseconds
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type timingAdvance_2 = number
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
 * The objectURN for TimingAdvance
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3372'
