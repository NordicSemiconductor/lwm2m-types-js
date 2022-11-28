/**
 * Message3Report
 *
 * RACH message 3 report information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3377.xml
 *
 * ID: 3377
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type Message3Report_3377 = Readonly<{
	'0': tpc_0
	'1': resourceIndicatorValue_1
	'2': cqi_2
	'3': uplinkDelay_3
	'4': hoppingEnabled_4
	'5': numRb_5
	'6': transportBlockSizeIndex_6
	'7': ModulationType_7
	'8': redundancyVersionIndex_8
}>
/**
 * tpc
 *
 * TPC
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type tpc_0 = number
/**
 * resourceIndicatorValue
 *
 * Resource Indicator Value
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type resourceIndicatorValue_1 = number
/**
 * cqi
 *
 * CQI
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type cqi_2 = number
/**
 * uplinkDelay
 *
 * 0=no delay, 1=delay
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type uplinkDelay_3 = boolean
/**
 * hoppingEnabled
 *
 * 0=Disabled, 1=Enabled
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type hoppingEnabled_4 = boolean
/**
 * numRb
 *
 * num RB
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type numRb_5 = number
/**
 * transportBlockSizeIndex
 *
 * Transport Block Size Index
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type transportBlockSizeIndex_6 = number
/**
 * ModulationType
 *
 * Modulation Type
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type ModulationType_7 = number
/**
 * redundancyVersionIndex
 *
 * Redundancy Version Index
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 */
type redundancyVersionIndex_8 = number
/**
 * The objectURN for Message3Report
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3377'
