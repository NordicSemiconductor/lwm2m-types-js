/**
 * AT Command
 *
 * Used to execute an AT command on a cellular modem
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10251.xml
 *
 * ID: 10251
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type ATCommand_10251 = Readonly<
	Array<{
		'0': Command_0
		'1': Response_1
		'2': Status_2
		'3'?: Timeout_3
	}>
>
/**
 * Command
 *
 * The AT command to run. Example: AT+CREG? to query registration status
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Command_0 = string
/**
 * Response
 *
 * Response to the AT command. Example: +CREG:0,5 If multiple lines are returned
 * as the modem response, each line will be returned in a separate resource.
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: true
 */
type Response_1 = string
/**
 * Status
 *
 * Status of the command execution as returned by the modem. Typical values:OK
 * ERROR
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: true
 */
type Status_2 = string
/**
 * Timeout
 *
 * Amount of time in seconds allowed for the modem to respond to the command.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Timeout_3 = number
/**
 * The objectURN for AT Command
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10251'
