/**
 * BinaryAppDataContainer
 *
 * This LwM2M Objects provides the application service data related to a LwM2M
 * Server, eg. Water meter data.
 * There are several methods to create instance to indicate the message
 * direction based on the negotiation between Application and LwM2M. The Client
 * and Server should negotiate the instance(s) used to exchange the data. For
 * example:
 * - Using a single instance for both directions communication, from Client to
 * Server and from Server to Client.
 * - Using an instance for communication from Client to Server and another one
 * for communication from Server to Client
 * - Using several instances
 *
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/19.xml
 *
 * ID: 19
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type BinaryAppDataContainer_19 = Readonly<
	Array<{
		'0': Data_0
		'1'?: DataPriority_1
		'2'?: DataCreationTime_2
		'3'?: DataDescription_3
		'4'?: DataFormat_4
		'5'?: AppID_5
	}>
>
/**
 * Data
 *
 * Indicates the application data content.
 *
 * ID: 0
 * MultipleInstances: true
 * Mandatory: true
 */
type Data_0 = Array<string>
/**
 * Data Priority
 *
 * Indicates the Application data priority:
 * 0:Immediate
 * 1:BestEffort
 * 2:Latest
 * 3-100: Reserved for future use.
 * 101-254: Proprietary mode.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type DataPriority_1 = number
/**
 * Data Creation Time
 *
 * Indicates the Data instance creation timestamp.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type DataCreationTime_2 = number
/**
 * Data Description
 *
 * Indicates the data description.
 * e.g. "meter reading".
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type DataDescription_3 = string
/**
 * Data Format
 *
 * Indicates the format of the Application Data.
 * e.g. YG-Meter-Water-Reading
 * UTF8-string
 *
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type DataFormat_4 = string
/**
 * App ID
 *
 * Indicates the destination Application ID.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type AppID_5 = number
/**
 * The objectURN for BinaryAppDataContainer
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '19'
