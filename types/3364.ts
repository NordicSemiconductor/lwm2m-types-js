/**
 * emmFailureCauseEvent
 *
 * Triggered at EMM failure - failure cause is logged
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3364.xml
 *
 * ID: 3364
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type emmFailureCauseEvent_3364 = Readonly<{
	'0': EMMCause_0
}>
/**
 * EMMCause
 *
 * EMM Failure Causes - 3GPP 24.301
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type EMMCause_0 = number
/**
 * The objectURN for emmFailureCauseEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3364'
