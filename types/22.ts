/**
 * Virtual Observe Notify
 *
 * The Virtual Observe Notify Object provides a main function to notify multiple
 * resources to a LwM2M Server in one notification message whether the resources
 * are in one object/object instance or across multiple objects. The Virtual
 * Observe Notify Object also provides some functions to implement more
 * efficient multi-resource report.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/22.xml
 *
 * ID: 22
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.1
 * MultipleInstances: true
 * Mandatory: false
 */
export type VirtualObserveNotify_22 = Readonly<
	Array<{
		'0': ObserveLinks_0
		'1': Report_1
		'2'?: ResourceFilter_2
		'3'?: ReportLinks_3
		'4'?: ObserveRelation_4
		'5'?: VirtualObserveReportFormat_5
		'6'?: VirtualObserveReport_6
	}>
>
/**
 * ObserveLinks
 *
 * Array of Core Links where each element includes a Resource ID or Object
 * Instance ID to be observed and its observation criteria (lt, gt, st, pmin,
 * pmax).
 *
 * When the LwM2M Server write the resources or object instances to this
 * Resource, the LwM2M Client starts to observe these resources.
 * When the LwM2M Server write empty string to this Resource, the LwM2M Client
 * stop to observe resources.
 *
 * ID: 0
 * MultipleInstances: true
 * Mandatory: true
 */
type ObserveLinks_0 = string
/**
 * Report
 *
 * This resource is populated by the LwM2M Client each time an observed resource
 * from ObserveLinks meets its observation criteria, thereby resulting in a
 * notification to a LwM2M Server that is observing Report resource. The type
 * MUST be SenML JSON
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Report_1 = string
/**
 * ResourceFilter
 *
 * Used by the LwM2M Server to indicate the LwM2M Client whether send all or
 * changed resources.
 * False: report all Resources,
 * True: report only changed Resources.
 * When it is absent, the LwM2M Client shall report all Resources as default.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type ResourceFilter_2 = boolean
/**
 * ReportLinks
 *
 * Array of Core Links where each element includes the Resources ID to be
 * included in the notification.
 *
 * If ReportLinks Resource is absent, the notification sent to the LwM2M Server
 * will only include the Resources in ObserveLinks .
 *
 * If the ReportLinks Resource is present, the notification sent to the LwM2M
 * Server will only include the Resources that are listed in ReportLinks and not
 * include the value of the Resource ObserveLinks.
 *
 * To provide maximum flexibility to the server the Notifications will not
 * comprise the union of resources in ObserveLinks and ReportLinks when both
 * present.
 *
 * ID: 3
 * MultipleInstances: true
 * Mandatory: false
 */
type ReportLinks_3 = string
/**
 * ObserveRelation
 *
 * Used by the server to indicate the AND/OR logic relationship combination
 * between or among resources included in ObserveLinks Resource.
 * 0: OR
 * 1: AND
 * 2: reserved value.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type ObserveRelation_4 = number
/**
 * Virtual Observe Report Format
 *
 * If present, it specifies the content format LwM2M Client will use to populate
 * Virtual Observe Report Resource.
 * Values will be either as per Tables 7.4.1 and 7.4.2 of LwM2M Core TS or
 * another IANA registered Media Type. Default value of SenML JSON is assumed
 * when this resource is not present.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type VirtualObserveReportFormat_5 = number
/**
 * Virtual Observe Report
 *
 * If present this resource is populated by the LwM2M Client following exactly
 * the same rules as those used to populate Resource 4, Report Resource.
 * The only difference is that this resource is formatted as defined by Resource
 * 5
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type VirtualObserveReport_6 = string
/**
 * The objectURN for Virtual Observe Notify
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '22:1.1@1.1'
