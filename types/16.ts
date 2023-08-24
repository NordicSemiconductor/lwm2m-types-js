/**
 * Portfolio
 *
 * The Portfolio Object allows to extend the data storage capability of other
 * Object Instances in the LwM2M system, as well as the services which may be
 * used to authenticate and to protect privacy of data contained in those
 * extensions. In addition, a service of data encryption is also defined
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/16.xml
 *
 * ID: 16
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Portfolio_16 = Readonly<
	Array<{
		'0': Identity_0
		'2'?: AuthData_2
		'3'?: AuthStatus_3
	}>
>
/**
 * Identity
 *
 * Data Storage extension for other Object Instances.
 * e.g for [GSMA] :
 * 0 : Host Device ID,
 * 1: Host Device Manufacturer
 * 2: Host Device Model
 * 3: Host Device Software Version,
 *
 * This Resource contains data that the GetAuthData executable Resource can work
 * with.
 *
 *
 * ID: 0
 * MultipleInstances: true
 * Mandatory: true
 */
type Identity_0 = string
/**
 * AuthData
 *
 * Buffer which contains the data generated by the process triggered by a
 * GetAuthData request
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: false
 */
type AuthData_2 = string
/**
 * AuthStatus
 *
 * This Resource contains the state related to the process triggered by
 * GetAuthData request.
 * 0 : IDLE_STATE : AuthData doesn’t contain any valid data
 * 1 : DATA_AVAIL_STATE : AuthData contains a valid data
 * 2 : ERROR_STATE : an error occurred
 * This state is reset to IDLE_STATE, when the executable resource "GetAuthData"
 * is triggered or when the AuthData resource has been returned to the LwM2M
 * Server (READ / NOTIFY) .
 *
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type AuthStatus_3 = number
/**
 * The objectURN for Portfolio
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '16'