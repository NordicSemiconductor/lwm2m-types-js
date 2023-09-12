/**
 * Bitmap
 *
 * Summarize several digital inputs to one value by mapping each bit to a
 * digital input.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3349.xml
 *
 * ID: 3349
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type Bitmap_3349 = Readonly<
	Array<{
		'5910': BitmapInput_5910
		'5518'?: Timestamp_5518
		'5750'?: ApplicationType_5750
		'5912'?: ElementDescription_5912
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Bitmap Input
 *
 * Integer in which each of the bits are associated with specific digital input
 * value. Represented as a binary signed integer in network byte order, and in
 * two's complement representation. Using values in range 0-127 is recommended
 * to avoid ambiguities with byte order and negative values.
 *
 * ID: 5910
 * MultipleInstances: false
 * Mandatory: true
 */
type BitmapInput_5910 = number
/**
 * Timestamp
 *
 * The timestamp of when the measurement was performed.
 *
 * ID: 5518
 * MultipleInstances: false
 * Mandatory: false
 */
type Timestamp_5518 = number
/**
 * Application Type
 *
 * The application type of the sensor or actuator as a string depending on the
 * use case.
 *
 * ID: 5750
 * MultipleInstances: false
 * Mandatory: false
 */
type ApplicationType_5750 = string
/**
 * Element Description
 *
 * The description of each bit as a string. First instance describes the least
 * significant bit, second instance the second least significant bit.
 *
 * ID: 5912
 * MultipleInstances: true
 * Mandatory: false
 */
type ElementDescription_5912 = Array<string>
/**
 * Fractional Timestamp
 *
 * Fractional part of the timestamp when sub-second precision is used (e.g.,
 * 0.23 for 230 ms).
 *
 * ID: 6050
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type FractionalTimestamp_6050 = number
/**
 * The objectURN for Bitmap
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3349:1.1'
