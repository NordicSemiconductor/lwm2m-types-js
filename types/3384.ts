/**
 * sipSubscriptionEvent
 *
 * SIP Subscription status
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3384.xml
 *
 * ID: 3384
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type sipSubscriptionEvent_3384 = Readonly<{
	'0': eventType_0
	'1': subscriptionResult_1
}>
/**
 * eventType
 *
 * -obtained header of the SUBSCRIBE
 * 1 = Registration
 * 2 = Presence
 * 3 = Conference
 * 4 = Dialog
 * 5 = Call-info
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type eventType_0 = number
/**
 * subscriptionResult
 *
 * -1 = Event subscription message not available
 * 0 = Success (when 200 OK received is followed by NOTIFY, and applies to all
 * Event Types)
 * 1 = Failure (when any error other than 401 is received; else when 408 timeout
 * occurs)
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type subscriptionResult_1 = number
/**
 * The objectURN for sipSubscriptionEvent
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3384'
