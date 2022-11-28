/**
 * pucchPowerControl
 *
 * PUCCH TX power control information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3379.xml
 *
 * ID: 3379
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type pucchPowerControl_3379 = Readonly<{
	'2': pucchTxPowerValue_2
	'3': dlPathLoss_3
	'6037': sysFrameNumber_6037
	'6038': subFrameNumber_6038
}>
/**
 * pucchTxPowerValue
 *
 * PUCCH Tx power measurement in dB (-112..23)
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type pucchTxPowerValue_2 = number
/**
 * dlPathLoss
 *
 * Downlink path loss calculated in UE (0..255)
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type dlPathLoss_3 = number
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
 * The objectURN for pucchPowerControl
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3379'
