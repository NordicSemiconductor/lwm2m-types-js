/**
 * Robot
 *
 * This LWM2M Object includes robot information and links to the location
 * object.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10315.xml
 *
 * ID: 10315
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: true
 */
export type Robot_10315 = Readonly<{
	'1': RobotID_1
	'2': RobotType_2
	'3': RobotSerialNumber_3
	'4': Charging_4
	'51': BatteryLevel_51
	'5852': Ontime_5852
	'5'?: Positioning_5
	'6'?: Location_6
}>
/**
 * Robot ID
 *
 * The Robot identity.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type RobotID_1 = string
/**
 * Robot Type
 *
 * Robot Type, for example: Ginger, CloudCleanX, CloudPepper.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type RobotType_2 = string
/**
 * Robot Serial Number
 *
 * Robot Type, for example: Ginger, CloudCleanX, CloudPepper.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type RobotSerialNumber_3 = string
/**
 * Charging
 *
 * If the robot is charging or not,the setting of which is a Boolean value (1,0)
 * where 1 is Yes and 0 is No.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type Charging_4 = boolean
/**
 * Battery Level
 *
 * Current Battery Level of the robot.
 *
 * ID: 51
 * MultipleInstances: false
 * Mandatory: true
 * Units: %
 */
type BatteryLevel_51 = number
/**
 * On time
 *
 * The time in seconds that the device has been on. Writing a value of 0 resets
 * the counter.
 *
 * ID: 5852
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type Ontime_5852 = number
/**
 * Positioning
 *
 * If the robot is needed to be positioned, the setting of which is a Boolean
 * value (1,0) where 1 is Yes and 0 is No.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Positioning_5 = boolean
/**
 * Location
 *
 *
 * The location of the robot, contains the reference to the Location object(6).
 *
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Location_6 = string
/**
 * The objectURN for Robot
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10315'
