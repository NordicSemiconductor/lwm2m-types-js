/**
 * Network Info
 *
 * This LWM2M Object includes network status related information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10330.xml
 *
 * ID: 10330
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: true
 */
export type NetworkInfo_10330 = Readonly<{
	'1': IMEI_1
	'2': IMSI_2
	'3': RadioConnectivity_3
	'5': VBNConnectionStatus_5
	'6': HARIConnectionStatus_6
	'4'?: GPSSignalStatus_4
	'7'?: CCUConnectionStatus_7
}>
/**
 * IMEI
 *
 * The IMEI of the RCU in the Robot.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type IMEI_1 = string
/**
 * IMSI
 *
 * The IMSI of the RCU in the Robot.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type IMSI_2 = string
/**
 * Radio Connectivity
 *
 *
 * The radio connectivity status, contains the reference to the Connectivity
 * Monitoring(4).
 *
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type RadioConnectivity_3 = string
/**
 * VBN Connection Status
 *
 * VBN Connection Status: 1:Connected, 0:Disconnected.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type VBNConnectionStatus_5 = number
/**
 * HARI Connection Status
 *
 * HARI Connection Status: 1:Connected, 0:Disconnected.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type HARIConnectionStatus_6 = number
/**
 * GPS Signal Status
 *
 * The GPS signal status: 1: Very Good, 2: Good, 3:Normal, 4: Bad.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type GPSSignalStatus_4 = number
/**
 * CCU Connection Status
 *
 * CCU Connection Status: 1:Connected, 0:Disconnected.
 * The resource instance ID is the same with the Object Instance ID of
 * corresponding CCU.
 *
 * ID: 7
 * MultipleInstances: true
 * Mandatory: false
 */
type CCUConnectionStatus_7 = number
/**
 * The objectURN for Network Info
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10330'
