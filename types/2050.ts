/**
 * CmdhDefaults
 *
 * Defines which CMDH related parameters will be used by default.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/2050.xml
 *
 * ID: 2050
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CmdhDefaults_2050 = Readonly<
	Array<{
		'0': DefaultEcRules_0
		'1': DefaultEcParamRules_1
	}>
>
/**
 * DefaultEcRules
 *
 * 1 or more references to CmdhDefEcValue Object Instances containing default
 * values for the ec (event category) parameter of an incoming request or
 * response when this parameter is not indicated in the message itself
 *
 * ID: 0
 * MultipleInstances: true
 * Mandatory: true
 */
type DefaultEcRules_0 = string
/**
 * DefaultEcParamRules
 *
 * 1 or more references to CmdhEcDefParamValues Object Instances
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: true
 */
type DefaultEcParamRules_1 = string
/**
 * The objectURN for CmdhDefaults
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '2050'
