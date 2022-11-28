/**
 * oA Physical Illuminance Sensor
 *
 * The 'oA_Physical_Illuminance_Sensor' represents the physical part of an
 * illuminance sensor. All logical illuminance sensors (object instances of 'oA
 * Illuminance Sensor') are mapped to one physical illuminance sensor.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3398.xml
 *
 * ID: 3398
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oAPhysicalIlluminanceSensor_3398 = Readonly<
	Array<{
		'907': ErrorStatus_907
		'908': MountingLocation_908
		'4001'?: ObjectVersion_4001
		'407'?: MinRangeValue_407
		'408'?: MaxRangeValue_408
		'901'?: DocumentaryDescription_901
	}>
>
/**
 * Error Status
 *
 * Error status is a bit coded value that shows all current errors on the
 * object. The error status changes as soon as a new error occurs or an old one
 * is resolved. Bitwise: 0 (LSB): Hardware_Error, 1: Temperature_Error, 2:
 * Range_Error, 3: Quality_Error
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
 * Min Range Value
 *
 * The minimum value that can be measured by the sensor
 *
 * ID: 407
 * MultipleInstances: false
 * Mandatory: false
 * Units: lx
 */
type MinRangeValue_407 = number
/**
 * Max Range Value
 *
 * The maximum value that can be measured by the sensor
 *
 * ID: 408
 * MultipleInstances: false
 * Mandatory: false
 * Units: lx
 */
type MaxRangeValue_408 = number
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
 * The objectURN for oA Physical Illuminance Sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3398@1.1'
