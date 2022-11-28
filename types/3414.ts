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
 * ObjectVersion: 1.0
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
 * The objectURN for uCIFI data bridge
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3414'
