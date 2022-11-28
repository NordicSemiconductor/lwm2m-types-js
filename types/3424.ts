/**
 * Water meter
 *
 * The uCIFI water meter measures water volume that was distributed through a
 * water meter, in pulse count as well as in m3. It also detects anomalies in
 * the water meter.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3424.xml
 *
 * ID: 3424
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Watermeter_3424 = Readonly<
	Array<{
		'1': Cumulatedwatervolume_1
		'10'?: Leakdetected_10
		'11'?: Backflowdetected_11
		'12'?: Blockedmeter_12
		'13'?: Frauddetected_13
		'3'?: Typeofmeter_3
		'4'?: Cumulatedpulsevalue_4
		'6'?: Pulseratio_6
		'7'?: Minimumflowrate_7
		'8'?: Maximumflowrate_8
		'9'?: Leaksuspected_9
	}>
>
/**
 * Cumulated water volume
 *
 * Number of cubic meters of water distributed through the meter since last
 * reset.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: m3
 */
type Cumulatedwatervolume_1 = number
/**
 * Leak detected
 *
 * Set to True if leak is detected.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type Leakdetected_10 = boolean
/**
 * Back flow detected
 *
 * Set to True if water back flow is detected.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type Backflowdetected_11 = boolean
/**
 * Blocked meter
 *
 * Set to True if water meter is blocked.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type Blockedmeter_12 = boolean
/**
 * Fraud detected
 *
 * Set to True if fraud is detected.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type Frauddetected_13 = boolean
/**
 * Type of meter
 *
 * Type of water meter.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Typeofmeter_3 = string
/**
 * Cumulated pulse value
 *
 * Cumulated number of pulses detected on the meter.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type Cumulatedpulsevalue_4 = number
/**
 * Pulse ratio
 *
 * Ratio to calculate water volume from pulse value.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Pulseratio_6 = number
/**
 * Minimum flow rate
 *
 * Minimum flow rate since last metering value.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: m3/s
 */
type Minimumflowrate_7 = number
/**
 * Maximum flow rate
 *
 * Maximum flow rate since last metering value.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 * Units: m3/s
 */
type Maximumflowrate_8 = number
/**
 * Leak suspected
 *
 * Set to True if water leak is suspected.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type Leaksuspected_9 = boolean
/**
 * The objectURN for Water meter
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3424'
