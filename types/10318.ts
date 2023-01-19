/**
 * RCU PM
 *
 * This LWM2M Object includes RCU(Robotic Control Unit) PM information(counter
 * and guage).
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10318.xml
 *
 * ID: 10318
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: true
 */
export type RCUPM_10318 = Readonly<{
	'1': CPUUsage_1
	'2': MaxCPUUsage_2
	'3': MemoryUsage_3
	'4': StorageUsage_4
	'51': BatteryLevel_51
	'52': NetworkBandwidth_52
	'53': MobileSignal_53
	'55': Wi_FiSignal_55
	'56': UpLinkRate_56
	'57': DownLinkRate_57
	'58': PacketLossRate_58
	'59': NetworkLatency_59
	'300': BatteryTemperature_300
	'54'?: GPSSignal_54
}>
/**
 * CPU Usage
 *
 * The CPU usage of the RCU.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type CPUUsage_1 = number
/**
 * Max CPU Usage
 *
 * Max CPU Usage of the RCU.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type MaxCPUUsage_2 = number
/**
 * Memory Usage
 *
 * Memory Usage of the RCU.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type MemoryUsage_3 = number
/**
 * Storage Usage
 *
 * Storage Usage of the RCU.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type StorageUsage_4 = number
/**
 * Battery Level
 *
 * The Battery Level of the RCU.
 *
 * ID: 51
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type BatteryLevel_51 = number
/**
 * Network Bandwidth
 *
 * Network Bandwidth of the RCU.
 *
 * ID: 52
 * MultipleInstances: false
 * Mandatory: true
 * Units: Mbit/s
 */
type NetworkBandwidth_52 = number
/**
 * Mobile Signal
 *
 * Mobile Signal of the RCU.
 *
 * ID: 53
 * MultipleInstances: false
 * Mandatory: true
 */
type MobileSignal_53 = number
/**
 * Wi-Fi Signal
 *
 * Wi-Fi Signal of the RCU.
 *
 * ID: 55
 * MultipleInstances: false
 * Mandatory: true
 */
type Wi_FiSignal_55 = number
/**
 * UpLink Rate
 *
 * UpLink Rate of the network used by the RCU.
 *
 * ID: 56
 * MultipleInstances: false
 * Mandatory: true
 * Units: Mbit/s
 */
type UpLinkRate_56 = number
/**
 * DownLink Rate
 *
 * DownLink Rate of the network used by the RCU.
 *
 * ID: 57
 * MultipleInstances: false
 * Mandatory: true
 * Units: Mbit/s
 */
type DownLinkRate_57 = number
/**
 * Packet Loss Rate
 *
 * Packet Loss Rate in percentage.
 *
 * ID: 58
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type PacketLossRate_58 = number
/**
 * Network Latency
 *
 * Network Latency in ms.
 *
 * ID: 59
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type NetworkLatency_59 = number
/**
 * Battery Temperature
 *
 * Battery Temperature.
 *
 * ID: 300
 * MultipleInstances: false
 * Mandatory: true
 * Units: Cel
 */
type BatteryTemperature_300 = number
/**
 * GPS Signal
 *
 * GPS Signal of the RCU.
 *
 * ID: 54
 * MultipleInstances: false
 * Mandatory: false
 */
type GPSSignal_54 = number
/**
 * The objectURN for RCU PM
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10318'
