/**
 * Parking Sensor
 *
 * The uCIFI parking sensor provides actual and cumulated occupancy duration as
 * well as forbidden parking detection.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3431.xml
 *
 * ID: 3431
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type ParkingSensor_3431 = Readonly<
	Array<{
		'1': Occupancy_1
		'2'?: Duration_2
		'3'?: DailyDuration_3
		'4'?: Forbiddenparkingdetected_4
		'5'?: TypeofSensor_5
	}>
>
/**
 * Occupancy
 *
 * Set to True if the parking place is occupied. Set to False if the parking
 * place is free.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Occupancy_1 = boolean
/**
 * Duration
 *
 * Number of seconds since the parking place is occupied. If not occupied,
 * duration shows the duration of the last occupation.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Duration_2 = number
/**
 * Daily Duration
 *
 * Cumulated occupation time since beginning of the day.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type DailyDuration_3 = number
/**
 * Forbidden parking detected
 *
 * Set to True if the vehicle present on the parking place is not authorized.
 * Set to False if parking place is free or if the vehicle is authorized.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type Forbiddenparkingdetected_4 = boolean
/**
 * Type of Sensor
 *
 * Type of sensor (e.g. PIR, camera).
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type TypeofSensor_5 = string
/**
 * The objectURN for Parking Sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3431'
