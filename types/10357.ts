/**
 * PM
 *
 * This LWM2M Object contains the referrence to all PM objects.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10357.xml
 *
 * ID: 10357
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type PM_10357 = Readonly<{
	'100': RobotPM_100
	'101': RCUPM_101
	'102'?: CCUPM_102
	'103'?: SCAPM_103
}>
/**
 * Robot PM
 *
 *
 * Contains the reference to the Robot PM.
 *
 *
 * ID: 100
 * MultipleInstances: false
 * Mandatory: true
 */
type RobotPM_100 = string
/**
 * RCU PM
 *
 *
 * Contains the reference to the RCU PM.
 *
 *
 * ID: 101
 * MultipleInstances: false
 * Mandatory: true
 */
type RCUPM_101 = string
/**
 * CCU PM
 *
 *
 * Contains the reference to CCU PMs.
 *
 *
 * ID: 102
 * MultipleInstances: true
 * Mandatory: false
 */
type CCUPM_102 = Array<string>
/**
 * SCA PM
 *
 *
 * Contains the reference to SCA PMs.
 *
 *
 * ID: 103
 * MultipleInstances: true
 * Mandatory: false
 */
type SCAPM_103 = Array<string>
/**
 * The objectURN for PM
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10357'
