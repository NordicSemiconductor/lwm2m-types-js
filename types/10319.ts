/**
 * RCU Control
 *
 * This LWM2M Object includes all operations on RCUs.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10319.xml
 *
 * ID: 10319
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: true
 */
export type RCUControl_10319 = Readonly<{
	'1'?: RCUDiagnosticsMode_1
	'2'?: RCULogRecording_2
}>
/**
 * RCU Diagnostics Mode
 *
 * If the Diagnostics Mode is switched on or not,
 * the setting of which is a Boolean value (1,0) where 1 is On and 0 is Off.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type RCUDiagnosticsMode_1 = boolean
/**
 * RCU Log Recording
 *
 * If the Log Recording is switched on or not,
 * the setting of which is a Boolean value (1,0) where 1 is On and 0 is Off.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type RCULogRecording_2 = boolean
/**
 * The objectURN for RCU Control
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10319'
