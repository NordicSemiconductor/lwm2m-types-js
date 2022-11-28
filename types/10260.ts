/**
 * RDB
 *
 * This object allows manipulation of Runtime Database variables.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10260.xml
 *
 * ID: 10260
 * LWM2MVersion: 1.0
 * ObjectVersion: 2.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type RDB_10260 = Readonly<
	Array<{
		'0': Key_0
		'1'?: Value_1
		'2'?: Exists_2
		'3'?: Persistent_3
	}>
>
/**
 * Key
 *
 * The name of the RDB variable that this instance currently represents. Writing
 * to this resource will not rename or otherwise modify the associated RDB
 * variable, rather it will re-assign the instance to represent a different
 * variable.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type Key_0 = string
/**
 * Value
 *
 * The current value of the RDB variable associated with this instance. Reading
 * this resource will return a "Not Found" response code if the associated
 * variable does not exist. Writing to this resource will create the associated
 * variable if it does not already exist.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 * Units:
         
 */
type Value_1 = string
/**
 * Exists
 *
 * Indicates whether the RDB variable associated with this instance currently
 * exists. Writing FALSE to this resource will delete the associated variable if
 * it exists. Writing TRUE to this resource will create the associated variable
 * if it does not already exist. Variables created by this resource will be
 * initialised to an empty string.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units:
         
 */
type Exists_2 = boolean
/**
 * Persistent
 *
 * Configure whether or not the RDB variable associated with this instance will
 * be saved to persistent storage.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units:
         
 */
type Persistent_3 = boolean
/**
 * The objectURN for RDB
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10260:2.0'
