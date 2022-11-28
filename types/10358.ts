/**
 * Fan PM
 *
 * This LWM2M Object includes all PM items belongs to Fans.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10358.xml
 *
 * ID: 10358
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type FanPM_10358 = Readonly<
	Array<{
		'1': FanName_1
		'609'?: FanSpeed_609
	}>
>
/**
 * Fan Name
 *
 *
 * The name of the Fan.
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type FanName_1 = string
/**
 * Fan Speed
 *
 * The speed of the Fan.
 *
 * ID: 609
 * MultipleInstances: false
 * Mandatory: false
 * Units: 1/min
 */
type FanSpeed_609 = number
/**
 * The objectURN for Fan PM
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10358'
