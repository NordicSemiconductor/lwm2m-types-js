/**
 * Shareparkinglot
 *
 * This LwM2M Object provides the keying material of our technology
 * product-ShareParkingLock.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10309.xml
 *
 * ID: 10309
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Shareparkinglot_10309 = Readonly<
	Array<{
		'1': LockID_1
		'4': RSSI_4
		'6': DataUpTime_6
		'2'?: LockType_2
		'3'?: LightSwitchState_3
		'5'?: BatteryCapacity_5
		'5514'?: Latitude_5514
		'5515'?: Longitude_5515
	}>
>
/**
 * LockID
 *
 * Unique ID of the lock.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type LockID_1 = number
/**
 * RSSI
 *
 * Radio Received Signal Strength Indicator.
 *
 * ID: 4
 * MultipleInstances: true
 * Mandatory: true
 * Units: dBm
 */
type RSSI_4 = Array<number>
/**
 * DataUpTime
 *
 * The data upload time.
 *
 * ID: 6
 * MultipleInstances: true
 * Mandatory: true
 */
type DataUpTime_6 = Array<number>
/**
 * LockType
 *
 * Type of the lock.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type LockType_2 = string
/**
 * LightSwitchState
 *
 * Infra-red sensor switch state.
 *
 * ID: 3
 * MultipleInstances: true
 * Mandatory: false
 */
type LightSwitchState_3 = Array<boolean>
/**
 * BatteryCapacity
 *
 * Current battery capacity in percentage Energy Level (EL).
 *
 * ID: 5
 * MultipleInstances: true
 * Mandatory: false
 * Units: %EL
 */
type BatteryCapacity_5 = Array<number>
/**
 * Latitude
 *
 * The decimal notation of latitude, e.g. -43.5723 (World Geodetic System 1984).
 *
 * ID: 5514
 * MultipleInstances: true
 * Mandatory: false
 */
type Latitude_5514 = Array<string>
/**
 * Longitude
 *
 * The decimal notation of longitude, e.g. 153.21760 (World Geodetic System
 * 1984).
 *
 * ID: 5515
 * MultipleInstances: true
 * Mandatory: false
 */
type Longitude_5515 = Array<string>
/**
 * The objectURN for Shareparkinglot
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10309'
