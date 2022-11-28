/**
 * radioLinkMonitoring
 *
 * Radio Link monitoring information maintained by RRC
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3374.xml
 *
 * ID: 3374
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type radioLinkMonitoring_3374 = Readonly<{
	'2': outOfSyncCount_2
	'3': inSyncCount_3
	'4': t310Timer_4
	'6037': sysFrameNumber_6037
	'6038': subFrameNumber_6038
}>
/**
 * outOfSyncCount
 *
 * out of sync count
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type outOfSyncCount_2 = number
/**
 * inSyncCount
 *
 * in Sync Count
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type inSyncCount_3 = number
/**
 * t310Timer
 *
 * 0=stopped, 1=running
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type t310Timer_4 = boolean
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
 * The objectURN for radioLinkMonitoring
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3374'
