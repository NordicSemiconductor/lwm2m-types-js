/**
 * Fire Alarm
 *
 * This is an alarm that should be raised if the sensor(s) detect fire, based on
 * the values reported from Temperature, Humidity, Smoke (CO2).
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/503.xml
 *
 * ID: 503
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type FireAlarm_503 = Readonly<
	Array<{
		'1': TemperatureUnit_1
		'16': HumidityValue_16
		'25': CO2AlarmState_25
		'27': CO2Value_27
		'3': TemperatureValue_3
		'0'?: TemperatureSensorLocationTag_0
		'10'?: TemperatureThreshold_10
		'11'?: TemperatureSensorError_11
		'13'?: TemperatureAlarmLoudness_13
		'14'?: HumiditySensorLocationTag_14
		'15'?: AmbientRelativeHumidity_15
		'17'?: MinimumMeasuredHumidityValue_17
		'18'?: MaximumMeasuredHumidityValue_18
		'19'?: HumidityAccuracy_19
		'2'?: AmbientTemperature_2
		'20'?: HumidityThreshold_20
		'21'?: HumiditySensorError_21
		'23'?: HumidityAlarmLoudness_23
		'24'?: SmokeSensorLocationTag_24
		'26'?: AmbientCO2Value_26
		'28'?: MinimumMeasuredCO2Value_28
		'29'?: MaximumMeasuredCO2Value_29
		'30'?: CO2Threshold_30
		'31'?: SmokeSensorError_31
		'33'?: SmokeAlarmLoudness_33
		'4'?: MinimumMeasuredTemperatureValue_4
		'5'?: MaximumMeasuredTemperatureValue_5
		'5514'?: Latitude_5514
		'5515'?: Longitude_5515
		'6'?: MinTemperatureRangeValue_6
		'6039'?: Altitude_6039
		'6044'?: BatteryPercentage_6044
		'7'?: MaxTemperatureRangeValue_7
		'8'?: LowerTemperatureAccuracy_8
		'9'?: UpperTemperatureAccuracy_9
	}>
>
/**
 * Temperature Unit
 *
 * Temperature Units: 0 = Celsius, 1 = Fahrenheit, 2 = Kelvin. All temperature
 * values are represented in this unit.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type TemperatureUnit_1 = number
/**
 * Humidity Value
 *
 * Last or Current Measured Humidity Value from the Sensor. The value 0
 * indicates that the Sensor data is not available.
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type HumidityValue_16 = number
/**
 * CO2 Alarm State
 *
 * 0 = False (CO2 alarm threshold not exceeded), 1 = True (CO2 alarm threshold
 * exceeded).
 *
 * ID: 25
 * MultipleInstances: false
 * Mandatory: true
 */
type CO2AlarmState_25 = boolean
/**
 * CO2 Value
 *
 * Last or Current Measured CO2 Value from the sensor. The value 0 indicates
 * that the Sensor data is not available.
 *
 * ID: 27
 * MultipleInstances: false
 * Mandatory: true
 * Units: ppm
 */
type CO2Value_27 = number
/**
 * Temperature Value
 *
 * Last or Current Measured Temperature Value from the Sensor. The value 65534
 * indicates that the Sensor data is not available.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type TemperatureValue_3 = number
/**
 * Temperature Sensor Location Tag
 *
 * Verbose identification of the location of the Temperature sensor location
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: false
 */
type TemperatureSensorLocationTag_0 = string
/**
 * Temperature Threshold
 *
 * Indicates the maximum threshold for the temperature.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type TemperatureThreshold_10 = number
/**
 * Temperature Sensor Error
 *
 * Temperature Sensor Error: 0 = false (Working correctly), 1 = true (Faulty).
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type TemperatureSensorError_11 = boolean
/**
 * Temperature Alarm Loudness
 *
 * Indicates the loudness of temperature alarm.
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type TemperatureAlarmLoudness_13 = number
/**
 * Humidity Sensor Location Tag
 *
 * Verbose identification of the location of the Humidity sensor.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type HumiditySensorLocationTag_14 = string
/**
 * Ambient Relative Humidity
 *
 * Relative humidity for the area.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 * Units: %RH
 */
type AmbientRelativeHumidity_15 = number
/**
 * Minimum Measured Humidity Value
 *
 * The minimum Humidity value measured by the sensor since power ON or reset.
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type MinimumMeasuredHumidityValue_17 = number
/**
 * Maximum Measured Humidity Value
 *
 * The maximum Humidity value measured by the sensor since power ON or reset.
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type MaximumMeasuredHumidityValue_18 = number
/**
 * Humidity Accuracy
 *
 * Indicate the accuracy for the Humidity Sensor.
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type HumidityAccuracy_19 = number
/**
 * Ambient Temperature
 *
 * Temperature for the area.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type AmbientTemperature_2 = number
/**
 * Humidity Threshold
 *
 * Indicate the threshold for the Humidity.
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type HumidityThreshold_20 = number
/**
 * Humidity Sensor Error
 *
 * Humidity Sensor Error: 0 = false (Working correctly), 1 = true (Faulty)
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 */
type HumiditySensorError_21 = boolean
/**
 * Humidity Alarm Loudness
 *
 * Indicates the loudness of the Humidity alarm.
 *
 * ID: 23
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type HumidityAlarmLoudness_23 = number
/**
 * Smoke Sensor Location Tag
 *
 * Verbose identification of the location of the Smoke sensor.
 *
 * ID: 24
 * MultipleInstances: false
 * Mandatory: false
 */
type SmokeSensorLocationTag_24 = string
/**
 * Ambient CO2 Value
 *
 * CO2 value for the area.
 *
 * ID: 26
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type AmbientCO2Value_26 = number
/**
 * Minimum Measured CO2 Value
 *
 * The minimum CO2 value measured by the sensor since power ON or reset.
 *
 * ID: 28
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type MinimumMeasuredCO2Value_28 = number
/**
 * Maximum Measured CO2 Value
 *
 * The maximum CO2 value measured by the sensor since power ON or reset.
 *
 * ID: 29
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type MaximumMeasuredCO2Value_29 = number
/**
 * CO2 Threshold
 *
 * Indicate the alarm threshold for the CO2.
 *
 * ID: 30
 * MultipleInstances: false
 * Mandatory: false
 * Units: ppm
 */
type CO2Threshold_30 = number
/**
 * Smoke Sensor Error
 *
 * Smoke Sensor Error: 0 = false (Working correctly), 1 = true (Faulty)
 *
 * ID: 31
 * MultipleInstances: false
 * Mandatory: false
 */
type SmokeSensorError_31 = boolean
/**
 * Smoke Alarm Loudness
 *
 * Indicates the loudness of smoke alarm
 *
 * ID: 33
 * MultipleInstances: false
 * Mandatory: false
 * Units: dB
 */
type SmokeAlarmLoudness_33 = number
/**
 * Minimum Measured Temperature Value
 *
 * The minimum Temperature value measured by the sensor since power ON or reset.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type MinimumMeasuredTemperatureValue_4 = number
/**
 * Maximum Measured Temperature Value
 *
 * The maximum Temperature value measured by the sensor since power ON or reset.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type MaximumMeasuredTemperatureValue_5 = number
/**
 * Latitude
 *
 * The decimal notation of latitude, e.g. -43.5723 (World Geodetic System 1984).
 *
 * ID: 5514
 * MultipleInstances: false
 * Mandatory: false
 */
type Latitude_5514 = string
/**
 * Longitude
 *
 * The decimal notation of longitude, e.g. 153.21760 (World Geodetic System
 * 1984).
 *
 * ID: 5515
 * MultipleInstances: false
 * Mandatory: false
 */
type Longitude_5515 = string
/**
 * Min Temperature Range Value
 *
 * The minimum temperature value that can be measured by the sensor.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type MinTemperatureRangeValue_6 = number
/**
 * Altitude
 *
 * Altitude above sea level in meters.
 *
 * ID: 6039
 * MultipleInstances: false
 * Mandatory: false
 * Units: m
 */
type Altitude_6039 = number
/**
 * Battery Percentage
 *
 * Current remaining battery level.
 *
 * ID: 6044
 * MultipleInstances: false
 * Mandatory: false
 */
type BatteryPercentage_6044 = number
/**
 * Max Temperature Range Value
 *
 * The maximum temperature value that can be measured by the sensor.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type MaxTemperatureRangeValue_7 = number
/**
 * Lower Temperature Accuracy
 *
 * Indicates the lower end of the accuracy range for the temperature sensor.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type LowerTemperatureAccuracy_8 = number
/**
 * Upper Temperature Accuracy
 *
 * Indicates the upper end of the accuracy range for the temperature sensor.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type UpperTemperatureAccuracy_9 = number
/**
 * The objectURN for Fire Alarm
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '503'
