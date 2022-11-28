/**
 * Robot Selfcheck Info
 *
 * This LWM2M Object includes robot selfcheck result.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10332.xml
 *
 * ID: 10332
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type RobotSelfcheckInfo_10332 = Readonly<
	Array<{
		'1': Entity_1
		'2': Status_2
	}>
>
/**
 * Entity
 *
 *
 * Contains the object ID and object instance ID/Name, for example: </10320/2>.
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Entity_1 = string
/**
 * Status
 *
 * 0:Normal, 1:Unknown, 0:Failed with error code(negative number).
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type Status_2 = number
/**
 * The objectURN for Robot Selfcheck Info
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10332'
