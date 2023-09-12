/**
 * CmdhDefEcValues
 *
 * This Object represents default set of values for the Event Category parameter
 * of an incoming request or response message.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/2051.xml
 *
 * ID: 2051
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CmdhDefEcValues_2051 = Readonly<
	Array<{
		'0': Order_0
		'1': DefEcValue_1
		'2': RequestOrigin_2
		'3'?: RequestContext_3
		'4'?: RequestContextNotification_4
		'5'?: RequestCharacteristics_5
	}>
>
/**
 * Order
 *
 * Contains an index defining the order of processing this CmdhDefEcValue Object
 * Instance will be handled
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Order_0 = number
/**
 * DefEcValue
 *
 * Represents the default Event category value to be applied when the conditions
 * given in this Object Instance are matched
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type DefEcValue_1 = string
/**
 * RequestOrigin
 *
 * List of zero or more Local AE-IDs, App-IDs, or the strings "localAE" or
 * "thisCSE"
 *
 * ID: 2
 * MultipleInstances: true
 * Mandatory: true
 */
type RequestOrigin_2 = Array<string>
/**
 * RequestContext
 *
 * Contains the requestContext information of this Object Instance which needs
 * to be matched
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type RequestContext_3 = string
/**
 * RequestContextNotification
 *
 * Contains true/false flag indicating whether or not notification procedures
 * apply.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type RequestContextNotification_4 = boolean
/**
 * RequestCharacteristics
 *
 * Represents conditions pertaining to the request itself, (e.g. the requested
 * Response Type ) than needs to be matched
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type RequestCharacteristics_5 = string
/**
 * The objectURN for CmdhDefEcValues
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '2051'
