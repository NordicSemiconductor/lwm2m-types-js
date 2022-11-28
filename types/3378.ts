/**
 * PbchDecodingResults
 *
 * Serving cell PBCH decoding information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3378.xml
 *
 * ID: 3378
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type PbchDecodingResults_3378 = Readonly<{
	'0': servingCellID_0
	'1': crcResult_1
	'6037': sysFrameNumber_6037
}>
/**
 * servingCellID
 *
 * Serving Cell ID
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type servingCellID_0 = number
/**
 * crcResult
 *
 * fail=0
 * pass=1
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type crcResult_1 = boolean
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
 * The objectURN for PbchDecodingResults
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3378'
