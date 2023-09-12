/**
 * General Info
 *
 * This LWM2M Object contains the referrence to all general info objects of the
 * robot.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10355.xml
 *
 * ID: 10355
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type GeneralInfo_10355 = Readonly<{
	'100': RobotGeneralInfo_100
	'101': RCUGeneralInfo_101
	'102'?: CCUGeneralInfo_102
	'103'?: ECUGeneralInfo_103
}>
/**
 * Robot General Info
 *
 *
 * Contains the reference to the Robot General Info.
 *
 *
 * ID: 100
 * MultipleInstances: false
 * Mandatory: true
 */
type RobotGeneralInfo_100 = string
/**
 * RCU General Info
 *
 *
 * Contains the reference to the RCU General info of the Robot.
 *
 *
 * ID: 101
 * MultipleInstances: false
 * Mandatory: true
 */
type RCUGeneralInfo_101 = string
/**
 * CCU General Info
 *
 *
 * Contains the reference to general info of CCUs of the Robot.
 *
 *
 * ID: 102
 * MultipleInstances: true
 * Mandatory: false
 */
type CCUGeneralInfo_102 = Array<string>
/**
 * ECU General Info
 *
 *
 * Contains the reference to general info of ECUs of the Robot.
 *
 *
 * ID: 103
 * MultipleInstances: true
 * Mandatory: false
 */
type ECUGeneralInfo_103 = Array<string>
/**
 * The objectURN for General Info
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10355'
