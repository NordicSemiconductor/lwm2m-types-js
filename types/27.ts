/**
 * 5GNR Connectivity
 *
 * This is a device management object that should be used for 5G-NR capable
 * devices.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/27.xml
 *
 * ID: 27
 * LWM2MVersion: 1.2
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type n5GNRConnectivity_27 = Readonly<
	Array<{
		'0': ConnectivityOption_0
		'1'?: NRBandSupportavailable_1
		'2'?: NRBandattached_2
		'3'?: S_NSSAI_3
		'4'?: DNNName_4
		'5'?: PDUSessionId_5
		'6'?: SSCMode_6
		'7'?: PDUSessionType_7
		'8'?: n5QI_8
		'9'?: SDAPEnablement_9
		'10'?: QFI_10
		'11'?: SessionAMBR_11
		'12'?: APN_AMBR_12
		'13'?: NASReflectiveQOS_13
		'14'?: AccessStratumReflectiveQoS_14
		'15'?: P_CSCFAddressIndex_15
		'16'?: PDUsessionAuthentication_16
		'17'?: PLMNID_17
		'18'?: LADNSupport_18
		'19'?: IntegrityProtectiononDRB_19
		'20'?: AccesstypePreference_20
	}>
>
/**
 * Connectivity Option
 *
 * Indicates the connectivity option.
 * 1 = Core Network: EPC; Master RAT: LTE; Secondary RAT: -
 * 3 = Core Network: EPC; Master RAT: LTE; Secondary RAT: NR
 * 2 = Core Network: 5GC; Master RAT: NR; Secondary RAT: -
 * 4 = Core Network: 5GC; Master RAT: NR; Secondary RAT: eLTE
 * 5 = Core Network: 5GC; Master RAT: eLTE; Secondary RAT: -
 * 7 = Core Network: 5GC; Master RAT: eLTE; Secondary RAT: NR
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type ConnectivityOption_0 = number
/**
 * NR Band Support available
 *
 * Indicates the Operating NR Bands supported by UE in NSA mode. Value
 * represents the integer value of band mentioned in 3GPP Spec 38.104 (Table:
 * Table 5.2-1 and Table 5.2-2)
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: false
 */
type NRBandSupportavailable_1 = Array<number>
/**
 * NR Band attached
 *
 * Indicates the Operating NR Bands on which UE is attached. Value represents
 * the integer value of band mentioned in 3GPP Spec 38.104 (Table: Table 5.2-1
 * and Table 5.2-2)
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: false
 */
type NRBandattached_2 = Array<number>
/**
 * S-NSSAI
 *
 * Indicates the Single - Network Slice Selection Assistance Information for 5G
 * Standalone mode
 * 0 = eMBB
 * 1 = URLLC
 * 2 = MIoT
 * 3 = Custom
 * 4-7 = Reserved
 *
 * ID: 3
 * MultipleInstances: true
 * Mandatory: false
 */
type S_NSSAI_3 = Array<number>
/**
 * DNN Name
 *
 * Data Network Name in case of Network Bearer Resource is a 5G SA (FDD/TDD)
 * Cellular Network.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type DNNName_4 = string
/**
 * PDU Session Id
 *
 * Indicates the PDU Session ID over which LwM2M session is established for 5G
 * SA (FDD/TDD) Cellular Network.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type PDUSessionId_5 = number
/**
 * SSC Mode
 *
 * Indicates the Session and Service Continuity mode for 5G SA (FDD/TDD)
 * Cellular Network.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type SSCMode_6 = number
/**
 * PDU Session Type
 *
 * Indicates the type of PDU session over which LwM2M connection is established
 * for 5G SA (FDD/TDD) Cellular Network.
 * 1 = IPv4
 * 2 = IPv6
 * 3 = IPv4v6
 * 4 = Unstructured
 * 5 = Ethernet
 * 8 = Reserved (Spec Ref.)
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type PDUSessionType_7 = number
/**
 * 5QI
 *
 * Indicates the 5G QoS Identifier for 5G SA (FDD/TDD) Cellular Network.
 * 1-9,65,66,67,69,70,75,79,80,81,82,83,84,85 = Standard
 * 128 to 254 = Operator specific 0,255 = Reserved
 * Remaining = Spare (Spec Ref.)
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type n5QI_8 = number
/**
 * SDAP Enablement
 *
 * Indicates whether SDAP is enabled or not for 5G SA (FDD/TDD) Cellular
 * Network.
 * 0 = in UL only
 * 1 = In DL Only
 * 2 = In UL and DL both
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type SDAPEnablement_9 = number
/**
 * QFI
 *
 * Indicates the QoS Flow identifier for 5G SA (FDD/TDD) Cellular Network. (Spec
 * Ref.)
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type QFI_10 = number
/**
 * Session AMBR
 *
 * Indicates the Session Aggregate Maximum Bit Rate as per the 5G 3GPP Spec for
 * 5G SA (FDD/TDD) Cellular Network. (Spec Ref.)
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type SessionAMBR_11 = number
/**
 * APN-AMBR
 *
 * The Aggregate Maximum Bitrate which is applicable to a given APN over which
 * LwM2M session is established for 5G SA (FDD/TDD) Cellular Network.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type APN_AMBR_12 = number
/**
 * NAS Reflective QOS
 *
 * Indicates the QoS at NAS layer for 5G SA (FDD/TDD) Cellular Network.
 * 0 = Disabled
 * 1 = Enabled
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type NASReflectiveQOS_13 = boolean
/**
 * Access Stratum Reflective QoS
 *
 * Indicates the QoS for Access Stratum (RRC) for 5G SA (FDD/TDD) Cellular
 * Network..
 * 0 = Absent
 * 1 = Present
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type AccessStratumReflectiveQoS_14 = boolean
/**
 * P-CSCF Address Index
 *
 * Index for the P-CSCF address for 5G SA (FDD/TDD) Cellular Network.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type P_CSCFAddressIndex_15 = number
/**
 * PDU session Authentication
 *
 * Indicates the Authentication type for PDU Session
 * PDU session Authentication
 * 0 = Primary
 * 1 = Secondary
 * 2 = Both
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 */
type PDUsessionAuthentication_16 = number
/**
 * PLMN ID
 *
 * Indicates the PLMN ID over which UE is currently attached for 5G SA (FDD/TDD)
 * Cellular Network.
 * Allows server to see the currennt PLMN in string format (e.g. formatted as
 * result of AT+COPS=? as per 3GPP-TS_27.007)
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 */
type PLMNID_17 = string
/**
 * LADN Support
 *
 * Indicates whether LADN (Local Area Data Network) is supported or not for 5G
 * SA (FDD/TDD) Cellular Network.
 * 0 = Not Supported
 * 1 = Supported
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 */
type LADNSupport_18 = boolean
/**
 * Integrity Protection on DRB
 *
 * Current state of the Integrity Protection on Data Radio Bearer for 5G SA
 * (FDD/TDD) Cellular Network.
 * 0 = Disabled
 * 1 = Enabled with 64-Kbps
 * 2 = Enabled with Peak Rate
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: false
 */
type IntegrityProtectiononDRB_19 = number
/**
 * Access type Preference
 *
 * Indicates the Access Type preference for 5G SA (FDD/TDD) Cellular Network.
 * 0 = 3GPP
 * 1 = Non-3GPP
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 */
type AccesstypePreference_20 = boolean
/**
 * The objectURN for 5GNR Connectivity
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '27@1.2'
