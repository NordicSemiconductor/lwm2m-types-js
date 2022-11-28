/**
 * esmContextInfo
 *
 * ESM context information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3360.xml
 *
 * ID: 3360
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type esmContextInfo_3360 = Readonly<{
	'0': contextType_0
	'1': bearerState_1
	'2': radioBearerId_2
	'3': qci_3
}>
/**
 * contextType
 *
 * 0=default
 * 1=dedicated
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type contextType_0 = number
/**
 * bearerState
 *
 * Bearer State
 * 0 = null
 * 1 = activeWaiting
 * 2 = active
 * 3 = modifying
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type bearerState_1 = number
/**
 * radioBearerId
 *
 * Radio bearer ID corresponding to EPS Bearer ID of the context
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type radioBearerId_2 = number
/**
 * qci
 *
 * QoS Class Identifier (TS 23.203)
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type qci_3 = number
/**
 * The objectURN for esmContextInfo
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3360'
