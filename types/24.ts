/**
 * MQTT Server
 *
 * This object defines configuration parameters for an MQTT client to interact
 * with a MQTT server.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/24.xml
 *
 * ID: 24
 * LWM2MVersion: 1.2
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type MQTTServer_24 = Readonly<
	Array<{
		'6': ClientIdentifier_6
		'0'?: WillRetain_0
		'1'?: WillTopic_1
		'2'?: WillMessage_2
		'3'?: CleanSession_3
		'4'?: WillQoS_4
		'5'?: KeepAlive_5
		'7'?: UserName_7
		'8'?: Password_8
	}>
>
/**
 * Client Identifier
 *
 * The Client Identifier identifies the MQTT client to the MQTT server. MQTT
 * server must support ClientIds which are between 1 and 23 UTF-8 encoded bytes
 * in length, and that contain only the characters
 * "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ". MQTT server
 * may allow ClientId's that contain more than 23 encoded bytes and may support
 * ClientId's that contain characters not included in the list.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type ClientIdentifier_6 = string
/**
 * Will Retain
 *
 * The Will Retain value to declare in the MQTT CONNECT message.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: false
 */
type WillRetain_0 = boolean
/**
 * Will Topic
 *
 * The Will Topic to include in the MQTT CONNECT message.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type WillTopic_1 = string
/**
 * Will Message
 *
 * The Will Message to include in the MQTT CONNECT message.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type WillMessage_2 = string
/**
 * Clean Session
 *
 * The Clean Session value to declare in the MQTT CONNECT message.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type CleanSession_3 = boolean
/**
 * Will QoS
 *
 * The Will QoS value to declare in the MQTT CONNECT message.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type WillQoS_4 = number
/**
 * Keep Alive
 *
 * The Keep Alive value to declare in the MQTT CONNECT message.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type KeepAlive_5 = number
/**
 * User Name
 *
 * The User Name to declare in the MQTT CONNECT message. It must be a UTF-8
 * encoded string. It can be used by the MQTT server for authentication and
 * authorization.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type UserName_7 = string
/**
 * Password
 *
 * The Password value to declare in the MQTT CONNECT message.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type Password_8 = string
/**
 * The objectURN for MQTT Server
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '24@1.2'
