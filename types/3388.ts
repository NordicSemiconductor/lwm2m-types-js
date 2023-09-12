/**
 * oA Device
 *
 * The 'oA Device' represents the OpenAIS specific parameters of a Device that
 * are necessary in addition to the LWM2M Device.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3388.xml
 *
 * ID: 3388
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oADevice_3388 = Readonly<
	Array<{
		'503': CPUTemperature_503
		'504': ExecutingObjects_504
		'907': ErrorStatus_907
		'908': MountingLocation_908
		'910': TotalEnergyUsage_910
		'911': ActualPowerUsage_911
		'500'?: OEMID_500
		'501'?: OEMString_501
		'505'?: SystemFailureTime_505
		'901'?: DocumentaryDescription_901
		'912'?: AccuracyClass_912
		'929'?: BMSID_929
		'4001'?: ObjectVersion_4001
	}>
>
/**
 * CPU Temperature
 *
 * Current temperature of the CPU
 *
 * ID: 503
 * MultipleInstances: false
 * Mandatory: true
 * Units: C
 */
type CPUTemperature_503 = number
/**
 * Executing Objects
 *
 * Link to Physical Object Instances that are part of this device in CoRE Link
 * Format [RFC6690](https://tools.ietf.org/html/rfc6690)
 *
 * ID: 504
 * MultipleInstances: true
 * Mandatory: true
 */
type ExecutingObjects_504 = Array<string>
/**
 * Error Status
 *
 * Error status is a bit coded value that shows all current errors on the
 * object. The error status changes as soon as a new error occurs or an old one
 * is resolved. Bitwise: 0 (LSB): Communication_Error, 1: Power_Supply_Error, 2:
 * Firmware_Error, 3: Over_Temperature, 4: Vendor_Specific_Error_1, 5:
 * Vendor_Specific_Error_2, 6: Vendor_Specific_Error_3, 7:
 * Vendor_Specific_Error_4, 8: Vendor_Specific_Error_5, 9:
 * Vendor_Specific_Error_6, 10: Vendor_Specific_Error_7, 11:
 * Vendor_Specific_Error_8, 12: Vendor_Specific_Error_9, 13:
 * Vendor_Specific_Error_10, 14: Vendor_Specific_Error_11, 15:
 * Vendor_Specific_Error_12
 *
 * ID: 907
 * MultipleInstances: false
 * Mandatory: true
 */
type ErrorStatus_907 = number
/**
 * Mounting Location
 *
 * Describes the location of the device within the building. The content of the
 * string is site specific.
 *
 * ID: 908
 * MultipleInstances: false
 * Mandatory: true
 */
type MountingLocation_908 = string
/**
 * Total Energy Usage
 *
 * The total energy usage of the device (accumulated value)
 *
 * ID: 910
 * MultipleInstances: false
 * Mandatory: true
 * Units: Ws
 */
type TotalEnergyUsage_910 = number
/**
 * Actual Power Usage
 *
 * The actual power usage of the device. Scaling is 0.1W / unit
 *
 * ID: 911
 * MultipleInstances: false
 * Mandatory: true
 * Units: W
 */
type ActualPowerUsage_911 = number
/**
 * OEM ID
 *
 * OEM ID: Identifies the OEM product (using its GTIN) that has this
 * (electronic) device built in
 *
 * ID: 500
 * MultipleInstances: false
 * Mandatory: false
 */
type OEMID_500 = string
/**
 * OEM String
 *
 * Human readable OEM ID, e.g. the OEM company and product name that has this
 * (electronic) device built in
 *
 * ID: 501
 * MultipleInstances: false
 * Mandatory: false
 */
type OEMString_501 = string
/**
 * System Failure Time
 *
 * When the Object is not able to communicate with a control function in the
 * network, in this case for a period of 10s, the connection is considered lost
 * and the light point automatically sets to the value indicated in 'System
 * Failure Intensity'.
 *
 * ID: 505
 * MultipleInstances: false
 * Mandatory: false
 * Units: ms
 */
type SystemFailureTime_505 = number
/**
 * Documentary Description
 *
 * Resource to hold a documentary text description of the object.
 *
 * ID: 901
 * MultipleInstances: false
 * Mandatory: false
 */
type DocumentaryDescription_901 = string
/**
 * Accuracy Class
 *
 * The accuracy class of the energy sensor on the device (using either %
 * accuracy or a letter that defines the accuracy class)
 *
 * ID: 912
 * MultipleInstances: false
 * Mandatory: false
 */
type AccuracyClass_912 = string
/**
 * BMS ID
 *
 * ID to be used in BMS: identifies the devices role in the (BMS) system
 *
 * ID: 929
 * MultipleInstances: false
 * Mandatory: false
 */
type BMSID_929 = number
/**
 * ObjectVersion
 *
 * LWM2M Object versioning label.
 *
 * ID: 4001
 * MultipleInstances: false
 * Mandatory: false
 */
type ObjectVersion_4001 = string
/**
 * The objectURN for oA Device
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3388@1.1'
