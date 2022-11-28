/**
 * Up/Down Control
 *
 * This IPSO object is used to report the state of an up/down control element
 * like a pair of push buttons or a rotary encoder. Counters for increase and
 * decrease operations are provided for counting pulses from a quadrature
 * encoder.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3344.xml
 *
 * ID: 3344
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Up_DownControl_3344 = Readonly<
	Array<{
		'5532': IncreaseInputState_5532
		'5533': DecreaseInputState_5533
		'5541'?: UpCounter_5541
		'5542'?: DownCounter_5542
		'5750'?: ApplicationType_5750
	}>
>
/**
 * Increase Input State
 *
 * Indicates an increase control action.
 *
 * ID: 5532
 * MultipleInstances: false
 * Mandatory: true
 */
type IncreaseInputState_5532 = boolean
/**
 * Decrease Input State
 *
 * Indicates a decrease control action.
 *
 * ID: 5533
 * MultipleInstances: false
 * Mandatory: true
 */
type DecreaseInputState_5533 = boolean
/**
 * Up Counter
 *
 * Counts the number of times the increase control has been operated. Writing a
 * 0 resets the counter.
 *
 * ID: 5541
 * MultipleInstances: false
 * Mandatory: false
 */
type UpCounter_5541 = number
/**
 * Down Counter
 *
 * Counts the times the decrease control has been operated. Writing a 0 resets
 * the counter.
 *
 * ID: 5542
 * MultipleInstances: false
 * Mandatory: false
 */
type DownCounter_5542 = number
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
 * The objectURN for Up/Down Control
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3344'
