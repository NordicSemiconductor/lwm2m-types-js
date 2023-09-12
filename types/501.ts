/**
 * LTE-MTC Band Config
 *
 *
 * This object is used to configure the cellular band used by the device as well
 * as to change the band. It is intended to be used on LTE bands, as in NB-IoT
 * and LTE Cat M1 frequency bands.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/501.xml
 *
 * ID: 501
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type LTE_MTCBandConfig_501 = Readonly<
	Array<{
		'1': EARFCN_1
		'2': CurrentFrequency_Downlink_2
		'4': PrioritizedChannels_4
		'5': ResetTimeout_5
		'3'?: CurrentFrequency_Uplink_3
		'48'?: Vendorspecificextensions_48
		'5750'?: ApplicationType_5750
	}>
>
/**
 * EARFCN
 *
 *
 * E-UTRA Absolute Radio Frequency Channel Number (EARFCN), the carrier
 * frequency of the device radio.
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type EARFCN_1 = number
/**
 * Current Frequency (Downlink)
 *
 *
 * The current frequency used in the current band in MHz (Downlink).
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 * Units: MHz
 */
type CurrentFrequency_Downlink_2 = number
/**
 * Prioritized Channels
 *
 *
 * Indicates a list of currently supported EARFCNs in priority order. Each
 * Resource Instance has a value from the band list.
 *
 *
 * ID: 4
 * MultipleInstances: true
 * Mandatory: true
 */
type PrioritizedChannels_4 = Array<number>
/**
 * Reset Timeout
 *
 *
 * Time that the device will wait until reset once the Reset Resource is
 * triggered.
 *
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type ResetTimeout_5 = number
/**
 * Current Frequency (Uplink)
 *
 *
 * The current frequency used in the current band in MHz (Uplink).
 *
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: MHz
 */
type CurrentFrequency_Uplink_3 = number
/**
 * Vendor specific extensions
 *
 *
 * This resource links to a vendor specific object.
 *
 *
 * ID: 48
 * MultipleInstances: false
 * Mandatory: false
 */
type Vendorspecificextensions_48 = string
/**
 * Application Type
 *
 *
 * The application type of the sensor or actuator as a string depending on the
 * use case.
 *
 *
 * ID: 5750
 * MultipleInstances: false
 * Mandatory: false
 */
type ApplicationType_5750 = string
/**
 * The objectURN for LTE-MTC Band Config
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '501'
