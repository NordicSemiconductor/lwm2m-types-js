/**
 * ECU
 *
 * This LWM2M Object includes ECU(End Control Unit) information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10324.xml
 *
 * ID: 10324
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type ECU_10324 = Readonly<
	Array<{
		'1': ECUID_1
		'2': ECUFMVersion_2
		'5852': Ontime_5852
	}>
>
/**
 * ECU ID
 *
 * The ECU identity.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type ECUID_1 = string
/**
 * ECU FM Version
 *
 * The firmware version of the ECU.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type ECUFMVersion_2 = string
/**
 * On time
 *
 * The time in seconds that the device has been on. Writing a value of 0 resets
 * the counter.
 *
 * ID: 5852
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type Ontime_5852 = number
/**
 * The objectURN for ECU
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10324'
