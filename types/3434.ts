/**
 * People counter
 *
 * The uCIFI people counter provides people counting information using Bluetooth
 * beacon or any other method.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3434.xml
 *
 * ID: 3434
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Peoplecounter_3434 = Readonly<
	Array<{
		'1': Actualnumberofpersons_1
		'2'?: Dailynumberofpersons_2
		'3'?: Cumulatednumberofpersons_3
		'5'?: Dailynumberofpassages_5
		'6'?: Cumulatednumberofpassages_6
		'8'?: Typeofsensor_8
	}>
>
/**
 * Actual number of persons
 *
 * Number of persons currently identified by the device.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Actualnumberofpersons_1 = number
/**
 * Daily number of persons
 *
 * Cumulated number of persons detected by the device since beginning of the
 * day.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type Dailynumberofpersons_2 = number
/**
 * Cumulated number of persons
 *
 * Cumulated number of persons detected by the device since last reset.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Cumulatednumberofpersons_3 = number
/**
 * Daily number of passages
 *
 * Number of passages (same people could be counted multiple times if identified
 * several times) today.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Dailynumberofpassages_5 = number
/**
 * Cumulated number of passages
 *
 * Cumulated number of passages since last reset.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Cumulatednumberofpassages_6 = number
/**
 * Type of sensor
 *
 * Type of sensor (e.g. Bluetooth beacon, WIFI detector).
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type Typeofsensor_8 = string
/**
 * The objectURN for People counter
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3434'
