/**
 * Compressor
 *
 * This LWM2M Object includes the Compressor information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10327.xml
 *
 * ID: 10327
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Compressor_10327 = Readonly<
	Array<{
		'1': CompressorName_1
		'50': CompressorStatus_50
	}>
>
/**
 * Compressor Name
 *
 * The name of the compressor.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type CompressorName_1 = string
/**
 * Compressor Status
 *
 * The status of the compressor, 1:Working, 0:Stopped.
 *
 * ID: 50
 * MultipleInstances: false
 * Mandatory: true
 */
type CompressorStatus_50 = boolean
/**
 * The objectURN for Compressor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10327'
