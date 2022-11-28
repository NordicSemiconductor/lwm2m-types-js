/**
 * Neighbour Cell Report
 *
 * This LWM2M Object provides the neighbour cell report. The CrowdBox
 * Measurements Object and the Connected UE Report Object have both Objlnk
 * Resources pointing to this Object.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10247.xml
 *
 * ID: 10247
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type NeighbourCellReport_10247 = Readonly<
	Array<{
		'0': NeighbourPCI_0
		'2': NeighbourCellRank_2
		'3': NeighbourCellRSRP_3
		'4': NeighbourCellRSRQ_4
		'1'?: NeighbourCellID_1
	}>
>
/**
 * Neighbour PCI
 *
 * Physical Cell ID of neighbouring LTE cell, as defined in TS 36.211
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type NeighbourPCI_0 = number
/**
 * Neighbour Cell Rank
 *
 * Current neighbour cell rank. Neighbour cells should be ordered (ranked) by
 * the CrowdBox according to neighbour cell RSRP, with a higher RSRP
 * corresponding to a lower index. Hence the neighbouring cell with the highest
 * RSRP should be neighbour cell 0, the second neighbour cell 1, and so on.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type NeighbourCellRank_2 = number
/**
 * Neighbour Cell RSRP
 *
 * Neighbour cell RSRP, as defined in TS 36.133, Section 9.1.4. Range: RSRP_00;
 * RSRP_01 .. RSRP_97
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type NeighbourCellRSRP_3 = number
/**
 * Neighbour Cell RSRQ
 *
 * Neighbour cell RSRQ, as defined in TS 36.133, Section 9.1.7. Range: RSRQ_-30;
 * RSRQ_-29 .. RSRQ_46
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type NeighbourCellRSRQ_4 = number
/**
 * Neighbour Cell ID
 *
 * Neighbour cell ID as specified by the cellIdentity field broadcast in SIB1 of
 * the neighbour cell (see TS 36.331).
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type NeighbourCellID_1 = number
/**
 * The objectURN for Neighbour Cell Report
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10247'
