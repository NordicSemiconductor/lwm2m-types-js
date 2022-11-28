/**
 * AT&T Connectivity Extension
 *
 * The AT&T Connectivity Extension Object will be used to gather information
 * describing the UE and the operating state of the UE. The AT&T Connectivity
 * Extension Object is an open and standard object used by AT&T.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10308.xml
 *
 * ID: 10308
 * LWM2MVersion: 1.0
 * ObjectVersion: 2.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type ATandTConnectivityExtension_10308 = Readonly<
	Array<{
		'1': ICCID_1
		'2': IMSI_2
		'3': MSISDN_3
		'4': APNRetries_4
		'5': APNRetryPeriod_5
		'6': APNRetryBack_OffPeriod_6
		'7': SINR_7
		'8': SRXLEV_8
		'9': CE_LEVEL_9
	}>
>
/**
 * ICCID
 *
 * T he ICCID resource is used to identify the UICC used by the IoT device or
 * module for authentication by the network. Reference ITU-T recommendation
 * E.118
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type ICCID_1 = string
/**
 * IMSI
 *
 * The IMSI resource is used to log the IMSI used by the UE to identify itself
 * to the network. The IMSI is defined in 3GPP TS 23.003 and is a combination of
 * MCC (Mobile Country Code), MNC (Mobile Network Code), and MSIN (Mobile
 * Subscriber Identification Number).
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type IMSI_2 = string
/**
 * MSISDN
 *
 * The MSISDN resource will indicate the MSISDN as assigned, if any, to the SIM
 * card. In the case that no MSISDN is assigned to the SIM card the response
 * should be zero.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type MSISDN_3 = string
/**
 * APN Retries
 *
 * The APN Retry multi instance resource will maintain the number of retries the
 * device can attempt to activate a context on a particular APN. This resource
 * should be defaulted to 2 retries. Should a device integrator wish to
 * manipulate this the integrator should be able to do so.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type APNRetries_4 = number
/**
 * APN Retry Period
 *
 * The APN retry period multi instance resource is the time in seconds between
 * attempting a context activation on the APN. This should be defaulted to 0.
 * Note that the IoT Module will be limited by the number retries and the
 * periodicity of the retries by the DAM requirements in Chapter 28 of the AT&T
 * 13340. The resource is multi-instance to accommodate different periods of
 * retries on different APNs.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type APNRetryPeriod_5 = number
/**
 * APN Retry Back-Off Period
 *
 * The APN Retry Back-Off Period is the period between a burst of attempts to
 * activate a context on a particular APN. This resource is intended to be a
 * longer period than the APN retry period to account for limitations on the
 * numbers of times an authentication request can be made with the network. This
 * should be defaulted to 86400 seconds (1 Day). This resource is also a
 * multiple instance resource to accommodate different retry periods amongst
 * different APNs.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type APNRetryBack_OffPeriod_6 = number
/**
 * SINR
 *
 * This is the signal to noise ratio resource. This measurement should be
 * measured over 10 sampled at a 400ms sample rate. Once the 10 samples are
 * averaged the measurement should be reflected in the Signal to Noise Ratio
 * resource. Reference: 3GPP TS 38.215, clause 5.1.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type SINR_7 = number
/**
 * SRXLEV
 *
 * This resource indicates the cell selection receive value. See definition in
 * 3GPP TS 36.304.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 */
type SRXLEV_8 = number
/**
 * CE_LEVEL
 *
 * This resource indicates the Coverage Enhancement Level defined for LTE-M and
 * NB-IoT. The Coverage Enhancement Level is on a range from 0-2. AT&T NB-IoT
 * supports CE MODE A and B (CE LEVEL 0,1,2) and AT&T LTE-M supports CE MODE A
 * (CE Level 0,1).
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: true
 */
type CE_LEVEL_9 = number
/**
 * The objectURN for AT&T Connectivity Extension
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10308:2.0'
