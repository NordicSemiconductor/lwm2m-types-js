/**
 * APP
 *
 * This LWM2M Object includes the APP information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10354.xml
 *
 * ID: 10354
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: true
 */
export type APP_10354 = Readonly<
	Array<{
		'1': APPName_1
		'2': APPVersion_2
		'7': InstallationTarget_7
		'8': APPStatus_8
		'3'?: APPBuildNo_3
		'4'?: APPPatchNo_4
		'5'?: PackageURI_5
		'6'?: VendorName_6
	}>
>
/**
 * APP Name
 *
 * The name of the APP, human readable string.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type APPName_1 = string
/**
 * APP Version
 *
 * The version of the APP, human readable string.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type APPVersion_2 = string
/**
 * Installation Target
 *
 * Specify where this APP should be installed, RCU or which CCU.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type InstallationTarget_7 = string
/**
 * APP Status
 *
 * The Status of the APP, 0:Downloading, 1:Downloaded, 2:Installed, 3:Verified,
 * 4:Activated, 5:Stopped.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 */
type APPStatus_8 = number
/**
 * APP Build No
 *
 * The Build No of the APP, human readable string.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type APPBuildNo_3 = string
/**
 * APP Patch No
 *
 * The Patch No of the APP, human readable string.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type APPPatchNo_4 = string
/**
 * Package URI
 *
 * URI from where the device can download the software package by an alternative
 * mechanism.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type PackageURI_5 = string
/**
 * Vendor Name
 *
 * The vendor of the package.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type VendorName_6 = string
/**
 * The objectURN for APP
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10354'
