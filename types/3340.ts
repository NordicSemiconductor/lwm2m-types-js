/**
 * Timer
 *
 * This IPSO object is used to time events and actions, using patterns common to
 * industrial timers. A write to the trigger resource or On/Off input state
 * change starts the timing operation, and the timer remaining time shows zero
 * when the operation is complete. The patterns supported are One-Shot (mode 1),
 * On-Time or Interval (mode 2), Time delay on pick-up or TDPU (mode 3), and
 * Time Delay on Drop-Out or TDDO (mode 4). Mode 0 disables the timer, so the
 * output follows the input with no delay. A counter is provided to count
 * occurrences of the timer output changing from 0 to 1. Writing a value of zero
 * resets the counter. The Digital Input State resource reports the state of the
 * timer output.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3340.xml
 *
 * ID: 3340
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Timer_3340 = Readonly<
	Array<{
		'5521': DelayDuration_5521
		'5501'?: DigitalInputCounter_5501
		'5525'?: MinimumOff_time_5525
		'5526'?: TimerMode_5526
		'5534'?: Counter_5534
		'5538'?: RemainingTime_5538
		'5543'?: DigitalState_5543
		'5544'?: CumulativeTime_5544
		'5750'?: ApplicationType_5750
		'5850'?: On_Off_5850
	}>
>
/**
 * Delay Duration
 *
 * The duration of the time delay.
 *
 * ID: 5521
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type DelayDuration_5521 = number
/**
 * Digital Input Counter
 *
 * The cumulative value of active state detected.
 *
 * ID: 5501
 * MultipleInstances: false
 * Mandatory: false
 */
type DigitalInputCounter_5501 = number
/**
 * Minimum Off-time
 *
 * The duration of the rearm delay (i.e. the delay from the end of one cycle
 * until the beginning of the next, the inhibit time).
 *
 * ID: 5525
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type MinimumOff_time_5525 = number
/**
 * Timer Mode
 *
 * Type of timer pattern used by the timer. 1: One-shot, 2: On-Time or Interval,
 * 3: Time delay on pick-up, 4: Time Delay on Drop-Out, 0: disables the timer.
 *
 * ID: 5526
 * MultipleInstances: false
 * Mandatory: false
 */
type TimerMode_5526 = number
/**
 * Counter
 *
 * Counts the number of times the timer output transitions from 0 to 1.
 *
 * ID: 5534
 * MultipleInstances: false
 * Mandatory: false
 */
type Counter_5534 = number
/**
 * Remaining Time
 *
 * The time remaining in an operation.
 *
 * ID: 5538
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type RemainingTime_5538 = number
/**
 * Digital State
 *
 * The current state of the timer output.
 *
 * ID: 5543
 * MultipleInstances: false
 * Mandatory: false
 */
type DigitalState_5543 = boolean
/**
 * Cumulative Time
 *
 * The total time in seconds that the timer input is true. Writing a 0 resets
 * the time.
 *
 * ID: 5544
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type CumulativeTime_5544 = number
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
 * On/Off
 *
 * On/off control. Boolean value where True is On and False is Off.
 *
 * ID: 5850
 * MultipleInstances: false
 * Mandatory: false
 */
type On_Off_5850 = boolean
/**
 * The objectURN for Timer
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3340'
