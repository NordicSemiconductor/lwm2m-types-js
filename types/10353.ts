/**
 * Warning Light
 *
 * This LWM2M Object includes Warning Light information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10353.xml
 *
 * ID: 10353
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type WarningLight_10353 = Readonly<{
	'1': LightStatus_1
	'2': LightWarning_2
}>
/**
 * Light Status
 *
 * The status of the light, 1:On, 0:Off.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type LightStatus_1 = boolean
/**
 * Light Warning
 *
 * If Light Warning is enabled or not, 1:Enabled, 0:Disabled.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type LightWarning_2 = boolean
/**
 * The objectURN for Warning Light
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10353'
