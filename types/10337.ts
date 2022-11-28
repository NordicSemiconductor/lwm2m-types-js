/**
 * SCA
 *
 * This LWM2M Object includes SCA information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10337.xml
 *
 * ID: 10337
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type SCA_10337 = Readonly<
	Array<{
		'1': SCAName_1
		'100'?: SCAMotionStatus_100
	}>
>
/**
 * SCA Name
 *
 *
 * Human readable SCA name
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type SCAName_1 = string
/**
 * SCA Motion Status
 *
 * 0:Forward, 1:Backward, 2:Stop.
 *
 * ID: 100
 * MultipleInstances: false
 * Mandatory: false
 */
type SCAMotionStatus_100 = number
/**
 * The objectURN for SCA
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10337'
