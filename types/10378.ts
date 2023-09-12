/**
 * Edge Application Server Configuration
 *
 * This is used for UE to obtain information about suitable Edge Application
 * Server in Edge Data Network, and to support service continuity for the UE to
 * minimize service interruption.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10378.xml
 *
 * ID: 10378
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type EdgeApplicationServerConfiguration_10378 = Readonly<
	Array<{
		'0': ApplicationClientID_0
		'1': EASID_1
		'2': EASEndpoint_2
		'3'?: Type_3
	}>
>
/**
 * Application Client ID
 *
 * Identity of the Application Client used to distinguish multiple ACs if
 * applicable, refer to [3GPP TS 23.558].
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type ApplicationClientID_0 = string
/**
 * EAS ID
 *
 * The identifier of the Edge Application Server, refer to [3GPP TS 23.558].
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: true
 */
type EASID_1 = Array<string>
/**
 * EAS Endpoint
 *
 * The endpoint information (e.g. URI, FQDN, IP address) used to communicate
 * with the Edge Application Server, refer to [3GPP TS 23.558].
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: true
 */
type EASEndpoint_2 = Array<string>
/**
 * Type
 *
 * Type of EAS that may be useful in service continuity scenario. UE may switch
 * from source EAS (S-EAS) to target EAS (T-EAS) during mobility.
 * 1: S-EAS
 * 2: T-EAS
 * refer to [3GPP TS 23.558]
 *
 * ID: 3
 * MultipleInstances: true
 * Mandatory: false
 */
type Type_3 = Array<number>
/**
 * The objectURN for Edge Application Server Configuration
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10378'
