/**
 * ActiveCmdhPolicy
 *
 * This Object provides a link to the currently active set of CMDH policies
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/2049.xml
 *
 * ID: 2049
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type ActiveCmdhPolicy_2049 = Readonly<{
	'0': ActiveLink_0
}>
/**
 * ActiveLink
 *
 * Contains the reference to the CMDH policies (CmdhPolicy Object Instance)
 * currently active for the associated CSE.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type ActiveLink_0 = string
/**
 * The objectURN for ActiveCmdhPolicy
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '2049'
