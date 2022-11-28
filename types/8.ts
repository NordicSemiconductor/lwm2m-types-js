/**
 * Lock and Wipe
 *
 * This LWM2M objects provides the resources needed to perform the lock and wipe
 * operations.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/8.xml
 *
 * ID: 8
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type LockandWipe_8 = Readonly<{
	'0': State_0
	'1': Locktarget_1
	'4': Wipetarget_4
	'5': LockorWipeOperationResult_5
	'2'?: Wipeitem_2
}>
/**
 * State
 *
 * State of the device:
 * 0: unlocked state Normal operation.
 * 1: partially locked state
 * To render the device inoperable the device has been partially locked. The
 * "lock target" resource allows specifying the target(s) for this operation.
 * 2: fully locked state
 * To render the device fully inoperable the device has been fully locked.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type State_0 = number
/**
 * Lock target
 *
 * To specify one or several targets for the lock operation. This allows
 * partially locking the device by selecting specific components or interfaces
 * to be locked.
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: true
 */
type Locktarget_1 = string
/**
 * Wipe target
 *
 * To specify one or several targets for the wipe operation. This allows
 * selecting specific data, or, memory areas for the wipe operation.
 *
 * ID: 4
 * MultipleInstances: true
 * Mandatory: true
 */
type Wipetarget_4 = string
/**
 * Lock or Wipe Operation Result
 *
 * Contains the result of a lock and wipe operation
 * 0: Default
 * 1: Partially Lock operation successful
 * 2: Fully Lock operation successful
 * 3: Unlock operation successful
 * 4: Wipe operation successful
 * 5: Partially Lock operation failed
 * 6: Fully Lock operation failed
 * 7: Unlock operation failed
 * 8: Wipe operation failed
 * This Resource MAY be reported by sending Observe operation.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type LockorWipeOperationResult_5 = number
/**
 * Wipe item
 *
 * Indicates which data can be wiped from the device. This resource could be
 * e.g. representing a directory.
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: false
 */
type Wipeitem_2 = string
/**
 * The objectURN for Lock and Wipe
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '8'
