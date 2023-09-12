/**
 * Connected UE Report
 *
 * This LWM2M Object provides a range of information related to the connected
 * UEs.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10249.xml
 *
 * ID: 10249
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type ConnectedUEReport_10249 = Readonly<
	Array<{
		'0': ConnectedUserMMEC_0
		'1': ConnectedUserM_TMSI_1
		'2': ServingCell_CrowdBox_eNBRSRP_2
		'3': ServingCell_CrowdBox_eNBRSRQ_3
		'5': LastdownlinkCQIreportperConnectedUser_5
		'6': CumulativeDownlinkThroughputperConnectedUser_6
		'7': CumulativeUplinkThroughputperConnectedUser_7
		'8': NeighbourCellReport_8
		'4'?: CumulativeTimingAdvanceperConnectedUser_4
	}>
>
/**
 * Connected User MMEC
 *
 * MMEC signalled by the UE to the eNB in the RRCConnectionRequest message (see
 * TS 36.331).
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type ConnectedUserMMEC_0 = number
/**
 * Connected User M-TMSI
 *
 * M-TMSI signalled by the UE to the eNB in the RRCConnectionRequest message
 * (see TS 36.331).
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type ConnectedUserM_TMSI_1 = number
/**
 * Serving Cell (CrowdBox) eNB RSRP
 *
 * The RSRP of the CrowdBox eNB, as defined in TS 36.133, Section 9.1.4. Range:
 * RSRP_00; RSRP_01 .. RSRP_97
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type ServingCell_CrowdBox_eNBRSRP_2 = number
/**
 * Serving Cell (CrowdBox) eNB RSRQ
 *
 * The RSRQ of the CrowdBox eNB, as defined in TS 36.133, Section 9.1.7. Range:
 * RSRQ_-30; RSRQ_-29 .. RSRQ_46
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type ServingCell_CrowdBox_eNBRSRQ_3 = number
/**
 * Last downlink CQI report per Connected User
 *
 * The last downlink wideband CQI reported by a connected user the eNB. The CQI
 * format is defined in Table 7.2.3-1 of TS 36.213.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type LastdownlinkCQIreportperConnectedUser_5 = number
/**
 * Cumulative Downlink Throughput per Connected User
 *
 * The total number of MAC bytes sent to the connected user over the immediately
 * preceding period specified by the "Cumulative Measurement Window" field. A 32
 * bit value with range 0..2^32-1.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 * Units: B
 */
type CumulativeDownlinkThroughputperConnectedUser_6 = number
/**
 * Cumulative Uplink Throughput per Connected User
 *
 * The total number of MAC bytes received from the connected user over the
 * immediately preceding period specified by the "Cumulative Measurement Window"
 * field. A 32 bit value with range 0..2^32-1.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 * Units: B
 */
type CumulativeUplinkThroughputperConnectedUser_7 = number
/**
 * Neighbour Cell Report
 *
 * A link to the "Neighbour Cell Report" object for each neighbour cell reported
 * to the CrowdBox by the connected UE
 *
 * ID: 8
 * MultipleInstances: true
 * Mandatory: true
 */
type NeighbourCellReport_8 = Array<string>
/**
 * Cumulative Timing Advance per Connected User
 *
 * The cumulative timing advance signalled by the eNB to each currently
 * connected UE. This is the sum of the initial timing advance signalled in the
 * MAC payload of the Random Access Response (11 bits, 0 .. 1282) and subsequent
 * adjustments signalled in the MAC PDU of DL-SCH transmissions (6 bits, -31 ..
 * 32). See TS 36.321 for details.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type CumulativeTimingAdvanceperConnectedUser_4 = number
/**
 * The objectURN for Connected UE Report
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10249'
