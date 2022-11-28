/**
 * LWM2M Bearer Selection
 *
 * This object specifies resources to enable a device to choose a PLMN/network
 * on which to attach/register and what type of bearer to then connect.
 * This object allows via remote bearer and network configuration to overwrite
 * automatic network and bearer selection e.g. as supported by the UICC. An
 * equivalent example for overwriting automatic selection is a user doing manual
 * network and bearer selection on a smart phone.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/13.xml
 *
 * ID: 13
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.1
 * MultipleInstances: false
 * Mandatory: false
 */
export type LWM2MBearerSelection_13 = Readonly<{
	'0'?: PreferredCommunicationsBearer_0
	'1'?: AcceptableRSSI_GSM_1
	'10'?: AcceptableRSRP_NB_IoT_10
	'11'?: HigherPriorityPLMNSearchTimer_11
	'12'?: AttachwithoutPDNconnection_12
	'2'?: AcceptableRSCP_UMTS_2
	'3'?: AcceptableRSRP_LTE_3
	'4'?: AcceptableRSSI_1xEV_DO_4
	'5'?: Celllocklist_5
	'6'?: Operatorlist_6
	'7'?: Operatorlistmode_7
	'8'?: ListofavailablePLMNs_8
	'9'?: Vendorspecificextensions_9
}>
/**
 * Preferred Communications Bearer
 *
 * Used in network selection and, if applicable, in subsequent mobility
 * management procedures:
 * 0: auto connect
 * 1: 3GPP PS preferred
 * 2: 3GPP PS GSM (GPRS) preferred (including EC-GSM-IoT)
 * 3: 3GPP PS UMTS preferred
 * 4: 3GPP PS LTE preferred
 * 5: 1xEV-DO preferred (1)
 * 6: 3GPP CS preferred (1)
 * 7: WLAN preferred
 * 8: Ethernet preferred (1)
 * 9: DSL preferred (1)
 * 10: Bluetooth preferred (1)
 * 11: WIMAX preferred (1)
 * 12: 3GPP PS LTE with CIoT EPS optimisations, User Plane preferred (2)
 * 13: 3GPP PS LTE with CIoT EPS optimisations, Control Plane preferred (2)14:
 * 3GPP PS NB-IoT Control Plane optimisations preferred (2)
 * 15: 3GPP PS NB-IoT User Plane optimisations preferred (2)
 * 16: 3GPP 5G-NR preferred
 * 17-100: Reserved for future use
 * The Preferred Communications Bearer resource specifies the preferred
 * communications bearer that the LWM2M Client is requested to use for
 * connecting to the LWM2M Server. If multiple preferred communications bearers
 * are specified, the priority order is reflected by the resource instance
 * order. E.g. the bearer which appears first in the list of resource instances
 * is to have higher priority over the rest of available bearers. The LWM2M
 * Client SHOULD use the preferred bearers with higher priority first if they
 * are available. If none of indicated preferred bearers is available, the LWM2M
 * Client SHOULD wait until one of them becomes available.
 *
 * ID: 0
 * MultipleInstances: true
 * Mandatory: false
 */
type PreferredCommunicationsBearer_0 = number
/**
 * Acceptable RSSI (GSM)
 *
 * Provides guide to the application when performing manual network selection.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type AcceptableRSSI_GSM_1 = number
/**
 * Acceptable RSRP (NB-IoT)
 *
 * Provides guide to the application when performing manual network selection.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type AcceptableRSRP_NB_IoT_10 = number
/**
 * Higher Priority PLMN Search Timer
 *
 * Interval between periodic searches for higher priority PLMNs of the same
 * country when camped on a visited PLMN, i.e. roaming scenario; based on SIM
 * configuration, EFHPPLMN [3GPP-TS_31.102, section 4.2.6]
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type HigherPriorityPLMNSearchTimer_11 = number
/**
 * Attach without PDN connection
 *
 * False: attach with PDN connection
 * True: attach without PDN connection
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type AttachwithoutPDNconnection_12 = boolean
/**
 * Acceptable RSCP (UMTS)
 *
 * Provides guide to the application when performing manual network selection.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type AcceptableRSCP_UMTS_2 = number
/**
 * Acceptable RSRP (LTE)
 *
 * Provides guide to the application when performing manual network selection.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type AcceptableRSRP_LTE_3 = number
/**
 * Acceptable RSSI (1xEV-DO)
 *
 * Provides guide to the application when performing manual network selection.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type AcceptableRSSI_1xEV_DO_4 = number
/**
 * Cell lock list
 *
 * Comma separated list of allowed Global Cell Identities.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Celllocklist_5 = string
/**
 * Operator list
 *
 * Comma separated list of MCC+MNC of operators, in priority order.
 * Resource "operator list mode" indicates how to process this list.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Operatorlist_6 = string
/**
 * Operator list mode
 *
 * Indicates whether resource "operator list" represents the allowed operator
 * list (white list), or, the preferred operator list.
 * 0=preferred
 * 1=allowed
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type Operatorlistmode_7 = boolean
/**
 * List of available PLMNs
 *
 * Allows server to see results of network scan (e.g. result of AT+COPS=? as per
 * 3GPP-TS_27.007)
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type ListofavailablePLMNs_8 = string
/**
 * Vendor specific extensions
 *
 * Link to a vendor specific object.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type Vendorspecificextensions_9 = string
/**
 * The objectURN for LWM2M Bearer Selection
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '13:1.1@1.1'
