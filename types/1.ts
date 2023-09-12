/**
 * LwM2M Server
 *
 * This LwM2M Objects provides the data related to a LwM2M Server. A
 * Bootstrap-Server has no such an Object Instance associated to it.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/1.xml
 *
 * ID: 1
 * LWM2MVersion: 1.2
 * ObjectVersion: 1.2
 * MultipleInstances: true
 * Mandatory: true
 */
export type LwM2MServer_1 = Readonly<
	Array<{
		'0': ShortServerID_0
		'1': Lifetime_1
		'6': NotificationStoringWhenDisabledorOffline_6
		'7': Binding_7
		'2'?: DefaultMinimumPeriod_2
		'3'?: DefaultMaximumPeriod_3
		'5'?: DisableTimeout_5
		'10'?: APNLink_10
		'11'?: TLS_DTLSAlertCode_11
		'12'?: LastBootstrapped_12
		'13'?: RegistrationPriorityOrder_13
		'14'?: InitialRegistrationDelayTimer_14
		'15'?: RegistrationFailureBlock_15
		'16'?: BootstraponRegistrationFailure_16
		'17'?: CommunicationRetryCount_17
		'18'?: CommunicationRetryTimer_18
		'19'?: CommunicationSequenceDelayTimer_19
		'20'?: CommunicationSequenceRetryCount_20
		'21'?: Trigger_21
		'22'?: PreferredTransport_22
		'23'?: MuteSend_23
		'24'?: AlternateAPNLinks_24
		'25'?: SupportedServerVersions_25
		'26'?: DefaultNotificationMode_26
		'27'?: ProfileIDHashAlgorithm_27
	}>
>
/**
 * Short Server ID
 *
 * Used as link to associate server Object Instance.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type ShortServerID_0 = number
/**
 * Lifetime
 *
 * Specify the lifetime of the registration in seconds (see Client Registration
 * Interface). If the value is set to 0, the lifetime is infinite.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type Lifetime_1 = number
/**
 * Notification Storing When Disabled or Offline
 *
 * If true, the LwM2M Client stores "Notify" operations to the LwM2M Server
 * while the LwM2M Server account is disabled or the LwM2M Client is offline.
 * After the LwM2M Server account is enabled or the LwM2M Client is online, the
 * LwM2M Client reports the stored "Notify" operations to the Server.
 * If false, the LwM2M Client discards all the "Notify" operations or
 * temporarily disables the Observe function while the LwM2M Server is disabled
 * or the LwM2M Client is offline.
 * The default value is true.
 * The maximum number of storing Notifications per Server is up to the
 * implementation.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type NotificationStoringWhenDisabledorOffline_6 = boolean
/**
 * Binding
 *
 * The possible values are those listed in the LwM2M Core Specification. This
 * Resource defines the transport binding configured for the LwM2M Client.
 * If the LwM2M Client supports the binding specified in this Resource, the
 * LwM2M Client MUST use that transport for the Current Binding Mode.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type Binding_7 = string
/**
 * Default Minimum Period
 *
 * The default value the LwM2M Client should use for the Minimum Period of an
 * Observation in the absence of this parameter being included in an
 * Observation.
 * If this Resource doesn’t exist, the default value is 0.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type DefaultMinimumPeriod_2 = number
/**
 * Default Maximum Period
 *
 * The default value the LwM2M Client should use for the Maximum Period of an
 * Observation in the absence of this parameter being included in an
 * Observation.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type DefaultMaximumPeriod_3 = number
/**
 * Disable Timeout
 *
 * A period to disable the Server. After this period, the LwM2M Client MUST
 * perform registration process to the Server. If this Resource is not set, a
 * default timeout value is 86400 (1 day).
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type DisableTimeout_5 = number
/**
 * APN Link
 *
 * If this resource is defined, it provides a link to the APN connection profile
 * Object Instance (OMNA registered Object ID:11) to be used to communicate with
 * this server.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type APNLink_10 = string
/**
 * TLS-DTLS Alert Code
 *
 * If this resource is defined, it contains the most recent TLS / DTLS alert
 * message received from the LwM2M Server respective represented by the
 * AlertDescription defined in Section 7.2 of RFC 5246. This resource set by the
 * LwM2M Client may help the LwM2M Bootstrap-Server to determine the cause of
 * TLS/DTLS connection failure with the respective LwM2M Server.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type TLS_DTLSAlertCode_11 = number
/**
 * Last Bootstrapped
 *
 * If this resource is defined, it represents the last time that the bootstrap
 * server updated this LwM2M Server Account. The LwM2M Client is responsible for
 * updating this value. When the Bootstrap Server detects that this LwM2M Server
 * Account is "out-of-date", the Bootstrap Server can update the LwM2M Server
 * Account as represented by the LwM2M Server object instance.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type LastBootstrapped_12 = number
/**
 * Registration Priority Order
 *
 * The LwM2M Client sequences the LwM2M Server registrations in increasing order
 * of this value. If this value is not defined, registration attempts to this
 * server are not impacted by other server registrations.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type RegistrationPriorityOrder_13 = number
/**
 * Initial Registration Delay Timer
 *
 * The delay, in seconds, before registration is attempted for this LwM2M Server
 * based upon the completion of registration of the previous LwM2M Server in the
 * registration order. This is only applied until the first successful
 * registration after a successful bootstrapping sequence.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type InitialRegistrationDelayTimer_14 = number
/**
 * Registration Failure Block
 *
 * When set to true and registration to this LwM2M server fails, the LwM2M
 * Client blocks registration to other servers in the order. When set to false,
 * the LwM2M Client proceeds with registration to the next server in the order.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type RegistrationFailureBlock_15 = boolean
/**
 * Bootstrap on Registration Failure
 *
 * If set to true, this indicates that the LwM2M Client should re-bootstrap when
 * either registration is explicitly rejected by the LwM2M Server or
 * registration is considered as failing as dictated by the other resource
 * settings. If set to false, the LwM2M Client will continue with the
 * registration attempts as dictated by the other resource settings.
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 */
type BootstraponRegistrationFailure_16 = boolean
/**
 * Communication Retry Count
 *
 * The number of successive communication attempts before which a communication
 * sequence is considered as failed.
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 */
type CommunicationRetryCount_17 = number
/**
 * Communication Retry Timer
 *
 * The delay, in seconds, between successive communication attempts in a
 * communication sequence. This value is multiplied by two to the power of the
 * communication retry attempt minus one (2**(retry attempt-1)) to create an
 * exponential back-off.
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type CommunicationRetryTimer_18 = number
/**
 * Communication Sequence Delay Timer
 *
 * The delay, in seconds, between successive communication sequences. A
 * communication sequence is defined as the exhaustion of the Communication
 * Retry Count and Communication Retry Timer values. A communication sequence
 * can be applied to server registrations or bootstrapping attempts. MAX_VALUE
 * means do not perform another communication sequence.
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type CommunicationSequenceDelayTimer_19 = number
/**
 * Communication Sequence Retry Count
 *
 * The number of successive communication sequences before which a registration
 * attempt is considered as failed.
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 */
type CommunicationSequenceRetryCount_20 = number
/**
 * Trigger
 *
 * Using the Trigger Resource a LwM2M Client can indicate whether it is
 * reachable over SMS (value set to 'true') or not (value set to 'false'). The
 * default value (resource not present) is 'false'. When set to 'true' the LwM2M
 * Server MAY, for example, request the LwM2M Client to perform operations, such
 * as the "Update" operation by sending an "Execute" operation on "Registration
 * Update Trigger" Resource via SMS. No SMS response is expected for such a
 * message.
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 */
type Trigger_21 = boolean
/**
 * Preferred Transport
 *
 * Only a single transport binding SHALL be present. When the LwM2M client
 * supports multiple transports, it MAY use this transport to initiate a
 * connection. This resource can also be used to switch between multiple
 * transports e.g. a non-IP device can switch to UDP transport to perform
 * firmware updates.
 *
 * ID: 22
 * MultipleInstances: false
 * Mandatory: false
 */
type PreferredTransport_22 = string
/**
 * Mute Send
 *
 * If true or the Resource is not present, the LwM2M Client Send command
 * capability is de-activated.
 * If false, the LwM2M Client Send Command capability is activated.
 *
 * ID: 23
 * MultipleInstances: false
 * Mandatory: false
 */
type MuteSend_23 = boolean
/**
 * Alternate APN Links
 *
 * If this resource is defined, it provides links to alternate APN connection
 * profile Object Instance (OMNA registered Object ID:11) to be used to
 * communicate with this server if Resource 10 has configuration conflicts.
 *
 * ID: 24
 * MultipleInstances: true
 * Mandatory: false
 */
type AlternateAPNLinks_24 = Array<string>
/**
 * Supported Server Versions
 *
 * This resource provides the supported enabler versions of the server to the
 * client as a set of strings. Format for each string is
 * 1*DIGIT"."1*DIGIT"."1*DIGIT where the third DIGIT is optional.
 *
 * ID: 25
 * MultipleInstances: true
 * Mandatory: false
 */
type SupportedServerVersions_25 = Array<string>
/**
 * Default Notification Mode
 *
 * This resource indicates the default mode for observations to be sent: 0 =
 * Non-Confirmable, 1 = Confirmable.
 *
 * ID: 26
 * MultipleInstances: false
 * Mandatory: false
 */
type DefaultNotificationMode_26 = number
/**
 * Profile ID Hash Algorithm
 *
 * If this resource is defined, it contains the hash algorithm the LwM2M Server
 * would prefer the LwM2M Client to use with the dynamically generated mode of
 * creating Profile IDs. The numerical ID value of the 'Suite Identifiers'
 * registered by RFC 6920 is used in this Resource.
 *
 * ID: 27
 * MultipleInstances: false
 * Mandatory: false
 */
type ProfileIDHashAlgorithm_27 = number
/**
 * The objectURN for LwM2M Server
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '1:1.2@1.2'
