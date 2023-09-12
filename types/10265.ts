/**
 * Leakage Detection Configuration
 *
 * The leakage detection configuration object provides a means for configuring
 * the timing and sampling frequency of a vibration based network leak detector
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10265.xml
 *
 * ID: 10265
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type LeakageDetectionConfiguration_10265 = Readonly<{
	'0': SampleTimes_0
	'2': DetectionMode_2
	'7': FirmwareVersion_7
	'1'?: SampleUTCOffset_1
	'3'?: TopFrequencyCount_3
	'4'?: FrequencyThresholds_4
	'5'?: FrequencyValues_5
}>
/**
 * Sample Times
 *
 * Sample Times is a readable and writable multi value resource used to control
 * when leak detection vibration sampling should occur. This is an integer value
 * representing seconds since midnight
 *
 * ID: 0
 * MultipleInstances: true
 * Mandatory: true
 */
type SampleTimes_0 = Array<number>
/**
 * Detection Mode
 *
 * Detection Mode is a readable and writeable resource used to indicate which
 * mode to run the leak detection sensor. Values are one of:-
 * 0. Disabled
 * 1. Alarm Only (default)
 * 2. Top Frequency Values
 * 3. All Frequency Values
 *
 * Disabled (0) the leak detection function should be disabled.
 * Alarm Only (1) for this mode no detailed frequency data is provided to the
 * LwM2M server and an alarm is raised if the Leakage Detection Daughter board
 * indicates that leak was detected.
 * Top Frequency Values (2) for this mode, only the top (Top Frequency Count)
 * values will be delivered to the LwM2M server via the Frequency Value
 * Resource
 * All Frequency Values(3) for this mode, all frequency values for all frequency
 * bands will be provided to the LwM2M server via the Frequency Value Resource
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type DetectionMode_2 = number
/**
 * Firmware Version
 *
 * Firmware Version is a readonly resource representing the current firmware
 * version of the Daughter Board.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type FirmwareVersion_7 = string
/**
 * Sample UTC Offset
 *
 * The Sample UTC Offset resource is a readable and writable resource
 * representing the time zone offset for this Leakage Detection Schedule
 * instance. If this resource is empty, the application should use the UTC
 * offset provided in the Device [/3/0/14] object instance resource or UTC if
 * not provided.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type SampleUTCOffset_1 = string
/**
 * Top Frequency Count
 *
 * Top Frequency Count is a readable and writeable resource used represent the
 * number of samples to provide if the Detection Mode is set to Mode 2 (Top
 * Frequency Values). If not provided, this value should default to 3
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type TopFrequencyCount_3 = number
/**
 * Frequency Thresholds
 *
 * Frequency Thresholds is a multiple value readable and writeable resource used
 * to represent upper bound thresholds for each of the frequency bands
 * configured on the daughter board. Being a multiple value resource, this
 * resource only needs to contain the values that are required to override the
 * default values provided by the daughter board firmware. As an example if the
 * frequency threshold for band 7 and band 52 needs to be overridden, then this
 * resource should just contain those two values:-
 * /TBD/0/4/7 = 123
 * /TBD/0/4/52 = 345
 *
 *
 * ID: 4
 * MultipleInstances: true
 * Mandatory: false
 */
type FrequencyThresholds_4 = Array<number>
/**
 * Frequency Values
 *
 * Frequency Values is a multiple value readonly resource used represent the
 * latest frequency values recorded by the daughter board. In Detection Mode 2
 * (Top Frequency Values) only the number of values configured in Top Frequency
 * Count will be provided. As an example, if the Top Frequency Count is 3 and
 * the top three frequency threshold deviations were on band 8, 44 and 101, this
 * resource would present:-
 * /TBD/0/5/8 = 434
 * /TBD/0/5/44 = 39
 * /TBD/0/5/101 = 349
 * In Detection Mode 3, this resource would present all frequency readings from
 * 1 through to the number of bands measured by the board.
 * This resource can either be observed by the LwM2M server (and subsequently
 * notified by the Client daily) or Read adhoc from the LwM2M server.
 *
 *
 * ID: 5
 * MultipleInstances: true
 * Mandatory: false
 */
type FrequencyValues_5 = Array<number>
/**
 * The objectURN for Leakage Detection Configuration
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10265'
