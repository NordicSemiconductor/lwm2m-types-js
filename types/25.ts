/**
 * LwM2M Gateway
 *
 * This object is used by a LwM2M Gateway to maintain the IoT Devices connected
 * to the LwM2M Gateway.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/25.xml
 *
 * ID: 25
 * LWM2MVersion: 1.1
 * ObjectVersion: 2.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type LwM2MGateway_25 = Readonly<
	Array<{
		'0': DeviceID_0
		'1': Prefix_1
		'3': IoTDeviceObjects_3
	}>
>
/**
 * Device ID
 *
 * This resource identifies the IoT Device connected to the LwM2M Gateway.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type DeviceID_0 = string
/**
 * Prefix
 *
 * This resource defines what prefix MUST be used for access to LwM2M Objects of
 * this IoT Device.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Prefix_1 = string
/**
 * IoT Device Objects
 *
 * This resource contains the Objects and Object Instances exposed by the LwM2M
 * Gateway on behalf of the IoT Device. It uses the same CoreLnk format as
 * Registration Interface.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type IoTDeviceObjects_3 = string
/**
 * The objectURN for LwM2M Gateway
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '25:2.0@1.1'
