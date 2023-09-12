/**
 * RCU
 *
 * This LWM2M Object includes RCU(Robotic Control Unit) information and the link
 * to RCU APPs.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10316.xml
 *
 * ID: 10316
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: true
 */
export type RCU_10316 = Readonly<{
	'1': RCUID_1
	'2': RCUSerialNumber_2
	'3': RCUSoftwareVersion_3
	'4': RCUOSVersion_4
	'5': RCUCPUInfo_5
	'6': RCURAMInfo_6
	'7': RCUROMSize_7
	'8': RCUROMAvailableSize_8
	'9': SDStorage_9
	'10': SDAvailableStorage_10
	'51': BatteryLevel_51
	'60': DownloadedAPPPackages_60
	'5852': Ontime_5852
	'11'?: RCUGPSLocation_11
	'12'?: Wi_FiMAC_12
	'13'?: BluetoothMAC_13
	'14'?: CameraInfo_14
	'100'?: RCUAPPs_100
}>
/**
 * RCU ID
 *
 * The RCU identity.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type RCUID_1 = string
/**
 * RCU Serial Number
 *
 * Serial Number of the RCU.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type RCUSerialNumber_2 = string
/**
 * RCU Software Version
 *
 * Software Version of the RCU.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type RCUSoftwareVersion_3 = string
/**
 * RCU OS Version
 *
 * OS type and version of the RCU.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type RCUOSVersion_4 = string
/**
 * RCU CPU Info
 *
 * Cpu information of the RCU.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type RCUCPUInfo_5 = string
/**
 * RCU RAM Info
 *
 * RAM information of the RCU.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type RCURAMInfo_6 = string
/**
 * RCU ROM Size
 *
 * ROM Size of the RCU (expressed in gigabyte).
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 * Units: GB
 */
type RCUROMSize_7 = number
/**
 * RCU ROM Available Size
 *
 * Available ROM Size of the RCU (expressed in gigabyte).
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 * Units: GB
 */
type RCUROMAvailableSize_8 = number
/**
 * SD Storage
 *
 * Total storage of the RCU SD card, for example: 128G.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: true
 * Units: GB
 */
type SDStorage_9 = number
/**
 * SD Available Storage
 *
 * Available storage of the RCU SD card, for example: 63G.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: true
 * Units: GB
 */
type SDAvailableStorage_10 = number
/**
 * Battery Level
 *
 * The current Battery Level as a percentage (with a range from 0 to 100).
 *
 * ID: 51
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type BatteryLevel_51 = number
/**
 * Downloaded APP Packages
 *
 * Each item contains APP Name/Version info/Package Name.
 *
 * ID: 60
 * MultipleInstances: true
 * Mandatory: true
 */
type DownloadedAPPPackages_60 = Array<string>
/**
 * On time
 *
 * The time in seconds that the device has been on. Writing a value of 0 resets
 * the counter.
 *
 * ID: 5852
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type Ontime_5852 = number
/**
 * RCU GPS Location
 *
 * RCU GPS location, contains the referrence to Location(6).
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type RCUGPSLocation_11 = string
/**
 * Wi-Fi MAC
 *
 * Wi-Fi MAC of the RCU.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type Wi_FiMAC_12 = string
/**
 * Bluetooth MAC
 *
 * Bluetooth MAC of the RCU, for example: .
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type BluetoothMAC_13 = string
/**
 * Camera Info
 *
 * Camera info of the RCU.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type CameraInfo_14 = string
/**
 * RCU APPs
 *
 *
 * Contains the reference to the APPs belongs to RCU.
 *
 *
 * ID: 100
 * MultipleInstances: true
 * Mandatory: false
 */
type RCUAPPs_100 = Array<string>
/**
 * The objectURN for RCU
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10316'
