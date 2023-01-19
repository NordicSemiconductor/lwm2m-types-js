/**
 * Single-Phase Power Meter
 *
 *
 * This Object provides the information to represent a generic Single-Phase
 * Power Meter.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10243.xml
 *
 * ID: 10243
 * LWM2MVersion: 1.0
 * ObjectVersion: 2.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Single_PhasePowerMeter_10243 = Readonly<
	Array<{
		'4': Tension_4
		'5': Current_5
		'0'?: Manufacturer_0
		'1'?: ModelNumber_1
		'2'?: SerialNumber_2
		'3'?: Description_3
		'6'?: ActivePower_6
		'7'?: ReactivePower_7
		'8'?: InductiveReactivePower_8
		'9'?: CapacitiveReactivePower_9
		'10'?: ApparentPower_10
		'11'?: PowerFactor_11
		'12'?: THD_V_12
		'13'?: THD_A_13
		'14'?: ActiveEnergy_14
		'15'?: ReactiveEnergy_15
		'16'?: ApparentEnergy_16
		'17'?: Frequency_17
	}>
>
/**
 * Tension
 *
 *
 * Voltage
 *
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 * Units: V
 */
type Tension_4 = number
/**
 * Current
 *
 *
 * Current
 *
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 * Units: A
 */
type Current_5 = number
/**
 * Manufacturer
 *
 *
 * Human readable manufacturer name
 *
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: false
 */
type Manufacturer_0 = string
/**
 * Model Number
 *
 *
 * A model identifier (manufacturer specified string)
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type ModelNumber_1 = string
/**
 * Serial Number
 *
 *
 * Serial number of the meter
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type SerialNumber_2 = string
/**
 * Description
 *
 *
 * Description of the meter
 *
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Description_3 = string
/**
 * Active Power
 *
 *
 * Active Power
 *
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: kW
 */
type ActivePower_6 = number
/**
 * Reactive Power
 *
 *
 * Reactive Power
 *
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type ReactivePower_7 = number
/**
 * Inductive Reactive Power
 *
 *
 * Inductive Reactive Power
 *
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type InductiveReactivePower_8 = number
/**
 * Capacitive Reactive Power
 *
 *
 * Capacitive Reactive Power
 *
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type CapacitiveReactivePower_9 = number
/**
 * Apparent Power
 *
 *
 * Apparent Power
 *
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 * Units: kVA
 */
type ApparentPower_10 = number
/**
 * Power Factor
 *
 *
 * Power Factor
 *
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type PowerFactor_11 = number
/**
 * THD-V
 *
 *
 * Total Harmonic Distortion (Tension)
 *
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type THD_V_12 = number
/**
 * THD-A
 *
 *
 * Total Harmonic Distortion (Current)
 *
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type THD_A_13 = number
/**
 * Active Energy
 *
 *
 * Active Energy
 *
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 * Units: kWh
 */
type ActiveEnergy_14 = number
/**
 * Reactive Energy
 *
 *
 * Reactive Energy
 *
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvarh
 */
type ReactiveEnergy_15 = number
/**
 * Apparent Energy
 *
 *
 * Apparent Energy
 *
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 * Units: kVAh
 */
type ApparentEnergy_16 = number
/**
 * Frequency
 *
 *
 * Frequency
 *
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 * Units: Hz
 */
type Frequency_17 = number
/**
 * The objectURN for Single-Phase Power Meter
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10243:2.0'
