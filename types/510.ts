/**
 * Vendor Specific Measurement Quality Reason
 *
 * This object contains description for vendor specific measurement quality
 * reason codes provided in a Measurement Metadata (509) object. Instances of
 * this object define the mapping of vendor specific reason codes to reason
 * description in the scope of an individual device.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/510.xml
 *
 * ID: 510
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type VendorSpecificMeasurementQualityReason_510 = Readonly<
	Array<{
		'0': VendorSpecificQualityReasonCode_0
		'1': QualityReasonName_1
		'2': QualityReasonDescription_2
	}>
>
/**
 * Vendor Specific Quality Reason Code
 *
 * Measurement quality degradation reason reported by a smart sensor. Reason
 * codes 0-127 are generic reason codes and they are defined in Measurement
 * Metadata object description.
 * 128-511: VENDOR_SPECIFIC_BLOCK Vendor specific block. This block contains
 * vendor specific quality reason codes.
 * 512-1023: RESERVED_VENDOR_BLOCK Reserved vendor specific block. This block is
 * reserved for future use.
 *
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type VendorSpecificQualityReasonCode_0 = number
/**
 * Quality Reason Name
 *
 * The name of the quality reason. It is used as a key to find a localized
 * reason description. The name should be concise and unique in the localization
 * scope.
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type QualityReasonName_1 = string
/**
 * Quality Reason Description
 *
 * Description of the quality reason. This text can be used if a localized
 * version is not found.
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type QualityReasonDescription_2 = string
/**
 * The objectURN for Vendor Specific Measurement Quality Reason
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '510@1.1'
