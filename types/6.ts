/**
 * Location
 *
 * This LwM2M Object provides a range of location telemetry related information
 * which can be queried by the LwM2M Server.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/6.xml
 *
 * ID: 6
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type Location_6 = Readonly<{
	'0': Latitude_0
	'1': Longitude_1
	'5': Timestamp_5
	'2'?: Altitude_2
	'3'?: Radius_3
	'4'?: Velocity_4
	'6'?: Speed_6
}>
/**
 * Latitude
 *
 * The decimal notation of latitude, e.g. -43.5723 [World Geodetic System 1984].
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 * Units: lat
 */
type Latitude_0 = number
/**
 * Longitude
 *
 * The decimal notation of longitude, e.g. 153.21760 [World Geodetic System
 * 1984].
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: lon
 */
type Longitude_1 = number
/**
 * Timestamp
 *
 * The timestamp of when the location measurement was performed.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type Timestamp_5 = number
/**
 * Altitude
 *
 * The decimal notation of altitude in meters above sea level.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: m
 */
type Altitude_2 = number
/**
 * Radius
 *
 * The value in this resource indicates the radius of a circular area in meters.
 * The circular area is used to describe uncertainty about a point for
 * coordinates in a two-dimensional coordinate reference systems (CRS). The
 * center point of a circular area is specified by using the Latitude and the
 * Longitude Resources.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: m
 */
type Radius_3 = number
/**
 * Velocity
 *
 * The velocity of the LwM2M Client, as defined in [3GPP-TS_23.032].
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type Velocity_4 = string
/**
 * Speed
 *
 * Speed is the time rate of change in position of a LwM2M Client without regard
 * for direction: the scalar component of velocity.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: m/s
 */
type Speed_6 = number
/**
 * The objectURN for Location
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '6'
