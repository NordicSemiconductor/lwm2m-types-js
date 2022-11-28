/**
 * MQTT Broker
 *
 * This LwM2M Object provides the information to connect to an MQTT Broker i.e.
 * URI, configuration, and keying material.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/18830.xml
 *
 * ID: 18830
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type MQTTBroker_18830 = Readonly<
	Array<{
		'0': URI_0
		'1': ClientIdentifier_1
		'2': CleanSession_2
		'3': KeepAlive_3
		'6': SecurityMode_6
		'10'?: CertificateUsage_10
		'4'?: UserName_4
		'5'?: Password_5
		'7'?: PublicKeyorIdentity_7
		'8'?: MQTTBrokerPublicKey_8
		'9'?: SecretKey_9
	}>
>
/**
 * URI
 *
 * URI of the MQTT broker.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type URI_0 = string
/**
 * Client Identifier
 *
 * MQTT Client Identifier to use when connecting to this MQTT broker.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type ClientIdentifier_1 = string
/**
 * Clean Session
 *
 * The Clean Session value to declare in the MQTT CONNECT message.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type CleanSession_2 = boolean
/**
 * Keep Alive
 *
 * The Keep Alive value to declare in the MQTT CONNECT message.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type KeepAlive_3 = number
/**
 * Security Mode
 *
 * Determines which security mode is used
 * 0: PreShared Key mode
 * 1: Raw Public Key mode
 * 2: Certificate mode
 * 3: NoSec mode
 * 4: Certificate mode with EST
 *
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type SecurityMode_6 = number
/**
 * Certificate Usage
 *
 * The Certificate Usage Resource specifies the semantic of the certificate or
 * raw public key stored in the "MQTT Broker Public Key" Resource, which is used
 * to match the certificate presented in the TLS/DTLS handshake. The currently
 * defined values are:
 * 0: CA constraint
 * 1: service certificate constraint
 * 2: trust anchor assertion
 * 3: domain-issued certificate
 *
 * When this Resource is absent, value (3) for domain issued certificate mode is
 * assumed.
 *
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type CertificateUsage_10 = number
/**
 * User Name
 *
 * The User Name to declare in the MQTT CONNECT message.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type UserName_4 = string
/**
 * Password
 *
 * The Password value to declare in the MQTT CONNECT message.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Password_5 = string
/**
 * Public Key or Identity
 *
 * Stores the Device’s certificate, public key (RPK mode) or PSK Identity (PSK
 * mode).
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type PublicKeyorIdentity_7 = string
/**
 * MQTT Broker Public Key
 *
 * Stores the MQTT Broker’s certificate, public key (RPK mode) or trust anchor.
 * The Certificate Usage Resource determines the content of this resource.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type MQTTBrokerPublicKey_8 = string
/**
 * Secret Key
 *
 * Stores the secret key (PSK mode) or private key (RPK or certificate mode).
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type SecretKey_9 = string
/**
 * The objectURN for MQTT Broker
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '18830@1.1'
