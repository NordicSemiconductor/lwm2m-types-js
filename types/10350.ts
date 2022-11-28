/**
 * Light
 *
 * This LWM2M Object includes light information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10350.xml
 *
 * ID: 10350
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Light_10350 = Readonly<
	Array<{
		'1': LightName_1
		'2': LightStatus_2
	}>
>
/**
 * Light Name
 *
 *
 * The display name of the light.
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type LightName_1 = string
/**
 * Light Status
 *
 * The status of the light, 1:On, 0:Off.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type LightStatus_2 = boolean
/**
 * The objectURN for Light
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10350'
