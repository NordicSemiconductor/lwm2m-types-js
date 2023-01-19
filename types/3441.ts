/**
 * LwM2M v1.0 Test Object
 *
 * This object is for use in interoperability tests of the LwM2M v1.0 technical
 * specification. It contains resources for each available datatype.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3441.xml
 *
 * ID: 3441
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type LwM2Mv1_0TestObject_3441 = Readonly<
	Array<{
		'4'?: ArgumentsList_4
		'110'?: StringValue_110
		'120'?: IntegerValue_120
		'130'?: FloatValue_130
		'140'?: BooleanValue_140
		'150'?: OpaqueValue_150
		'160'?: TimeValue_160
		'170'?: ObjLinkValue_170
		'1110'?: MultipleStringValue_1110
		'1120'?: MultipleIntegerValue_1120
		'1130'?: MultipleFloatValue_1130
		'1140'?: MultipleBooleanValue_1140
		'1150'?: MultipleOpaqueValue_1150
		'1160'?: MultipleTimeValue_1160
		'1170'?: MultipleObjLinkValue_1170
	}>
>
/**
 * Arguments List
 *
 * List of Arguments from last execute on "Exec With Arguments"(3) resource.
 * This resource is not affected by the "Randomize values"(1) executable
 * resource.
 *
 *
 * ID: 4
 * MultipleInstances: true
 * Mandatory: false
 */
type ArgumentsList_4 = string
/**
 * String Value
 *
 * Initial value must be "initial value".
 *
 *
 * ID: 110
 * MultipleInstances: false
 * Mandatory: false
 */
type StringValue_110 = string
/**
 * Integer Value
 *
 * Initial value must be "1024".
 *
 *
 * ID: 120
 * MultipleInstances: false
 * Mandatory: false
 */
type IntegerValue_120 = number
/**
 * Float Value
 *
 * Initial value must be "3.14159".
 *
 *
 * ID: 130
 * MultipleInstances: false
 * Mandatory: false
 */
type FloatValue_130 = number
/**
 * Boolean Value
 *
 * Initial value must be "true".
 *
 * ID: 140
 * MultipleInstances: false
 * Mandatory: false
 */
type BooleanValue_140 = boolean
/**
 * Opaque Value
 *
 * Initial value must be the bytes sequence "0123456789ABCDEF" (Hexadecimal
 * notation).
 *
 *
 * ID: 150
 * MultipleInstances: false
 * Mandatory: false
 */
type OpaqueValue_150 = string
/**
 * Time Value
 *
 * Initial value must be the time to an 1st, 2000 in the UTC time zone.
 * (Timestamp value : 946684800)
 *
 * ID: 160
 * MultipleInstances: false
 * Mandatory: false
 */
type TimeValue_160 = number
/**
 * ObjLink Value
 *
 * Initial value must be a link to instance 0 of Device Object 3 (3:0).
 *
 * ID: 170
 * MultipleInstances: false
 * Mandatory: false
 */
type ObjLinkValue_170 = string
/**
 * Multiple String Value
 *
 * Initial value must be 1 instance with ID 0 and value "initial value".
 *
 * ID: 1110
 * MultipleInstances: true
 * Mandatory: false
 */
type MultipleStringValue_1110 = string
/**
 * Multiple Integer Value
 *
 * Initial value must be 1 instance with ID 0 and value "1024".
 *
 * ID: 1120
 * MultipleInstances: true
 * Mandatory: false
 */
type MultipleIntegerValue_1120 = number
/**
 * Multiple Float Value
 *
 * Initial value must be 1 instance with ID 0 and value "3.14159".
 *
 * ID: 1130
 * MultipleInstances: true
 * Mandatory: false
 */
type MultipleFloatValue_1130 = number
/**
 * Multiple Boolean Value
 *
 * Initial value must be 1 instance with ID 0 and value "true".
 *
 * ID: 1140
 * MultipleInstances: true
 * Mandatory: false
 */
type MultipleBooleanValue_1140 = boolean
/**
 * Multiple Opaque Value
 *
 * Initial value must be 1 instance with ID 0 and value
 * "0123456789ABCDEF"(Hexadecimal notation of the bytes sequence).
 *
 * ID: 1150
 * MultipleInstances: true
 * Mandatory: false
 */
type MultipleOpaqueValue_1150 = string
/**
 * Multiple Time Value
 *
 * Initial value must be 1 instance with ID 0 and value 1st, 2000 in the UTC
 * time zone (Timestamp value : 946684800).
 *
 * ID: 1160
 * MultipleInstances: true
 * Mandatory: false
 */
type MultipleTimeValue_1160 = number
/**
 * Multiple ObjLink Value
 *
 * Initial value must be 1 instance with ID 0 and value "3:0".
 *
 * ID: 1170
 * MultipleInstances: true
 * Mandatory: false
 */
type MultipleObjLinkValue_1170 = string
/**
 * The objectURN for LwM2M v1.0 Test Object
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3441'
