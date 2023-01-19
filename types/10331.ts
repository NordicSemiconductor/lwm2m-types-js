/**
 * Robot Service Info
 *
 * This LWM2M Object includes robot service related information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10331.xml
 *
 * ID: 10331
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: true
 */
export type RobotServiceInfo_10331 = Readonly<{
	'1': Currentstatus_1
	'3': AdvertisingContents_3
	'13': SynchronousWhistle_13
	'2'?: ServicesProviding_2
	'4'?: CurrentLanguage_4
	'5'?: Volume_5
	'6'?: MovingStatus_6
	'7'?: MovingSpeed_7
	'8'?: Location_8
	'9'?: MapList_9
	'10'?: PlannedRoutelist_10
	'11'?: CurrentRoute_11
	'12'?: Routeto_doList_12
	'14'?: CurrentActions_14
	'15'?: ASRType_15
	'50'?: TTSVendor_50
	'51'?: TTSSpeaker_51
}>
/**
 * Current status
 *
 * Current status, for example: working, pasued, dormant, holding, charging and
 * so on.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Currentstatus_1 = string
/**
 * Advertising Contents
 *
 * The Advertising Contents it is playing.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type AdvertisingContents_3 = string
/**
 * Synchronous Whistle
 *
 * The status of the Synchronous Whistle, 1:On, 0:Off.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: true
 */
type SynchronousWhistle_13 = boolean
/**
 * Services Providing
 *
 * Providing services: for example: patrolling, advertisement playing,
 * patrolling and so on,
 * one robot can do several works at the same time, for example, patrolling with
 * advertisement playing.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type ServicesProviding_2 = string
/**
 * Current Language
 *
 * Current language used by the robot.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type CurrentLanguage_4 = string
/**
 * Volume
 *
 * The Volume of the speaker.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Volume_5 = string
/**
 * Moving Status
 *
 * 0:Moving, 1:Stopped, 2:Suspended.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type MovingStatus_6 = number
/**
 * Moving Speed
 *
 * The moving speed of the robot.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: m/h
 */
type MovingSpeed_7 = number
/**
 * Location
 *
 *
 * Contains the reference to the location object(6).
 *
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type Location_8 = string
/**
 * Map List
 *
 * Assigned Map List and the Map currently within.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type MapList_9 = string
/**
 * Planned Route list
 *
 * Planned Route list, routes are separated by comma.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type PlannedRoutelist_10 = string
/**
 * Current Route
 *
 * Current Route.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type CurrentRoute_11 = string
/**
 * Route to-do List
 *
 * Routes to be done, routes are separated by comma.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type Routeto_doList_12 = string
/**
 * Current Actions
 *
 * Current Body Actions/Actions.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type CurrentActions_14 = string
/**
 * ASR Type
 *
 * ASR Type, 0:Cloud, 1:Local, 2:Offline.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type ASRType_15 = number
/**
 * TTS Vendor
 *
 * The TTS Vendor.
 *
 * ID: 50
 * MultipleInstances: false
 * Mandatory: false
 */
type TTSVendor_50 = string
/**
 * TTS Speaker
 *
 * Which speaker of the vender is selected.
 *
 * ID: 51
 * MultipleInstances: false
 * Mandatory: false
 */
type TTSSpeaker_51 = string
/**
 * The objectURN for Robot Service Info
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10331'
