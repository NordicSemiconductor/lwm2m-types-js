/**
 * WLAN connectivity
 *
 * This object specifies resources to enable a device to connect to a WLAN
 * bearer.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/12.xml
 *
 * ID: 12
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type WLANconnectivity_12 = Readonly<
	Array<{
		'0': Interfacename_0
		'1': Enable_1
		'3': Status_3
		'4': BSSID_4
		'5': SSID_5
		'8': Mode_8
		'9': Channel_9
		'14': Standard_14
		'15': AuthenticationMode_15
		'2'?: RadioEnabled_2
		'6'?: BroadcastSSID_6
		'7'?: BeaconEnabled_7
		'10'?: AutoChannel_10
		'11'?: SupportedChannels_11
		'12'?: ChannelsInUse_12
		'13'?: RegulatoryDomain_13
		'16'?: EncryptionMode_16
		'17'?: WPAPreSharedKey_17
		'18'?: WPAKeyPhrase_18
		'19'?: WEPEncryptionType_19
		'20'?: WEPKeyIndex_20
		'21'?: WEPKeyPhrase_21
		'22'?: WEPKey1_22
		'23'?: WEPKey2_23
		'24'?: WEPKey3_24
		'25'?: WEPKey4_25
		'26'?: RADIUSServer_26
		'27'?: RADIUSServerPort_27
		'28'?: RADIUSSecret_28
		'29'?: WMMSupported_29
		'30'?: WMMEnabled_30
		'31'?: MACControlEnabled_31
		'32'?: MACAddressList_32
		'33'?: TotalBytesSent_33
		'34'?: TotalBytesReceived_34
		'35'?: TotalPacketsSent_35
		'36'?: TotalPacketsReceived_36
		'37'?: TransmitErrors_37
		'38'?: ReceiveErrors_38
		'39'?: UnicastPacketsSent_39
		'40'?: UnicastPacketsReceived_40
		'41'?: MulticastPacketsSent_41
		'42'?: MulticastPacketsReceived_42
		'43'?: BroadcastPacketsSent_43
		'44'?: BroadcastPacketsReceived_44
		'45'?: DiscardPacketsSent_45
		'46'?: DiscardPacketsReceived_46
		'47'?: UnknownPacketsReceived_47
		'48'?: Vendorspecificextensions_48
	}>
>
/**
 * Interface name
 *
 * Human-readable identifier eg. wlan0
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Interfacename_0 = string
/**
 * Enable
 *
 * 0: Disabled
 * 1: Enabled
 * Enable / Disable interface
 * When disabled radio must also be disabled
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Enable_1 = boolean
/**
 * Status
 *
 * 0: Disabled
 * 1: UP (OK)
 * 2: Error
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type Status_3 = number
/**
 * BSSID
 *
 * The MAC address of the interface, in hexadecimal form.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type BSSID_4 = string
/**
 * SSID
 *
 * The Service Set Identifier for this interface.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type SSID_5 = string
/**
 * Mode
 *
 * 0: Access Point
 * 1: Client (Station)
 * 2: Bridge
 * 3: Repeater
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 */
type Mode_8 = number
/**
 * Channel
 *
 * The current radio channel in use by this interface.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: true
 */
type Channel_9 = number
/**
 * Standard
 *
 * 0: 802.11a
 * 1: 802.11b
 * 2: 802.11bg
 * 3: 802.11g
 * 4: 802.11n
 * 5: 802.11bgn
 * 6: 802.11ac
 * 7: 802.11ah
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: true
 */
type Standard_14 = number
/**
 * Authentication Mode
 *
 * 0: None (Open)
 * 1: PSK
 * 2: EAP
 * 3: EAP+PSK
 * 4: EAPSIM
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: true
 */
type AuthenticationMode_15 = number
/**
 * Radio Enabled
 *
 * 0: Disabled
 * 1: 2.4 GHz
 * 2: 5 GHz
 * 3: 0.9 GHz
 * 4: 3.7 GHz
 * 5: 45 GHz
 * 6: 60 GHz
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type RadioEnabled_2 = number
/**
 * Broadcast SSID
 *
 * 0: Do not broadcast SSID 1: Broadcast SSID
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type BroadcastSSID_6 = boolean
/**
 * Beacon Enabled
 *
 * 0: Do not broadcast beacons 1: Broadcast beacons
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type BeaconEnabled_7 = boolean
/**
 * Auto Channel
 *
 * 0: Disabled 1: Enabled
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type AutoChannel_10 = boolean
/**
 * Supported Channels
 *
 * Array of supported radio channels.
 *
 * ID: 11
 * MultipleInstances: true
 * Mandatory: false
 */
type SupportedChannels_11 = number
/**
 * Channels In Use
 *
 * Array of channels which the access point has determined are ‘in use’.
 * Including any channels in-use by access point itself.
 *
 * ID: 12
 * MultipleInstances: true
 * Mandatory: false
 */
type ChannelsInUse_12 = number
/**
 * Regulatory Domain
 *
 * 802.11d Regulatory Domain String.
 * First two octets are ISO/IEC 3166-1 two-character country code.
 * The third octet is either " " (all environments), "O" (outside) or "I"
 * (inside).
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type RegulatoryDomain_13 = string
/**
 * Encryption Mode
 *
 * 0: AES (WPA2)
 * 1: TKIP (WPA)
 * 2: WEP (1)
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 */
type EncryptionMode_16 = number
/**
 * WPA Pre Shared Key
 *
 * WPA/WPA2 Key expressed as a hex string. Write - Only.
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 */
type WPAPreSharedKey_17 = string
/**
 * WPA Key Phrase
 *
 * WPA/WPA2 Key Phrase. Write Only.
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 */
type WPAKeyPhrase_18 = string
/**
 * WEP Encryption Type
 *
 * 0: None
 * 1: 40-bit
 * 2: 104-bit
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: false
 */
type WEPEncryptionType_19 = number
/**
 * WEP Key Index
 *
 * Index of the default WEP key.
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 */
type WEPKeyIndex_20 = number
/**
 * WEP Key Phrase
 *
 * WPA/WPA2 Key Phrase. Write Only.
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 */
type WEPKeyPhrase_21 = string
/**
 * WEP Key 1
 *
 * WEP Key 1 expressed as a hexadecimal string.
 * 10 Bytes for a 40 Bit key
 * 26 Bytes for a 104 Bit key
 *
 * ID: 22
 * MultipleInstances: false
 * Mandatory: false
 */
type WEPKey1_22 = string
/**
 * WEP Key 2
 *
 * WEP Key 2 expressed as a hexadecimal string.
 * 10 Bytes for a 40 Bit key
 * 26 Bytes for a 104 Bit key
 *
 * ID: 23
 * MultipleInstances: false
 * Mandatory: false
 */
type WEPKey2_23 = string
/**
 * WEP Key 3
 *
 * WEP Key 3 expressed as a hexadecimal string.
 * 10 Bytes for a 40 Bit key
 * 26 Bytes for a 104 Bit key
 *
 * ID: 24
 * MultipleInstances: false
 * Mandatory: false
 */
type WEPKey3_24 = string
/**
 * WEP Key 4
 *
 * WEP Key 4 expressed as a hexadecimal string.
 * 10 Bytes for a 40 Bit key
 * 26 Bytes for a 104 Bit key
 *
 * ID: 25
 * MultipleInstances: false
 * Mandatory: false
 */
type WEPKey4_25 = string
/**
 * RADIUS Server
 *
 * RADIUS Authentication Server Address
 *
 * ID: 26
 * MultipleInstances: false
 * Mandatory: false
 */
type RADIUSServer_26 = string
/**
 * RADIUS Server Port
 *
 * RADIUS Authentication Server Port Number
 *
 * ID: 27
 * MultipleInstances: false
 * Mandatory: false
 */
type RADIUSServerPort_27 = number
/**
 * RADIUS Secret
 *
 * RADIUS Shared Secret
 *
 * ID: 28
 * MultipleInstances: false
 * Mandatory: false
 */
type RADIUSSecret_28 = string
/**
 * WMM Supported
 *
 * 0: WMM NOT Supported 1: WMM Wupported
 *
 * ID: 29
 * MultipleInstances: false
 * Mandatory: false
 */
type WMMSupported_29 = boolean
/**
 * WMM Enabled
 *
 * 0: Disabled 1: Enabled
 *
 * ID: 30
 * MultipleInstances: false
 * Mandatory: false
 */
type WMMEnabled_30 = boolean
/**
 * MAC Control Enabled
 *
 * 0: Any Client MAC Address accepted 1: Client MAC address must exist in
 * MACAddressList
 *
 * ID: 31
 * MultipleInstances: false
 * Mandatory: false
 */
type MACControlEnabled_31 = boolean
/**
 * MAC Address List
 *
 * Array of allowed client MAC addresses, in hexadecimal form.
 *
 * ID: 32
 * MultipleInstances: true
 * Mandatory: false
 */
type MACAddressList_32 = string
/**
 * Total Bytes Sent
 *
 * Total number of bytes sent via this interface
 *
 * ID: 33
 * MultipleInstances: false
 * Mandatory: false
 */
type TotalBytesSent_33 = number
/**
 * Total Bytes Received
 *
 * Total number of bytes received via this interface
 *
 * ID: 34
 * MultipleInstances: false
 * Mandatory: false
 */
type TotalBytesReceived_34 = number
/**
 * Total Packets Sent
 *
 * Total packets sent via this interface
 *
 * ID: 35
 * MultipleInstances: false
 * Mandatory: false
 */
type TotalPacketsSent_35 = number
/**
 * Total Packets Received
 *
 * Total packets received via this interface
 *
 * ID: 36
 * MultipleInstances: false
 * Mandatory: false
 */
type TotalPacketsReceived_36 = number
/**
 * Transmit Errors
 *
 * Total number of packets which could not be transmitted because of errors.
 *
 * ID: 37
 * MultipleInstances: false
 * Mandatory: false
 */
type TransmitErrors_37 = number
/**
 * Receive Errors
 *
 * Total number of packets received with errors which prevented those packets
 * from being delivered.
 *
 * ID: 38
 * MultipleInstances: false
 * Mandatory: false
 */
type ReceiveErrors_38 = number
/**
 * Unicast Packets Sent
 *
 * Count of Unicast Packets Sent
 *
 * ID: 39
 * MultipleInstances: false
 * Mandatory: false
 */
type UnicastPacketsSent_39 = number
/**
 * Unicast Packets Received
 *
 * Count of Unicast Packets Received
 *
 * ID: 40
 * MultipleInstances: false
 * Mandatory: false
 */
type UnicastPacketsReceived_40 = number
/**
 * Multicast Packets Sent
 *
 * Count of Multicast Packets Sent
 *
 * ID: 41
 * MultipleInstances: false
 * Mandatory: false
 */
type MulticastPacketsSent_41 = number
/**
 * Multicast Packets  Received
 *
 * Count of Multicast Packets Received
 *
 * ID: 42
 * MultipleInstances: false
 * Mandatory: false
 */
type MulticastPacketsReceived_42 = number
/**
 * Broadcast Packets Sent
 *
 * Count of Broadcast Packets Sent
 *
 * ID: 43
 * MultipleInstances: false
 * Mandatory: false
 */
type BroadcastPacketsSent_43 = number
/**
 * Broadcast Packets Received
 *
 * Count of Broadcast Packets Received
 *
 * ID: 44
 * MultipleInstances: false
 * Mandatory: false
 */
type BroadcastPacketsReceived_44 = number
/**
 * Discard Packets Sent
 *
 * Count of valid outbound packets intentionally discarded without transmission,
 * for example a packet may be discarded to manage buffer space.
 *
 * ID: 45
 * MultipleInstances: false
 * Mandatory: false
 */
type DiscardPacketsSent_45 = number
/**
 * Discard Packets Received
 *
 * Count of valid packets received and intentionally discarded without delivery
 * to the system, for example a packet may be discarded to manage buffer space.
 *
 * ID: 46
 * MultipleInstances: false
 * Mandatory: false
 */
type DiscardPacketsReceived_46 = number
/**
 * Unknown Packets Received
 *
 * Count of Unknown Packets Received
 *
 * ID: 47
 * MultipleInstances: false
 * Mandatory: false
 */
type UnknownPacketsReceived_47 = number
/**
 * Vendor specific extensions
 *
 * Links to a vendor specific object.
 *
 * ID: 48
 * MultipleInstances: false
 * Mandatory: false
 */
type Vendorspecificextensions_48 = string
/**
 * The objectURN for WLAN connectivity
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '12:1.1'
