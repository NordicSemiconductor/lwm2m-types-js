/**
 * Service Info
 *
 * This LWM2M Object contains the referrence to all objects containing service
 * info.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10356.xml
 *
 * ID: 10356
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type ServiceInfo_10356 = Readonly<{
	'100': RobotServiceInfo_100
	'101'?: SCAInfo_101
	'102'?: SpeakerInfo_102
	'103'?: CameraInfo_103
	'104'?: ScreenInfo_104
	'105'?: LightInfo_105
	'106'?: WarningLightInfo_106
	'107'?: DoorInfo_107
	'108'?: ThermalImagerInfo_108
	'109'?: CompressorInfo_109
	'110'?: LockInfo_110
	'111'?: CollisionSensorInfo_111
	'112'?: DropSensorInfo_112
}>
/**
 * Robot Service Info
 *
 *
 * Contains the reference to the Robot Service Info.
 *
 *
 * ID: 100
 * MultipleInstances: false
 * Mandatory: true
 */
type RobotServiceInfo_100 = string
/**
 * SCA Info
 *
 *
 * Contains the reference to SCAs of the Robot.
 *
 *
 * ID: 101
 * MultipleInstances: true
 * Mandatory: false
 */
type SCAInfo_101 = Array<string>
/**
 * Speaker Info
 *
 *
 * Contains the reference to the Speaker of the Robot.
 *
 *
 * ID: 102
 * MultipleInstances: false
 * Mandatory: false
 */
type SpeakerInfo_102 = string
/**
 * Camera Info
 *
 *
 * Contains the reference to Cameras of the Robot.
 *
 *
 * ID: 103
 * MultipleInstances: true
 * Mandatory: false
 */
type CameraInfo_103 = Array<string>
/**
 * Screen Info
 *
 *
 * Contains the reference to the Screen of the Robot.
 *
 *
 * ID: 104
 * MultipleInstances: false
 * Mandatory: false
 */
type ScreenInfo_104 = string
/**
 * Light Info
 *
 *
 * Contains the reference to Lights of the Robot.
 *
 *
 * ID: 105
 * MultipleInstances: true
 * Mandatory: false
 */
type LightInfo_105 = Array<string>
/**
 * Warning Light Info
 *
 *
 * Contains the reference to the Warning Light of the Robot.
 *
 *
 * ID: 106
 * MultipleInstances: false
 * Mandatory: false
 */
type WarningLightInfo_106 = string
/**
 * Door Info
 *
 *
 * Contains the reference to the Door of the Robot.
 *
 *
 * ID: 107
 * MultipleInstances: true
 * Mandatory: false
 */
type DoorInfo_107 = Array<string>
/**
 * Thermal Imager Info
 *
 *
 * Contains the reference to the Thermal Imager of the Robot.
 *
 *
 * ID: 108
 * MultipleInstances: false
 * Mandatory: false
 */
type ThermalImagerInfo_108 = string
/**
 * Compressor Info
 *
 *
 * Contains the reference to the Compressor of the Robot.
 *
 *
 * ID: 109
 * MultipleInstances: true
 * Mandatory: false
 */
type CompressorInfo_109 = Array<string>
/**
 * Lock Info
 *
 *
 * Contains the reference to Lock Info of the Robot.
 *
 *
 * ID: 110
 * MultipleInstances: true
 * Mandatory: false
 */
type LockInfo_110 = Array<string>
/**
 * Collision Sensor Info
 *
 *
 * Contains the reference to Collision Sensor Info of the Robot.
 *
 *
 * ID: 111
 * MultipleInstances: true
 * Mandatory: false
 */
type CollisionSensorInfo_111 = Array<string>
/**
 * Drop Sensor Info
 *
 *
 * Contains the reference to Drop Sensor Info of the Robot.
 *
 *
 * ID: 112
 * MultipleInstances: true
 * Mandatory: false
 */
type DropSensorInfo_112 = Array<string>
/**
 * The objectURN for Service Info
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10356'
