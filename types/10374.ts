/**
 * Modbus Connection
 *
 * This LwM2M Object is used to configure a Modbus protocol connection.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10374.xml
 *
 * ID: 10374
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type ModbusConnection_10374 = Readonly<
	Array<{
		'0': Address_0
		'1': PhysicalLayerType_1
		'2': Enable_2
		'8': State_8
		'3'?: Baudrate_3
		'4'?: StopBits_4
		'5'?: Parity_5
		'6'?: HardwareControlFlowMode_6
		'7'?: AvailableRTUPorts_7
	}>
>
/**
 * Address
 *
 * Address uniquely defining the Modbus connection within a given physical
 * layer. The LwM2M Client is assumed to take the role of a Modbus client.
 * For Modbus TCP, this is a hostname with optional port number, e.g.
 * "10.11.12.13" or "example.com:502". Port number 502 is the default if not
 * specified.
 * For Modbus RTU, this is an implementation-defined unique identifier of a
 * physical port. Suggested formats are UNIX-style device names (e.g.
 * "/dev/tty1") or DOS-style port designations (e.g. "COM2"), but any strings
 * may be used. Values that are valid for this LwM2M Client are listed in the
 * "Available RTU ports" resource. The Client MAY treat configuration as invalid
 * if Physical Layer Type is set to Modbus RTU and the Address is not equal to
 * any of the "Available RTU ports".
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Address_0 = string
/**
 * Physical Layer Type
 *
 * Type of the physical layer to use for this connection.
 * 0: Modbus TCP
 * 1: Modbus RTU (RS-232)
 * 2: Modbus RTU (RS-485)
 * Additional types MAY be specified in future revisions of this object.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type PhysicalLayerType_1 = number
/**
 * Enable
 *
 * Enables or disables this Modbus connection.
 * When set to false, this Modbus connection is administratively disabled and
 * shall not function. Upon setting it to true, the LwM2M Client shall attempt
 * opening the relevant connection and report the result of that operation in
 * the "State" resource.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type Enable_2 = boolean
/**
 * State
 *
 * State of this Modbus connection.
 * 0: disabled (MUST NOT be used unless the "Enable" resource is set to false)
 * 1: connecting
 * 2: successfully connected
 * 3: invalid or unsupported configuration
 * 4: connection error
 * If this resource reached the "connection error" state after having been
 * successfully connected previously, the LwM2M Client SHOULD apply an
 * implementation-specific deferred retry policy to try establishing the
 * connection again.
 * If the resource reached the "connection error" state as a direct result of
 * setting the "Enable" resource to true or changing the configuration while in
 * the enabled state, the LwM2M Client MAY apply an implementation-specific
 * deferred retry policy to try establishing the connection again, or it MAY
 * stay in the "connection error" state until further reconfiguration by the
 * LwM2M Server.
 * NOTE: The "connection error" state corresponds to any non-specific failure
 * case. More specific error cases MAY be specified in future revisions of this
 * object. LwM2M Server SHOULD interpret any unknown or invalid value reported
 * by the LwM2M Client as equivalent to "connection error".
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 */
type State_8 = number
/**
 * Baudrate
 *
 * Baudrate for the RTU link layer, e.g. 9600, 115200, etc.
 * NOTE: 8 data bits are always used.
 * Mandatory if Physical Layer Type is set to Modbus RTU.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: bit/s
 */
type Baudrate_3 = number
/**
 * Stop Bits
 *
 * Number of stop bits to use for the RTU link layer.
 * Mandatory if Physical Layer Type is set to Modbus RTU.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type StopBits_4 = number
/**
 * Parity
 *
 * Parity bit type to use for the RTU link layer.
 * 0: none
 * 1: even
 * 2: odd
 * Mandatory if Physical Layer Type is set to Modbus RTU.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Parity_5 = number
/**
 * Hardware Control Flow Mode
 *
 * Type of hardware flow control to use for the RTU link layer.
 * 0: none
 * 1: Set RTS flag when sending data
 * 2: Set RTS flag when NOT sending data
 * Mandatory if Physical Layer Type is set to Modbus RTU.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type HardwareControlFlowMode_6 = number
/**
 * Available RTU Ports
 *
 * List of all valid values for the "Address" resource when Physical Layer Type
 * is set to Modbus RTU. The Resource Instance IDs shall have no semantic
 * meaning. The value of this resource shall be equal for all instances of this
 * Object.
 * Mandatory if this LwM2M Client has at least one physical port usable for
 * Modbus RTU.
 *
 * ID: 7
 * MultipleInstances: true
 * Mandatory: false
 */
type AvailableRTUPorts_7 = string
/**
 * The objectURN for Modbus Connection
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10374'
