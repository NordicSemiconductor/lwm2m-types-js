/**
 * LwM2M Gateway Routing
 *
 * This object is used by a LwM2M Gateway to maintain the routing table.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/26.xml
 *
 * ID: 26
 * LWM2MVersion: 1.2
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type LwM2MGatewayRouting_26 = Readonly<
	Array<{
		'0': LwM2MObjectID_0
		'1': MappingInfo_1
	}>
>
/**
 * LwM2M Object ID
 *
 * This resource identifies mapping the LwM2M Object ID that is mapped with the
 * Mapping Info Resource. It defines the source of the mapping.
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type LwM2MObjectID_0 = number
/**
 * Mapping Info
 *
 * This resource defines the target of the mapping. This Resource may be empty
 * in which case the mapping is the identity function.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type MappingInfo_1 = string
/**
 * The objectURN for LwM2M Gateway Routing
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '26@1.2'
