/**
 * Traffic Counter
 *
 * The uCIFI traffic counter provides vehicle counting and traffic analysis
 * data. A traffic counting device may implement multiple instances of this
 * traffic counter object, each of them being in charge of counting different
 * categories of vehicles (e.g. bikes, cars, trucks).
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3432.xml
 *
 * ID: 3432
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type TrafficCounter_3432 = Readonly<
	Array<{
		'3': Cumulatednumbertoday_3
		'1'?: Cumulatednumber_1
		'10'?: Averagespeedduringlastperiod1_10
		'11'?: Averagespeedduringlastperiod2_11
		'12'?: Averagespeedduringlastperiod3_12
		'13'?: Averagedistanceduringlastperiod1_13
		'14'?: Averagedistanceduringlastperiod2_14
		'15'?: Averagedistanceduringlastperiod3_15
		'16'?: Speedlimitthreshold_16
		'17'?: Percentageabovespeedlimit_17
		'4'?: Measuringperiod1_4
		'5'?: Measuringperiod2_5
		'6'?: Measuringperiod3_6
		'7'?: Cumulatednumberduringlastperiod1_7
		'8'?: Cumulatednumberduringlastperiod2_8
		'9'?: Cumulatednumberduringlastperiod3_9
	}>
>
/**
 * Cumulated number today
 *
 * Cumulated number of vehicles counted today.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type Cumulatednumbertoday_3 = number
/**
 * Cumulated number
 *
 * Cumulated number of vehicles counted since last reset.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type Cumulatednumber_1 = number
/**
 * Average speed during last period 1
 *
 * Average speed measured on the vehicles during the last period 1 (e.g. 1
 * hour).
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type Averagespeedduringlastperiod1_10 = number
/**
 * Average speed during last period 2
 *
 * Average speed measured on the vehicles during the last period 2 (e.g. 15
 * minutes).
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type Averagespeedduringlastperiod2_11 = number
/**
 * Average speed during last period 3
 *
 * Average speed measured on the vehicles during the last period 3 (e.g. 5
 * minutes).
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type Averagespeedduringlastperiod3_12 = number
/**
 * Average distance during last period 1
 *
 * Average distance between two vehicles measured during the last period 1 (e.g.
 * 1 hour).
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 */
type Averagedistanceduringlastperiod1_13 = number
/**
 * Average distance during last period 2
 *
 * Average distance between two vehicles measured during the last period 2 (e.g.
 * 15 minutes).
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type Averagedistanceduringlastperiod2_14 = number
/**
 * Average distance during last period 3
 *
 * Average distance between two vehicles measured during the last period 3 (e.g.
 * 5 minutes).
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type Averagedistanceduringlastperiod3_15 = number
/**
 * Speed limit threshold
 *
 * Speed limit threshold used to calculate the percentage of vehicles above
 * speed limit.
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 */
type Speedlimitthreshold_16 = number
/**
 * Percentage above speed limit
 *
 * Percentage of vehicles driving above speed limit.
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 */
type Percentageabovespeedlimit_17 = number
/**
 * Measuring period 1
 *
 * Time period 1 during which the counter shall provide number of vehicles (e.g.
 * 1 hour).
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Measuringperiod1_4 = number
/**
 * Measuring period 2
 *
 * Time period 2 during which the counter shall provide number of vehicles (e.g.
 * 15 minutes).
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Measuringperiod2_5 = number
/**
 * Measuring period 3
 *
 * Time period 3 during which the counter shall provide number of vehicles (e.g.
 * 5 minutes).
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Measuringperiod3_6 = number
/**
 * Cumulated number during last period 1
 *
 * Cumulated number of vehicles counted during the last period 1 (e.g. 1 hour).
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type Cumulatednumberduringlastperiod1_7 = number
/**
 * Cumulated number during last period 2
 *
 * Cumulated number of vehicles counted during the last period 2 (e.g. 15
 * minutes).
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type Cumulatednumberduringlastperiod2_8 = number
/**
 * Cumulated number during last period 3
 *
 * Cumulated number of vehicles counted during the last period 3 (e.g. 5
 * minutes).
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type Cumulatednumberduringlastperiod3_9 = number
/**
 * The objectURN for Traffic Counter
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3432'
