/**
 * powerupLog
 *
 * One time event sent by the device at power up.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3351.xml
 *
 * ID: 3351
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type powerupLog_3351 = Readonly<{
	'0': deviceName_0
	'1': toolVersion_1
	'2': IMEI_2
	'3': IMSI_3
	'4': MSISDN_4
}>
/**
 * deviceName
 *
 * Human-readable name of the device
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type deviceName_0 = string
/**
 * toolVersion
 *
 * The tool version that the device supports - used to determine the logging
 * object/resource version to be used for parsing
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type toolVersion_1 = string
/**
 * IMEI
 *
 * IMEI of device
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type IMEI_2 = string
/**
 * IMSI
 *
 * IMSI of device
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type IMSI_3 = string
/**
 * MSISDN
 *
 * MSISDN of device
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type MSISDN_4 = string
/**
 * The objectURN for powerupLog
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3351'
