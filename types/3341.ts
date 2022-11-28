/**
 * Addressable Text Display
 *
 * This IPSO object is used to send text to a text-only or text mode graphics
 * display. Writing a string of text to the text resource causes it to be
 * displayed at the selected X and Y locations on the display. If X or Y are set
 * to a value greater than the size of the display, the position "wraps around"
 * to the modulus of the setting and the display size. Likewise, if the text
 * string overflows the display size, the text "wraps around" and displays on
 * the next line down or, if the last line has been written, wraps around to the
 * top of the display. Brightness and Contrast controls are provided to allow
 * control of various display types including STN and DSTN type LCD character
 * displays. Writing an empty payload to the Clear Display resource causes the
 * display to be erased.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3341.xml
 *
 * ID: 3341
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type AddressableTextDisplay_3341 = Readonly<
	Array<{
		'5527': Text_5527
		'5528'?: XCoordinate_5528
		'5529'?: YCoordinate_5529
		'5531'?: Contrast_5531
		'5545'?: MaxXCoordinate_5545
		'5546'?: MaxYCoordinate_5546
		'5548'?: Level_5548
		'5750'?: ApplicationType_5750
	}>
>
/**
 * Text
 *
 * A string of text.
 *
 * ID: 5527
 * MultipleInstances: false
 * Mandatory: true
 */
type Text_5527 = string
/**
 * X Coordinate
 *
 * X Coordinate.
 *
 * ID: 5528
 * MultipleInstances: false
 * Mandatory: false
 */
type XCoordinate_5528 = number
/**
 * Y Coordinate
 *
 * Y Coordinate.
 *
 * ID: 5529
 * MultipleInstances: false
 * Mandatory: false
 */
type YCoordinate_5529 = number
/**
 * Contrast
 *
 * Proportional control, integer value between 0 and 100 as a percentage.
 *
 * ID: 5531
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Contrast_5531 = number
/**
 * Max X Coordinate
 *
 * The highest X coordinate the display supports before wrapping to the next
 * line.
 *
 * ID: 5545
 * MultipleInstances: false
 * Mandatory: false
 */
type MaxXCoordinate_5545 = number
/**
 * Max Y Coordinate
 *
 * The highest Y coordinate the display supports before wrapping to the next
 * line.
 *
 * ID: 5546
 * MultipleInstances: false
 * Mandatory: false
 */
type MaxYCoordinate_5546 = number
/**
 * Level
 *
 * Used to represent a level control such as audio volume.
 *
 * ID: 5548
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Level_5548 = number
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
 * The objectURN for Addressable Text Display
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3341'
