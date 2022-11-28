/**
 * LED color light
 *
 * The uCIFI LED color light enables to control light colors of a LED luminaire.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3420.xml
 *
 * ID: 3420
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type LEDcolorlight_3420 = Readonly<
	Array<{
		'1': RGBvalue_1
	}>
>
/**
 * RGB value
 *
 * Text string according to the RBG hexadecimal format with # (e.g. #FF0000 for
 * 100% red).
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type RGBvalue_1 = string
/**
 * The objectURN for LED color light
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3420'
