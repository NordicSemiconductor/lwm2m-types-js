/**
 * CmdhEcDefParamValues
 *
 * This Object represents a specific set of default values for the CMDH related
 * parameters Request Expiration Timestamp, Result Expiration Timestamp,
 * Operational Execution Time, Result Persistence and Delivery Aggregation that
 * are applicable for a given Event Category if these parameters are not
 * specified in the message.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/2052.xml
 *
 * ID: 2052
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type CmdhEcDefParamValues_2052 = Readonly<
	Array<{
		'0': ApplicableEventCategory_0
		'1': DefaultRequestExpTime_1
		'2': DefaultResultExpTime_2
		'3': DefaultOpExecTime_3
		'4': DefaultRespPersistence_4
		'5': DefaultDelAggregation_5
	}>
>
/**
 * ApplicableEventCategory
 *
 * Contains list of Event Category values
 *
 * ID: 0
 * MultipleInstances: true
 * Mandatory: true
 */
type ApplicableEventCategory_0 = number
/**
 * DefaultRequestExpTime
 *
 * Contains the default value for the Request Expiration Timestamp parameter
 * when such a parameter is not set in the request
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type DefaultRequestExpTime_1 = number
/**
 * DefaultResultExpTime
 *
 * Contains the default value of the Result Expiration Timestamp parameter when
 * such a parameter is not set in the request
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type DefaultResultExpTime_2 = number
/**
 * DefaultOpExecTime
 *
 * Contains the default value of the Operation Execution Time parameter when
 * such a parameter is not set in the request
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type DefaultOpExecTime_3 = number
/**
 * DefaultRespPersistence
 *
 * Contains the default value of the Result Persistence parameter when such a
 * parameter is not set in the request
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type DefaultRespPersistence_4 = number
/**
 * DefaultDelAggregation
 *
 * Contains the default value of the Delivery Aggregation parameter when such a
 * parameter is not set in the request
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type DefaultDelAggregation_5 = number
/**
 * The objectURN for CmdhEcDefParamValues
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '2052'
