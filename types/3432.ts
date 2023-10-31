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
 * ObjectVersion: 2.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type TrafficCounter_3432 = Readonly<
	Array<{
		'3': Cumulatednumbertoday_3
		'0'?: Vehicletype_0
		'1'?: Cumulatednumber_1
		'4'?: Measuringperiod1_4
		'5'?: Measuringperiod2_5
		'6'?: Measuringperiod3_6
		'7'?: Cumulatednumberduringlastperiod1_7
		'8'?: Cumulatednumberduringlastperiod2_8
		'9'?: Cumulatednumberduringlastperiod3_9
		'10'?: Averagespeedduringlastperiod1_10
		'11'?: Averagespeedduringlastperiod2_11
		'12'?: Averagespeedduringlastperiod3_12
		'13'?: Averagedistanceduringlastperiod1_13
		'14'?: Averagedistanceduringlastperiod2_14
		'15'?: Averagedistanceduringlastperiod3_15
		'16'?: Speedlimitthreshold_16
		'17'?: Percentageabovespeedlimit_17
		'5518'?: Timestamp_5518
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Cumulated number today
 *
 * Cumulated number of vehicles counted today.
 *
 * ID: 3
 * MultipleInstances: true
 * Mandatory: true
 */
type Cumulatednumbertoday_3 = Array<number>
/**
 * Vehicle type
 *
 * Identifies the Vehicle type(s) detected in conformance with DATEX II v3
 * specifications.
 * The resource instance ID used here should match, the remaining resource IDs
 * under this object for measurement taken by the device for the specified
 * vehicle type.
 * Instance 0 of this resource is reserved for Vehicle type = 1 (Vehicle of any
 * type)
 *
 * 0=Vehicle normally used for agricultural purposes, e.g. tractor, combined
 * harvester etc.
 * 1=Vehicle of any type.
 * 2=Articulated bus
 * 3=Articulated trolley bus
 * 4=Articulated vehicle.
 * 5=Bicycle.
 * 6=Bus.
 * 7=Vehicles designed and constructed for the carriage of passengers and
 * comprising no more than eight seats in addition to the driver's seat, and
 * having a maximum mass ("technically permissible maximum laden mass") not
 * exceeding 3.5 tons (M1).
 * 8=Caravan.
 * 9=Car or light vehicle.
 * 10=Car towing a caravan.
 * 11=Car towing a trailer.
 * 12=Vehicle normally used for construction or maintenance purposes, e.g.
 * digger, excavator, bulldozer, lorry mounted crane etc.
 * 13=Four wheel drive vehicle.
 * 14=Vehicles with a total weight above 3,500 kg (vehicle and load).
 * 15=Heavy goods vehicle with trailer
 * 16=A transporter for heavy duty (usually with abnormal dimensions).
 * 17=Vehicle whose weight means it should be classed as a heavy vehicle
 * 18=High sided vehicle.
 * 19=Vehicles for the carriage of goods and having a maximum mass not exceeding
 * 3.5 tonnes (class N1).
 * 20=Large car
 * 21=Vehicles for the carriage of goods and having a maximum mass exceeding 3.5
 * tonnes (belonging to class N2 when not exceeding 12 tonnes, otherwise class
 * N3).
 * 22=Light goods vehicle with trailer
 * 23=A heavy lorry that is longer than normal.
 * 24=Lorry of any type.
 * 25=Metro
 * 26=Vehicles designed and constructed for the carriage of passengers,
 * comprising more than eight seats in addition to the driver's seat, and having
 * a maximum mass not exceeding 5 tonnes (class M2).
 * 27=Moped (a two wheeled motor vehicle characterized by a small engine
 * typically less than 50cc and by normally having pedals).
 * 28=Motorcycle.
 * 29=Three wheeled vehicle comprising a motorcycle with an attached side car.
 * 30=Motorhome
 * 31=Motorscooter (a two wheeled motor vehicle characterized by a step-through
 * frame and small diameter wheels).
 * 32=Passenger car
 * 33=Small car
 * 34=Vehicle with large tank for carrying bulk liquids.
 * 35=Three wheeled vehicle of unspecified type.
 * 36=Trailer.
 * 37=Tram.
 * 38=Trolley bus
 * 39=Two wheeled vehicle of unspecified type.
 * 40=Van.
 * 41=Vehicle (of unspecified type) towing a caravan.
 * 42=Vehicle with catalytic converter.
 * 43Vehicle without catalytic converter.
 * 44=Vehicle (of unspecified type) towing a trailer.
 * 45n=Vehicle with even numbered registration plate.
 * 46=Vehicle with odd numbered registration plate.
 * 99=Unknown.
 * 100=Other than as defined in this enumeration.
 *
 * ID: 0
 * MultipleInstances: true
 * Mandatory: false
 */
type Vehicletype_0 = Array<number>
/**
 * Cumulated number
 *
 * Cumulated number of vehicles counted since last reset.
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: false
 */
type Cumulatednumber_1 = Array<number>
/**
 * Measuring period 1
 *
 * Time period 1 during which the counter shall provide number of vehicles (e.g.
 * 1 hour).
 *
 * ID: 4
 * MultipleInstances: true
 * Mandatory: false
 * Units: s
 */
type Measuringperiod1_4 = Array<number>
/**
 * Measuring period 2
 *
 * Time period 2 during which the counter shall provide number of vehicles (e.g.
 * 15 minutes).
 *
 * ID: 5
 * MultipleInstances: true
 * Mandatory: false
 * Units: s
 */
type Measuringperiod2_5 = Array<number>
/**
 * Measuring period 3
 *
 * Time period 3 during which the counter shall provide number of vehicles (e.g.
 * 5 minutes).
 *
 * ID: 6
 * MultipleInstances: true
 * Mandatory: false
 * Units: s
 */
type Measuringperiod3_6 = Array<number>
/**
 * Cumulated number during last period 1
 *
 * Cumulated number of vehicles counted during the last period 1 (e.g. 1 hour).
 *
 * ID: 7
 * MultipleInstances: true
 * Mandatory: false
 */
type Cumulatednumberduringlastperiod1_7 = Array<number>
/**
 * Cumulated number during last period 2
 *
 * Cumulated number of vehicles counted during the last period 2 (e.g. 15
 * minutes).
 *
 * ID: 8
 * MultipleInstances: true
 * Mandatory: false
 */
type Cumulatednumberduringlastperiod2_8 = Array<number>
/**
 * Cumulated number during last period 3
 *
 * Cumulated number of vehicles counted during the last period 3 (e.g. 5
 * minutes).
 *
 * ID: 9
 * MultipleInstances: true
 * Mandatory: false
 */
type Cumulatednumberduringlastperiod3_9 = Array<number>
/**
 * Average speed during last period 1
 *
 * Average speed measured on the vehicles during the last period 1 (e.g. 1
 * hour).
 *
 * ID: 10
 * MultipleInstances: true
 * Mandatory: false
 */
type Averagespeedduringlastperiod1_10 = Array<number>
/**
 * Average speed during last period 2
 *
 * Average speed measured on the vehicles during the last period 2 (e.g. 15
 * minutes).
 *
 * ID: 11
 * MultipleInstances: true
 * Mandatory: false
 */
type Averagespeedduringlastperiod2_11 = Array<number>
/**
 * Average speed during last period 3
 *
 * Average speed measured on the vehicles during the last period 3 (e.g. 5
 * minutes).
 *
 * ID: 12
 * MultipleInstances: true
 * Mandatory: false
 */
type Averagespeedduringlastperiod3_12 = Array<number>
/**
 * Average distance during last period 1
 *
 * Average distance between two vehicles measured during the last period 1 (e.g.
 * 1 hour).
 *
 * ID: 13
 * MultipleInstances: true
 * Mandatory: false
 */
type Averagedistanceduringlastperiod1_13 = Array<number>
/**
 * Average distance during last period 2
 *
 * Average distance between two vehicles measured during the last period 2 (e.g.
 * 15 minutes).
 *
 * ID: 14
 * MultipleInstances: true
 * Mandatory: false
 */
type Averagedistanceduringlastperiod2_14 = Array<number>
/**
 * Average distance during last period 3
 *
 * Average distance between two vehicles measured during the last period 3 (e.g.
 * 5 minutes).
 *
 * ID: 15
 * MultipleInstances: true
 * Mandatory: false
 */
type Averagedistanceduringlastperiod3_15 = Array<number>
/**
 * Speed limit threshold
 *
 * Speed limit threshold used to calculate the percentage of vehicles above
 * speed limit.
 *
 * ID: 16
 * MultipleInstances: true
 * Mandatory: false
 */
type Speedlimitthreshold_16 = Array<number>
/**
 * Percentage above speed limit
 *
 * Percentage of vehicles driving above speed limit.
 *
 * ID: 17
 * MultipleInstances: true
 * Mandatory: false
 */
type Percentageabovespeedlimit_17 = Array<number>
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
 * The objectURN for Traffic Counter
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3432:2.0'
