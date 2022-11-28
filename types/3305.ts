/**
 * Power Measurement
 *
 * This IPSO object should be used over a power measurement sensor to report a
 * remote power measurement. It also provides resources for minimum/maximum
 * measured values and the minimum/maximum range for both active and reactive
 * power. It also provides resources for cumulative energy, calibration, and the
 * power factor.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3305.xml
 *
 * ID: 3305
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type PowerMeasurement_3305 = Readonly<
	Array<{
		'5800': Instantaneousactivepower_5800
		'5518'?: Timestamp_5518
		'5750'?: ApplicationType_5750
		'5801'?: MinMeasuredactivepower_5801
		'5802'?: MaxMeasuredactivepower_5802
		'5803'?: MinRangeactivepower_5803
		'5804'?: MaxRangeactivepower_5804
		'5805'?: Cumulativeactivepower_5805
		'5806'?: ActivePowerCalibration_5806
		'5810'?: Instantaneousreactivepower_5810
		'5811'?: MinMeasuredreactivepower_5811
		'5812'?: MaxMeasuredreactivepower_5812
		'5813'?: MinRangereactivepower_5813
		'5814'?: MaxRangereactivepower_5814
		'5815'?: Cumulativereactivepower_5815
		'5816'?: ReactivePowerCalibration_5816
		'5820'?: Powerfactor_5820
		'5821'?: CurrentCalibration_5821
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Instantaneous active power
 *
 * The current active power.
 *
 * ID: 5800
 * MultipleInstances: false
 * Mandatory: true
 * Units: W
 */
type Instantaneousactivepower_5800 = number
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
 * Min Measured active power
 *
 * The minimum active power measured by the sensor since it is ON.
 *
 * ID: 5801
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type MinMeasuredactivepower_5801 = number
/**
 * Max Measured active power
 *
 * The maximum active power measured by the sensor since it is ON.
 *
 * ID: 5802
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type MaxMeasuredactivepower_5802 = number
/**
 * Min Range active power
 *
 * The minimum active power that can be measured by the sensor.
 *
 * ID: 5803
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type MinRangeactivepower_5803 = number
/**
 * Max Range active power
 *
 * The maximum active power that can be measured by the sensor.
 *
 * ID: 5804
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type MaxRangeactivepower_5804 = number
/**
 * Cumulative active power
 *
 * The cumulative active power since the last cumulative energy reset or device
 * start.
 *
 * ID: 5805
 * MultipleInstances: false
 * Mandatory: false
 * Units: Wh
 */
type Cumulativeactivepower_5805 = number
/**
 * Active Power Calibration
 *
 * Request an active power calibration by writing the value of a calibrated
 * load.
 *
 * ID: 5806
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type ActivePowerCalibration_5806 = number
/**
 * Instantaneous reactive power
 *
 * The current reactive power.
 *
 * ID: 5810
 * MultipleInstances: false
 * Mandatory: false
 * Units: var
 */
type Instantaneousreactivepower_5810 = number
/**
 * Min Measured reactive power
 *
 * The minimum reactive power measured by the sensor since it is ON.
 *
 * ID: 5811
 * MultipleInstances: false
 * Mandatory: false
 * Units: var
 */
type MinMeasuredreactivepower_5811 = number
/**
 * Max Measured reactive power
 *
 * The maximum reactive power measured by the sensor since it is ON.
 *
 * ID: 5812
 * MultipleInstances: false
 * Mandatory: false
 * Units: var
 */
type MaxMeasuredreactivepower_5812 = number
/**
 * Min Range reactive power
 *
 * The minimum active power that can be measured by the sensor.
 *
 * ID: 5813
 * MultipleInstances: false
 * Mandatory: false
 * Units: var
 */
type MinRangereactivepower_5813 = number
/**
 * Max Range reactive power
 *
 * The maximum reactive power that can be measured by the sensor.
 *
 * ID: 5814
 * MultipleInstances: false
 * Mandatory: false
 * Units: var
 */
type MaxRangereactivepower_5814 = number
/**
 * Cumulative reactive power
 *
 * The cumulative reactive power since the last cumulative energy reset or
 * device start.
 *
 * ID: 5815
 * MultipleInstances: false
 * Mandatory: false
 * Units: varh
 */
type Cumulativereactivepower_5815 = number
/**
 * Reactive Power Calibration
 *
 * Request a reactive power calibration by writing the value of a calibrated
 * load.
 *
 * ID: 5816
 * MultipleInstances: false
 * Mandatory: false
 * Units: var
 */
type ReactivePowerCalibration_5816 = number
/**
 * Power factor
 *
 * If applicable, the power factor of the current consumption.
 *
 * ID: 5820
 * MultipleInstances: false
 * Mandatory: false
 */
type Powerfactor_5820 = number
/**
 * Current Calibration
 *
 * Read or Write the current calibration coefficient.
 *
 * ID: 5821
 * MultipleInstances: false
 * Mandatory: false
 */
type CurrentCalibration_5821 = number
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
 * The objectURN for Power Measurement
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3305:1.1'
