/**
 * Fan
 *
 * This LWM2M Object includes Fan information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10366.xml
 *
 * ID: 10366
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Fan_10366 = Readonly<
	Array<{
		'1': FanName_1
	}>
>
/**
 * Fan Name
 *
 *
 * The display name of the Fan.
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type FanName_1 = string
/**
 * The objectURN for Fan
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10366'
