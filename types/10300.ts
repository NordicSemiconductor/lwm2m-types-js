/**
 * LWM2M Meta Object
 *
 *
 *
 * Use this meta object to provide one or more locations hosting XML data
 * model definitions for reusable or private and vendor-specific devices,
 * such as those in the range 26241-42768.
 *
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10300.xml
 *
 * ID: 10300
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type LWM2MMetaObject_10300 = Readonly<
	Array<{
		'0': ObjectID_0
		'1': ObjectURN_1
		'2': URI_2
		'3'?: SHAType_3
		'4'?: ChecksumValue_4
		'4000'?: ObjectInstanceHandle_4000
	}>
>
/**
 * ObjectID
 *
 *
 *
 * Object ID of the vendor-specific object. If a finer granularity is
 * needed to identify the object (for example, Object IDs in the range
 * 26241 - 32768), the optional ObjectInstanceHandle resource can also be
 * used.
 *
 *
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type ObjectID_0 = number
/**
 * ObjectURN
 *
 *
 *
 * Object URN of the vendor-specific object. URN-equivalence resolution
 * must conform to Section 3 of RFC 8141.
 *
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type ObjectURN_1 = string
/**
 * URI
 *
 *
 *
 * The full URI of the XML file containing the object definition of the
 * vendor-specfic object. The URI must contain the scheme and authority
 * components, and the URI syntax must conform to RFC 3986. If several
 * alternative locations exist for the XML definition, multiple instances
 * can be used, with each instance containing a single URI. In such
 * cases, the URI selection is implementation-specific.
 *
 *
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: true
 */
type URI_2 = Array<string>
/**
 * SHAType
 *
 *
 *
 * The Secure Hash Algorithm used to compute the message digest for the
 * XML file in the URL(s). Currently defined values are "0" (no checksum
 * used), "1" (for SHA224), "2" (for SHA256), "3" (for SHA384), "4" (for
 * SHA512), "5" (SHA3-224), "6" (for SHA3-256), "7" (for SHA3-384) and
 * "8" (for SHA3-512).
 *
 *
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type SHAType_3 = number
/**
 * ChecksumValue
 *
 *
 *
 * If the SHAType value is "0" then this string must be ignored. If the
 * SHAType value is 1-8, this field contains a hexadecimal encoded
 * checksum value based on the SHA function used. Valid characters for
 * the string are: 0123456789abcdef. The length of the string must
 * correspond exactly to the respective digest. Otherwise, the value must
 * be ignored and no SHA computation should be performed. For instance, a
 * file containing "foo" as its content would have the following value
 * for SHAType 1 (SHA224) as a 56 character string representing 224 bits:
 * e7d5e36e8d470c3e5103fedd2e4f2aa5c30ab27f6629bdc3286f9dd2
 *
 *
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type ChecksumValue_4 = string
/**
 * ObjectInstanceHandle
 *
 *
 * The object link is used to refer an Instance of a given Object. An Object
 * link value is composed of two concatenated 16-bit unsigned integers following
 * the Network Byte Order convention. The Most Significant Halfword is an Object
 * ID, the Least Significant Halfword is an Object Instance ID. An Object Link
 * referencing no Object Instance will contain the concatenation of 2 MAX-ID
 * values.
 *
 *
 * ID: 4000
 * MultipleInstances: false
 * Mandatory: false
 */
type ObjectInstanceHandle_4000 = string
/**
 * The objectURN for LWM2M Meta Object
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10300'
