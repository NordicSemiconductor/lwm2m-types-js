/**
 * Single-phase electrical meter
 *
 * The uCIFI single-phase electrical meter measures the electrical consumption
 * of loads on one electrical line, such as electrical cabinets in city
 * infrastructures, street lighting networks, homes and buildings.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3421.xml
 *
 * ID: 3421
 * LWM2MVersion: 1.0
 * ObjectVersion: 2.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Single_phaseelectricalmeter_3421 = Readonly<
	Array<{
		'1': Voltage_1
		'6': Current_6
		'13': InstantaneousPowerFactor_13
		'16': Activepower_QI_QIV_16
		'25': Activeenergyimport_A_Un_25
		'2'?: Lowvoltagethreshold_2
		'3'?: Lowvoltage_3
		'4'?: Highvoltagethreshold_4
		'5'?: Highvoltage_5
		'7'?: Lowcurrentthreshold_7
		'8'?: Lowcurrent_8
		'9'?: Highcurrentthreshold_9
		'10'?: Highcurrent_10
		'11'?: Frequency_11
		'12'?: AngleofI_U_12
		'14'?: Lowpowerfactorthreshold_14
		'15'?: Lowpowerfactor_15
		'17'?: Activepower_QII_QIII_17
		'18'?: Reactivepower_QI_QII_18
		'19'?: Reactivepower_QIII_QIV_19
		'20'?: InstantaneousApparentPowerimport_VA_20
		'21'?: InstantaneousApparentPowerexport_VA_21
		'22'?: InstantaneousActivePower_A_A_22
		'23'?: InstantaneousNetActivePower_A_A_23
		'24'?: MeasurementperiodofInstantaneousvalue_24
		'26'?: Activeenergyexport_A_Un_26
		'27'?: Activeenergy_A_A_Combinedtotal_27
		'28'?: Activeenergy_A_A_Combinedtotal_28
		'29'?: Reactiveenergyimport_R_Un_29
		'30'?: Reactiveenergyexport_R_Un_30
		'31'?: ReactiveenergyQI_Ri_Un_31
		'32'?: ReactiveenergyQII_Rc_Un_32
		'33'?: ReactiveenergyQIII_Ri_Un_33
		'34'?: ReactiveenergyQIV_Rc_Un_34
		'35'?: ApparentenergyimportUn_35
		'36'?: ApparentenergyexportUn_36
		'37'?: Numberofpowerfailures_37
		'38'?: Numberoflongpowerfailures_38
		'39'?: Timethresholdforlongpowerfailure_39
		'40'?: Durationoflastlongpowerfailure_40
		'41'?: Thresholdforvoltagesag_41
		'42'?: Timethresholdforvoltagesag_42
		'43'?: Numberofvoltagesags_43
		'44'?: Durationoflastvoltagesag_44
		'45'?: Magnitudeoflastvoltagesag_45
		'46'?: Thresholdforvoltageswell_46
		'47'?: Timethresholdforvoltageswell_47
		'48'?: Numberofvoltageswells_48
		'49'?: Durationoflastvoltageswell_49
		'50'?: Magnitudeoflastvoltageswell_50
		'51'?: Thresholdformissingvoltage_voltagecut_51
		'52'?: Timethresholdforvoltagecut_52
		'53'?: Voltagecut_53
		'54'?: CTNumeratorParameter_54
		'55'?: CTDenominatorParameter_55
		'56'?: VTNumeratorParameter_56
		'57'?: VTDenominatorParameter_57
		'58'?: Unexpectedload_58
		'5518'?: Timestamp_5518
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Voltage
 *
 * Instantaneous voltage measured between line and neutral.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: V
 */
type Voltage_1 = number
/**
 * Current
 *
 * Instantaneous current measured.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 * Units: A
 */
type Current_6 = number
/**
 * Instantaneous Power Factor
 *
 * Instantaneous power factor overall.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: true
 */
type InstantaneousPowerFactor_13 = number
/**
 * Active power+ (QI+QIV)
 *
 * Active power import
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: true
 * Units: W
 */
type Activepower_QI_QIV_16 = number
/**
 * Active energy import (+A) Un
 *
 * Active energy import (unified rate).
 *
 * ID: 25
 * MultipleInstances: false
 * Mandatory: true
 * Units: Wh
 */
type Activeenergyimport_A_Un_25 = number
/**
 * Low voltage threshold
 *
 * Set to True when voltage is below low voltage threshold.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Lowvoltagethreshold_2 = number
/**
 * Low voltage
 *
 * Set to True when voltage is below low voltage threshold.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Lowvoltage_3 = boolean
/**
 * High voltage threshold
 *
 * Threshold above which the high voltage resource is set to True.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Highvoltagethreshold_4 = number
/**
 * High voltage
 *
 * Set to True when voltage is above high voltage threshold.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Highvoltage_5 = boolean
/**
 * Low current threshold
 *
 * Threshold below which the low current resource is set to True.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: A
 */
type Lowcurrentthreshold_7 = number
/**
 * Low current
 *
 * Set to True when current is below low current threshold.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type Lowcurrent_8 = boolean
/**
 * High current threshold
 *
 * Threshold above which the high current resource is set to True.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Highcurrentthreshold_9 = number
/**
 * High current
 *
 * Set to True when current is above high current threshold.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type Highcurrent_10 = boolean
/**
 * Frequency
 *
 * Instantaneous frequency measured.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 * Units: Hz
 */
type Frequency_11 = number
/**
 * Angle of I-U
 *
 * Instantaneous phase angle measured.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 * Units: deg
 */
type AngleofI_U_12 = number
/**
 * Low power factor threshold
 *
 * Threshold below which the low power factor resource is set to True.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type Lowpowerfactorthreshold_14 = number
/**
 * Low power factor
 *
 * Set to True when power factor is below low power factor threshold.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type Lowpowerfactor_15 = boolean
/**
 * Active power- (QII+QIII)
 *
 * Active power export.
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type Activepower_QII_QIII_17 = number
/**
 * Reactive power+ (QI+QII)
 *
 * Reactive power import.
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 * Units: var
 */
type Reactivepower_QI_QII_18 = number
/**
 * Reactive power- (QIII+QIV)
 *
 * Reactive power export
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: false
 * Units: var
 */
type Reactivepower_QIII_QIV_19 = number
/**
 * Instantaneous Apparent Power import (+VA)
 *
 * Instantaneous apparent power import.
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 * Units: VA
 */
type InstantaneousApparentPowerimport_VA_20 = number
/**
 * Instantaneous Apparent Power export (-VA)
 *
 * Instantaneous apparent power export.
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 * Units: VA
 */
type InstantaneousApparentPowerexport_VA_21 = number
/**
 * Instantaneous Active Power (|+A|+|-A|)
 *
 * Instantaneous active power.
 *
 * ID: 22
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type InstantaneousActivePower_A_A_22 = number
/**
 * Instantaneous Net Active Power (|+A|-|-A|)
 *
 * Instantaneous net active power.
 *
 * ID: 23
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type InstantaneousNetActivePower_A_A_23 = number
/**
 * Measurement period of Instantaneous value
 *
 * Measurement period of instantaneous value.
 *
 * ID: 24
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type MeasurementperiodofInstantaneousvalue_24 = number
/**
 * Active energy export (-A) Un
 *
 * Active energy export (unified rate).
 *
 * ID: 26
 * MultipleInstances: false
 * Mandatory: false
 * Units: Wh
 */
type Activeenergyexport_A_Un_26 = number
/**
 * Active energy (|+A|+|-A|) Combined total
 *
 * Active energy (|+A|+|-A|) Combined total.
 *
 * ID: 27
 * MultipleInstances: false
 * Mandatory: false
 * Units: Wh
 */
type Activeenergy_A_A_Combinedtotal_27 = number
/**
 * Active energy (|+A|-|-A|) Combined total
 *
 * Active energy (|+A|-|-A|) Combined total.
 *
 * ID: 28
 * MultipleInstances: false
 * Mandatory: false
 * Units: Wh
 */
type Activeenergy_A_A_Combinedtotal_28 = number
/**
 * Reactive energy import (+R) Un
 *
 * Reactive energy import (unified rate)
 *
 * ID: 29
 * MultipleInstances: false
 * Mandatory: false
 * Units: varh
 */
type Reactiveenergyimport_R_Un_29 = number
/**
 * Reactive energy export (-R) Un
 *
 * Reactive energy export (unified rate).
 *
 * ID: 30
 * MultipleInstances: false
 * Mandatory: false
 * Units: varh
 */
type Reactiveenergyexport_R_Un_30 = number
/**
 * Reactive energy QI (+Ri) Un
 *
 * Reactive energy QI (+Ri) (unified rate).
 *
 * ID: 31
 * MultipleInstances: false
 * Mandatory: false
 * Units: varh
 */
type ReactiveenergyQI_Ri_Un_31 = number
/**
 * Reactive energy QII (+Rc) Un
 *
 * Reactive energy QII (+Rc) (unified rate).
 *
 * ID: 32
 * MultipleInstances: false
 * Mandatory: false
 * Units: varh
 */
type ReactiveenergyQII_Rc_Un_32 = number
/**
 * Reactive energy QIII (-Ri) Un
 *
 * Reactive energy QIII (-Ri) (unified rate).
 *
 * ID: 33
 * MultipleInstances: false
 * Mandatory: false
 * Units: varh
 */
type ReactiveenergyQIII_Ri_Un_33 = number
/**
 * Reactive energy QIV (-Rc) Un
 *
 * Reactive energy QIV (-Rc) (unified rate).
 *
 * ID: 34
 * MultipleInstances: false
 * Mandatory: false
 * Units: varh
 */
type ReactiveenergyQIV_Rc_Un_34 = number
/**
 * Apparent energy import Un
 *
 * Apparent energy import (unified rate).
 *
 * ID: 35
 * MultipleInstances: false
 * Mandatory: false
 * Units: VAh
 */
type ApparentenergyimportUn_35 = number
/**
 * Apparent energy export Un
 *
 * Apparent energy export (unified rate).
 *
 * ID: 36
 * MultipleInstances: false
 * Mandatory: false
 * Units: VAh
 */
type ApparentenergyexportUn_36 = number
/**
 * Number of power failures
 *
 * Number of power failures.
 *
 * ID: 37
 * MultipleInstances: false
 * Mandatory: false
 */
type Numberofpowerfailures_37 = number
/**
 * Number of long power failures
 *
 * Number of long power failures.
 *
 * ID: 38
 * MultipleInstances: false
 * Mandatory: false
 */
type Numberoflongpowerfailures_38 = number
/**
 * Time threshold for long power failure
 *
 * Time threshold for long power failure.
 *
 * ID: 39
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Timethresholdforlongpowerfailure_39 = number
/**
 * Duration of last long power failure
 *
 * Duration of last long power failure.
 *
 * ID: 40
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Durationoflastlongpowerfailure_40 = number
/**
 * Threshold for voltage sag
 *
 * Threshold for voltage sag.
 *
 * ID: 41
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Thresholdforvoltagesag_41 = number
/**
 * Time threshold for voltage sag
 *
 * Time threshold for voltage sag.
 *
 * ID: 42
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Timethresholdforvoltagesag_42 = number
/**
 * Number of voltage sags
 *
 * Number of voltage sags.
 *
 * ID: 43
 * MultipleInstances: false
 * Mandatory: false
 */
type Numberofvoltagesags_43 = number
/**
 * Duration of last voltage sag
 *
 * Duration of last voltage sag.
 *
 * ID: 44
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Durationoflastvoltagesag_44 = number
/**
 * Magnitude of last voltage sag
 *
 * Magnitude of last voltage sag.
 *
 * ID: 45
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Magnitudeoflastvoltagesag_45 = number
/**
 * Threshold for voltage swell
 *
 * Threshold for voltage sag.
 *
 * ID: 46
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Thresholdforvoltageswell_46 = number
/**
 * Time threshold for voltage swell
 *
 * Time threshold for voltage sag.
 *
 * ID: 47
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Timethresholdforvoltageswell_47 = number
/**
 * Number of voltage swells
 *
 * Number of voltage sags.
 *
 * ID: 48
 * MultipleInstances: false
 * Mandatory: false
 */
type Numberofvoltageswells_48 = number
/**
 * Duration of last voltage swell
 *
 * Duration of last voltage sag.
 *
 * ID: 49
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Durationoflastvoltageswell_49 = number
/**
 * Magnitude of last voltage swell
 *
 * Magnitude of last voltage swell.
 *
 * ID: 50
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Magnitudeoflastvoltageswell_50 = number
/**
 * Threshold for missing voltage (voltage cut)
 *
 * Threshold for missing voltage (voltage cut).
 *
 * ID: 51
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Thresholdformissingvoltage_voltagecut_51 = number
/**
 * Time threshold for voltage cut
 *
 * Time threshold for voltage cut.
 *
 * ID: 52
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Timethresholdforvoltagecut_52 = number
/**
 * Voltage cut
 *
 * Set to True if a voltage cut for a time above the time threshold and for a
 * voltage below the voltage threshold is detected.
 *
 * ID: 53
 * MultipleInstances: false
 * Mandatory: false
 */
type Voltagecut_53 = boolean
/**
 * CT Numerator Parameter
 *
 * Transformer ratio - current (numerator).
 *
 * ID: 54
 * MultipleInstances: false
 * Mandatory: false
 */
type CTNumeratorParameter_54 = number
/**
 * CT Denominator Parameter
 *
 * Transformer ratio - voltage (denominator).
 *
 * ID: 55
 * MultipleInstances: false
 * Mandatory: false
 */
type CTDenominatorParameter_55 = number
/**
 * VT Numerator Parameter
 *
 * Transformer ratio - current (numerator).
 *
 * ID: 56
 * MultipleInstances: false
 * Mandatory: false
 */
type VTNumeratorParameter_56 = number
/**
 * VT Denominator Parameter
 *
 * Transformer ratio - voltage (denominator).
 *
 * ID: 57
 * MultipleInstances: false
 * Mandatory: false
 */
type VTDenominatorParameter_57 = number
/**
 * Unexpected load
 *
 * True if an unexpected load is detected, e.g when current is consumed despite
 * the load is supposed to be disconnected
 *
 * ID: 58
 * MultipleInstances: false
 * Mandatory: false
 */
type Unexpectedload_58 = boolean
/**
 * Timestamp
 *
 * The timestamp of when the measurement was performed.
 *
 * ID: 5518
 * MultipleInstances: false
 * Mandatory: false
 */
type Timestamp_5518 = number
/**
 * Measurement Quality Indicator
 *
 * Measurement quality indicator reported by a smart sensor. 0: UNCHECKED No
 * quality checks were done because they do not exist or can not be applied. 1:
 * REJECTED WITH CERTAINTY The measured value is invalid. 2: REJECTED WITH
 * PROBABILITY The measured value is likely invalid. 3: ACCEPTED BUT SUSPICIOUS
 * The measured value is likely OK. 4: ACCEPTED The measured value is OK. 5-15:
 * Reserved for future extensions. 16-23: Vendor specific measurement quality.
 *
 * ID: 6042
 * MultipleInstances: false
 * Mandatory: false
 */
type MeasurementQualityIndicator_6042 = number
/**
 * Measurement Quality Level
 *
 * Measurement quality level reported by a smart sensor. Quality level 100 means
 * that the measurement has fully passed quality check algorithms. Smaller
 * quality levels mean that quality has decreased and the measurement has only
 * partially passed quality check algorithms. The smaller the quality level, the
 * more caution should be used by the application when using the measurement.
 * When the quality level is 0 it means that the measurement should certainly be
 * rejected.
 *
 * ID: 6049
 * MultipleInstances: false
 * Mandatory: false
 */
type MeasurementQualityLevel_6049 = number
/**
 * Fractional Timestamp
 *
 * Fractional part of the timestamp when sub-second precision is used (e.g.,
 * 0.23 for 230 ms).
 *
 * ID: 6050
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type FractionalTimestamp_6050 = number
/**
 * The objectURN for Single-phase electrical meter
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3421:2.0'
