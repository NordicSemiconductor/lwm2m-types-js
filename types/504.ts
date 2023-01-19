/**
 * Remote SIM Provisioning
 *
 * This is a device management object that should be used for Remote SIM
 * Provisioning according to GSMA standards
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/504.xml
 *
 * ID: 504
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type RemoteSIMProvisioning_504 = Readonly<
	Array<{
		'0': CurrentSIMType_0
		'1': SupportedSIMType_1
		'11': IntegratedCircuitCardIdentifier_ICCID_11
		'13': RSPType_13
		'2'?: ServiceProviderName_2
		'3'?: DownloadURI_Information_3
		'5'?: RSPUpdateState_5
		'6'?: RSPUpdateResult_6
		'7'?: ProfileName_7
		'8'?: ProfilePackageVersion_8
		'9'?: FreeMemoryonSIM_9
		'10'?: TotalMemoryonSIM_10
		'12'?: eUICCID_12
		'14'?: SelectedICCIDforRSPoperation_14
		'15'?: RSPConsentReason_15
		'16'?: RSPUserConsent_16
		'17'?: RSPConfirmationCode_17
		'18'?: RSPDataType_18
		'19'?: SetRSPData_19
		'20'?: GetRSPData_20
	}>
>
/**
 * Current SIM Type
 *
 * Provides the information about the currently being used SIM Type:
 * 0: UICC (removable)
 * 1: eUICC (removable)
 * 2: eUICC (non-removable)
 * 3: iUICC
 * 4-24: Reserved for future use
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type CurrentSIMType_0 = number
/**
 * Supported SIM Type
 *
 * Provides the information about the currently supported SIM Types:
 * 0: UICC (removable)
 * 1: eUICC (removable)
 * 2: eUICC (non-removable)
 * 3: iUICC
 * 4-24: Reserved for future use
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: true
 */
type SupportedSIMType_1 = number
/**
 * Integrated Circuit Card Identifier (ICCID)
 *
 * This resource provides the unique identification number for each installed
 * profile of the current SIM in case of RSP support or
 * the unique identification number of the current SIM in case of current SIM
 * being a UICC with no RSP support. Please refer ETSI TS 102.22.1. In case of
 * multiple installed profiles,
 * the currently active profile is the first instance.
 *
 * ID: 11
 * MultipleInstances: true
 * Mandatory: true
 */
type IntegratedCircuitCardIdentifier_ICCID_11 = string
/**
 * RSP Type
 *
 * Provides the information about the Remote SIM Provisioning (RSP) type of the
 * current SIM:
 * 0: No RSP support
 * 1: GSMA eSIM for M2M devices
 * 2: GSMA eSIM for consumer devices
 * 3-24: Reserved for future use
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: true
 */
type RSPType_13 = number
/**
 * Service Provider Name
 *
 * Provides the name of the Service Provider assocatiated with the downloaded
 * profile or the profile currently being downloaded.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type ServiceProviderName_2 = string
/**
 * Download URI/Information
 *
 * URI, or formatted data containing the URI (e.g. GSMA SGP.22 Activation Code),
 * from where the device can download the profile package by an alternative
 * mechanism.
 * The URI format is defined in RFC 3986.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type DownloadURI_Information_3 = string
/**
 * RSP Update State
 *
 * Indicates current state with respect to the executed RSP action(s) in the RSP
 * update resource. This value is set by the LwM2M Client.
 * 0: Idle (before downloading a profile or after successful completetion of the
 * action(s))
 * 1: Downloading (The data sequence is on the way)
 * 2: Downloaded profile ready for installation
 * 3: Installing
 * 5: Enabling
 * 6: Disabling
 * 7: Deleting
 * 8: Resetting memory
 * 9: Pending end-user consent
 * 10: Pending confirmation code
 * 11-24: Reserved for future use
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type RSPUpdateState_5 = number
/**
 * RSP Update Result
 *
 * Contains the result of the executed RSP action(s) in the RSP update
 * resource.
 * 0: Initial value. Once the updating process is initiated (Download /Update),
 * this Resource MUST be reset to Initial value.
 * 1: RSP action completed successfully.
 * 2: Not enough SIM memory for the new Profile package.
 * 3. Out of RAM during downloading process.
 * 4: Connection lost during downloading process.
 * 5: Integrity check failure for new downloaded profile package.
 * 6: Unsupported profile package type.
 * 7: Invalid URI
 * 8: Unsupported protocol.
 * 9: Not authorized to download profile at the given URI.
 * 10: Failed to authenticate server given by the URI.
 * 11: Generic download and installation error.
 * 12: Error in profile package format
 * 13: Failed to enable profile.
 * 14: Failed to disable profile.
 * 15: Failed to delete profile.
 * 16: Failed to reset memory.
 * 17-24: Reserved for future use
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type RSPUpdateResult_6 = number
/**
 * Profile Name
 *
 * Name of the downloaded profile / profile package or the profile / profile
 * package currently being downloaded.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type ProfileName_7 = string
/**
 * Profile Package Version
 *
 * Version of the downloaded profile / profile package or the profile / profile
 * package currently being downloaded.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type ProfilePackageVersion_8 = string
/**
 * Free Memory on SIM
 *
 * Estimated current available amount of storage space on SIM which can store
 * data and software in the LwM2M Device (expressed in kibibytes).
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 * Units: KiB
 */
type FreeMemoryonSIM_9 = number
/**
 * Total Memory on SIM
 *
 * Total amount of storage space which can store data and software in the LwM2M
 * Device
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 * Units: KiB
 */
type TotalMemoryonSIM_10 = number
/**
 * eUICC ID
 *
 * eUICC-ID (a.k.a. EID), see GSMA SGP.02 and GSMA SGP.29 for definitions
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type eUICCID_12 = string
/**
 * Selected ICCID for RSP operation
 *
 * Indicates ICCID of profile selected for profile specific RSP operations. This
 * resource must be present if multiple installed profiles is supported
 * by the RSP implementation. In case of only support for a single profile at a
 * time this resource is not required to be present for profile selection. After
 * successful installation of
 * a profile the value of this resource (if present) is updated to the ICCID of
 * the installed profile.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type SelectedICCIDforRSPoperation_14 = string
/**
 * RSP Consent Reason
 *
 * Provides information on the requested user consent
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type RSPConsentReason_15 = string
/**
 * RSP User Consent
 *
 * User consent decision. The following values are possible:
 * 0: Approved
 * 1: Rejected
 * 2-24: Reserved for future use
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 */
type RSPUserConsent_16 = number
/**
 * RSP Confirmation Code
 *
 * Provides a confirmation code (see e.g. GSMA SGP.21/22)
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 */
type RSPConfirmationCode_17 = string
/**
 * RSP Data Type
 *
 * RSP data type for set and get RSP data:
 * 0: SM-DP+ default address (see GSMA SGP.22)
 * 1: eUICCInfo2 (see GSMA SGP.22)
 * 2: DeviceInfo (see GSMA SGP.22)
 * 3: eSIM Profile Metadata (GSMA SGP.22 ProfileInfo default data for all
 * installed profiles)
 * 5: ISD-P AID (see GSMA SGP.22) - for profile identified by resource 14
 * 6: Profile state (see GSMA SGP.22) - for profile identified by resource 14
 * 7: Profile Nickname (see GSMA SGP.22) - for profile identified by resource
 * 14
 * 8: Service provider name (see GSMA SGP.22) - for profile identified by
 * resource 14
 * 9: Profile name (see GSMA SGP.22) - for profile identified by resource 14
 * 10: Icon type (see GSMA SGP.22) - for profile identified by resource 14
 * 11: Icon (see GSMA SGP.22) - for profile identified by resource 14
 * 12: Profile Class (see GSMA SGP.22) - for profile identified by resource 14
 * 13: Notification Configuration Info (see GSMA SGP.22) - for profile
 * identified by resource 14
 * 14: Profile Owner (see GSMA SGP.22) - for profile identified by resource 14
 * 15: SM-DP+ proprietary data (see GSMA SGP.22) - for profile identified by
 * resource 14
 * 16: Profile Policy Rules (see GSMA SGP.22) - for profile identified by
 * resource 14
 * 17: RSP formatted data request/response (RSP type specific)
 * 18-24: Reserved for future use
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 */
type RSPDataType_18 = number
/**
 * Set RSP Data
 *
 * This resource is used to update the (e/i)UICC data / profile specific data of
 * type according to resource 30.
 * It is up to the RSP type whether update of the data is possible or not.
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: false
 */
type SetRSPData_19 = string
/**
 * Get RSP Data
 *
 * This resource is used to retrieve the (e/i)UICC data / profile specific data
 * of type according to resource 30.
 * It is up to the RSP type whether retrieval of the data is possible or not.
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 */
type GetRSPData_20 = string
/**
 * The objectURN for Remote SIM Provisioning
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '504'
