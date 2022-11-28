/**
 * Filling level
 *
 * The uCIFI filling level sensor measures how full and/or how empty a container
 * (e.g. waste, fuel) is and reports it either in percentage or in centimeters.
 * The filling level sensor may be complemented with a temperature sensor to
 * compose a waste filling sensor that can also identify waste container fire.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3435.xml
 *
 * ID: 3435
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Fillinglevel_3435 = Readonly<
	Array<{
		'2': Actualfillingpercentage_2
		'5': Containerfull_5
		'7': Containerempty_7
		'1'?: Containerheight_1
		'10'?: Forecastfulldate_10
		'11'?: Forecastemptydate_11
		'12'?: Containeroutoflocation_12
		'13'?: Containeroutofposition_13
		'3'?: Actualfillinglevel_3
		'4'?: Highthreshold_4
		'6'?: Lowthreshold_6
		'8'?: Averagefillingspeed_8
	}>
>
/**
 * Actual filling percentage
 *
 * Percentage of container filled with content.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type Actualfillingpercentage_2 = number
/**
 * Container full
 *
 * Set to True if the actual filling percentage is above the high threshold.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type Containerfull_5 = boolean
/**
 * Container empty
 *
 * Set to True if the actual filling percentage is below the low threshold.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type Containerempty_7 = boolean
/**
 * Container height
 *
 * Height of the container.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 * Units: cm
 */
type Containerheight_1 = number
/**
 * Forecast full date
 *
 * Next date at which the container should reach the high threshold.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type Forecastfulldate_10 = number
/**
 * Forecast empty date
 *
 * Next date at which the container should reach the low threshold.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type Forecastemptydate_11 = number
/**
 * Container out of location
 *
 * Set to True if the container is not at the location where it should be.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type Containeroutoflocation_12 = boolean
/**
 * Container out of position
 *
 * Set to True if the container is not in correct upright position.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type Containeroutofposition_13 = boolean
/**
 * Actual filling level
 *
 * Height of content in the container.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: cm
 */
type Actualfillinglevel_3 = number
/**
 * High threshold
 *
 * Threshold above which the container is considered full.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Highthreshold_4 = number
/**
 * Low threshold
 *
 * Threshold below which the container is considered empty.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Lowthreshold_6 = number
/**
 * Average filling speed
 *
 * Average percentage filled per day.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Averagefillingspeed_8 = number
/**
 * The objectURN for Filling level
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3435'
