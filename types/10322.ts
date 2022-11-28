/**
 * CCU PM
 *
 * This LWM2M Object includes CCU PM(counter and gauge).
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10322.xml
 *
 * ID: 10322
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CCUPM_10322 = Readonly<
	Array<{
		'1'?: CPUUsage_1
		'2'?: MaxCPUUsage_2
		'3'?: MemoryUsage_3
		'4'?: StorageUsage_4
	}>
>
/**
 * CPU Usage
 *
 * The CPU usage of the CCU.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 * Units: %
 */
type CPUUsage_1 = number
/**
 * Max CPU Usage
 *
 * Max CPU Usage of the CCU.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: %
 */
type MaxCPUUsage_2 = number
/**
 * Memory Usage
 *
 * Memory Usage of the CCU.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: %
 */
type MemoryUsage_3 = number
/**
 * Storage Usage
 *
 * Storage Usage of the CCU.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: %
 */
type StorageUsage_4 = number
/**
 * The objectURN for CCU PM
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10322'
