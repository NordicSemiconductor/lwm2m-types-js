/**
 * Measurement Metadata
 *
 * This object contains measurement metadata for sensor objects. The
 * corresponding sensor is identified with an object link. If the LwM2M Client
 * provides measurement quality information both inside the sensor objects and
 * in the Measurement Metadata object, it MUST ensure that identical data is
 * reported in corresponding object instances. The LwM2M Server SHOULD use the
 * data from the Measurement Metadata object if both are available. The LwM2M
 * Client also MUST ensure that no two Measurement Metadata object instances
 * link to the same sensor object instance. If the LwM2M Server receives such
 * non-conforming data, the Measurement Metadata object instance with largest
 * Instance ID SHOULD be used.
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/509.xml
 *
 * ID: 509
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type MeasurementMetadata_509 = Readonly<
	Array<{
		'0': LinkedSensor_0
		'1'?: MeasurementQualityReasonCode_1
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
	}>
>
/**
 * Linked Sensor
 *
 * Link to the sensor object instance that this metadata relates to.
 *
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type LinkedSensor_0 = string
/**
 * Measurement Quality Reason Code
 *
 * Measurement quality degradation reason reported by a smart sensor. A degraded
 * measurement has Measurement Quality Indicator value 1-3 or Measurement
 * Quality Level less than 100.
 * 0: UNKNOWN Reason is unknown.
 * 1: UNDER_RANGE Measured value is under measurement range.
 * 2: OVER_RANGE Measured value is over measurement range.
 * 3: NOISY Measured value seems to change too quickly.
 * 4: STUCK_VALUE Measured value seems to change too slowly.
 * 5: STEP_TOO_HIGH Measured value has changed too much.
 * 6: CALIBRATION_EXPIRED Sensor calibration has expired.
 * 7: WARMING_UP Sensor is warming up.
 * 8: SERVICE_MODE Sensor is under service.
 * 9: HUMAN_INTERFERENCE Human presence near the sensor.
 * 10: NATURAL_INTERFERENCE Natural phenomenon or animal presence.
 * 11: CONTAMINATION Contamination of the sensor.
 * 12: HW_FAILURE Sensor hardware has failed.
 * 13: LACK_OF_DATA_SAMPLES Data sampling is lossy.
 * 14: OUT_OF_OPERATING_RANGE Environment conditions exceeded.
 * 15: AUTO_CALIBRATION Auto calibration in progress.
 * 16-127: RESERVED_GENERIC_BLOCK Reserved generic block.
 * 128-511: VENDOR_SPECIFIC_BLOCK Vendor specific block.
 * 512-1023: RESERVED_VENDOR_BLOCK Reserved vendor specific block.
 *
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: false
 */
type MeasurementQualityReasonCode_1 = Array<number>
/**
 * Measurement Quality Indicator
 *
 * Measurement quality indicator reported by a smart sensor.
 * 0: UNCHECKED No quality checks were done because they do not exist or can not
 * be applied.
 * 1: REJECTED WITH CERTAINTY The measured value is invalid.
 * 2: REJECTED WITH PROBABILITY The measured value is likely invalid.
 * 3: ACCEPTED BUT SUSPICIOUS The measured value is likely OK.
 * 4: ACCEPTED The measured value is OK.
 * 5-15: Reserved for future extensions.
 * 16-23: Vendor specific measurement quality.
 *
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
 *
 * ID: 6049
 * MultipleInstances: false
 * Mandatory: false
 */
type MeasurementQualityLevel_6049 = number
/**
 * The objectURN for Measurement Metadata
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '509@1.1'
