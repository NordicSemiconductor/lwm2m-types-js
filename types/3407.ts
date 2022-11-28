/**
 * Smoke Alarm
 *
 * This is an alarm that should be raised if the meter detects CO2 concentration
 * above a pre-configured threshold.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3407.xml
 *
 * ID: 3407
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type SmokeAlarm_3407 = Readonly<
	Array<{
		'6046': SmokeSensorState_6046
		'6044'?: BatteryPercentage_6044
		'6045'?: RSSI_6045
		'6047'?: DetectedCO2percentage_6047
		'6048'?: Alarmloudness_6048
	}>
>
/**
 * Smoke Sensor State
 *
 * Indicate current smoke sensor state.
 *
 * ID: 6046
 * MultipleInstances: false
 * Mandatory: true
 */
type SmokeSensorState_6046 = boolean
/**
 * Battery Percentage
 *
 * Current remaining battery level.
 *
 * ID: 6044
 * MultipleInstances: false
 * Mandatory: false
 */
type BatteryPercentage_6044 = number
/**
 * RSSI
 *
 * Received Signal Strength Indicator.
 *
 * ID: 6045
 * MultipleInstances: false
 * Mandatory: false
 * Units: dBW
 */
type RSSI_6045 = number
/**
 * Detected CO2 percentage
 *
 * Current level of detected CO2 as a percentage of concentration.
 *
 * ID: 6047
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type DetectedCO2percentage_6047 = number
/**
 * Alarm loudness
 *
 * Indicate the loudness of the alarm.
 *
 * ID: 6048
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type Alarmloudness_6048 = number
/**
 * The objectURN for Smoke Alarm
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3407@1.1'
