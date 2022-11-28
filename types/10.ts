/**
 * LWM2M Cellular Connectivity
 *
 * This object specifies resources to enable a device to connect to a 3GPP or
 * 3GPP2 bearer, including GPRS/EDGE, UMTS, LTE, NB-IoT, SMS. For cellular
 * connectivity, this object focuses on Packet Switched (PS) connectivity and
 * doesn't aim to provide comprehensive Circuit Switched (CS) connectivity
 * management.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10.xml
 *
 * ID: 10
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.1
 * MultipleInstances: false
 * Mandatory: false
 */
export type LWM2MCellularConnectivity_10 = Readonly<{
	'11': ActivatedProfileNames_11
	'0'?: SMSCaddress_0
	'1'?: Disableradioperiod_1
	'10'?: eDRXparametersforA_Gbmode_10
	'12'?: SupportedPowerSavingModes_12
	'13'?: ActivePowerSavingModes_13
	'14'?: ReleaseAssistanceIndicationUsage_14
	'2'?: Moduleactivationcode_2
	'3'?: Vendorspecificextensions_3
	'4'?: PSMTimer_4
	'5'?: ActiveTimer_5
	'7'?: eDRXparametersforIumode_7
	'8'?: eDRXparametersforWB_S1mode_8
	'9'?: eDRXparametersforNB_S1mode_9
}>
/**
 * Activated Profile Names
 *
 * Links to instances of the "APN connection profile" object representing every
 * APN connection profile that has an activated PDN connection.
 *
 * ID: 11
 * MultipleInstances: true
 * Mandatory: true
 */
type ActivatedProfileNames_11 = string
/**
 * SMSC address
 *
 * E.164 address of SMSC.
 * Applicable for 3GPP2 networks where SMSC is not available from a smart card,
 * or for 3GPP/3GPP2 networks to provide the application with a customer
 * specific SMSC. The application decides how to use this parameter, e.g.
 * precedence over UICC based SMSC address.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: false
 */
type SMSCaddress_0 = string
/**
 * Disable radio period
 *
 * Time period in MINUTES for which the device shall disconnect from cellular
 * radio (PS detach, CS detach if applicable).
 * Can be used to handle network overload situations.
 * The value is a positive integer (0 to 65535), duration can be from 1 minute
 * to 65535 minutes (approximately 45 days)
 * As soon the server writes a value which is >0 the device SHALL disconnect.
 * When the period has elapsed the device MAY reconnect.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type Disableradioperiod_1 = number
/**
 * eDRX parameters for A/Gb mode
 *
 * Extended DRX parameters (Paging Time Window and eDRX value) for A/Gb mode
 * which the UE can request from the network. This resource is encoded as octet
 * 3 in [3GPP-TS_24.008, clause 10.5.5.32].
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type eDRXparametersforA_Gbmode_10 = string
/**
 * Supported Power Saving Modes
 *
 * This Resource is used to indicate the Power Saving Modes supported by the
 * LwM2M Client.
 * Each bit set in the Resource Instance value corresponds to a supported mode.
 * Several bit set, means several modes are supported.
 * 1st LSB: PSM
 * 2nd LSB: eDRX
 * Other bits are reserved for future use
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type SupportedPowerSavingModes_12 = number
/**
 * Active Power Saving Modes
 *
 * This Resource is used to indicate which Power Saving Mode(s) is (are)
 * currently active in the LwM2M Client.
 * Each bit set in the Resource Instance value corresponds to an active mode.
 * 1st LSB: PSM
 * 2nd LSB: eDRX
 * Other bits are reserved for future use
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type ActivePowerSavingModes_13 = number
/**
 * Release Assistance Indication Usage
 *
 * This resource is used to indicate client configuration as to when it uses
 * Release Assistance Indicator (RAI) as defined in 3GPP-TS_24.310, clause
 * 9.9.4.25 to indicate to the NW when connection can be released.
 * 1st LSB: RAI not used
 * 2nd LSB: RAI used when transmitting last message which requires no
 * application/transport layer response/ confirmation
 * 3rd LSB: RAI used when transmitting last message which requires
 * response/confirmation; when this bit is set, 2nd LSB is also expected to be
 * set.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type ReleaseAssistanceIndicationUsage_14 = number
/**
 * Module activation code
 *
 * Configurable in case the application needs to issue a code (e.g. via AT
 * command) to activate the module. e.g. "*98".
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type Moduleactivationcode_2 = string
/**
 * Vendor specific extensions
 *
 * Links to a vendor specific object.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Vendorspecificextensions_3 = string
/**
 * PSM Timer
 *
 * PSM Timer = Extended T3412 as described in section 10.5.7.4a (GPRS Timer 3)
 * of [3GPP-TS_24.008]. The value in seconds has to be compatible with Extended
 * T3412, otherwise conversion will not be exact. It defines Max interval
 * between periodic TAU if there is no other transmission from the device.
 * During most of this time the device is considered as unreachable and can
 * therefore go into a deep sleep mode while keeping the PDN connection(s)
 * active.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type PSMTimer_4 = number
/**
 * Active Timer
 *
 * Active Timer = T3324 as described in section 10.5.7.3 (GPRS Timer) of
 * [3GPP-TS_24.008]. The value in seconds has to be compatible with T3324,
 * otherwise conversion will not be exact. This is the time a UE has to remain
 * reachable after transitioning to idle state in case there is pending data
 * from the NW to send out. At the end of T3324 UE can go into a deep sleep mode
 * while keeping the PDN connection(s) active.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type ActiveTimer_5 = number
/**
 * eDRX parameters for Iu mode
 *
 * Extended DRX parameters (Paging Time Window and eDRX value) for Iu mode which
 * the UE can request from the network. This resource is encoded as octet 3 in
 * [3GPP-TS_24.008, clause 10.5.5.32].
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type eDRXparametersforIumode_7 = string
/**
 * eDRX parameters for WB-S1 mode
 *
 * Extended DRX parameters (Paging Time Window and eDRX value) for WB-S1 mode
 * which the UE can request from the network. This resource is encoded as octet
 * 3 in [3GPP-TS_24.008, clause 10.5.5.32].
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type eDRXparametersforWB_S1mode_8 = string
/**
 * eDRX parameters for NB-S1 mode
 *
 * Extended DRX parameters (Paging Time Window and eDRX value) for NB-S1 mode
 * which the UE can request from the network. This resource is encoded as octet
 * 3 in [3GPP-TS_24.008, clause 10.5.5.32].
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type eDRXparametersforNB_S1mode_9 = string
/**
 * The objectURN for LWM2M Cellular Connectivity
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10:1.1@1.1'
