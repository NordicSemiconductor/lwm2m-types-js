/**
 * Manifest
 *
 * This object provides a range of information related to updating packages on a
 * device
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10252.xml
 *
 * ID: 10252
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type Manifest_10252 = Readonly<{
	'1': Manifest_1
	'2': State_2
	'3': ManifestResult_3
	'4': PayloadResult_4
	'5': AssetHash_5
	'6': Manifestversion_6
	'7': AssetInstallationProgress_7
	'8': CampaignId_8
}>
/**
 * Manifest
 *
 * Content of a new manifest
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type Manifest_1 = string
/**
 * State
 *
 * Current state of manifest processing
 * 0.	Uninitialised
 * 1.	Idle
 * 2.	Processing manifest
 * 3.	Awaiting download approval
 * 4.	Downloading
 * 5.	Downloaded
 * 6.	Awaiting application approval
 * 7.	Updating
 * 8.	Rebooting
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type State_2 = number
/**
 * Manifest Result
 *
 * Final result of the device processing a manifest.
 * 0.	Uninitialised
 * 1.	Success
 * 2.	Manifest timeout. The Manifest URI has timed-out.
 * 3.	Manifest not found. The Manifest URI not found.
 * 4.	Manifest failed integrity check. The manifest integrity check failed.
 * 5.	Manifest rejected. The Manifest attributes do not apply to this device.
 * 6.	Manifest certificate not found
 * 7.	Manifest signature failed. The Manifest signature is not recognised by
 * this device.
 * 8.	Dependent manifest not found
 * 9.	Not enough storage for the new asset
 * 10.	Out of memory during download process
 * 11.	Connection lost during download process
 * 12.	Asset failed integrity check
 * 13.	Unsupported asset type
 * 14.	Invalid asset URI
 * 15.	Timed out downloading asset
 * 16.	Unsupported delta format
 * 17.	Unsupported encryption format
 * 18.	Asset update successfully completed
 * 19.	Asset updated successfully after recovery
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type ManifestResult_3 = number
/**
 * Payload Result
 *
 * Contains payload-specific errors or output.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type PayloadResult_4 = string
/**
 * Asset Hash
 *
 * Hash of the installed asset.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type AssetHash_5 = string
/**
 * Manifest version
 *
 * Version of the current manifest.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type Manifestversion_6 = number
/**
 * Asset Installation Progress
 *
 * Progress update of the asset installation process (in bytes).
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type AssetInstallationProgress_7 = number
/**
 * Campaign Id
 *
 * Id of campaign affecting this device. There currently isn’t any logic on the
 * server or the client to handle this.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type CampaignId_8 = string
/**
 * The objectURN for Manifest
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10252'
