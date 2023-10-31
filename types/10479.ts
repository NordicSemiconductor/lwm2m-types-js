/**
 * Cellular Network and Bearer Control
 *
 * This LwM2M Object enables monitoring of available network bearers (or Radio
 * Access Technologies - RATs) of cellular networks. Each instance of this
 * Object holds information related to one network bearer incl. the associated
 * PLMN.
 * An object instance should be created for every RAT available for a PLMN, and
 * for every PLMN visible to the device.
 * The Object also allows steering the device towards a particular PLMN, or, to
 * a particular PLMN+RAT combination.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10479.xml
 *
 * ID: 10479
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CellularNetworkandBearerControl_10479 = Readonly<
	Array<{
		'0': PLMNName_0
		'1': MCC_1
		'2': MNC_2
		'3': NetworkBearer_3
		'4': CurrentlyInUse_4
		'5': RadioSignalStrength_5
		'6': LinkQuality_6
		'7'?: SignalSNR_7
		'8'?: CoverageEnhancementLevel_8
		'11'?: DeviceSupportsManualNetworkSelection_11
		'12'?: NetworkManuallySelected_12
		'13'?: DeviceSupportsManualBearerSelection_13
		'14'?: BearerManuallySelected_14
	}>
>
/**
 * PLMN Name
 *
 * PLMN name e.g. "Vodafone UK"
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type PLMNName_0 = string
/**
 * MCC
 *
 * Serving Mobile Country Code.
 * As specified in TS [3GPP 23.003].
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type MCC_1 = string
/**
 * MNC
 *
 * Mobile Network Code.
 * As specified in TS [3GPP 23.003].
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type MNC_2 = string
/**
 * Network Bearer
 *
 * Indicates the available network bearers.
 * More specifically:
 * 0: GSM
 * 1: TD-SCDMA
 * 2: WCDMA
 * 3: CDMA2000
 * 4: WiMAX
 * 5: LTE-TDD
 * 6: LTE-FDD
 * 7: NB-IoT
 * 8: 5GNR TDD
 * 9: 5G-NR FDD
 * 10: CAT-M
 * 11 - 20: Reserved for other types of cellular network bearers
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type NetworkBearer_3 = number
/**
 * Currently In Use
 *
 * Indicates if this PLMN and network bearer is currently used e.g. for the
 * current LwM2M communication (true).
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type CurrentlyInUse_4 = boolean
/**
 * Radio Signal Strength
 *
 * Indicates the average value of the received signal strength indication. The
 * value is expressed in dBm. For the following network bearers the signal
 * strength parameters indicated below are represented by this resource:
 * GSM: RSSI
 * UMTS: RSCP
 * LTE: RSRP
 * NB-IoT: NRSRP
 * CAT-M: RSRP
 * For more details on Network Measurement Report, refer to the appropriate 3GPP
 * standards, (e.g. for LTE refer to 3GPP TS 36.133).
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 * Units: dBm
 */
type RadioSignalStrength_5 = number
/**
 * Link Quality
 *
 * This contains received link quality e.g. RxQual Downlink for GSM (range
 * 0...7, refer to 3GPP TS 44.018 for more details on Network Measurement Report
 * encoding), RSRQ for LTE and Cat-M (refer to 3GPP TS 36.214), NRSRQ for NB-IoT
 * (refer to 3GPP TS 36.214).
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type LinkQuality_6 = number
/**
 * SignalSNR
 *
 * SINR: Signal to Interference plus Noise Ratio SINR is the ratio of the
 * strength of the received signal to the strength of the received interference
 * signal (noise and interference).
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type SignalSNR_7 = number
/**
 * Coverage Enhancement Level
 *
 * Indicates the Coverage Enhancement Level of the UE in the serving cell. The
 * Coverage Enhancement levels are defined and specified in 3GPP TS 36.331 and
 * 36.213.
 * 0: Coverage Enhancement level 0
 * 1: Coverage Enhancement level 1
 * 2: Coverage Enhancement level 2
 * 3: Coverage Enhancement level 3
 * 99: No Coverage Enhancement in the serving cell
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type CoverageEnhancementLevel_8 = number
/**
 * Device Supports Manual Network Selection
 *
 * 0=device does not support manual network selection (overwriting automatic
 * network selection)
 * 1=device supports manual network selection
 *
 * This resource shall only be present in Object instance 0.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type DeviceSupportsManualNetworkSelection_11 = boolean
/**
 * Network Manually Selected
 *
 * 0 = device is on automatic network selection mode.
 * 1= device is on manual network selection mode and the network has been
 * manually selected
 *
 * This resource shall only be present in Object instance 0.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type NetworkManuallySelected_12 = boolean
/**
 * Device Supports Manual Bearer Selection
 *
 * 0=device does not support manual bearer selection (overwriting automatic
 * bearer selection)
 * 1=device supports manual bearer selection
 *
 * This resource shall only be present in Object instance 0.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type DeviceSupportsManualBearerSelection_13 = boolean
/**
 * Bearer Manually Selected
 *
 * 0 = device is on automatic bearer selection mode.
 *
 * 1= device is on manual bearer selection mode and the bearer has been manually
 * selected
 *
 * This resource shall only be present in Object instance 0.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type BearerManuallySelected_14 = boolean
/**
 * The objectURN for Cellular Network and Bearer Control
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10479@1.1'
