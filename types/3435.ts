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
 * ObjectVersion: 2.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Fillinglevel_3435 = Readonly<
	Array<{
		'2': Actualfillingpercentage_2
		'5': Containerfull_5
		'7': Containerempty_7
		'1'?: Containerheight_1
		'3'?: Actualfillinglevel_3
		'4'?: Highthreshold_4
		'6'?: Lowthreshold_6
		'8'?: Averagefillingspeed_8
		'10'?: Forecastfulldate_10
		'11'?: Forecastemptydate_11
		'12'?: Containeroutoflocation_12
		'13'?: Containeroutofposition_13
		'14'?: Containerwidth_14
		'15'?: Containerinstallationtype_15
		'16'?: Containervolumemax_16
		'17'?: Fillingsensorposition_17
		'18'?: Typeofmaterials_18
		'19'?: Fillingoperationscounter_19
		'21'?: Coveropen_21
		'22'?: Temperaturealarm_22
		'23'?: Waterinfiltrationalarm_23
		'5518'?: Timestamp_5518
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
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
 * Container width
 *
 * Width of the container.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 * Units: cm
 */
type Containerwidth_14 = number
/**
 * Container installation type
 *
 * Type of the container. Examples are underground, above ground.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 * Units: cm
 */
type Containerinstallationtype_15 = string
/**
 * Container volume max
 *
 * The maximum volume available in the container for waste items.
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 * Units: m3
 */
type Containervolumemax_16 = number
/**
 * Filling sensor position
 *
 * The position of the filling sensor inside the container.
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 */
type Fillingsensorposition_17 = string
/**
 * Type of materials
 *
 * The type of the materials the container can be filled with. Examples are
 * plastic, glass.
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 */
type Typeofmaterials_18 = string
/**
 * Filling operations counter
 *
 * Total amount of filling operations performed.
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: false
 */
type Fillingoperationscounter_19 = number
/**
 * Cover open
 *
 * Set to true if the cover of the container is open and the filling level
 * cannot be estimated. This is valid if the filling level sensor is installed
 * under the cover of the bin.
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 */
type Coveropen_21 = boolean
/**
 * Temperature alarm
 *
 * Set to true if the sensor detects a fire using either a temperature sensor
 * object.and/or a gas detection object.
 *
 * ID: 22
 * MultipleInstances: false
 * Mandatory: false
 */
type Temperaturealarm_22 = boolean
/**
 * Water infiltration alarm
 *
 * Set to true if the sensor detects water infiltration or a high humidity
 * level.
 *
 * ID: 23
 * MultipleInstances: false
 * Mandatory: false
 */
type Waterinfiltrationalarm_23 = boolean
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
 * Measurement Quality Indicator
 *
 * Measurement quality indicator reported by a smart sensor. 0: UNCHECKED No
 * quality checks were done because they do not exist or can not be applied. 1:
 * REJECTED WITH CERTAINTY The measured value is invalid. 2: REJECTED WITH
 * PROBABILITY The measured value is likely invalid. 3: ACCEPTED BUT SUSPICIOUS
 * The measured value is likely OK. 4: ACCEPTED The measured value is OK. 5-15:
 * Reserved for future extensions. 16-23: Vendor specific measurement quality.
 *
 * ID: 6042
 * MultipleInstances: false
 * Mandatory: false
 */
type MeasurementQualityIndicator_6042 = number
/**
 * Measurement Quality Level
 *
 * Measurement quality level reported by a smart sensor. Quality level 100 means
 * that the measurement has fully passed quality check algorithms. Smaller
 * quality levels mean that quality has decreased and the measurement has only
 * partially passed quality check algorithms. The smaller the quality level, the
 * more caution should be used by the application when using the measurement.
 * When the quality level is 0 it means that the measurement should certainly be
 * rejected.
 *
 * ID: 6049
 * MultipleInstances: false
 * Mandatory: false
 */
type MeasurementQualityLevel_6049 = number
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
 * The objectURN for Filling level
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3435:2.0'
