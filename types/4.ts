/**
 * Connectivity Monitoring
 *
 * This LwM2M Object enables monitoring of parameters related to network
 * connectivity.
 * In this general connectivity Object, the Resources are limited to the most
 * general cases common to most network bearers. It is recommended to read the
 * description, which refers to relevant standard development organizations
 * (e.g. 3GPP, IEEE).
 * The goal of the Connectivity Monitoring Object is to carry information
 * reflecting the more up to date values of the current connection for
 * monitoring purposes. Resources such as Link Quality, Radio Signal Strength,
 * Cell ID are retrieved during connected mode at least for cellular networks.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/4.xml
 *
 * ID: 4
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.3
 * MultipleInstances: false
 * Mandatory: false
 */
export type ConnectivityMonitoring_4 = Readonly<{
	'0': NetworkBearer_0
	'1': AvailableNetworkBearer_1
	'2': RadioSignalStrength_2
	'4': IPAddresses_4
	'10'?: SMCC_10
	'11'?: SignalSNR_11
	'12'?: LAC_12
	'13'?: CoverageEnhancementLevel_13
	'3'?: LinkQuality_3
	'5'?: RouterIPAddresses_5
	'6'?: LinkUtilization_6
	'7'?: APN_7
	'8'?: CellID_8
	'9'?: SMNC_9
}>
/**
 * Network Bearer
 *
 * Indicates the network bearer used for the current LwM2M communication session
 * from the network bearer list below.
 * The number range is split into three categories:
 * 0 - 20 are Cellular Bearers
 * 21 - 40 are Wireless Bearers
 * 41 - 50 are Wireline Bearers
 * More specifically:
 * 0: GSM cellular network
 * 1: TD-SCDMA cellular network
 * 2: WCDMA cellular network
 * 3: CDMA2000 cellular network
 * 4: WiMAX cellular network
 * 5: LTE-TDD cellular network
 * 6: LTE-FDD cellular network
 * 7: NB-IoT
 * 8: 5G-NR TDD
 * 9: 5G-NR FDD
 * 10 - 20: Reserved for other types of cellular network
 * 21: WLAN network
 * 22: Bluetooth network
 * 23: IEEE 802.15.4 network
 * 24 - 40: Reserved for other types of local wireless network
 * 41: Ethernet
 * 42: DSL
 * 43: PLC
 * 44 - 50: reserved for other types of wireline networks.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type NetworkBearer_0 = number
/**
 * Available Network Bearer
 *
 * Indicates a list of current available network bearer. Each Resource Instance
 * has a value from the network bearer list.
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: true
 */
type AvailableNetworkBearer_1 = number
/**
 * Radio Signal Strength
 *
 * Indicates the average value of the received signal strength indication used
 * in the
 * current network bearer (as indicated by Resource 0 of this Object). The value
 * is expressed in dBm. For the following network bearers the signal strength
 * parameters indicated below are represented by this resource:
 * GSM: RSSI
 * UMTS: RSCP
 * LTE: RSRP
 * NB-IoT: NRSRP
 * For more details on Network Measurement Report, refer to the appropriate
 * Cellular or Wireless Network standards, (e.g. for LTE Cellular Network
 * refer to 3GPP TS 36.133 specification).
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type RadioSignalStrength_2 = number
/**
 * IP Addresses
 *
 * The IP addresses assigned to the connectivity interface. (e.g. IPv4, IPv6,
 * etc.)
 *
 * ID: 4
 * MultipleInstances: true
 * Mandatory: true
 */
type IPAddresses_4 = string
/**
 * SMCC
 *
 * Serving Mobile Country Code. This is applicable when the Network Bearer
 * Resource value is referring to a cellular network.
 * As specified in TS [3GPP 23.003].
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type SMCC_10 = number
/**
 * SignalSNR
 *
 * SINR: Signal to Interference plus Noise Ratio SINR is the ratio of the
 * strength of the received signal to the strength of the received interference
 * signal (noise and interference).
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type SignalSNR_11 = number
/**
 * LAC
 *
 * Location Area Code in case Network Bearer Resource is a Cellular Network. As
 * specified in TS [3GPP 23.003] and in [3GPP. 24.008]
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type LAC_12 = number
/**
 * Coverage Enhancement Level
 *
 * Indicates the Coverage Enhancement Level of the UE in the serving cell. The
 * Coverage Enhancement levels are defined and specified in 3GPP TS 36.331 and
 * 36.213.
 * 0: No Coverage Enhancement in the serving cell
 * 1: Coverage Enhancement level 0
 * 2: Coverage Enhancement level 1
 * 3: Coverage Enhancement level 2
 * 4: Coverage Enhancement level 3
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type CoverageEnhancementLevel_13 = number
/**
 * Link Quality
 *
 * This contains received link quality e.g. LQI for IEEE 802.15.4 (range
 * 0...255), RxQual Downlink for GSM (range 0...7, refer to [3GPP 44.018] for
 * more details on Network Measurement Report encoding), RSRQ for LTE, (refer to
 * [3GPP 36.214]), NRSRQ for NB-IoT (refer to [3GPP 36.214]).
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type LinkQuality_3 = number
/**
 * Router IP Addresses
 *
 * The IP address of the next-hop IP router, on each of the interfaces specified
 * in resource 4 (IP Addresses).
 * Note: This IP Address doesn't indicate the Server IP address.
 *
 * ID: 5
 * MultipleInstances: true
 * Mandatory: false
 */
type RouterIPAddresses_5 = string
/**
 * Link Utilization
 *
 * The percentage indicating the average utilization of the link to the next-hop
 * IP router.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type LinkUtilization_6 = number
/**
 * APN
 *
 * Access Point Name in case Network Bearer Resource is a Cellular Network.
 *
 * ID: 7
 * MultipleInstances: true
 * Mandatory: false
 */
type APN_7 = string
/**
 * Cell ID
 *
 * Serving Cell ID in case Network Bearer Resource is a Cellular Network.
 * As specified in TS [3GPP 23.003] and in [3GPP. 24.008]. Range (0...65535) in
 * GSM/EDGE
 * UTRAN Cell ID has a length of 28 bits.
 * Cell Identity in WCDMA/TD-SCDMA. Range: (0...268435455).
 * LTE Cell ID has a length of 28 bits.
 * Parameter definitions in [3GPP 25.331].
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type CellID_8 = number
/**
 * SMNC
 *
 * Serving Mobile Network Code. This is applicable when the Network Bearer
 * Resource value is referring to a cellular network.
 * As specified in TS [3GPP 23.003].
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type SMNC_9 = number
/**
 * The objectURN for Connectivity Monitoring
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '4:1.3@1.1'
