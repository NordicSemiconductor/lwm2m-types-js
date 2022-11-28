/**
 * ServingCellMeasurement
 *
 * Serving Cell Measurement
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3370.xml
 *
 * ID: 3370
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type ServingCellMeasurement_3370 = Readonly<{
	'6032': dlEarfcn_6032
	'6034': pci_6034
	'6035': rsrp_6035
	'6036': rsrq_6036
	'6037': sysFrameNumber_6037
	'6038': subFrameNumber_6038
}>
/**
 * dlEarfcn
 *
 * EARFCN - frequency
 *
 * ID: 6032
 * MultipleInstances: false
 * Mandatory: true
 */
type dlEarfcn_6032 = number
/**
 * pci
 *
 * PCI.
 *
 * ID: 6034
 * MultipleInstances: false
 * Mandatory: true
 */
type pci_6034 = number
/**
 * rsrp
 *
 * RSRP Value in dBm (-180..-30)
 *
 * ID: 6035
 * MultipleInstances: false
 * Mandatory: true
 */
type rsrp_6035 = number
/**
 * rsrq
 *
 * RSRQ Value in dB (-30..10)
 *
 * ID: 6036
 * MultipleInstances: false
 * Mandatory: true
 */
type rsrq_6036 = number
/**
 * sysFrameNumber
 *
 * System Frame Number.
 *
 * ID: 6037
 * MultipleInstances: false
 * Mandatory: true
 */
type sysFrameNumber_6037 = number
/**
 * subFrameNumber
 *
 * Sub Frame Number.
 *
 * ID: 6038
 * MultipleInstances: false
 * Mandatory: true
 */
type subFrameNumber_6038 = number
/**
 * The objectURN for ServingCellMeasurement
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3370'
