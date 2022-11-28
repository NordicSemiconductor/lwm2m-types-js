/**
 * Robot Control
 *
 * This LWM2M Object includes all operations on robots.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10329.xml
 *
 * ID: 10329
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: true
 */
export type RobotControl_10329 = Readonly<{
	'1'?: CollisionDetection_1
	'2'?: DropDetection_2
	'3'?: AutomaticNavigation_3
}>
/**
 * Collision Detection
 *
 * If Collision Detection is enabled or not,
 * the setting of which is a Boolean value (1,0) where 1 is Enabled and 0 is
 * Disabled.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type CollisionDetection_1 = boolean
/**
 * Drop Detection
 *
 * If Drop Detection is enabled or not,
 * the setting of which is a Boolean value (1,0) where 1 is Enabled and 0 is
 * Disabled.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type DropDetection_2 = boolean
/**
 * Automatic Navigation
 *
 * If Automatic Navigation is enabled or not,
 * the setting of which is a Boolean value (1,0) where 1 is Enabled and 0 is
 * Disabled.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type AutomaticNavigation_3 = boolean
/**
 * The objectURN for Robot Control
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10329'
