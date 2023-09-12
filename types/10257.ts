/**
 * Heat / Cooling meter
 *
 *
 * This Object provides the information to represent a generic (district) heat
 * or cooling meter
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10257.xml
 *
 * ID: 10257
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Heat_Coolingmeter_10257 = Readonly<
	Array<{
		'5802': MaxMeasuredactivepower_5802
		'0'?: Manufacturer_0
		'1'?: ModelNumber_1
		'2'?: SerialNumber_2
		'3'?: Description_3
		'11'?: Errorcode_11
		'12'?: Flowtemperature_12
		'13'?: MaxMeasuredflowtemperature_13
		'14'?: Returntemperature_14
		'15'?: MaxMeasuredreturntemperature_15
		'16'?: Temperaturedifference_16
		'17'?: Flowrate_17
		'18'?: MaxMeasuredflow_18
		'20'?: Flowvolume_20
		'21'?: Returnvolume_21
		'5506'?: CurrentTime_5506
		'5800'?: Instantaneousactivepower_5800
		'5805'?: Cumulativeactivepower_5805
	}>
>
/**
 * Max Measured active power
 *
 * The maximum active power measured by the sensor since it is ON.
 *
 * ID: 5802
 * MultipleInstances: true
 * Mandatory: true
 * Units: W
 */
type MaxMeasuredactivepower_5802 = Array<number>
/**
 * Manufacturer
 *
 * Human readable manufacturer name
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: false
 */
type Manufacturer_0 = string
/**
 * Model Number
 *
 * A model identifier (manufacturer specified string)
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type ModelNumber_1 = string
/**
 * Serial Number
 *
 * Serial number of the meter
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type SerialNumber_2 = string
/**
 * Description
 *
 * Description of the meter
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Description_3 = string
/**
 * Error code
 *
 * Error code reported by the meter
 *
 * ID: 11
 * MultipleInstances: true
 * Mandatory: false
 */
type Errorcode_11 = Array<number>
/**
 * Flow temperature
 *
 * Flow temperature
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 * Units: Cel
 */
type Flowtemperature_12 = number
/**
 * Max Measured flow temperature
 *
 * The maximum flow temperature measured by the meter
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 * Units: Cel
 */
type MaxMeasuredflowtemperature_13 = number
/**
 * Return temperature
 *
 * Return temperature
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 * Units: Cel
 */
type Returntemperature_14 = number
/**
 * Max Measured return temperature
 *
 * The maximum return temperature measured by the meter
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 * Units: Cel
 */
type MaxMeasuredreturntemperature_15 = number
/**
 * Temperature difference
 *
 * Temperature difference
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 * Units: K
 */
type Temperaturedifference_16 = number
/**
 * Flow rate
 *
 * The flow rate
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 * Units: m3/s
 */
type Flowrate_17 = number
/**
 * Max Measured flow
 *
 * The maximum flow measured by the meter
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 * Units: m3/s
 */
type MaxMeasuredflow_18 = number
/**
 * Flow volume
 *
 * The cumulative flow volume measured on the flow pipe
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 * Units: m3
 */
type Flowvolume_20 = number
/**
 * Return volume
 *
 * The cumulative flow volume measured on the return pipe
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 * Units: m3
 */
type Returnvolume_21 = number
/**
 * Current Time
 *
 * Unix Time. A signed integer representing the number of seconds since Jan 1st,
 * 1970 in the UTC time zone.
 *
 * ID: 5506
 * MultipleInstances: false
 * Mandatory: false
 */
type CurrentTime_5506 = number
/**
 * Instantaneous active power
 *
 * The current active power.
 *
 * ID: 5800
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type Instantaneousactivepower_5800 = number
/**
 * Cumulative active power
 *
 * The cumulative active power since the last cumulative energy reset or device
 * start.
 *
 * ID: 5805
 * MultipleInstances: false
 * Mandatory: false
 * Units: Wh
 */
type Cumulativeactivepower_5805 = number
/**
 * The objectURN for Heat / Cooling meter
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10257'
