/**
 * nuSIM Profile
 *
 * This device management object contains the elements of a nuSIM profile
 * package according to nuSIM Technical Specification NTS.01.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/507.xml
 *
 * ID: 507
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type nuSIMProfile_507 = Readonly<
	Array<{
		'0': encP_0
		'1': mac_1
		'2': eKpubDP_2
		'3': SigEKpubDP_3
		'4': KpubDP_4
		'5': SigKpubDP_5
		'6': KpubCl_6
	}>
>
/**
 * encP
 *
 * Encrypted nuSIM profile
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type encP_0 = string
/**
 * mac
 *
 * MAC value of encrypted nuSIM profile
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type mac_1 = string
/**
 * eKpubDP
 *
 * Ephemeral DP public key
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type eKpubDP_2 = string
/**
 * SigEKpubDP
 *
 * Signature of eKpubDP created with KpubDP
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type SigEKpubDP_3 = string
/**
 * KpubDP
 *
 * nuSIM DP public key
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type KpubDP_4 = string
/**
 * SigKpubDP
 *
 * Signature of KpubDP created with KpubCI
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type SigKpubDP_5 = string
/**
 * KpubCl
 *
 * nuSIM CI public key
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type KpubCl_6 = string
/**
 * The objectURN for nuSIM Profile
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '507'
