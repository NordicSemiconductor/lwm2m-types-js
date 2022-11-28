/**
 * ECID-Signal Measurement Information
 *
 * This LWM2M Object provides ECID signal measurements of a device.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10256.xml
 *
 * ID: 10256
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type ECID_SignalMeasurementInformation_10256 = Readonly<
	Array<{
		'0': physCellId_0
		'2': arfcnEUTRA_2
		'3': rsrp_Result_3
		'1'?: ECGI_1
		'4'?: rsrq_Result_4
		'5'?: ue_RxTxTimeDiff_5
	}>
>
/**
 * physCellId
 *
 * This field specifies the physical cell identity of the measured cell.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type physCellId_0 = number
/**
 * arfcnEUTRA
 *
 * This field specifies the ARFCN of the measured E-UTRA carrier frequency.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type arfcnEUTRA_2 = number
/**
 * rsrp-Result
 *
 * This field specifies the reference signal received power (RSRP) measurement.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type rsrp_Result_3 = number
/**
 * ECGI
 *
 * This field specifies cell global ID of the measured cell. The target device
 * shall provide this field if it was able to determine the ECGI of the measured
 * cell at the time of measurement.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 * Units:
         
 */
type ECGI_1 = number
/**
 * rsrq-Result
 *
 * This field specifies the reference signal received quality (RSRQ)
 * measurement.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units:
         
 */
type rsrq_Result_4 = number
/**
 * ue-RxTxTimeDiff
 *
 * This field specifies the UE Rx-Tx time difference measurement.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units:
         
 */
type ue_RxTxTimeDiff_5 = number
/**
 * The objectURN for ECID-Signal Measurement Information
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10256'
