/**
 * LPWAN Communication
 *
 * The uCIFI communication object provides attributes related to the
 * communication on the LPWAN network, including multicast grouping.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3412.xml
 *
 * ID: 3412
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type LPWANCommunication_3412 = Readonly<
	Array<{
		'6': MACaddress_6
		'1'?: Typeofnetwork_1
		'2'?: IPv4address_2
		'3'?: IPv6address_3
		'4'?: Networkaddress_4
		'5'?: Secondarynetworkaddress_5
		'7'?: Peeraddress_7
		'8'?: Multicastgroupaddress_8
		'9'?: Multicastgroupkey_9
		'10'?: Datarate_10
		'11'?: Transmitpower_11
		'12'?: Frequency_12
		'13'?: Sessiontime_13
		'14'?: Sessionduration_14
		'15'?: Meshnode_15
		'16'?: Maximumrepeattime_16
		'17'?: Numberofrepeats_17
		'18'?: Signaltonoiseratio_18
		'19'?: Communicationfailure_19
		'20'?: ReceivedSignalStrengthIndication_20
		'21'?: IMSI_21
		'22'?: IMEI_22
		'23'?: CurrentCommunicationOperator_23
		'24'?: IntegratedCircuitCardIdentifier_24
	}>
>
/**
 * MAC address
 *
 * IEEE MAC address of the device.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type MACaddress_6 = string
/**
 * Type of network
 *
 * Type of LPWAN communication network (e.g. LoRaWAN, NB-IoT, wireless mesh,
 * power line).
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type Typeofnetwork_1 = string
/**
 * IPv4 address
 *
 * Device’s IPv4 address.
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: false
 */
type IPv4address_2 = string
/**
 * IPv6 address
 *
 * Device’s IPv6 address.
 *
 * ID: 3
 * MultipleInstances: true
 * Mandatory: false
 */
type IPv6address_3 = string
/**
 * Network address
 *
 * Address of the device on the LPWAN network.
 *
 * ID: 4
 * MultipleInstances: true
 * Mandatory: false
 */
type Networkaddress_4 = string
/**
 * Secondary network address
 *
 * Secondary address used to communicate with the device on the LPWAN network.
 *
 * ID: 5
 * MultipleInstances: true
 * Mandatory: false
 */
type Secondarynetworkaddress_5 = string
/**
 * Peer address
 *
 * Address of a peer (e.g. a router, a mesh node, a gateway).
 *
 * ID: 7
 * MultipleInstances: true
 * Mandatory: false
 */
type Peeraddress_7 = string
/**
 * Multicast group address
 *
 * Group address from which the device should accept incoming messages and/or
 * commands.
 *
 * ID: 8
 * MultipleInstances: true
 * Mandatory: false
 */
type Multicastgroupaddress_8 = string
/**
 * Multicast group key
 *
 * Security key (e.g. AES128) to be shared with other members to be part of a
 * multicast group.
 *
 * ID: 9
 * MultipleInstances: true
 * Mandatory: false
 */
type Multicastgroupkey_9 = string
/**
 * Data rate
 *
 * Data rate of the communication used on the LPWAN network.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 * Units: B/s
 */
type Datarate_10 = number
/**
 * Transmit power
 *
 * Transmit power (also called TxPower) used by the device on the LPWAN network
 * in decibel per milliwatt.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 * Units: dBm
 */
type Transmitpower_11 = number
/**
 * Frequency
 *
 * Frequency of the wireless communication used on the LPWAN network.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 * Units: Hz
 */
type Frequency_12 = number
/**
 * Session time
 *
 * Starting time of the multicast session. The device shall not accept incoming
 * messages before this time or after this time + session duration.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type Sessiontime_13 = number
/**
 * Session duration
 *
 * Duration of the multicast session. The device shall accept incoming messages
 * only during this session duration time, starting at "Session time".
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Sessionduration_14 = number
/**
 * Mesh node
 *
 * Set to True if the device is a mesh node that should repeat incoming messages
 * on a mesh network.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type Meshnode_15 = boolean
/**
 * Maximum repeat time
 *
 * Maximum number of times a message should be repeated within a mesh network.
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 */
type Maximumrepeattime_16 = number
/**
 * Number of repeats
 *
 * Number of mesh nodes between the device and the destination device (e.g.
 * another device or a router) including the destination node, on a mesh
 * network.
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 */
type Numberofrepeats_17 = number
/**
 * Signal to noise ratio
 *
 * Ratio of signal power to the noise power.
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type Signaltonoiseratio_18 = number
/**
 * Communication failure
 *
 * Set to True when the device can't communicate properly.
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: false
 */
type Communicationfailure_19 = boolean
/**
 * Received Signal Strength Indication
 *
 * Signal strength of the communication network measured by the device (a.k.a.
 * RSSI or signal level).
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 * Units: dBm
 */
type ReceivedSignalStrengthIndication_20 = number
/**
 * IMSI
 *
 * Device’s International Mobile Subscriber Identity.
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 */
type IMSI_21 = string
/**
 * IMEI
 *
 * Device’s International Mobile Equipment Identity.
 *
 * ID: 22
 * MultipleInstances: false
 * Mandatory: false
 */
type IMEI_22 = string
/**
 * Current Communication Operator
 *
 * Device’s current communication operator. Communication operators could be
 * private operators. Thus this resource is free text format and does not use
 * Mobile Network Code or equivalent.
 *
 * ID: 23
 * MultipleInstances: false
 * Mandatory: false
 */
type CurrentCommunicationOperator_23 = string
/**
 * Integrated Circuit Card Identifier
 *
 * Unique identifier used to identify a communication SIM card. The ICCID is
 * defined by the ITU-T recommendation E.118 as the Primary Account Number,
 * composed of 19 or 20 characters containing the ISO Industry Identifier,
 * country code, issuer identity, account ID, and other data which allows the
 * network operator to identify the card.
 *
 * ID: 24
 * MultipleInstances: false
 * Mandatory: false
 */
type IntegratedCircuitCardIdentifier_24 = string
/**
 * The objectURN for LPWAN Communication
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3412'
