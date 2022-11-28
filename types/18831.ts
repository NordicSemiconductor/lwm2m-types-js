/**
 * MQTT Publication
 *
 * This LwM2M Object is used to configure data reporting over MQTT.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/18831.xml
 *
 * ID: 18831
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type MQTTPublication_18831 = Readonly<
	Array<{
		'0': Source_0
		'1': Broker_1
		'2': Topic_2
		'3': QoS_3
		'4': Retain_4
		'5'?: Active_5
		'6'?: Encoding_6
	}>
>
/**
 * Source
 *
 * The source of the data to publish (e.g. </sensors/temp>, or </3303/0/5700>;
 * </3336/0>). If this Resource is empty, the published data are implementation
 * dependent.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Source_0 = string
/**
 * Broker
 *
 * A link to the MQTT Broker Object Instance (OMNA registered Object ID:18830)
 * describing the MQTT Broker to use.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Broker_1 = string
/**
 * Topic
 *
 * The MQTT topic to publish to.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type Topic_2 = string
/**
 * QoS
 *
 * The Quality of Service value to use when publishing.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type QoS_3 = number
/**
 * Retain
 *
 * The RETAIN flag value to use when publishing.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type Retain_4 = boolean
/**
 * Active
 *
 * If true or if the Resource is not present, the Device publishes the data
 * pointed by the Source Resource to the MQTT Broker pointed by the Broker
 * Resource using the MQTT topic indicated in the Topic Resource. If false, the
 * Device does nothing.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Active_5 = boolean
/**
 * Encoding
 *
 * A CoAP Content-Format value used to encode the data in the MQTT Publish
 * message. If this Resource is not present or equal to 65535, the encoding of
 * the data is implementation dependent.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Encoding_6 = number
/**
 * The objectURN for MQTT Publication
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '18831@1.1'
