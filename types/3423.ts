/**
 * Gas meter
 *
 * The uCIFI gas meter measures the volume of gas that was distributed through
 * the gas meter, in pulse count and/or in m3. It also detects anomalies in the
 * gas meter.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3423.xml
 *
 * ID: 3423
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Gasmeter_3423 = Readonly<
	Array<{
		'1': Cumulatedgasvolume_1
		'3'?: Typeofmeter_3
		'4'?: Cumulatedpulsevalue_4
		'6'?: Pulseratio_6
		'7'?: Minimumflowrate_7
		'8'?: Maximumflowrate_8
		'9'?: Leaksuspected_9
		'10'?: Leakdetected_10
		'11'?: Hightemperature_11
	}>
>
/**
 * Cumulated gas volume
 *
 * Number of cubic meters of gas distributed through the meter since last reset.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: m3
 */
type Cumulatedgasvolume_1 = number
/**
 * Type of meter
 *
 * Type of gas meter.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Typeofmeter_3 = string
/**
 * Cumulated pulse value
 *
 * Cumulated number of pulses detected on the gas meter.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type Cumulatedpulsevalue_4 = number
/**
 * Pulse ratio
 *
 * Ratio to calculate gas volume from pulse value.
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
 * Set to True if gas leak is suspected.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type Leaksuspected_9 = boolean
/**
 * Leak detected
 *
 * Set to True if gas leak is detected.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type Leakdetected_10 = boolean
/**
 * High temperature
 *
 * Set to True if high temperature is detected around the gas meter.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type Hightemperature_11 = boolean
/**
 * The objectURN for Gas meter
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3423'
