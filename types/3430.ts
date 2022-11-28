/**
 * Global Navigation Satellite System
 *
 * More than a positioning object, the uCIFI global navigation satellite system
 * object provides all the information required to calculate a
 * position/location.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3430.xml
 *
 * ID: 3430
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type GlobalNavigationSatelliteSystem_3430 = Readonly<{
	'0': Fixtimestamp_0
	'1': Latitude_1
	'2': Longitude_2
	'28': Status_28
	'10'?: Estimatedverticalaccuracy_10
	'11'?: Estimatedspeedaccuracy_11
	'12'?: Estimatedheadingaccuracy_12
	'13'?: Fixtype_13
	'14'?: Fixdimension_14
	'15'?: Usedsatellites_15
	'16'?: Visiblesatellites_16
	'17'?: Satelliteidentifiers_17
	'18'?: Satelliteidentifiers_18
	'19'?: Satelliteazimuth_19
	'20'?: Almanac_20
	'21'?: Ephemeris_21
	'22'?: Signal_to_noiseratio_22
	'23'?: GNSS_23
	'24'?: HardwareRTC_24
	'25'?: AssistedGPS_25
	'26'?: Powercommand_26
	'27'?: PDOP_27
	'3'?: Altitude_3
	'4'?: Speed_4
	'5'?: Heading_5
	'6'?: Radius_6
	'7'?: HDOP_7
	'8'?: VDOP_8
	'9'?: Estimatedhorizontalaccuracy_9
}>
/**
 * Fix timestamp
 *
 * Timestamp of when the location measurement was performed.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type Fixtimestamp_0 = number
/**
 * Latitude
 *
 * Decimal notation of latitude, e.g. -43.5723 [World Geodetic System 1984].
 * This value ranges from [-90, 90].
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: lat
 */
type Latitude_1 = number
/**
 * Longitude
 *
 * Decimal notation of longitude, e.g. 153.21760 [World Geodetic System 1984].
 * This value ranges from [-180, 180].
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 * Units: lon
 */
type Longitude_2 = number
/**
 * Status
 *
 * Status A=active or V=Void (NMEA-0183 RMC).
 *
 * ID: 28
 * MultipleInstances: false
 * Mandatory: true
 */
type Status_28 = string
/**
 * Estimated vertical accuracy
 *
 * Estimated vertical accuracy.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 * Units: m
 */
type Estimatedverticalaccuracy_10 = number
/**
 * Estimated speed accuracy
 *
 * Estimated speed accuracy.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 * Units: m/s
 */
type Estimatedspeedaccuracy_11 = number
/**
 * Estimated heading accuracy
 *
 * Estimated heading accuracy.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 * Units: deg
 */
type Estimatedheadingaccuracy_12 = number
/**
 * Fix type
 *
 * Possible values are :
 * 0 = No fix
 * 1 = Autonomous GNSS fix
 * 2 = Differential GNSS fix
 * 3 = GPS PPS
 * 4 = RTK-fixed
 * 5 = RTK-floated
 * 6 = Estimated fix
 * 7 = Dead reckoning fix
 * 8 = Manual input, surveyed
 * 9 = Simulated mode
 * .
 *
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type Fixtype_13 = number
/**
 * Fix dimension
 *
 * Possible values are:
 * 0,1 = no fix
 * 2 = 2D fix
 * 3 = 3D fix
 * As per NMEA-0183 GSA.
 *
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type Fixdimension_14 = number
/**
 * Used satellites
 *
 * Number of satellites used for the fix.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type Usedsatellites_15 = number
/**
 * Visible satellites
 *
 * Number of satellites viewed. Represent all the satellites seen but some of
 * them cannot be in use (e.g. bad signal).
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 */
type Visiblesatellites_16 = number
/**
 * Satellite identifiers
 *
 * Identifier of the satellite.
 *
 * ID: 17
 * MultipleInstances: true
 * Mandatory: false
 */
type Satelliteidentifiers_17 = string
/**
 * Satellite identifiers
 *
 * Elevation of the satellite.
 *
 * ID: 18
 * MultipleInstances: true
 * Mandatory: false
 * Units: deg
 */
type Satelliteidentifiers_18 = number
/**
 * Satellite azimuth
 *
 * Azimuth of the satellite.
 *
 * ID: 19
 * MultipleInstances: true
 * Mandatory: false
 * Units: deg
 */
type Satelliteazimuth_19 = number
/**
 * Almanac
 *
 * Validity of the almanac. Possible values are:
 * 0 = invalid
 * 1 = valid
 * .
 *
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 */
type Almanac_20 = boolean
/**
 * Ephemeris
 *
 * Validity of the ephemeris of each satellite. Possible values are :
 * 0 = invalid
 * 1 = valid
 * .
 *
 *
 * ID: 21
 * MultipleInstances: true
 * Mandatory: false
 */
type Ephemeris_21 = boolean
/**
 * Signal-to-noise ratio
 *
 * Strength of the signal for each satellite, also called carrier-to-noise.
 *
 * ID: 22
 * MultipleInstances: true
 * Mandatory: false
 * Units: dB
 */
type Signal_to_noiseratio_22 = number
/**
 * GNSS
 *
 * GNSS used for the fix. A mask is used with the following bit definition:
 * 0 = GPS (USA)
 * 1= GALILEO (EU)
 * 2 = GLONASS (Russia)
 * 3 = BeiDou (China)
 * 4 = QZSS (Japan)
 * 5 = IRNSS/NAVIC (India)
 * A 0 indicates that the GNSS is not used a 1 indicates it is used.
 *
 *
 * ID: 23
 * MultipleInstances: true
 * Mandatory: false
 */
type GNSS_23 = number
/**
 * Hardware RTC
 *
 * Time of the internal clock of the GNSS hardware.
 *
 * ID: 24
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type HardwareRTC_24 = number
/**
 * Assisted GPS
 *
 * Set to True if the almanac is obtained via a cellular connection. Set to
 * False otherwise.
 *
 * ID: 25
 * MultipleInstances: false
 * Mandatory: false
 */
type AssistedGPS_25 = boolean
/**
 * Power command
 *
 * Command to switch the hardware ON or OFF and status of the device.
 *
 * ID: 26
 * MultipleInstances: false
 * Mandatory: false
 */
type Powercommand_26 = boolean
/**
 * PDOP
 *
 * Dilution of precision (NMEA-0183 GSA).
 *
 * ID: 27
 * MultipleInstances: false
 * Mandatory: false
 */
type PDOP_27 = number
/**
 * Altitude
 *
 * Altitude above mean sea level in meters.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: m
 */
type Altitude_3 = number
/**
 * Speed
 *
 * Horizontal speed calculated by the device.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: m/s
 */
type Speed_4 = number
/**
 * Heading
 *
 * Direction that the device is following
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: deg
 */
type Heading_5 = number
/**
 * Radius
 *
 * Radius of a circular area corresponding to the location’s uncertainty (GPS
 * data precision). Negative values indicate that the radius is not available.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: m
 */
type Radius_6 = number
/**
 * HDOP
 *
 * Horizontal dilution of precision.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type HDOP_7 = number
/**
 * VDOP
 *
 * Vertical dilution of precision.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type VDOP_8 = number
/**
 * Estimated horizontal accuracy
 *
 * Estimated horizontal accuracy.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 * Units: m
 */
type Estimatedhorizontalaccuracy_9 = number
/**
 * The objectURN for Global Navigation Satellite System
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3430'
