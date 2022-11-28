/**
 * SCA PM
 *
 * This LWM2M Object includes all PM items belongs to a specific SCA.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10328.xml
 *
 * ID: 10328
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type SCAPM_10328 = Readonly<
	Array<{
		'1': SCAName_1
		'605': SCACurrent_605
		'606': SCATemperate_606
	}>
>
/**
 * SCA Name
 *
 *
 * The name of the SCA.
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type SCAName_1 = string
/**
 * SCA Current
 *
 * The current of the SCA.
 *
 * ID: 605
 * MultipleInstances: false
 * Mandatory: true
 * Units: A
 */
type SCACurrent_605 = number
/**
 * SCA Temperate
 *
 * SCA Temperature.
 *
 * ID: 606
 * MultipleInstances: false
 * Mandatory: true
 * Units: Cel
 */
type SCATemperate_606 = number
/**
 * The objectURN for SCA PM
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10328'
