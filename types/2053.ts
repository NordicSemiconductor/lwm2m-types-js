/**
 * CmdhLimits
 *
 * This Object represents limits for CMDH related parameter values.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/2053.xml
 *
 * ID: 2053
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CmdhLimits_2053 = Readonly<
	Array<{
		'0': Order_0
		'1': RequestOrigin_1
		'5': LimitsEventCategory_5
		'6': LimitsRequestExpTime_6
		'7': LimitsResultExpTime_7
		'8': LimitsOptExpTime_8
		'9': LimitsRespPersistence_9
		'10': LimitsDelAggregation_10
		'2'?: RequestContext_2
		'3'?: RequestContextNotificatio_3
		'4'?: RequestCharacteristics_4
	}>
>
/**
 * Order
 *
 * Contains index indicating in which order the concerned CmdhLimits Object
 * Instance will be treated by the CSE to determine a value for the limit
 * parameters.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Order_0 = number
/**
 * RequestOrigin
 *
 * List of zero or more Local AE-IDs, App-IDs, or the strings "localAE" or
 * "thisCSE"
 *
 * ID: 1
 * MultipleInstances: true
 * Mandatory: true
 */
type RequestOrigin_1 = string
/**
 * LimitsEventCategory
 *
 * Allowed values for the Event Category parameter in a request of any of the
 * Originators indicated in the requestOrigin attribute.
 *
 * ID: 5
 * MultipleInstances: true
 * Mandatory: true
 */
type LimitsEventCategory_5 = number
/**
 * LimitsRequestExpTime
 *
 * Defines a range of values for the Request Expiration Time parameter for a
 * request of any Originator indicated in the requestOrigin Resource
 * Inst 0 : minTime
 * Inst 1: maxTime
 *
 *
 * ID: 6
 * MultipleInstances: true
 * Mandatory: true
 * Units: ms
 */
type LimitsRequestExpTime_6 = number
/**
 * LimitsResultExpTime
 *
 * Defines a range of values for the Result Expiration Time parameter for a
 * request of any Originator indicated in the requestOrigin Resource
 * Inst 0 : minTime
 * Inst 1: maxTime
 *
 *
 * ID: 7
 * MultipleInstances: true
 * Mandatory: true
 * Units: ms
 */
type LimitsResultExpTime_7 = number
/**
 * LimitsOptExpTime
 *
 * Defines a range of values for the Operation Expiration Time parameter for a
 * request of any Originator indicated in the requestOrigin Resource
 * Inst 0 : minTime
 * Inst 1: maxTime
 *
 *
 * ID: 8
 * MultipleInstances: true
 * Mandatory: true
 * Units: ms
 */
type LimitsOptExpTime_8 = number
/**
 * LimitsRespPersistence
 *
 * Defines a range of values for the Result Persistence parameter for a request
 * of any Originator indicated in the requestOrigin Resource
 * Inst 0 : minTime
 * Inst 1: maxTime
 *
 *
 * ID: 9
 * MultipleInstances: true
 * Mandatory: true
 * Units: ms
 */
type LimitsRespPersistence_9 = number
/**
 * LimitsDelAggregation
 *
 * Contains the permitted settings of the DeliveryAggregation parameter of
 * request primitives.
 * '0' means 'False' '1' means 'True' '0 1' means 'False' or 'True'
 *
 *
 * ID: 10
 * MultipleInstances: true
 * Mandatory: true
 */
type LimitsDelAggregation_10 = string
/**
 * RequestContext
 *
 * Represents the Dynamic Context condition under which CMDH parameter limits
 * defined inside the concerned CmdhLimits Object Instance is applicable.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type RequestContext_2 = string
/**
 * RequestContextNotificatio
 *
 * Contains true/false flag indicating whether or not notification procedures
 * apply.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type RequestContextNotificatio_3 = boolean
/**
 * RequestCharacteristics
 *
 * Represents conditions pertaining to the request itself, (e.g. the requested
 * Response Type ) than needs to be matched
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type RequestCharacteristics_4 = string
/**
 * The objectURN for CmdhLimits
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '2053'
