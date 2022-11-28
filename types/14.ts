/**
 * LWM2M Software Component
 *
 * If some Objects are not supported after software update, the LwM2M Client
 * MUST delete all the Object Instances of the Objects that are not supported.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/14.xml
 *
 * ID: 14
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type LWM2MSoftwareComponent_14 = Readonly<
	Array<{
		'0'?: ComponentIdentity_0
		'1'?: ComponentPack_1
		'2'?: ComponentVersion_2
		'5'?: ActivationState_5
	}>
>
/**
 * Component Identity
 *
 * Name or identifier of the software component
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: false
 */
type ComponentIdentity_0 = string
/**
 * Component Pack
 *
 * Software components is stored in this resource
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type ComponentPack_1 = string
/**
 * Component Version
 *
 * Version of the software component.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type ComponentVersion_2 = string
/**
 * Activation State
 *
 * Indicates the current activation state of this software component:
 * 0: DISABLED
 * Activation State is DISABLED if the Software Component Activation State
 * Machine is in the INACTIVE state or not alive.
 * 1: ENABLED
 * Activation State is ENABLED only if the Software Component Activation State
 * Machine is in the ACTIVE state.
 *
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type ActivationState_5 = boolean
/**
 * The objectURN for LWM2M Software Component
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '14'
