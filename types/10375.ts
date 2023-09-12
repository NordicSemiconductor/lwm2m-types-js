/**
 * Modbus Register Cluster
 *
 * This LwM2M Object represents a set of Modbus registers and acts as an
 * interface to read and write their values.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10375.xml
 *
 * ID: 10375
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type ModbusRegisterCluster_10375 = Readonly<
	Array<{
		'0': Connection_0
		'1': RegisterType_1
		'2': UnitID_2
		'3': StartingRegisterAddress_3
		'5': Values_5
		'4'?: QuantityofRegisters_4
		'6'?: MinimumMeasuredValues_6
		'7'?: MaximumMeasuredValues_7
	}>
>
/**
 * Connection
 *
 * Link to an instance of the "Modbus Connection" object to use.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Connection_0 = string
/**
 * Register Type
 *
 * Type of Modbus objects to access.
 * 1: Coil
 * 2: Discrete Input
 * 3: Holding Register
 * 4: Input Register
 * Note: For convenience, the values are equal to function codes corresponding
 * to Modbus "read" operations for each object type.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type RegisterType_1 = number
/**
 * Unit ID
 *
 * Server unit ID that this register cluster addresses.
 * Special non-significant value of 255 is valid only for Modbus TCP
 * connections.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type UnitID_2 = number
/**
 * Starting Register Address
 *
 * Address of the first register that this register cluster addresses.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type StartingRegisterAddress_3 = number
/**
 * Values
 *
 * List of values of the registers addressed by this register cluster.
 * The Resource Instance IDs shall range from 0 to "Quantity of Registers - 1"
 * (note: absolute register address cannot be used, because 65535 is a valid
 * Modbus register ID, but not a valid LwM2M Resource Instance ID).
 * When the Register Type is Coil or Discrete Input, "0" and "1" are the only
 * valid values for each of the Resource Instances.
 * When the Register Type is Discrete Input or Input Register, this resource
 * shall behave as a read-only resource, i.e. as if the "Operations" attribute
 * was "R".
 * Even if the Register Type is Coil or Holding Register, any write operation
 * that would result in the set of valid Resource Instance IDs being changed,
 * shall result in a Bad Request error.
 *
 * ID: 5
 * MultipleInstances: true
 * Mandatory: true
 */
type Values_5 = Array<number>
/**
 * Quantity of Registers
 *
 * Number of registers in this register cluster.
 * If the Register Type is Holding Register or Input Register, the valid range
 * for this resource is 1..125. Larger values are only supported for Coils and
 * Discrete Inputs.
 * If this resource is not present, the default value of 1 is assumed.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type QuantityofRegisters_4 = number
/**
 * Minimum Measured Values
 *
 * Minimum values recorded by each of the registers in this cluster.
 * If this resource is supported, the Resource Instance IDs shall range from 0
 * to "Quantity of Registers - 1". Each Resource Instance shall hold the minimum
 * value recorded by the corresponding Resource Instance of the "Values"
 * resource since the configuration of this cluster (resources 0-4) has been
 * last changed, or since the "Reset Minimum and Maximum Measured Values"
 * resource has been last executed, whichever was later.
 *
 * ID: 6
 * MultipleInstances: true
 * Mandatory: false
 */
type MinimumMeasuredValues_6 = Array<number>
/**
 * Maximum Measured Values
 *
 * Maximum values recorded by each of the registers in this cluster.
 * If this resource is supported, the Resource Instance IDs shall range from 0
 * to "Quantity of Registers - 1". Each Resource Instance shall hold the maximum
 * value recorded by the corresponding Resource Instance of the "Values"
 * resource since the configuration of this cluster (resources 0-4) has been
 * last changed, or since the "Reset Minimum and Maximum Measured Values"
 * resource has been last executed, whichever was later.
 *
 * ID: 7
 * MultipleInstances: true
 * Mandatory: false
 */
type MaximumMeasuredValues_7 = Array<number>
/**
 * The objectURN for Modbus Register Cluster
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10375'
