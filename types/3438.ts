/**
 * Edge computing time condition
 *
 * The uCIFI edge computing time condition object defines the day/time (defined
 * as a CRON rule) at which a particular script should be executed by a device.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3438.xml
 *
 * ID: 3438
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Edgecomputingtimecondition_3438 = Readonly<
	Array<{
		'1': Executiontime_day_1
		'2': Scriptidentifier_2
		'3'?: Nonsupportedtimecondition_3
	}>
>
/**
 * Execution time/day
 *
 * Date/time at which the script should be executed, formatted as a CRON rule.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Executiontime_day_1 = string
/**
 * Script identifier
 *
 * Object URN/Resource ID of the script to apply to the times/days defined in
 * the execution time/day resource.
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: true
 */
type Scriptidentifier_2 = string
/**
 * Non supported time condition
 *
 * Set to True if the device can’t support the condition.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Nonsupportedtimecondition_3 = boolean
/**
 * The objectURN for Edge computing time condition
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3438'
