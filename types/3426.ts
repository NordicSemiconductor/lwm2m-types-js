/**
 * Water quality sensor
 *
 * The uCIFI water quality sensor measures the quality of the water in the
 * drinkable water distribution network, in water tanks or in lakes and rivers.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3426.xml
 *
 * ID: 3426
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Waterqualitysensor_3426 = Readonly<
	Array<{
		'1'?: pH_1
		'10'?: Totaldissolvedsolids_10
		'11'?: Salinity_11
		'12'?: NO3_12
		'13'?: NH3_13
		'14'?: NH4_14
		'2'?: Chlorine_2
		'3'?: RedoxorORP_3
		'4'?: TotaldissolvedgasorTDG_4
		'5'?: Dissolvedoxygen_5
		'6'?: Turbidity_6
		'7'?: Conductivity_7
		'8'?: Conductance_8
		'9'?: Totalsuspendedsolids_9
	}>
>
/**
 * pH
 *
 * Current or last value of the pH measured by the sensor.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type pH_1 = number
/**
 * Total dissolved solids
 *
 * Current or last value of the TDS measured by the sensor.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 * Units: mg/l
 */
type Totaldissolvedsolids_10 = number
/**
 * Salinity
 *
 * Current or last value of the salinity measured by the sensor.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppt
 */
type Salinity_11 = number
/**
 * NO3
 *
 * Current or last value of NO3 measured by the sensor.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 * Units: mg/l
 */
type NO3_12 = number
/**
 * NH3
 *
 * Current or last value of NH3 measured by the sensor.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 * Units: mg/l
 */
type NH3_13 = number
/**
 * NH4
 *
 * Current or last value of NH4 measured by the sensor.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 * Units: mg/l
 */
type NH4_14 = number
/**
 * Chlorine
 *
 * Current or last value of the chlorine measured by the sensor.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type Chlorine_2 = number
/**
 * Redox or ORP
 *
 * Current or last value of the oxidation reduction potential measured by the
 * sensor.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type RedoxorORP_3 = number
/**
 * Total dissolved gas or TDG
 *
 * Current or last value of the dissolved gas measured by the sensor.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type TotaldissolvedgasorTDG_4 = number
/**
 * Dissolved oxygen
 *
 * Current or last value of the dissolved oxygen measured by the sensor.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type Dissolvedoxygen_5 = number
/**
 * Turbidity
 *
 * Current or last value of the turbidity measured by the sensor using the
 * Nephelometric Turbidity Unit (NTU).
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: NTU
 */
type Turbidity_6 = number
/**
 * Conductivity
 *
 * Current or last value of the conductivity measured by the sensor.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: S/m
 */
type Conductivity_7 = number
/**
 * Conductance
 *
 * Current or last value of the conductance measured by the sensor.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 * Units: S/m
 */
type Conductance_8 = number
/**
 * Total suspended solids
 *
 * Current or last value of the TSS measured by the sensor.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 * Units: mg/l
 */
type Totalsuspendedsolids_9 = number
/**
 * The objectURN for Water quality sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3426'
