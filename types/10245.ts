/**
 * Relay Management
 *
 * This LWM2M Object provides a range of eNB related measurements and parameters
 * of which several are changeable. Furthermore, it includes Resources to
 * enable/disable the eNB.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10245.xml
 *
 * ID: 10245
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type RelayManagement_10245 = Readonly<{
	'0': eNBAvailability_0
	'1': GPSStatus_1
	'11': eNBMaximumPower_11
	'12': BackhaulPrimaryq_OffsetFreq_12
	'13': BackhaulSecondaryq_OffsetFreq_13
	'14': NeighbourCrowdBoxEARFCN_14
	'15': NeighbourCrowdBoxq_OffsetFreq_15
	'16': ServingMacroeNBcellIndividualOffset_16
	'3': eNBEARFCN_3
	'4': eNBBandwidth_4
	'5': BackhaulPrimaryEARFCN_5
	'6': BackhaulSecondaryEARFCN_6
	'7': CumulativeMeasurementWindow_7
	'8': eNBECI_8
	'9': eNBStatus_9
	'2'?: Orientation_2
}>
/**
 * eNB Availability
 *
 * This field indicates to the CCC whether or not the eNB of the CrowdBox is
 * available for activation: AVAILABLE = TRUE; UNAVAILABLE = FALSE This is set
 * by the CrowdBox itself using an algorithm specific to the use case and based
 * on parameters known to the CrowdBox which may not necessarily be signalled to
 * the network. In the absence of a more specific algorithm, this parameter
 * should be set to AVAILABLE, unless a fault is detected which would prevent
 * activation of the eNB, in which case it should be set to UNAVAILABLE.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type eNBAvailability_0 = boolean
/**
 * GPS Status
 *
 * States whether the CrowdBox GPS receiver is synchronised to GPS time or not:
 * UNSYCHRONISED = FALSE; SYNCHRONISED = TRUE If more than one GPS receiver is
 * used by the CrowdBox, then SYNCHRONISED should be reported only if all
 * receivers are synchronised.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type GPSStatus_1 = boolean
/**
 * eNB Maximum Power
 *
 * Maximum power for the eNB measured as the sum of input powers to all antenna
 * connectors. The maximum power per antenna port is equal to the maximum eNB
 * power divided by the number of antenna ports. If the requested power is above
 * or below the maximum or minimum power levels of the eNB, then the power level
 * should be set to the maximum or minimum respectively. The CrowdBox shall only
 * apply a change of this resource upon execution of the "Enable eNB" command.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: true
 * Units: dBm
 */
type eNBMaximumPower_11 = number
/**
 * Backhaul Primary q-OffsetFreq
 *
 * q-OffsetFreq parameter for the backhaul primary EARFCN in SIB5 of the
 * CrowdBox eNB BCCH. See TS 36.331 for details. Range: dB-24; dB-22 .. dB24 The
 * CrowdBox shall only apply a change of this resource upon execution of the
 * "Enable eNB" command.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: true
 * Units: dB
 */
type BackhaulPrimaryq_OffsetFreq_12 = number
/**
 * Backhaul Secondary q-OffsetFreq
 *
 * q-OffsetFreq parameter for the backhaul secondary EARFCN in SIB5 of the
 * CrowdBox eNB BCCH. See TS 36.331 for details Range: dB-24; dB-22 .. dB24 The
 * CrowdBox shall only apply a change of this resource upon execution of the
 * "Enable eNB" command.
 *
 * ID: 13
 * MultipleInstances: true
 * Mandatory: true
 * Units: dB
 */
type BackhaulSecondaryq_OffsetFreq_13 = number
/**
 * Neighbour CrowdBox EARFCN
 *
 * EARFCN of a neighbour CrowdBox. Each instance of this resource relates to the
 * same instance of resource ID 15.
 *
 * ID: 14
 * MultipleInstances: true
 * Mandatory: true
 */
type NeighbourCrowdBoxEARFCN_14 = number
/**
 * Neighbour CrowdBox q-OffsetFreq
 *
 * q-OffsetFreq parameter of the Neighbour CrowdBox EARFCN in SIB5 of the
 * Neighbour CrowdBox eNB BCCH. See TS 36.331 for details Range: dB-24; dB-22 ..
 * dB24 Each instance of this resource relates to the same instance of resource
 * ID 14. The CrowdBox shall only apply a change of this resource upon execution
 * of the "Enable eNB" command.
 *
 * ID: 15
 * MultipleInstances: true
 * Mandatory: true
 * Units: dB
 */
type NeighbourCrowdBoxq_OffsetFreq_15 = number
/**
 * Serving Macro eNB cellIndividualOffset
 *
 * Specifies the value of the cellIndividualOffset parameter applicable to the
 * CrowdBox macro serving cell that is to be signalled to connected UEs in their
 * measurement configuration information . See TS 36.331 for details. The
 * CrowdBox shall only apply a change of this resource upon execution of the
 * "Enable eNB" command.
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: true
 * Units: dB
 */
type ServingMacroeNBcellIndividualOffset_16 = number
/**
 * eNB EARFCN
 *
 * EARFCN currently used by the eNB. Highest valid value in 3GPP is currently
 * 46589. If the requested EARFCN is not supported by the eNB, the response
 * should be "Bad Request". The CrowdBox shall only apply a change of this
 * resource upon execution of the "Enable eNB" command.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type eNBEARFCN_3 = number
/**
 * eNB Bandwidth
 *
 * Bandwidth of the currently used eNB carrier. If the requested bandwidth is
 * not supported by the eNB, the response should be "Bad Request". The CrowdBox
 * shall only apply a change of this resource upon execution of the "Enable eNB"
 * command.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type eNBBandwidth_4 = number
/**
 * Backhaul Primary EARFCN
 *
 * EARFCN of primary cell used for the backhaul. If the requested EARFCN is not
 * supported by the CrowdBox UE, the response should be "Bad Request". The
 * CrowdBox shall only apply a change of this resource upon execution of the
 * "Enable eNB" command.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type BackhaulPrimaryEARFCN_5 = number
/**
 * Backhaul Secondary EARFCN
 *
 * EARFCN of any secondary cells used for the backhaul, in the event that
 * carrier aggregation is being used. If the requested EARFCN is not supported
 * by the CrowdBox UE, the response should be "Bad Request". The CrowdBox shall
 * only apply a change of this resource upon execution of the "Enable eNB"
 * command.
 *
 * ID: 6
 * MultipleInstances: true
 * Mandatory: true
 */
type BackhaulSecondaryEARFCN_6 = number
/**
 * Cumulative Measurement Window
 *
 * The current measurement interval over which cumulative statistics are
 * collected for the following resources: Cumulative Number of Unique Users,
 * Cumulative Downlink Throughput per Connected User, Cumulative Uplink
 * Throughput per Connected User. Note that this measurement period is a sliding
 * window rather than a granularity period. Measurements should never be reset,
 * but rather old measurements should be removed from the cumulative total as
 * they fall outside of the window. A value of 0 shall be interpreted as meaning
 * only the current value should be reported. A value of 65535 shall be
 * interpreted as an infinite window size (i.e. old measurements are never
 * discarded).
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type CumulativeMeasurementWindow_7 = number
/**
 * eNB ECI
 *
 * A 28 bit E-UTRAN Cell Identifier (ECI)
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 */
type eNBECI_8 = number
/**
 * eNB Status
 *
 * This resource indicates the current status of the eNB and can be used by the
 * CCC to change the state from enabled to disabled. TRUE = eNB enabled FALSE =
 * eNB disabled
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: true
 */
type eNBStatus_9 = boolean
/**
 * Orientation
 *
 * Orientation of CrowdBox with respect to magnetic north. The reference
 * orientation of the CrowdBox shall be the pointing direction of the eNB
 * antenna(s) or, in the case of an omni-directional CrowdBox antenna, as
 * defined in the accompanying product documentation.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: deg
 */
type Orientation_2 = number
/**
 * The objectURN for Relay Management
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10245'
