/**
 * oA Logical Colour Temperature Light-Point Actuator
 *
 * The 'oA Logical Colour_Temperature Light Point Actuator' represents the
 * logical part of an actuator model for a tunable white light point. The
 * corresponding physical device is a light channel and associated gear (e.g.
 * LED driver).\nThe Object (module) supports several interactions that include
 * absolute and relative colour temperature setting. Several device
 * configuration parameters are mapped, which relate to behaviour or describe
 * device limitations. Note that the overall intensity is not controlled by this
 * object, it remains controlled by a logical light point object to ease dimming
 * action across tuneable, coloured and non coloured lights. Please note also,
 * that the corresponding executing object does not need to be restricted to
 * tuneable white operation.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3391.xml
 *
 * ID: 3391
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oALogicalColourTemperatureLight_PointActuator_3391 = Readonly<
	Array<{
		'139': ColourTemperatureChangingTime_139
		'140': ColourTemperatureTransitionTime_140
		'141': ColourTemperatureStepSize_141
		'142': SetColourTemperature_142
		'143': RelativeChangeColourTemperature_143
		'145': StepColourTemperature_145
		'146': TargetColourTemperature_146
		'902': RecallScene_902
		'903': ApplicationGroupID_903
		'904': StatusResendTime_904
		'909': ExecutingObject_909
		'919': StatusReportStructureID_919
		'921': Priority_921
		'901'?: DocumentaryDescription_901
		'905'?: DebugModeEnabled_905
		'906'?: InjectTestEvent_906
		'922'?: SceneCache_922
		'924'?: ObjectEnabled_924
		'4001'?: ObjectVersion_4001
	}>
>
/**
 * Colour Temperature Changing Time
 *
 * Defines the time needed to change the light point from minimum colour
 * temperature to maximum colour temperature. The resulting change rate is used
 * for every colour temperature shift request. Scaling is 100ms per unit
 *
 * ID: 139
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type ColourTemperatureChangingTime_139 = number
/**
 * Colour Temperature Transition Time
 *
 * Defines the default transition time to be used for 'Set_Colour_Temperature'
 * and 'Step' requests, if that request has no value specified. A value of 0
 * means the transaction is immediate. Scaling is 100ms per unit
 *
 * ID: 140
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type ColourTemperatureTransitionTime_140 = number
/**
 * Colour Temperature Step Size
 *
 * Defines the default step size to be used for 'Step' requests, if that request
 * has no value specified.
 *
 * ID: 141
 * MultipleInstances: false
 * Mandatory: true
 * Units: K
 */
type ColourTemperatureStepSize_141 = number
/**
 * Set Colour Temperature
 *
 * This Resource allows to set the colour temperature to an absolute value.
 * Possible arguments are:\n- *arg0: Colour Temperature* - final colour
 * temperature value\n- *arg1: Transition Time* - transition time with 100ms
 * resolution\n\t\t\t\n**Note:** When the optional argument time is not given,
 * or if its value is empty the default configuration value is used.\nA request
 * on this Resource will immediately update 'Remaining Transition Time' and
 * 'Current Colour Temperature' until the Set Colour Temperature operation is
 * cloncluded.
 *
 * ID: 142
 * MultipleInstances: false
 * Mandatory: true
 */
type SetColourTemperature_142 = string
/**
 * Relative Change Colour Temperature
 *
 * This Resource allows to change the colour temperature relatively:\n-
 * *Direction* [mandatory] direction of colour temperature change\n**Note:**
 * During this process, the 'Current Colour Temperature' and 'Remaining
 * Transition Time' are continuously updated. If this Resource is executed while
 * another colour temperature variation process is running, the ongoing process
 * is stopped and the relative change process begins using as starting point the
 * colour temperature value at that specific moment.\n\t\t\t\nSome examples:\n-
 * `POST coap://<target_IP_address>/<dir>/<Obj_ID>/<obj_instance>/118 0`
 * \nreduces the colour temperature.\n- `POST
 * coap://<target_IP_address>/<dir>/<Obj_ID>/<obj_instance>/118 1` \nincreases
 * the colour temperature.
 *
 * ID: 143
 * MultipleInstances: false
 * Mandatory: true
 */
type RelativeChangeColourTemperature_143 = boolean
/**
 * Step Colour Temperature
 *
 * This resource allows to increase and decrease the colour temperature of the
 * light point by a given step size. \nThe following paramters are used:\n-
 * *arg0: Direction* - step direction (true=increase, false=decrease)\n- *arg1:
 * Step Size* - the size of the step\n- *arg2: Transition Time* - transition
 * time with 100ms resolution\n\t\t\t\t\n**Note:** During this process, the
 * 'Remaining Transition Time' and 'Current Colour Temperature' are continuously
 * updated.\nIf this Resource is executed while another colour temperature
 * variation process is running, the ongoing is stopped and this new process is
 * started, using the current colour temperature value as a starting point.
 *
 * ID: 145
 * MultipleInstances: false
 * Mandatory: true
 */
type StepColourTemperature_145 = string
/**
 * Target Colour Temperature
 *
 * This Resource represents the target colour temperature requested to the Light
 * Point. On reset this value should be set to 5000. On a Power cycle, the
 * Target colour temperature is set according to 'On Behaviour'.
 *
 * ID: 146
 * MultipleInstances: false
 * Mandatory: true
 * Units: K
 */
type TargetColourTemperature_146 = number
/**
 * Recall Scene
 *
 * When written, the scene with the given ID is recalled.
 *
 * ID: 902
 * MultipleInstances: false
 * Mandatory: true
 */
type RecallScene_902 = number
/**
 * Application Group ID
 *
 * The application group ID that the logical object is part of. This ID will
 * define the application group the status reports are sent to. It is internally
 * used as a pointer to the Group Object instance that hosts all the Group
 * configurations.
 *
 * ID: 903
 * MultipleInstances: false
 * Mandatory: true
 */
type ApplicationGroupID_903 = number
/**
 * Status Resend Time
 *
 * The time specified as status resend time is used to resend the actual status
 * to the application group the object is a member of, even if nothing
 * changed.\nThe status resend time is restarted after every event. The actual
 * interval is a random time with the maximum duration given by this resource.
 * Randomization helps to avoid massive ongoing message collisions after system
 * power up.\nFor example: Status resend time is set to 10 seconds;\n* 00:00
 * status is sent\n* 00:05 status changes and is sent immediatly\n* 00:15 (or
 * before, depending on the randomization) status is sent even though it did not
 * change
 *
 * ID: 904
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type StatusResendTime_904 = number
/**
 * Executing Object
 *
 * Link to the Object Instance in CoRE Link Format
 * [RFC6690](https://tools.ietf.org/html/rfc6690)
 *
 * ID: 909
 * MultipleInstances: false
 * Mandatory: true
 */
type ExecutingObject_909 = string
/**
 * Status Report Structure ID
 *
 * The ID of the status resource structure that is used to code the cyclic
 * status report. See object 4012 'oA Status Report Structure' for more
 * information
 *
 * ID: 919
 * MultipleInstances: false
 * Mandatory: true
 */
type StatusReportStructureID_919 = number
/**
 * Priority
 *
 * The priority of this Logical Object. If a Logical Object with a higher
 * priority controlles the same physical object, this instance will hold its
 * settings until its priority is sufficient again. \nIf the priorities are the
 * same the last one is served.
 *
 * ID: 921
 * MultipleInstances: false
 * Mandatory: true
 */
type Priority_921 = number
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
 * Debug Mode Enabled
 *
 * Enables the object test mode. The physical representation of the object will
 * be disabled. Stimuli can be injected to test the object remotely using inject
 * test event.
 *
 * ID: 905
 * MultipleInstances: false
 * Mandatory: false
 */
type DebugModeEnabled_905 = boolean
/**
 * Inject Test Event
 *
 * Defines the test events to be injected into the system when debug mode is
 * enabled. Event definition is vendor specific.
 *
 * ID: 906
 * MultipleInstances: false
 * Mandatory: false
 */
type InjectTestEvent_906 = number
/**
 * Scene Cache
 *
 * A cache for the scene values. These values should be called when a scene is
 * recalled. It is buildt from a Scene_ID (UInt 16, a target resource (Corelnk)
 * defineition, and a payload that operates on this resource), a transition time
 * in ms (UInt16), and an action (Put/Post) defintion
 *
 * ID: 922
 * MultipleInstances: true
 * Mandatory: false
 */
type SceneCache_922 = Array<string>
/**
 * Object Enabled
 *
 * This resource allows to disable an object instance. \nIf an object instance
 * is disabled it does process incoming events but does not create outgoing
 * events.
 *
 * ID: 924
 * MultipleInstances: false
 * Mandatory: false
 */
type ObjectEnabled_924 = boolean
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
 * The objectURN for oA Logical Colour Temperature Light-Point Actuator
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3391@1.1'
