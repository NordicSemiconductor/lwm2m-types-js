/**
 * Device
 *
 * This LwM2M Object provides a range of device related information which can be
 * queried by the LwM2M Server, and a device reboot and factory reset function.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3.xml
 *
 * ID: 3
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.2
 * MultipleInstances: false
 * Mandatory: true
 */
export type Device_3 = Readonly<{
	'11': ErrorCode_11
	'16': SupportedBindingandModes_16
	'0'?: Manufacturer_0
	'1'?: ModelNumber_1
	'2'?: SerialNumber_2
	'3'?: FirmwareVersion_3
	'6'?: AvailablePowerSources_6
	'7'?: PowerSourceVoltage_7
	'8'?: PowerSourceCurrent_8
	'9'?: BatteryLevel_9
	'10'?: MemoryFree_10
	'13'?: CurrentTime_13
	'14'?: UTCOffset_14
	'15'?: Timezone_15
	'17'?: DeviceType_17
	'18'?: HardwareVersion_18
	'19'?: SoftwareVersion_19
	'20'?: BatteryStatus_20
	'21'?: MemoryTotal_21
	'22'?: ExtDevInfo_22
}>
/**
 * Error Code
 *
 * 0=No error
 * 1=Low battery power
 * 2=External power supply off
 * 3=GPS module failure
 * 4=Low received signal strength
 * 5=Out of memory
 * 6=SMS failure
 * 7=IP connectivity failure
 * 8=Peripheral malfunction
 * 9..15=Reserved for future use
 * 16..32=Device specific error codes
 *
 * When the single Device Object Instance is initiated, there is only one error
 * code Resource Instance whose value is equal to 0 that means no error. When
 * the first error happens, the LwM2M Client changes error code Resource
 * Instance to any non-zero value to indicate the error type. When any other
 * error happens, a new error code Resource Instance is created. When an error
 * associated with a Resource Instance is no longer present, that Resource
 * Instance is deleted. When the single existing error is no longer present, the
 * LwM2M Client returns to the original no error state where Instance 0 has
 * value 0.
 * This error code Resource MAY be observed by the LwM2M Server. How to deal
 * with LwM2M Client’s error report depends on the policy of the LwM2M Server.
 * Error codes in between 16 and 32 are specific to the Device and may have
 * different meanings among implementations.
 *
 * ID: 11
 * MultipleInstances: true
 * Mandatory: true
 */
type ErrorCode_11 = Array<number>
/**
 * Supported Binding and Modes
 *
 * Indicates which bindings and modes are supported in the LwM2M Client. The
 * possible values are those listed in the LwM2M Core Specification.
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: true
 */
type SupportedBindingandModes_16 = string
/**
 * Manufacturer
 *
 * Human readable manufacturer name
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: false
 */
type Manufacturer_0 = string
/**
 * Model Number
 *
 * A model identifier (manufacturer specified string)
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type ModelNumber_1 = string
/**
 * Serial Number
 *
 * Serial Number
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type SerialNumber_2 = string
/**
 * Firmware Version
 *
 * Current firmware version of the Device.The Firmware Management function could
 * rely on this resource.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type FirmwareVersion_3 = string
/**
 * Available Power Sources
 *
 * 0: DC power
 * 1: Internal Battery
 * 2: External Battery
 * 3: Fuel Cell
 * 4: Power over Ethernet
 * 5: USB
 * 6: AC (Mains) power
 * 7: Solar
 * The same Resource Instance ID MUST be used to associate a given Power Source
 * (Resource ID:6) with its Present Voltage (Resource ID:7) and its Present
 * Current (Resource ID:8)
 *
 * ID: 6
 * MultipleInstances: true
 * Mandatory: false
 */
type AvailablePowerSources_6 = Array<number>
/**
 * Power Source Voltage
 *
 * Present voltage for each Available Power Sources Resource Instance. The unit
 * used for this resource is in mV.
 *
 * ID: 7
 * MultipleInstances: true
 * Mandatory: false
 */
type PowerSourceVoltage_7 = Array<number>
/**
 * Power Source Current
 *
 * Present current for each Available Power Source. The unit used for this
 * resource is in mA.
 *
 * ID: 8
 * MultipleInstances: true
 * Mandatory: false
 */
type PowerSourceCurrent_8 = Array<number>
/**
 * Battery Level
 *
 * Contains the current battery level as a percentage (with a range from 0 to
 * 100). This value is only valid for the Device internal Battery if present
 * (one Available Power Sources Resource Instance is 1).
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type BatteryLevel_9 = number
/**
 * Memory Free
 *
 * Estimated current available amount of storage space which can store data and
 * software in the LwM2M Device (expressed in kilobytes). Note: 1 kilobyte
 * corresponds to 1000 bytes.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type MemoryFree_10 = number
/**
 * Current Time
 *
 * Current UNIX time of the LwM2M Client.
 * The LwM2M Client should be responsible to increase this time value as every
 * second elapses.
 * The LwM2M Server is able to write this Resource to make the LwM2M Client
 * synchronized with the LwM2M Server.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type CurrentTime_13 = number
/**
 * UTC Offset
 *
 * Indicates the UTC offset currently in effect for this LwM2M Device. UTC+X
 * [ISO 8601].
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type UTCOffset_14 = string
/**
 * Timezone
 *
 * Indicates in which time zone the LwM2M Device is located, in IANA Timezone
 * (TZ) database format.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type Timezone_15 = string
/**
 * Device Type
 *
 * Type of the device (manufacturer specified string: e.g. smart meters / dev
 * Class / ...)
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 */
type DeviceType_17 = string
/**
 * Hardware Version
 *
 * Current hardware version of the device
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 */
type HardwareVersion_18 = string
/**
 * Software Version
 *
 * Current software version of the device (manufacturer specified string). On
 * elaborated LwM2M device, SW could be split in 2 parts: a firmware one and a
 * higher level software on top.
 * Both pieces of Software are together managed by LwM2M Firmware Update Object
 * (Object ID 5)
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: false
 */
type SoftwareVersion_19 = string
/**
 * Battery Status
 *
 * This value is only valid for the Device Internal Battery if present (one
 * Available Power Sources Resource Instance value is 1).
 * Battery
 * Status	Meaning	Description
 * 0	Normal	The battery is operating normally and not on power.
 * 1	Charging	The battery is currently charging.
 * 2	Charge Complete	The battery is fully charged and still on power.
 * 3	Damaged	The battery has some problem.
 * 4	Low Battery	The battery is low on charge.
 * 5	Not Installed	The battery is not installed.
 * 6	Unknown	The battery information is not available.
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 */
type BatteryStatus_20 = number
/**
 * Memory Total
 *
 * Total amount of storage space which can store data and software in the LwM2M
 * Device (expressed in kilobytes). Note: 1 kilobyte corresponds to 1000 bytes.
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 */
type MemoryTotal_21 = number
/**
 * ExtDevInfo
 *
 * Reference to external "Device" object instance containing information. For
 * example, such an external device can be a Host Device, which is a device into
 * which the Device containing the LwM2M client is embedded. This Resource may
 * be used to retrieve information about the Host Device.
 *
 * ID: 22
 * MultipleInstances: true
 * Mandatory: false
 */
type ExtDevInfo_22 = Array<string>
/**
 * The objectURN for Device
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3:1.2@1.1'
