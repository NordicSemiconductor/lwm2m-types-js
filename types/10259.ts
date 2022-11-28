/**
 * System Log
 *
 * This object provides read access to log buffers as well as limited
 * configuration of logging services.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10259.xml
 *
 * ID: 10259
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type SystemLog_10259 = Readonly<
	Array<{
		'0': Name_0
		'1': ReadAll_1
		'2'?: Read_2
		'3'?: Enabled_3
		'4'?: CaptureLevel_4
	}>
>
/**
 * Name
 *
 * Short name describing the log source represented by this particular
 * instance.
 * For syslog-compatible log sources this value should be "syslog". If multiple
 * syslog-compatible log sources exist on a device then each should be given a
 * distinct name that is then prefixed with "syslog-".
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type Name_0 = string
/**
 * Read All
 *
 * Read the entire current contents of the log buffer.
 * Result is delivered as a display-formatted UTF-8 string, with each message
 * entry on a new line.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units:
         
 */
type ReadAll_1 = string
/**
 * Read
 *
 * Similar to Read All, but only reads log entries that have arrived since the
 * last time this log buffer was read.
 * If the LwM2M client is connected to multiple servers then the last read
 * position should be tracked separately for each server.
 * If this is the first attempt to read the log for a given connection then this
 * resource behaves the same as Read All.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units:
         
 */
type Read_2 = string
/**
 * Enabled
 *
 * Enable or disable log capture for this source.
 * If this resource is not provided by an implementation, then the existence of
 * a System Log instance is taken as implicit confirmation that the log source
 * it represents is currently enabled.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units:
         
 */
type Enabled_3 = boolean
/**
 * Capture Level
 *
 * For log sources that support message priorities, this resource configures the
 * minimum priority to capture.
 * For syslog-compatible log sources the following enumeration must be used: 1 =
 * Emergency, 2 = Alert, 3 = Critical, 4 = Error, 5 = Warning, 6 = Notice, 7 =
 * Info, 8 = Debug.
 * For other log sources this is left up to the implementer, with the
 * requirement that consecutive values are used, starting at 1 and sorted so
 * that message verbosity increases as the number ascends.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units:
         
 */
type CaptureLevel_4 = number
/**
 * The objectURN for System Log
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10259'
