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
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Airquality_3428 = Readonly<
	Array<{
		'1'?: PM10_1
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
		'2'?: PM1024houraverage_2
		'20'?: NO1houraverage_20
		'21'?: H2S_21
		'22'?: H2S1houraverage_22
		'3'?: PM2_5_3
		'4'?: PM2_524houraverage_4
		'5'?: PM1_5
		'6'?: PM124houraverage_6
		'7'?: CO_7
		'8'?: CO8houraverage_8
		'9'?: SO2_9
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
 * The objectURN for Air quality
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3428'
