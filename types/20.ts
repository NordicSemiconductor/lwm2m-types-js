/**
 * Event Log
 *
 * The Event Log Object is a multiple Instances Object defined for logging data
 * in a straightforward and generic way.
 * The Resources of that Object are based on the OMA LwM2M set of reusable
 * Resources dedicated to logging event activity.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/20.xml
 *
 * ID: 20
 * LWM2MVersion: 1.0
 * ObjectVersion: 2.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type EventLog_20 = Readonly<
	Array<{
		'4014': LogData_4014
		'4010'?: LogClass_4010
		'4013'?: LogStatus_4013
		'4015'?: LogDataFormat_4015
	}>
>
/**
 * LogData
 *
 * Read Access on that Resource returns the Data Collection associated to the
 * current Object Instance.
 *
 * ID: 4014
 * MultipleInstances: false
 * Mandatory: true
 */
type LogData_4014 = string
/**
 * LogClass
 *
 * Define the Log Event Class: 0: generic (default) 1: system 2: security 3:
 * event 4: trace 5: panic 6: charging [7-99]: reserved [100-255]: vendor
 * specific
 *
 * ID: 4010
 * MultipleInstances: false
 * Mandatory: false
 */
type LogClass_4010 = number
/**
 * LogStatus
 *
 * Data Collection process status: Each bit of this Resource Instance value
 * defines specific status: 1st LSB 0=running, 1=stopped 2nd LSB 1=LogData
 * contains Valid Data 0=LogData doesn't contain Valid Data 3rd LSB 1=Error
 * occurred during Data Collection 0=No error [4th -7th ] LSB:reserved 8th LSB:
 * vendor specific.
 *
 * ID: 4013
 * MultipleInstances: false
 * Mandatory: false
 */
type LogStatus_4013 = number
/**
 * LogDataFormat
 *
 * when set by the Server, this Resource indicates to the Client, what is the
 * Server preferred data format to use when the LogData Resource is returned
 * . when retrieved by the Server, this Resource indicates which specific data
 * format is used when the LogData Resource is returned to the Server
 * 0 or Resource not present : no specific data format (sequence of bytes)
 * 1 : OMA-LwM2M TLV format
 * 2 : OMA-LwM2M JSON format
 * 3: OMA-LwM2M CBOR format
 * [4..99] reserved
 * [100..255] vendor specific data format
 *
 *
 * ID: 4015
 * MultipleInstances: false
 * Mandatory: false
 */
type LogDataFormat_4015 = number
/**
 * The objectURN for Event Log
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '20:2.0'
