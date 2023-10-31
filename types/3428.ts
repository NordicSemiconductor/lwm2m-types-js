/**
 * Air quality
 *
 * The uCIFI air quality sensor reports measurement required to calculate Air
 * Quality Index (AIQ. It also provides resources for average calculation as per
 * the IQ index calculation.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3428.xml
 *
 * ID: 3428
 * LWM2MVersion: 1.0
 * ObjectVersion: 2.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Airquality_3428 = Readonly<
	Array<{
		'1'?: PM10_1
		'2'?: PM1024houraverage_2
		'3'?: PM2_5_3
		'4'?: PM2_524houraverage_4
		'5'?: PM1_5
		'6'?: PM124houraverage_6
		'7'?: CO_7
		'8'?: CO8houraverage_8
		'9'?: SO2_9
		'10'?: SO21houraverage_10
		'11'?: SO224houraverage_11
		'12'?: O3_12
		'13'?: O31houraverage_13
		'14'?: O38houraverage_14
		'15'?: NO2_15
		'16'?: NO21houraverage_16
		'17'?: CO2_17
		'18'?: CO21houraverage_18
		'19'?: NO_19
		'20'?: NO1houraverage_20
		'21'?: H2S_21
		'22'?: H2S1houraverage_22
		'23'?: VOC_23
		'24'?: VOC1houraverage_24
		'5518'?: Timestamp_5518
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * PM10
 *
 * Level of PM10 measured by the air quality sensor.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 * Units: ug/m3
 */
type PM10_1 = number
/**
 * PM10 24 hour average
 *
 * Average level of PM10 measured by the sensor during the last 24 hours.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: ug/m3
 */
type PM1024houraverage_2 = number
/**
 * PM2.5
 *
 * Level of PM2.5 measured by the air quality sensor.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: ug/m3
 */
type PM2_5_3 = number
/**
 * PM2.5 24 hour average
 *
 * Average level of PM2.5 measured by the sensor during the last 24 hours.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: ug/m3
 */
type PM2_524houraverage_4 = number
/**
 * PM1
 *
 * Level of PM1 measured by the air quality sensor.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: ug/m3
 */
type PM1_5 = number
/**
 * PM1 24 hour average
 *
 * Average level of PM1 measured by the sensor during the last 24 hours.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: ug/m3
 */
type PM124houraverage_6 = number
/**
 * CO
 *
 * Level of carbon monoxide measured by the air quality sensor.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type CO_7 = number
/**
 * CO 8 hour average
 *
 * Average level of carbon monoxide measured by the sensor during the last 8
 * hours.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type CO8houraverage_8 = number
/**
 * SO2
 *
 * Level of sulfur dioxide measured by the air quality sensor.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type SO2_9 = number
/**
 * SO2 1 hour average
 *
 * Average level of sulfur dioxide measured by the sensor during the last 1
 * hour.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type SO21houraverage_10 = number
/**
 * SO2 24 hour average
 *
 * Average level of sulfur dioxide measured by the sensor during the last 24
 * hours.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type SO224houraverage_11 = number
/**
 * O3
 *
 * Level of ozone measured by the air quality sensor.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type O3_12 = number
/**
 * O3 1 hour average
 *
 * Average level of ozone measured by the sensor during the last 1 hour.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type O31houraverage_13 = number
/**
 * O3 8 hour average
 *
 * Average level of ozone measured by the sensor during the last 8 hour.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type O38houraverage_14 = number
/**
 * NO2
 *
 * Level of nitrogen dioxide measured by the air quality sensor.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type NO2_15 = number
/**
 * NO2 1 hour average
 *
 * Average level of nitrogen dioxide measured by the sensor during the last 1
 * hour.
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type NO21houraverage_16 = number
/**
 * CO2
 *
 * Level of carbon dioxide measured by the air quality sensor.
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type CO2_17 = number
/**
 * CO2 1 hour average
 *
 * Average level of carbon dioxide measured by the sensor during the last 1
 * hour.
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type CO21houraverage_18 = number
/**
 * NO
 *
 * Level of nitric oxide measured by the air quality sensor.
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type NO_19 = number
/**
 * NO 1 hour average
 *
 * Average level of nitric oxide measured by the sensor during the last 1 hour.
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type NO1houraverage_20 = number
/**
 * H2S
 *
 * Level of hydrogen sulfid measured by the air quality sensor.
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type H2S_21 = number
/**
 * H2S 1 hour average
 *
 * Average level of hydrogen sulfid measured by the sensor during the last 1
 * hour.
 *
 * ID: 22
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type H2S1houraverage_22 = number
/**
 * VOC
 *
 * Level of Volatile Organic Compounds measured by the air quality sensor.
 *
 * ID: 23
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type VOC_23 = number
/**
 * VOC 1 hour average
 *
 * Average level of Volatile Organic Compounds measured by the sensor during the
 * last 1 hour.
 *
 * ID: 24
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type VOC1houraverage_24 = number
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
 * The objectURN for Air quality
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3428:2.0'
