/**
 * Tilt sensor
 *
 * The uCIFI tilt sensor provides the angle between the object's internal
 * vertical and the perpendicular to the earth.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3429.xml
 *
 * ID: 3429
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Tiltsensor_3429 = Readonly<
	Array<{
		'1': Angle_1
		'2'?: MinimummeasuredAngle_2
		'3'?: Maximummeasuredangle_3
		'5'?: Outofpositionthreshold_5
		'6'?: Outofposition_6
	}>
>
/**
 * Angle
 *
 * Angle between the internal vertical line and the perpendicular to earth.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: rad
 */
type Angle_1 = number
/**
 * Minimum measured Angle
 *
 * Minimum angle measured by the tilt sensor since last reset or since power ON
 * if no reset.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: rad
 */
type MinimummeasuredAngle_2 = number
/**
 * Maximum measured angle
 *
 * Maximum angle measured by the tilt sensor since last reset or since power ON
 * if no reset.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: rad
 */
type Maximummeasuredangle_3 = number
/**
 * Out of position threshold
 *
 * The angle above which the device triggers an out of position event.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: rad
 */
type Outofpositionthreshold_5 = number
/**
 * Out of position
 *
 * Set to True if the angle is above the out of position threshold.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Outofposition_6 = boolean
/**
 * The objectURN for Tilt sensor
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3429'
