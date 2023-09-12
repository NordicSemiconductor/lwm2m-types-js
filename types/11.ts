/**
 * LWM2M APN Connection Profile
 *
 * This object specifies resources to enable a device to connect to an APN.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/11.xml
 *
 * ID: 11
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type LWM2MAPNConnectionProfile_11 = Readonly<
	Array<{
		'0': Profilename_0
		'4': AuthenticationType_4
		'1'?: APN_1
		'2'?: AutoselectAPNbydevice_2
		'3'?: Enablestatus_3
		'5'?: UserName_5
		'6'?: Secret_6
		'7'?: ReconnectSchedule_7
		'8'?: Validity_MCC_MNC_8
		'9'?: Connectionestablishmenttime_1_9
		'10'?: Connectionestablishmentresult_1_10
		'11'?: Connectionestablishmentrejectcause_1_11
		'12'?: Connectionendtime_1_12
		'13'?: TotalBytesSent_13
		'14'?: TotalBytesReceived_14
		'15'?: IPaddress_2_15
		'16'?: Prefixlength_2_16
		'17'?: Subnetmask_2_17
		'18'?: Gateway_2_18
		'19'?: PrimaryDNSaddress_2_19
		'20'?: SecondaryDNSaddress_2_20
		'21'?: QCI_3_21
		'22'?: Vendorspecificextensions_22
		'23'?: TotalPacketsSent_23
		'24'?: PDNType_24
		'25'?: APNRateControl_25
		'26'?: ServingPLMNRatecontrol_26
		'27'?: UplinkTimeUnit_27
		'28'?: APNRateControlforExceptionData_28
		'29'?: APNExceptionDataUplinkTimeUnit_29
		'30'?: SupportedRATTypes_30
		'31'?: RDSApplicationID_31
		'32'?: RDSDestinationPort_32
		'33'?: RDSSourcePort_33
	}>
>
/**
 * Profile name
 *
 * Human-readable identifier. Multiple connection profiles can share the same
 * APN value but e.g. have different credentials.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Profilename_0 = string
/**
 * Authentication Type
 *
 * Enumerated type:
 * 0: PAP
 * 1: CHAP
 * 2: PAP or CHAP
 * 3: None
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type AuthenticationType_4 = number
/**
 * APN
 *
 * Presented to network during connection to PDN e.g. ‘internet.15.234’.
 * This resource is not included in case ‘Auto select APN by device’ resource
 * has the value TRUE.
 * If the APN resource is present but contains an empty string, then the device
 * shall not provide an APN in the connection request (invoking default APN
 * procedures in the network).
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type APN_1 = string
/**
 * Auto select APN by device
 *
 * If this resource is present for a connection profile, it enables the device
 * to choose an APN according to a device specific algorithm. It provides a
 * fall-back mechanism e.g. for some MVNO SIMs the configured APN may not work.
 * Resource not included or set to False in case the ‘APN’ resource is
 * specified.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type AutoselectAPNbydevice_2 = boolean
/**
 * Enable status
 *
 * Allows the profile to be remotely enabled or disabled. True: APN profile is
 * enabled. False: APN profile is disabled. If the status is set to disabled
 * (False) while a data connection for that profile is active, that data
 * connection will be released.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Enablestatus_3 = boolean
/**
 * User Name
 *
 * Used with e.g. PAP.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type UserName_5 = string
/**
 * Secret
 *
 * Used with e.g. PAP.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Secret_6 = string
/**
 * Reconnect Schedule
 *
 * Comma separated list of retry delay values in seconds to be used in case of
 * unsuccessful connection establishment attempts. e.g. "10,60,600,3600,86400"
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type ReconnectSchedule_7 = string
/**
 * Validity (MCC, MNC)
 *
 * Coma separated mobile country code, then mobile network code - for which this
 * APN is valid.
 *
 * ID: 8
 * MultipleInstances: true
 * Mandatory: false
 */
type Validity_MCC_MNC_8 = Array<string>
/**
 * Connection establishment time (1)
 *
 * UTC time of connection request. See note (1)
 *
 * ID: 9
 * MultipleInstances: true
 * Mandatory: false
 */
type Connectionestablishmenttime_1_9 = Array<number>
/**
 * Connection establishment result (1)
 *
 * 0 = accepted
 * 1 = rejected
 *
 *
 * ID: 10
 * MultipleInstances: true
 * Mandatory: false
 */
type Connectionestablishmentresult_1_10 = Array<number>
/**
 * Connection establishment reject cause (1)
 *
 * Reject cause, see [3GPP-TS_24.008, 3GPP-TS_24.301]
 *
 * ID: 11
 * MultipleInstances: true
 * Mandatory: false
 */
type Connectionestablishmentrejectcause_1_11 = Array<number>
/**
 * Connection end time (1)
 *
 * UTC time of connection end.
 *
 * ID: 12
 * MultipleInstances: true
 * Mandatory: false
 */
type Connectionendtime_1_12 = Array<number>
/**
 * TotalBytesSent
 *
 * Rolling counter for total number of bytes sent via this interface since last
 * device reset.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type TotalBytesSent_13 = number
/**
 * TotalBytesReceived
 *
 * Rolling counter for total number of bytes received via this interface since
 * last device reset.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type TotalBytesReceived_14 = number
/**
 * IP address (2)
 *
 * May be IPv4 or IPv6 address.
 *
 * ID: 15
 * MultipleInstances: true
 * Mandatory: false
 */
type IPaddress_2_15 = Array<string>
/**
 * Prefix length(2)
 *
 * Associated with IPv6 address.
 *
 * ID: 16
 * MultipleInstances: true
 * Mandatory: false
 */
type Prefixlength_2_16 = Array<string>
/**
 * Subnet mask (2)
 *
 * Subnet mask.
 *
 * ID: 17
 * MultipleInstances: true
 * Mandatory: false
 */
type Subnetmask_2_17 = Array<string>
/**
 * Gateway (2)
 *
 * Gateway.
 *
 * ID: 18
 * MultipleInstances: true
 * Mandatory: false
 */
type Gateway_2_18 = Array<string>
/**
 * Primary DNS address (2)
 *
 * Primary DNS address.
 *
 * ID: 19
 * MultipleInstances: true
 * Mandatory: false
 */
type PrimaryDNSaddress_2_19 = Array<string>
/**
 * Secondary DNS address (2)
 *
 * Secondary DNS address.
 *
 * ID: 20
 * MultipleInstances: true
 * Mandatory: false
 */
type SecondaryDNSaddress_2_20 = Array<string>
/**
 * QCI (3)
 *
 * Quality of service Class Identifier QCI), applicable to LTE and NB-IoT only
 * This resource enables the LWM2M server to signal the LWM2M client which QCI
 * it shall request from the network.
 * See [3GPP-TS_23.203, and 3GPP-TS_24.301] for a description of QCI values. See
 * note (3).
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 */
type QCI_3_21 = number
/**
 * Vendor specific extensions
 *
 * Links to a vendor specific object.
 *
 * ID: 22
 * MultipleInstances: false
 * Mandatory: false
 */
type Vendorspecificextensions_22 = string
/**
 * TotalPacketsSent
 *
 * Rolling counter for total number of packets sent via this interface since
 * last device reset.
 *
 * ID: 23
 * MultipleInstances: false
 * Mandatory: false
 */
type TotalPacketsSent_23 = number
/**
 * PDN Type
 *
 * 0=Non-IP
 * 1=IPv4
 * 2=IPv6
 * 3=IPv4v6
 *
 *
 * ID: 24
 * MultipleInstances: false
 * Mandatory: false
 */
type PDNType_24 = number
/**
 * APN Rate Control
 *
 * Determines the number of allowed uplink PDU transmissions per time interval
 * per APN.
 * Rate Control information is part of the Protocol Configuration Options (PCO)
 * according to [3GPP-TS_24.301], [3GPP-TS_24.008 and [3GPP-TS_27.060]
 *
 *
 * ID: 25
 * MultipleInstances: false
 * Mandatory: false
 */
type APNRateControl_25 = number
/**
 * Serving PLMN Rate control
 *
 * For data sent over NAS, this indicates the maximum number of messages the UE
 * can send per time unit (Resource 27) per PDN connection. See [3GPP-TS_23.401]
 * clause 4.7.7.2 and [3GPP-TS_24.008] clause 10.5.6.3.2.
 *
 * ID: 26
 * MultipleInstances: false
 * Mandatory: false
 */
type ServingPLMNRatecontrol_26 = number
/**
 * Uplink Time Unit
 *
 * In association with APN Rate Control (Resource 28), this indicates the units
 * of the period over which the maximum number of PDU transmissions are
 * measured. [3GPP-TS_24.008] clause 10.5.6.3.2 specifies that 0=unrestricted,
 * 1=minute, 2=hour, 3=day and 4=week.
 *
 * ID: 27
 * MultipleInstances: false
 * Mandatory: false
 */
type UplinkTimeUnit_27 = number
/**
 * APN Rate Control for Exception Data
 *
 * Determines the number of allowed uplink PDU transmissions for exception data
 * per time interval for this APN. This
 * Rate Control information is part of the Protocol Configuration Options (PCO)
 * according to [3GPP-TS_24.301], [3GPP-TS_24.008 and [3GPP-TS_27.060]
 *
 *
 * ID: 28
 * MultipleInstances: false
 * Mandatory: false
 */
type APNRateControlforExceptionData_28 = number
/**
 * APN Exception Data Uplink Time Unit
 *
 * In association with APN Rate Control for Exception Data (Resource 28), this
 * indicates the units of the period over which the maximum number of messages
 * is measured. [3GPP-TS_24.008] clause 10.5.6.3.2 specifies that
 * 0=unrestricted, 1=minute, 2=hour, 3=day and 4=week.
 *
 * ID: 29
 * MultipleInstances: false
 * Mandatory: false
 */
type APNExceptionDataUplinkTimeUnit_29 = number
/**
 * Supported RAT Types
 *
 * This resource specifies the supported RAT Types that the LWM2M Client can use
 * for connecting to the specified APN.
 * Each instance is one of these values:
 * 1: 3GPP PS
 * 2: 3GPP PS GSM (GPRS)
 * 3: 3GPP PS UMTS
 * 4: 3GPP PS LTE
 * 5: 1xEV-DO
 * 6: 3GPP CS
 * 12: 3GPP PS LTE with CIoT EPS optimisations, User Plane
 * 13: 3GPP PS LTE with CIoT EPS optimisations, Control Plane
 * 14: 3GPP PS NB-IoT Control Plane optimisations
 * 15: 3GPP PS NB-IoT User Plane optimisations
 * 16-100: Reserved for future use
 *
 *
 * ID: 30
 * MultipleInstances: true
 * Mandatory: false
 */
type SupportedRATTypes_30 = Array<number>
/**
 * RDS Application ID
 *
 * This resource provides the Application ID to correlate to the appropriate
 * instance Ids of Resources 32 and 33.
 *
 * ID: 31
 * MultipleInstances: true
 * Mandatory: false
 */
type RDSApplicationID_31 = Array<string>
/**
 * RDS Destination Port
 *
 * This resource provides the correlated RDS Destination Port Number (as defined
 * in 3GPP TS 24.250) to use for contacting the LwM2M Server identifed in
 * Resource 29 when communicating through the SCEF across the Non-IP binding
 * (Resource 24 must equal 0).
 *
 * ID: 32
 * MultipleInstances: true
 * Mandatory: false
 */
type RDSDestinationPort_32 = Array<number>
/**
 * RDS Source Port
 *
 * This resource provides the correlated RDS Source Port Number (as defined in
 * 3GPP TS 24.250) to use for contacting the LwM2M Server identifed in Resource
 * 29 when communicating through the SCEF across the Non-IP binding (Resource 24
 * must equal 0).
 *
 * ID: 33
 * MultipleInstances: true
 * Mandatory: false
 */
type RDSSourcePort_33 = Array<number>
/**
 * The objectURN for LWM2M APN Connection Profile
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '11:1.1@1.1'
