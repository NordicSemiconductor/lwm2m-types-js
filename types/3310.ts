/**
 * Load Control
 *
 * This Object is used for demand-response load control and other load control
 * in automation application (not limited to power).
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3310.xml
 *
 * ID: 3310
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type LoadControl_3310 = Readonly<
	Array<{
		'5823': EventIdentifier_5823
		'5824': StartTime_5824
		'5825': DurationInMin_5825
		'5518'?: Timestamp_5518
		'5750'?: ApplicationType_5750
		'5826'?: CriticalityLevel_5826
		'5827'?: AvgLoadAdjPct_5827
		'5828'?: DutyCycle_5828
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Event Identifier
 *
 * The event identifier as a string.
 *
 * ID: 5823
 * MultipleInstances: false
 * Mandatory: true
 */
type EventIdentifier_5823 = string
/**
 * Start Time
 *
 * Time when the event started.
 *
 * ID: 5824
 * MultipleInstances: false
 * Mandatory: true
 */
type StartTime_5824 = number
/**
 * Duration In Min
 *
 * The duration of the event in minutes.
 *
 * ID: 5825
 * MultipleInstances: false
 * Mandatory: true
 * Units: min
 */
type DurationInMin_5825 = number
/**
 * Timestamp
 *
 * The timestamp of when the measurement was performed.
 *
 * ID: 5518
 * MultipleInstances: false
 * Mandatory: false
 */
type Timestamp_5518 = number
/**
 * Application Type
 *
 * The application type of the sensor or actuator as a string depending on the
 * use case.
 *
 * ID: 5750
 * MultipleInstances: false
 * Mandatory: false
 */
type ApplicationType_5750 = string
/**
 * Criticality Level
 *
 * The criticality of the event. The device receiving the event will react in an
 * appropriate fashion for the device.
 *
 * ID: 5826
 * MultipleInstances: false
 * Mandatory: false
 */
type CriticalityLevel_5826 = number
/**
 * Avg Load AdjPct
 *
 * Defines the maximum energy usage of the receiving device, as a percentage of
 * the device's normal maximum energy usage.
 *
 * ID: 5827
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type AvgLoadAdjPct_5827 = number
/**
 * Duty Cycle
 *
 * Defines the duty cycle for the load control event, i.e, what percentage of
 * time the receiving device is allowed to be on.
 *
 * ID: 5828
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type DutyCycle_5828 = number
/**
 * Fractional Timestamp
 *
 * Fractional part of the timestamp when sub-second precision is used (e.g.,
 * 0.23 for 230 ms).
 *
 * ID: 6050
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type FractionalTimestamp_6050 = number
/**
 * The objectURN for Load Control
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3310:1.1'
