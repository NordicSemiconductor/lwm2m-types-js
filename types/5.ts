/**
 * Firmware Update
 *
 * This LwM2M Object enables management of firmware which is to be updated. This
 * Object includes installing a firmware package, updating firmware, and
 * performing actions after updating firmware. The firmware update MAY require
 * to reboot the device; it will depend on a number of factors, such as the
 * operating system architecture and the extent of the updated software.
 * The envisioned functionality is to allow a LwM2M Client to connect to any
 * LwM2M Server to obtain a firmware image using the object and resource
 * structure defined in this section experiencing communication security
 * protection using TLS/DTLS. There are, however, other design decisions that
 * need to be taken into account to allow a manufacturer of a device to securely
 * install firmware on a device. Examples for such design decisions are how to
 * manage the firmware update repository at the server side (which may include
 * user interface considerations), the techniques to provide additional
 * application layer security protection of the firmware image, how many
 * versions of firmware images to store on the device, and how to execute the
 * firmware update process considering the hardware specific details of a given
 * IoT hardware product. These aspects are considered to be outside the scope of
 * this version of the specification.
 * A LwM2M Server may also instruct a LwM2M Client to fetch a firmware image
 * from a dedicated server (instead of pushing firmware images to the LwM2M
 * Client). The Package URI resource is contained in the Firmware object and can
 * be used for this purpose.
 * A LwM2M Client MUST support block-wise transfer [CoAP_Blockwise] if it
 * implements the Firmware Update object.
 * A LwM2M Server MUST support block-wise transfer. Other protocols, such as
 * HTTP/HTTPs, MAY also be used for downloading firmware updates (via the
 * Package URI resource). For constrained devices it is, however, RECOMMENDED to
 * use CoAP for firmware downloads to avoid the need for additional protocol
 * implementations.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/5.xml
 *
 * ID: 5
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.1
 * MultipleInstances: false
 * Mandatory: false
 */
export type FirmwareUpdate_5 = Readonly<{
	'0': Package_0
	'1': PackageURI_1
	'3': State_3
	'5': UpdateResult_5
	'9': FirmwareUpdateDeliveryMethod_9
	'6'?: PkgName_6
	'7'?: PkgVersion_7
	'8'?: FirmwareUpdateProtocolSupport_8
	'11'?: Severity_11
	'12'?: LastStateChangeTime_12
	'13'?: MaximumDeferPeriod_13
}>
/**
 * Package
 *
 * Firmware package
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Package_0 = string
/**
 * Package URI
 *
 * URI from where the device can download the firmware package by an alternative
 * mechanism. As soon the device has received the Package URI it performs the
 * download at the next practical opportunity.
 * The URI format is defined in RFC 3986. For example,
 * coaps://example.org/firmware is a syntactically valid URI. The URI scheme
 * determines the protocol to be used. For CoAP this endpoint MAY be a LwM2M
 * Server but does not necessarily need to be. A CoAP server implementing
 * block-wise transfer is sufficient as a server hosting a firmware repository
 * and the expectation is that this server merely serves as a separate file
 * server making firmware images available to LwM2M Clients.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type PackageURI_1 = string
/**
 * State
 *
 * Indicates current state with respect to this firmware update. This value is
 * set by the LwM2M Client.
 * 0: Idle (before downloading or after successful updating)
 * 1: Downloading (The data sequence is on the way)
 * 2: Downloaded
 * 3: Updating
 * If writing the firmware package to Package Resource has completed, or, if the
 * device has downloaded the firmware package from the Package URI the state
 * changes to Downloaded.
 * Writing an empty string to Package URI Resource or setting the Package
 * Resource to NULL (‘\0’), resets the Firmware Update State Machine: the State
 * Resource value is set to Idle and the Update Result Resource value is set to
 * 0.
 * The device should remove the downloaded firmware image when the state is
 * reset to Idle.
 * When in Downloaded state, and the executable Resource Update is triggered,
 * the state changes to Updating if the update starts immediately. For devices
 * that support a user interface and the deferred update functionality, the user
 * may be allowed to defer the firmware update to a later time. In this case,
 * the state stays in Downloaded state and the Update Result is set to 11. Once
 * a user accepted the firmware update, the state changes to Updating.
 * When the user deferred the update, the device will continue operations
 * normally until the user approves the firmware update or an automatic update
 * starts. It will not block any operation on the device.
 * If the Update Resource failed, the state may return to either Downloaded or
 * Idle depending on the underlying reason of update failure, e.g. Integrity
 * Check Failure results in the client moving to the Idle state.
 * If performing the Update or Cancel operation was successful, the state
 * changes to Idle.
 * The firmware update state machine is illustrated in the respective LwM2M
 * specification.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type State_3 = number
/**
 * Update Result
 *
 * Contains the result of downloading or updating the firmware
 * 0: Initial value. Once the updating process is initiated (Download /Update),
 * this Resource MUST be reset to Initial value.
 * 1: Firmware updated successfully.
 * 2: Not enough flash memory for the new firmware package.
 * 3: Out of RAM during downloading process.
 * 4: Connection lost during downloading process.
 * 5: Integrity check failure for new downloaded package.
 * 6: Unsupported package type.
 * 7: Invalid URI.
 * 8: Firmware update failed.
 * 9: Unsupported protocol. A LwM2M client indicates the failure to retrieve the
 * firmware image using the URI provided in the Package URI resource by writing
 * the value 9 to the /5/0/5 (Update Result resource) when the URI contained a
 * URI scheme unsupported by the client. Consequently, the LwM2M Client is
 * unable to retrieve the firmware image using the URI provided by the LwM2M
 * Server in the Package URI when it refers to an unsupported protocol.
 * 10: Firmware update cancelled. A Cancel operation has been executed
 * successfully.
 * 11: Firmware update deferred.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type UpdateResult_5 = number
/**
 * Firmware Update Delivery Method
 *
 * The LwM2M Client uses this resource to indicate its support for transferring
 * firmware images to the client either via the Package Resource (=push) or via
 * the Package URI Resource (=pull) mechanism.
 * 0: Pull only
 * 1: Push only
 * 2: Both. In this case the LwM2M Server MAY choose the preferred mechanism for
 * conveying the firmware image to the LwM2M Client.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: true
 */
type FirmwareUpdateDeliveryMethod_9 = number
/**
 * PkgName
 *
 * Name of the Firmware Package
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type PkgName_6 = string
/**
 * PkgVersion
 *
 * Version of the Firmware package
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type PkgVersion_7 = string
/**
 * Firmware Update Protocol Support
 *
 * This resource indicates what protocols the LwM2M Client implements to
 * retrieve firmware images. The LwM2M server uses this information to decide
 * what URI to include in the Package URI. A LwM2M Server MUST NOT include a URI
 * in the Package URI object that uses a protocol that is unsupported by the
 * LwM2M client.
 * For example, if a LwM2M client indicates that it supports CoAP and CoAPS then
 * a LwM2M Server must not provide an HTTP URI in the Packet URI.
 * The following values are defined by this version of the specification:
 * 0: CoAP (as defined in RFC 7252) with the additional support for block-wise
 * transfer. CoAP is the default setting.
 * 1: CoAPS (as defined in RFC 7252) with the additional support for block-wise
 * transfer
 * 2: HTTP 1.1 (as defined in RFC 7230)
 * 3: HTTPS 1.1 (as defined in RFC 7230)
 * 4: CoAP over TCP (as defined in RFC 8323)
 * 5: CoAP over TLS (as defined in RFC 8323)
 * Additional values MAY be defined in the future. Any value not understood by
 * the LwM2M Server MUST be ignored.
 *
 * ID: 8
 * MultipleInstances: true
 * Mandatory: false
 */
type FirmwareUpdateProtocolSupport_8 = Array<number>
/**
 * Severity
 *
 * Severity of the firmware image.
 * 0: Critical
 * 1: Mandatory
 * 2: Optional
 * This information is useful when the device provides option for the deferred
 * update. Default value is 1.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type Severity_11 = number
/**
 * Last State Change Time
 *
 * This resource stores the time when the State resource is changed. Device
 * updates this resource before making any change to the State.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type LastStateChangeTime_12 = number
/**
 * Maximum Defer Period
 *
 * The number of seconds a user can defer the software update.
 * When this time period is over, the device will not prompt the user for update
 * and install it automatically.
 * If the value is 0, a deferred update is not allowed.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type MaximumDeferPeriod_13 = number
/**
 * The objectURN for Firmware Update
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '5:1.1@1.1'
