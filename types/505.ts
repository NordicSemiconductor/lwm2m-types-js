/**
 * LwM2M SIM Provisioning
 *
 * This is a device management object that should be used for Remote SIM
 * Provisioning from a LwM2M server.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/505.xml
 *
 * ID: 505
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type LwM2MSIMProvisioning_505 = Readonly<
	Array<{
		'0': CurrentSIMType_0
		'1': SupportedSIMType_1
		'2': ServiceProviderName_2
		'6': UpdateState_6
		'7': UpdateResult_7
		'11': ProfileUpdateDeliveryMethod_11
		'3'?: ProfilePackage_3
		'4'?: ProfileURI_4
		'8'?: ProfileName_8
		'9'?: ProfilePackageVersion_9
		'10'?: ProfileUpdateProtocolSupport_10
		'12'?: FreeMemoryonSIM_12
		'13'?: TotalMemoryonSIM_13
		'14'?: IntegratedCircuitCardIdentifier_ICCID_14
		'15'?: eUICCID_15
		'16'?: ProfileType_16
	}>
>
/**
 * Current SIM Type
 *
 * Provides the information about the currently being used SIM Type:
 * 0: UICC (removable)
 * 1: eUICC (removable)
 * 2: eUICC (non-removable)
 * 3: iUICC
 *
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type CurrentSIMType_0 = number
/**
 * Supported SIM Type
 *
 * Provides the information about the currently supported SIM Types:
 * 0: UICC (removable)
 * 1: eUICC (removable)
 * 2: eUICC (non-removable)
 * 3: iUICC
 *
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: true
 */
type SupportedSIMType_1 = Array<number>
/**
 * Service Provider Name
 *
 * Provides the Service Provider Name using which LwM2M is currently
 * communicating to the Server.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type ServiceProviderName_2 = string
/**
 * Update State
 *
 * Indicates current state with respect to this profile update. This value is
 * set by the LwM2M Client.
 * 0: Idle (before downloading or after successful updating)
 * 1: Downloading (The data sequence is on the way)
 * 2: Downloaded
 * 3: Updating If writing the profile package to Package Resource is done, or,
 * if the device has downloaded the profile package from the Package URI the
 * state changes to Downloaded. Writing an empty string to Package URI Resource
 * or setting the Package Resource to NULL (â€˜\0â€™), resets the Profile Update
 * State Machine: the State Resource value is set to Idle and the Update Result
 * Resource value is set to 0. When in Downloaded state, and the executable
 * Resource Update is triggered, the state changes to Updating. If the Update
 * Resource failed, the state returns at Downloaded. If performing the Update
 * Resource was successful, the state changes from Updating to Idle.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type UpdateState_6 = number
/**
 * Update Result
 *
 * Contains the result of downloading or updating the Profile
 * 0: Initial value. Once the updating process is initiated (Download /Update),
 * this Resource MUST be reset to Initial value.
 * 1: Profile updated successfully,
 * 2: Not enough SIM memory for the new Profile package.
 * 3. Out of RAM during downloading process.
 * 4: Connection lost during downloading process. 5: Integrity check failure for
 * new downloaded package.
 * 6: Unsupported package type.
 * 7: Invalid URI
 * 8: Unsupported protocol.
 *
 * A LwM2M client indicates the failure to retrieve the Profile using the URI
 * provided in the Package URI resource by writing the value 9 to the /x/0/7
 * (Update Result resource) when the URI contained a URI scheme unsupported by
 * the client. Consequently, the LwM2M Client is unable to retrieve the Profile
 * using the URI provided by the LwM2M Server in the Package URI when it refers
 * to an unsupported protocol.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type UpdateResult_7 = number
/**
 * Profile Update Delivery Method
 *
 * The LwM2M Client uses this resource to
 * indicate its support for transferring Profile
 * images to the client either via the Package
 * Resource (=push) or via the Package URI
 * Resource (=pull) mechanism.
 * 0: Pull only
 * 1: Push only
 * 2: Both. In this case the LwM2M Server
 * MAY choose the preferred mechanism for
 * conveying the profile image to the
 * LwM2M Client.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: true
 */
type ProfileUpdateDeliveryMethod_11 = number
/**
 * Profile Package
 *
 * Profile Package is a personalised Profile using an interoperable description
 * format that is transmitted to an eUICC to load and install a Profile.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type ProfilePackage_3 = string
/**
 * Profile URI
 *
 * URI from where the device can download the profile package by an alternative
 * mechanism. As soon the device has received the Profile package URI it
 * performs the download at the next practical opportunity. The URI format is
 * defined in RFC 3986. For example, coaps://example.org/profile is a
 * syntactically valid URI. The URI scheme determines the protocol to be used.
 * For CoAP this endpoint MAY be a LwM2M Server but does not necessarily need to
 * be. A CoAP server implementing block-wise transfer is sufficient as a server
 * hosting a firmware repository and the expectation is that this server merely
 * serves as a separate file server making profile images available to LwM2M
 * Clients. This server can be the future carrier server as well from which IoT
 * devices would like to use the service.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type ProfileURI_4 = string
/**
 * Profile Name
 *
 * Name of the Profile Package.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type ProfileName_8 = string
/**
 * Profile Package Version
 *
 * Version of the Profile package.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type ProfilePackageVersion_9 = string
/**
 * Profile Update Protocol Support
 *
 * This resource indicates what protocols the LwM2M Client implements to
 * retrieve Profiles. The LwM2M server uses this information to decide what URI
 * to include in the Package URI. A LwM2M Server MUST NOT include a URI in the
 * Package URI object that uses a protocol that is unsupported by the LwM2M
 * client. For example, if a LwM2M client indicates that it supports CoAP and
 * CoAPS then a LwM2M Server must not provide an HTTP URI in the Packet URI. The
 * following values are defined by this version of the specification:
 * 0: CoAP (as defined in RFC 7252) with the additional support for block-wise
 * transfer. CoAP is the default setting.
 * 1: CoAPS (as defined in RFC 7252) with the additional support for block-wise
 * transfer
 * 2: HTTP 1.1 (as defined in RFC 7230)
 * 3: HTTPS 1.1 (as defined in RFC 7230) Additional values MAY be defined in the
 * future. Any value not understood by the LwM2M Server MUST be ignored.
 *
 * ID: 10
 * MultipleInstances: true
 * Mandatory: false
 */
type ProfileUpdateProtocolSupport_10 = Array<number>
/**
 * Free Memory on SIM
 *
 * Estimated current available amount of storage space on SIM which can store
 * data and software in the LwM2M Device (expressed in kibibytes).
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 * Units: KiB
 */
type FreeMemoryonSIM_12 = number
/**
 * Total Memory on SIM
 *
 * Total amount of storage space which can store data and software in the LwM2M
 * Device.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 * Units: KiB
 */
type TotalMemoryonSIM_13 = number
/**
 * Integrated Circuit Card Identifier (ICCID)
 *
 * This Elementary File (EF) provides a unique identification number for the
 * UICC/Smart Cards. Please refer ETSI TS 102.22.1.
 *
 * ID: 14
 * MultipleInstances: true
 * Mandatory: false
 */
type IntegratedCircuitCardIdentifier_ICCID_14 = Array<number>
/**
 * eUICC ID
 *
 * eUICC-ID (a.k.a. EID), see GSMA SGP.02 and GSMA SGP.29 for definitions.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type eUICCID_15 = string
/**
 * Profile Type
 *
 * Free optional text produced by the SM-DP+ server. This is equivalent to the
 * "Profile Description ID" as described in Annex B of SGP.21.
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 */
type ProfileType_16 = string
/**
 * The objectURN for LwM2M SIM Provisioning
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '505'
