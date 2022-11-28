/**
 * CCU
 *
 * This LWM2M Object includes CCU(Central Control Unit) information and the link
 * to CCU APPs.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10320.xml
 *
 * ID: 10320
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CCU_10320 = Readonly<
	Array<{
		'1': CCUID_1
		'2': CCUFMVersion_2
		'3': CCUSWVersion_3
		'4': CCUMemorySize_4
		'5': CCUStorage_5
		'5852': Ontime_5852
		'6': CCUAvailableStorage_6
		'100'?: DownloadedAPPPackages_100
		'101'?: CCUAPPs_101
	}>
>
/**
 * CCU ID
 *
 * The CCU identity.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type CCUID_1 = string
/**
 * CCU FM Version
 *
 * The firmware version of the CCU.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type CCUFMVersion_2 = string
/**
 * CCU SW Version
 *
 * The software version of the CCU.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type CCUSWVersion_3 = string
/**
 * CCU Memory Size
 *
 * Total Memory Size of the CCU (expressed in gigabyte).
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 * Units: GB
 */
type CCUMemorySize_4 = number
/**
 * CCU Storage
 *
 * Total storage of the CCU.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 * Units: GB
 */
type CCUStorage_5 = number
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
 * CCU Available Storage
 *
 * Available storage of the CCU.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 * Units: GB
 */
type CCUAvailableStorage_6 = number
/**
 * Downloaded APP Packages
 *
 * Each item contains APP Name, Version info, Package Name.
 *
 * ID: 100
 * MultipleInstances: true
 * Mandatory: false
 */
type DownloadedAPPPackages_100 = string
/**
 * CCU APPs
 *
 *
 * Contains the reference to the APPs belongs to this CCU.
 *
 *
 * ID: 101
 * MultipleInstances: true
 * Mandatory: false
 */
type CCUAPPs_101 = string
/**
 * The objectURN for CCU
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10320'
