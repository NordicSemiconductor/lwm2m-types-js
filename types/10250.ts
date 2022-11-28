/**
 * App Data Container
 *
 * This LWM2M Object is used for reporting application data of a device.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10250.xml
 *
 * ID: 10250
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type AppDataContainer_10250 = Readonly<{
	'0': ULdata_0
	'1': DLdata_1
}>
/**
 * UL data
 *
 * Uplink application data, e.g. gas meter reporting data.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type ULdata_0 = string
/**
 * DL data
 *
 * Downlink application data, e.g. application response message of uplink data.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type DLdata_1 = string
/**
 * The objectURN for App Data Container
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10250'
