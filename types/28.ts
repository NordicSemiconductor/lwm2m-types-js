/**
 * Device RF Capabilities
 *
 * This is a device management object that should be used for capturing the RF
 * capabilities of the device.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/28.xml
 *
 * ID: 28
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type DeviceRFCapabilities_28 = Readonly<{
	'0'?: SupportedLTEBandInformation_0
	'1'?: SupportedEGPRSBandInformation_1
	'2'?: SupportedTD_SCDMABandInformation_2
	'3'?: SupportedWCDMABandInformation_3
	'4'?: SupportedCDMA_2000BandInformation_4
	'5'?: SupportedWiMAXBandInformation_5
	'6'?: SupportedNB_IoTBandInformation_6
	'7'?: Supported5GBandInformation_7
}>
/**
 * Supported LTE Band Information
 *
 * Indicates the list of supported LTE bands
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: false
 */
type SupportedLTEBandInformation_0 = number
/**
 * Supported EGPRS Band Information
 *
 * Indicates the list of supported EGPRS bands
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type SupportedEGPRSBandInformation_1 = number
/**
 * Supported TD-SCDMA Band Information
 *
 * Indicates the list of supported TD-SCDMA bands
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type SupportedTD_SCDMABandInformation_2 = number
/**
 * Supported WCDMA Band Information
 *
 * Indicates the list of supported WCDMA bands
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type SupportedWCDMABandInformation_3 = number
/**
 * Supported CDMA-2000 Band Information
 *
 * Indicates the list of supported CDMA-2000 bands
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type SupportedCDMA_2000BandInformation_4 = number
/**
 * Supported WiMAX Band Information
 *
 * Indicates the list of supported WiMAX bands
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type SupportedWiMAXBandInformation_5 = number
/**
 * Supported NB-IoT Band Information
 *
 * Indicates the list of supported NB-IoT bands
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type SupportedNB_IoTBandInformation_6 = number
/**
 * Supported 5G Band Information
 *
 * Indicates the list of supported 5G-NR bands
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type Supported5GBandInformation_7 = number
/**
 * The objectURN for Device RF Capabilities
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '28@1.1'
