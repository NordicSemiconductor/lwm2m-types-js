/**
 * CmdhBackOffParametersSet
 *
 * This Object defines set of parameters which can be referenced by a specific
 * Instance of the CmdhNwAccessRule Object (ID: 2055)
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/2057.xml
 *
 * ID: 2057
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CmdhBackOffParametersSet_2057 = Readonly<
	Array<{
		'1': InitialBackoffTime_1
		'2': AdditionalBackoffTime_2
		'3': MaximumBackoffTime_3
		'0'?: NetworkAction_0
		'4'?: OptionalRandomBackoffTime_4
	}>
>
/**
 * InitialBackoffTime
 *
 * Regarding the BackOffParameters of a certain CmdhNwAccessRule Object
 * Instance, this Resource contains the value for the Initial wait time.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type InitialBackoffTime_1 = number
/**
 * AdditionalBackoffTime
 *
 * Regarding the BackOffParameters of a certain CmdhNwAccessRule Object
 * Instance, this Resource contains the value for an additional wait tme.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type AdditionalBackoffTime_2 = number
/**
 * MaximumBackoffTime
 *
 * Regarding the BackOffParameters of a certain CmdhNwAccessRule Object
 * Instance, this Resource contains the value for the maximum wait time
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type MaximumBackoffTime_3 = number
/**
 * NetworkAction
 *
 * Contains specific action actually attempted on the network (e.g.
 * cellular-registration)
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: false
 */
type NetworkAction_0 = number
/**
 * OptionalRandomBackoffTime
 *
 * Regarding the BackOffParameters of a certain CmdhNwAccessRule Object
 * Instance, this Resource contains the value for an optional random wait time.
 *
 * ID: 4
 * MultipleInstances: true
 * Mandatory: false
 * Units: ms
 */
type OptionalRandomBackoffTime_4 = Array<number>
/**
 * The objectURN for CmdhBackOffParametersSet
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '2057'
