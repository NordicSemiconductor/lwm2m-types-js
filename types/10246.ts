/**
 * CrowdBox Measurements
 *
 * This LWM2M Object provides CrowdBox-related measurements such as serving cell
 * parameters, backhaul timing advance, and neighbour cell reports.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10246.xml
 *
 * ID: 10246
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type CrowdBoxMeasurements_10246 = Readonly<{
	'0': ServingCellID_0
	'1': ServingCellRSRP_1
	'2': ServingCellRSRQ_2
	'3': ServingCellSINR_3
	'5': NeighbourCellReport_5
	'4'?: CumulativeBackhaulTimingAdvance_4
}>
/**
 * Serving Cell ID
 *
 * Serving cell ID as specified by the cellIdentity field broadcast in SIB1 of
 * the serving cell (see TS 36.331).
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type ServingCellID_0 = number
/**
 * Serving Cell RSRP
 *
 * Serving cell RSRP, as defined in TS 36.133, Section 9.1.4. Range: RSRP_00;
 * RSRP_01 .. RSRP_97
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type ServingCellRSRP_1 = number
/**
 * Serving Cell RSRQ
 *
 * Serving cell RSRQ, as defined in TS 36.133, Section 9.1.7. Range: RSRQ_-30;
 * RSRQ_-29 .. RSRQ_46
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type ServingCellRSRQ_2 = number
/**
 * Serving Cell SINR
 *
 * SINR of serving cell as estimated by the CrowdBox. Note that this is a
 * proprietary measurement dependent on the UE chipset manufacturer. The UE
 * chipset used should be stated in the accompanying product documentation.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 * Units: dB
 */
type ServingCellSINR_3 = number
/**
 * Neighbour Cell Report
 *
 * A link to the "Neighbour Cell Report" object for each neighbour cell of the
 * CrowdBox.
 *
 * ID: 5
 * MultipleInstances: true
 * Mandatory: true
 */
type NeighbourCellReport_5 = string
/**
 * Cumulative Backhaul Timing Advance
 *
 * The cumulative timing advance signalled by the current serving cell to the
 * CrowdBox. This is the sum of the initial timing advance signalled in the MAC
 * payload of the Random Access Response (11 bits, 0 .. 1282) and subsequent
 * adjustments signalled in the MAC PDU of DL-SCH transmissions (6 bits, -31 ..
 * 32). See TS 36.321 for details.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type CumulativeBackhaulTimingAdvance_4 = number
/**
 * The objectURN for CrowdBox Measurements
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10246'
