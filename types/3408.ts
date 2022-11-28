/**
 * Manhole Cover
 *
 * Describe the status of a manhole cover.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3408.xml
 *
 * ID: 3408
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type ManholeCover_3408 = Readonly<
	Array<{
		'1': SafetyAngleThreshold_1
		'2': ManholeCoverTilt_2
		'3': CoverOpenStatus_3
	}>
>
/**
 * Safety Angle Threshold
 *
 * The threshold of manhole cover's safety angle.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: rad
 */
type SafetyAngleThreshold_1 = number
/**
 * Manhole Cover Tilt
 *
 * The tilt angle of a manhole cover.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 * Units: rad
 */
type ManholeCoverTilt_2 = number
/**
 * Cover Open Status
 *
 * Indicate whether an open status of the manhole cover is detected. Not
 * detected open [true] or Detected open [false].
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type CoverOpenStatus_3 = boolean
/**
 * The objectURN for Manhole Cover
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3408@1.1'
