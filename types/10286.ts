/**
 * App Fota Container
 *
 * This LWM2M Object is used to download the firmware package of a device's
 * application.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10286.xml
 *
 * ID: 10286
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type AppFotaContainer_10286 = Readonly<{
	'0': ULdata_0
	'1': DLdata_1
}>
/**
 * UL data
 *
 * Running firmware package information of a device's application,e.g. version
 * of firmare package.
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
 * Package URI and the data sequence of firmware package.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type DLdata_1 = string
/**
 * The objectURN for App Fota Container
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10286'
