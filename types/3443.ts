/**
 * eSIM IoT
 *
 * The interface between eIM and IPA as described in GSMA SGP.32.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3443.xml
 *
 * ID: 3443
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type eSIMIoT_3443 = Readonly<{
	'0': State_0
	'1': EID_1
	'2': eIMmessage_2
	'3': IPAmessage_3
}>
/**
 * State
 *
 * Status
 * 0 ready to receive eIM message
 * 1 not able to receive eIM message
 * Note: In case value is >0 then writing to resource 2 shall not be possible
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type State_0 = number
/**
 * EID
 *
 * EID of the eUICC that is target of the object
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type EID_1 = string
/**
 * eIM message
 *
 * The message from eIM to IPA. The message shall be in the ASN.1 DER format
 * defined in SGP.32 Section 6.3.1
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type eIMmessage_2 = string
/**
 * IPA message
 *
 * The message from IPA to eIM. The message shall be in the ASN.1 DER format
 * defined in GSMA SGP.32 section 6.3.1
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type IPAmessage_3 = string
/**
 * The objectURN for eSIM IoT
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3443'
