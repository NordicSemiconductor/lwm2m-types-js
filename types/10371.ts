/**
 * Reboot Status
 *
 * This object provides features allowing to monitor Reboot and Reset Factory
 * operation from LWM2M Device object.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10371.xml
 *
 * ID: 10371
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type RebootStatus_10371 = Readonly<{
	'0': RebootState_0
	'1': RebootErrorMessage_1
	'2'?: ResetFactoryState_2
	'3'?: ResetFactoryErrorMessage_3
}>
/**
 * Reboot State
 *
 * Containing the state of reboot operation. At device start-up the value should
 * be 0 (booted). Once a reboot process is scheduled (e.g. exec on /3/0/4), this
 * value must be set to 1 (rebooting), it is adviced to do that before to send
 * response of Reboot resource (/3/0/4) to avoid any race conditions. If
 * rebooting failed for any reason value must be set to 2(reboot error). If
 * reboot succeeds, at device start up, reboot state should be set to 0 (booted)
 * as always.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type RebootState_0 = number
/**
 * Reboot Error Message
 *
 * Containing the error message of the last reboot failure. This value MUST be
 * set to an empty string on exec on /3/0/4, ideally before to send the response
 * for Reboot resource (3/0/4) to avoid any race conditions
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type RebootErrorMessage_1 = string
/**
 * Reset Factory State
 *
 * Containing the state of reset factory operation. At start-up the value should
 * be 0 (initial-state). Once the reset factory process is scheduled (exec on
 * /3/O/5), this value must be set to 1 (resetting), it is advised to do that
 * before to send response of Reset Factory resource (/3/0/5) to avoid any race
 * conditions. If reset fails for any reason value must be set to 2 (reset
 * error). If reset succeeds, state should be set to 3 (reset). If the reset
 * factory need a reboot, reboot state(/10371/0/0) resource SHOULD also be
 * updated accordingly. If reset factory need a reboot, in case of successful
 * reset, the value MUST be set to 3 (reset) at device start-up. If it helps
 * implementation, this is tolerated to have this resource set to 3 (reset) at
 * first device start-up.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type ResetFactoryState_2 = number
/**
 * Reset Factory Error Message
 *
 * Containing the error message of the last reset factory failure. This value
 * MUST be set to an empty string on exec on /3/0/5, ideally before to send the
 * response for Reset Factory resource (3/0/5) to avoid any race conditions
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type ResetFactoryErrorMessage_3 = string
/**
 * The objectURN for Reboot Status
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10371'
