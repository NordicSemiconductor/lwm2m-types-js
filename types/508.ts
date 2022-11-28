/**
 * nuSIM
 *
 * This device management object represents a nuSIM integrated SIM according to
 * NTS.01 - nuSIM Integrated SIM Specification.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/508.xml
 *
 * ID: 508
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type nuSIM_508 = Readonly<{
	'0': EID_0
	'1': ICCID_1
	'2': nuSIMCapabilities_2
	'4': nuSIMProfile_4
	'6': LoadProfileResult_6
	'3'?: nuSIMCert_3
}>
/**
 * EID
 *
 * Contains the unique identifier of the nuSIM.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type EID_0 = string
/**
 * ICCID
 *
 * Contains the ICCID of the currently loaded nuSIM profile.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type ICCID_1 = string
/**
 * nuSIM Capabilities
 *
 * Contains the supported nuSIM specification version and optional capabilities
 * of the nuSIM.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type nuSIMCapabilities_2 = string
/**
 * nuSIM Profile
 *
 * Points to an instance of the nuSIM profile object which is to be loaded by
 * executing Load Profile, see Resource 5.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type nuSIMProfile_4 = string
/**
 * Load Profile Result
 *
 * Contains the result of the last Load Profile operation: 0=successful, 1=not
 * successful, other values are implementation-specific.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type LoadProfileResult_6 = number
/**
 * nuSIM Cert
 *
 * Contains the individual nuSIM certificate CERT.NUSIM.ECDSA, if available.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type nuSIMCert_3 = string
/**
 * The objectURN for nuSIM
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '508'
