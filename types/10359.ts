/**
 * Lock
 *
 * This LWM2M Object includes the Lock information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10359.xml
 *
 * ID: 10359
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Lock_10359 = Readonly<
	Array<{
		'1': LockName_1
		'50'?: LockStatus_50
	}>
>
/**
 * Lock Name
 *
 * The name of the compressor.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type LockName_1 = string
/**
 * Lock Status
 *
 * The status of the lock, 1:Locked, 0:Unlocked.
 *
 * ID: 50
 * MultipleInstances: false
 * Mandatory: false
 */
type LockStatus_50 = boolean
/**
 * The objectURN for Lock
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10359'
