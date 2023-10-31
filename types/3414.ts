/**
 * uCIFI data bridge
 *
 * The uCIFI data bridge object may be used to transport data from a 3rd party
 * device, operating a proprietary network or protocol, over a LwM2M compliant
 * network.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3414.xml
 *
 * ID: 3414
 * LWM2MVersion: 1.0
 * ObjectVersion: 2.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type uCIFIdatabridge_3414 = Readonly<
	Array<{
		'1': Payload_1
		'2'?: Hash_2
		'3'?: Cumulateddailydatavolumeup_3
		'4'?: Cumulateddailydatavolumedown_4
		'5'?: Cumulateddailydatavolumetotal_5
		'6'?: Communicationerror_6
		'7'?: DataPriority_7
		'8'?: DataCreationTime_8
		'9'?: DataDescription_9
		'10'?: DataFormat_10
		'11'?: AppID_11
		'5518'?: Timestamp_5518
		'6042'?: MeasurementQualityIndicator_6042
		'6049'?: MeasurementQualityLevel_6049
		'6050'?: FractionalTimestamp_6050
	}>
>
/**
 * Payload
 *
 * Content of the message that is to be transported.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Payload_1 = string
/**
 * Hash
 *
 * Hash to check the consistency of the data payload. Hash mechanism and
 * calculation is vendor-specific.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type Hash_2 = string
/**
 * Cumulated daily data volume up
 *
 * Cumulated volume of data received by the device since beginning of the day.
 * This information could be used for data invoicing.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type Cumulateddailydatavolumeup_3 = number
/**
 * Cumulated daily data volume down
 *
 * Cumulated volume of data sent by the device since beginning of the day. This
 * information could be used for data invoicing.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type Cumulateddailydatavolumedown_4 = number
/**
 * Cumulated daily data volume total
 *
 * Cumulated volume of data sent and received by/from the device since beginning
 * of the day. This information could be used for data invoicing.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: B
 */
type Cumulateddailydatavolumetotal_5 = number
/**
 * Communication error
 *
 * Set to True if the device detects a difference in a received payload and the
 * hash.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Communicationerror_6 = boolean
/**
 * Data Priority
 *
 * Indicates the Application data priority: 0:Immediate, 1:BestEffort, 2:Latest,
 * 3-100: Reserved for future use. 101-254: Proprietary mode.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type DataPriority_7 = number
/**
 * Data Creation Time
 *
 * Indicates the data instance creation timestamp.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type DataCreationTime_8 = number
/**
 * Data Description
 *
 * Indicates the data description (e.g. "Meter data").
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type DataDescription_9 = string
/**
 * Data Format
 *
 * Indicates the format of the Application Data. E.g. JSON compressed format
 * from company XYZ.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type DataFormat_10 = string
/**
 * App ID
 *
 * Indicates the destination application identifier.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type AppID_11 = number
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
 * The objectURN for uCIFI data bridge
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3414:2.0'
