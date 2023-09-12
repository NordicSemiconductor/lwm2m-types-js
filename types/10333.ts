/**
 * PM Threshold
 *
 * Here defines all items needed in PM Threshold management.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10333.xml
 *
 * ID: 10333
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type PMThreshold_10333 = Readonly<{
	'1': Entity_1
	'2': PerformanceType_2
	'3': HighThreshold_3
	'4': LowThreshold_4
}>
/**
 * Entity
 *
 * Contains the object ID and object instance ID/name, for example: </10320/2>.
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: true
 */
type Entity_1 = Array<string>
/**
 * Performance Type
 *
 * Referrence to a PM item, similar with Corelnk in LwM2M 1.1,
 * </object ID/object instance ID/resoure ID>, for example:/10322/2/4
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: true
 */
type PerformanceType_2 = Array<string>
/**
 * High Threshold
 *
 * High Threshold of this PM item.
 *
 * ID: 3
 * MultipleInstances: true
 * Mandatory: true
 */
type HighThreshold_3 = Array<number>
/**
 * Low Threshold
 *
 * Low Threshold of this PM item.
 *
 * ID: 4
 * MultipleInstances: true
 * Mandatory: true
 */
type LowThreshold_4 = Array<number>
/**
 * The objectURN for PM Threshold
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10333'
