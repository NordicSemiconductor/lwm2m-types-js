/**
 * oA Scene
 *
 * The 'oA Scene' represents a scene model. The scene holds defined values for
 * each actuator in one group.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3404.xml
 *
 * ID: 3404
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oAScene_3404 = Readonly<
	Array<{
		'650': SceneID_650
		'651': ApplicationGroupID_651
		'652': TransitionTime_652
		'653': SceneConfiguration_653
		'655': ChangeablebyUserAPI_655
		'4001'?: ObjectVersion_4001
		'901'?: DocumentaryDescription_901
	}>
>
/**
 * Scene ID
 *
 * The ID that is used to recall the scene. This needs to be unique within one
 * application group.
 *
 * ID: 650
 * MultipleInstances: false
 * Mandatory: true
 */
type SceneID_650 = number
/**
 * Application Group ID
 *
 * The application group ID the scene definition applies to.
 *
 * ID: 651
 * MultipleInstances: false
 * Mandatory: true
 */
type ApplicationGroupID_651 = number
/**
 * Transition Time
 *
 * Defines the transition time to be used for changing to this scene.
 *
 * ID: 652
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type TransitionTime_652 = number
/**
 * Scene Configuration
 *
 * Defines the list of output properties that are changed when a scene is
 * recalled. Complex Data comprising a Corelnk pointing to the resource, a
 * payload that sets the resource and a boolean that says if POST or PUT should
 * be applied
 *
 * ID: 653
 * MultipleInstances: true
 * Mandatory: true
 */
type SceneConfiguration_653 = string
/**
 * Changeable by User API
 *
 * If true, the settings for this scene can be changed using the User API.
 *
 * ID: 655
 * MultipleInstances: false
 * Mandatory: true
 */
type ChangeablebyUserAPI_655 = boolean
/**
 * ObjectVersion
 *
 * LWM2M Object versioning label.
 *
 * ID: 4001
 * MultipleInstances: false
 * Mandatory: false
 */
type ObjectVersion_4001 = string
/**
 * Documentary Description
 *
 * Resource to hold a documentary text description of the object.
 *
 * ID: 901
 * MultipleInstances: false
 * Mandatory: false
 */
type DocumentaryDescription_901 = string
/**
 * The objectURN for oA Scene
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3404@1.1'
