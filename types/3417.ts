/**
 * Luminaire asset
 *
 * The uCIFI luminaire asset is an object that enables outdoor lighting control
 * software to configure outdoor lamp controllers. It also enables outdoor lamp
 * controllers to send Zhaga D4i or DALI attributes read from the control gears,
 * to centrally managed outdoor lighting control software or asset management
 * systems.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3417.xml
 *
 * ID: 3417
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Luminaireasset_3417 = Readonly<
	Array<{
		'1': AssetGTIN_1
		'10'?: NominalminACmainsvoltage_10
		'11'?: CRI_11
		'12'?: CCTvalue_12
		'13'?: Luminaireidentification_13
		'14'?: Luminaireidentificationnumber_14
		'2'?: Yearofmanufacture_2
		'3'?: Weekofmanufacture_3
		'4'?: Nominallightoutput_4
		'5'?: Lightdistributiontype_5
		'6'?: Luminairecolor_6
		'7'?: Nominalinputpower_7
		'8'?: Poweratminimumdimlevel_8
		'9'?: NominalmaxACmainsvoltage_9
	}>
>
/**
 * Asset GTIN
 *
 * Global trade-in international number used in the Luminaire Asset controlled
 * by the device.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type AssetGTIN_1 = string
/**
 * Nominal min AC mains voltage
 *
 * Nominal min AC mains voltage for the luminaire to operate.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type NominalminACmainsvoltage_10 = number
/**
 * CRI
 *
 * Color rendering index (0 to 100) of the luminaire.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type CRI_11 = number
/**
 * CCT value
 *
 * Color temperature of the luminaire.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 * Units: K
 */
type CCTvalue_12 = number
/**
 * Luminaire identification
 *
 * Luminaire identification as per DiiA/D4i specification part 251 (MB1
 * extension): 60 ascii character string.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type Luminaireidentification_13 = string
/**
 * Luminaire identification number
 *
 * Luminaire identification number as per DiiA/D4i specification part 251 (MB1
 * extension): 20 digit number.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type Luminaireidentificationnumber_14 = string
/**
 * Year of manufacture
 *
 * Year of manufacture of the luminaire.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type Yearofmanufacture_2 = number
/**
 * Week of manufacture
 *
 * Week of manufacture of the luminaire.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Weekofmanufacture_3 = number
/**
 * Nominal light output
 *
 * Nominal light output of the luminaire.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: lm
 */
type Nominallightoutput_4 = number
/**
 * Light distribution type
 *
 * Enumeration of possible light distribution type, using the Zhaga D4i
 * enumeration. Please refer to ZD4i standard for more details.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Lightdistributiontype_5 = number
/**
 * Luminaire color
 *
 * Painting color of the luminaire.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Luminairecolor_6 = string
/**
 * Nominal input power
 *
 * Nominal input power of the luminaire.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type Nominalinputpower_7 = number
/**
 * Power at minimum dim level
 *
 * Power at minimum dim level for the luminaire.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type Poweratminimumdimlevel_8 = number
/**
 * Nominal max AC mains voltage
 *
 * Nominal max AC mains voltage for the luminaire to operate.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type NominalmaxACmainsvoltage_9 = number
/**
 * The objectURN for Luminaire asset
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3417'
