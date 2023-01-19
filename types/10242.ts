/**
 * 3-Phase Power Meter
 *
 *
 * This Object provides the information to represent a generic 3-Phase Power
 * Meter.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10242.xml
 *
 * ID: 10242
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type n3_PhasePowerMeter_10242 = Readonly<
	Array<{
		'4': TensionR_4
		'5': CurrentR_5
		'14': TensionS_14
		'15': CurrentS_15
		'24': TensionT_24
		'25': CurrentT_25
		'0'?: Manufacturer_0
		'1'?: ModelNumber_1
		'2'?: SerialNumber_2
		'3'?: Description_3
		'6'?: ActivePowerR_6
		'7'?: ReactivePowerR_7
		'8'?: InductiveReactivePowerR_8
		'9'?: CapacitiveReactivePowerR_9
		'10'?: ApparentPowerR_10
		'11'?: PowerFactorR_11
		'12'?: THD_VR_12
		'13'?: THD_AR_13
		'16'?: ActivePowerS_16
		'17'?: ReactivePowerS_17
		'18'?: InductiveReactivePowerS_18
		'19'?: CapacitiveReactivePowerS_19
		'20'?: ApparentPowerS_20
		'21'?: PowerFactorS_21
		'22'?: THD_VS_22
		'23'?: THD_AS_23
		'26'?: ActivePowerT_26
		'27'?: ReactivePowerT_27
		'28'?: InductiveReactivePowerT_28
		'29'?: CapacitiveReactivePowerT_29
		'30'?: ApparentPowerT_30
		'31'?: PowerFactorT_31
		'32'?: THD_VT_32
		'33'?: THD_AT_33
		'34'?: n3_PhaseActivePower_34
		'35'?: n3_PhaseReactivePower_35
		'36'?: n3_PhaseInductiveReactivePower_36
		'37'?: n3_PhaseCapacitiveReactivePower_37
		'38'?: n3_PhaseApparentPower_38
		'39'?: n3_PhasePowerFactor_39
		'40'?: n3_Phasephicosine_40
		'41'?: ActiveEnergy_41
		'42'?: ReactiveEnergy_42
		'43'?: InductiveReactiveEnergy_43
		'44'?: CapacitiveReactiveEnergy_44
		'45'?: ApparentEnergy_45
		'46'?: TensionR_S_46
		'47'?: TensionS_T_47
		'48'?: TensionT_R_48
		'49'?: Frequency_49
		'50'?: NeutralCurrent_50
	}>
>
/**
 * Tension R
 *
 *
 * Voltage phase 1 (phase to neutral)
 *
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 * Units: V
 */
type TensionR_4 = number
/**
 * Current R
 *
 *
 * Current phase 1
 *
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 * Units: A
 */
type CurrentR_5 = number
/**
 * Tension S
 *
 *
 * Voltage phase 2 (phase to neutral)
 *
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: true
 * Units: V
 */
type TensionS_14 = number
/**
 * Current S
 *
 *
 * Current phase 2
 *
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: true
 * Units: A
 */
type CurrentS_15 = number
/**
 * Tension T
 *
 *
 * Voltage phase 3 (phase to neutral)
 *
 *
 * ID: 24
 * MultipleInstances: false
 * Mandatory: true
 * Units: V
 */
type TensionT_24 = number
/**
 * Current T
 *
 *
 * Current phase 3
 *
 *
 * ID: 25
 * MultipleInstances: false
 * Mandatory: true
 * Units: A
 */
type CurrentT_25 = number
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
 * Active Power R
 *
 *
 * Active Power phase 1
 *
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: kW
 */
type ActivePowerR_6 = number
/**
 * Reactive Power R
 *
 *
 * Reactive Power phase 1
 *
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type ReactivePowerR_7 = number
/**
 * Inductive Reactive Power R
 *
 *
 * Inductive Reactive Power phase 1
 *
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type InductiveReactivePowerR_8 = number
/**
 * Capacitive Reactive Power R
 *
 *
 * Capacitive Reactive Power phase 1
 *
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type CapacitiveReactivePowerR_9 = number
/**
 * Apparent Power R
 *
 *
 * Apparent Power phase 1
 *
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 * Units: kVA
 */
type ApparentPowerR_10 = number
/**
 * Power Factor R
 *
 *
 * Power Factor phase 1
 *
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type PowerFactorR_11 = number
/**
 * THD-V R
 *
 *
 * Total Harmonic Distortion phase 1 (Tension)
 *
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type THD_VR_12 = number
/**
 * THD-A R
 *
 *
 * Total Harmonig Distortion phase 1 (Current)
 *
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type THD_AR_13 = number
/**
 * Active Power S
 *
 *
 * Active Power phase 2
 *
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 * Units: kW
 */
type ActivePowerS_16 = number
/**
 * Reactive Power S
 *
 *
 * Reactive Power phase 2
 *
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type ReactivePowerS_17 = number
/**
 * Inductive Reactive Power S
 *
 *
 * Inductive Reactive Power phase 2
 *
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type InductiveReactivePowerS_18 = number
/**
 * Capacitive Reactive Power S
 *
 *
 * Capacitive Reactive Power phase 2
 *
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type CapacitiveReactivePowerS_19 = number
/**
 * Apparent Power S
 *
 *
 * Apparent Power phase 2
 *
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 * Units: kVA
 */
type ApparentPowerS_20 = number
/**
 * Power Factor S
 *
 *
 * Power Factor phase 2
 *
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 */
type PowerFactorS_21 = number
/**
 * THD-V S
 *
 *
 * Total Harmonic Distortion phase 2 (Tension)
 *
 *
 * ID: 22
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type THD_VS_22 = number
/**
 * THD-A S
 *
 *
 * Total Harmonic Distortion phase 2 (Current)
 *
 *
 * ID: 23
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type THD_AS_23 = number
/**
 * Active Power T
 *
 *
 * Active Power phase 3
 *
 *
 * ID: 26
 * MultipleInstances: false
 * Mandatory: false
 * Units: kW
 */
type ActivePowerT_26 = number
/**
 * Reactive Power T
 *
 *
 * Reactive Power phase 3
 *
 *
 * ID: 27
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type ReactivePowerT_27 = number
/**
 * Inductive Reactive Power T
 *
 *
 * Inductive Reactive Power phase 3
 *
 *
 * ID: 28
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type InductiveReactivePowerT_28 = number
/**
 * Capacitive Reactive Power T
 *
 *
 * Capacitive Reactive Power phase 3
 *
 *
 * ID: 29
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type CapacitiveReactivePowerT_29 = number
/**
 * Apparent Power T
 *
 *
 * Apparent Power phase 3
 *
 *
 * ID: 30
 * MultipleInstances: false
 * Mandatory: false
 * Units: kVA
 */
type ApparentPowerT_30 = number
/**
 * Power Factor T
 *
 *
 * Power Factor phase 3
 *
 *
 * ID: 31
 * MultipleInstances: false
 * Mandatory: false
 */
type PowerFactorT_31 = number
/**
 * THD-V T
 *
 *
 * Total Harmonic Distortion phase 3 (Tension)
 *
 *
 * ID: 32
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type THD_VT_32 = number
/**
 * THD-A T
 *
 *
 * Total Harmonic Distortion phase 3 (Current)
 *
 *
 * ID: 33
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type THD_AT_33 = number
/**
 * 3-Phase Active Power
 *
 *
 * 3-Phase Active Power
 *
 *
 * ID: 34
 * MultipleInstances: false
 * Mandatory: false
 * Units: kW
 */
type n3_PhaseActivePower_34 = number
/**
 * 3-Phase Reactive Power
 *
 *
 * 3-Phase Reactive Power
 *
 *
 * ID: 35
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type n3_PhaseReactivePower_35 = number
/**
 * 3-Phase Inductive Reactive Power
 *
 *
 * 3-Phase Inductive Reactive Power
 *
 *
 * ID: 36
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type n3_PhaseInductiveReactivePower_36 = number
/**
 * 3-Phase Capacitive Reactive Power
 *
 *
 * 3-Phase Capacitive Reactive Power
 *
 *
 * ID: 37
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvar
 */
type n3_PhaseCapacitiveReactivePower_37 = number
/**
 * 3-Phase Apparent Power
 *
 *
 * 3-Phase Apparent Power
 *
 *
 * ID: 38
 * MultipleInstances: false
 * Mandatory: false
 * Units: kVA
 */
type n3_PhaseApparentPower_38 = number
/**
 * 3-Phase Power Factor
 *
 *
 * 3-Phase Power Factor
 *
 *
 * ID: 39
 * MultipleInstances: false
 * Mandatory: false
 */
type n3_PhasePowerFactor_39 = number
/**
 * 3-Phase phi cosine
 *
 *
 * 3-Phase phi cosine
 *
 *
 * ID: 40
 * MultipleInstances: false
 * Mandatory: false
 */
type n3_Phasephicosine_40 = number
/**
 * Active Energy
 *
 *
 * Active Energy
 *
 *
 * ID: 41
 * MultipleInstances: false
 * Mandatory: false
 * Units: kWh
 */
type ActiveEnergy_41 = number
/**
 * Reactive Energy
 *
 *
 * Reactive Energy
 *
 *
 * ID: 42
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvarh
 */
type ReactiveEnergy_42 = number
/**
 * Inductive Reactive Energy
 *
 *
 * Inductive Reactive Energy
 *
 *
 * ID: 43
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvarh
 */
type InductiveReactiveEnergy_43 = number
/**
 * Capacitive Reactive Energy
 *
 *
 * Capacitive Reactive Energy
 *
 *
 * ID: 44
 * MultipleInstances: false
 * Mandatory: false
 * Units: kvarh
 */
type CapacitiveReactiveEnergy_44 = number
/**
 * Apparent Energy
 *
 *
 * Apparent Energy
 *
 *
 * ID: 45
 * MultipleInstances: false
 * Mandatory: false
 * Units: kVAh
 */
type ApparentEnergy_45 = number
/**
 * Tension R-S
 *
 *
 * Voltage phase 1 to phase 2
 *
 *
 * ID: 46
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type TensionR_S_46 = number
/**
 * Tension S-T
 *
 *
 * Voltage phase 2 to phase 3
 *
 *
 * ID: 47
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type TensionS_T_47 = number
/**
 * Tension T-R
 *
 *
 * Voltage phase 3 to phase 1
 *
 *
 * ID: 48
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type TensionT_R_48 = number
/**
 * Frequency
 *
 *
 * Frequency
 *
 *
 * ID: 49
 * MultipleInstances: false
 * Mandatory: false
 * Units: Hz
 */
type Frequency_49 = number
/**
 * Neutral Current
 *
 *
 * Neutral Current
 *
 *
 * ID: 50
 * MultipleInstances: false
 * Mandatory: false
 * Units: A
 */
type NeutralCurrent_50 = number
/**
 * The objectURN for 3-Phase Power Meter
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10242'
