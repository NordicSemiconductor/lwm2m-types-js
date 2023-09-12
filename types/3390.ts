/**
 * oA Logical Colour Light-Point Actuator
 *
 * The 'oA Logical Colour Light Point Actuator' represents the logical part of
 * an actuator model for a colour light point. The corresponding physical device
 * is a light channel and associated gear (e.g. LED driver).\nThe Object
 * (module) supports several interactions that include absolute and relative
 * colour setting. Several device configuration parameters are mapped, which
 * relate to behaviour or describe device limitations.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3390.xml
 *
 * ID: 3390
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oALogicalColourLight_PointActuator_3390 = Readonly<
	Array<{
		'125': TargetColourX_125
		'126': TargetColourY_126
		'127': ColourChangingTime_127
		'128': ColourTransitionTime_128
		'129': HueStepSize_129
		'130': SaturationStepSize_130
		'131': SetColour_131
		'132': RelativeChangeHue_132
		'133': StepHue_133
		'134': RelativeChangeSaturation_134
		'135': StepSaturation_135
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
 * Target Colour X
 *
 * This Resource represents the target colour X value requested to the Light
 * Point. Scale is: 0.001
 *
 * ID: 125
 * MultipleInstances: false
 * Mandatory: true
 */
type TargetColourX_125 = number
/**
 * Target Colour Y
 *
 * This Resource represents the target colour Y value requested to the Light
 * Point. Scaling is 0.001 per Unit, Value conforms to CIE color definition
 *
 * ID: 126
 * MultipleInstances: false
 * Mandatory: true
 */
type TargetColourY_126 = number
/**
 * Colour Changing Time
 *
 * Defines the time needed to change the light point output from minimum
 * hue/saturation to maximum hue/saturation. The resulting change rate is used
 * for the relative changes of the colour request. Scaling is 100ms per Unit
 *
 * ID: 127
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type ColourChangingTime_127 = number
/**
 * Colour Transition Time
 *
 * Defines the default transition time to be used for 'Set_Colour' and 'Step'
 * requests, if that request has no value specified. A value of 0 means the
 * transaction is immediate. Scaling is 100ms per unit
 *
 * ID: 128
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type ColourTransitionTime_128 = number
/**
 * Hue Step Size
 *
 * Defines the default step size to be used for 'Hue Step' requests, if that
 * request has no value specified. The Hue is in relative units (0..1), scaling
 * is 0.001 per unit, so the integers given are at factor 1000.
 *
 * ID: 129
 * MultipleInstances: false
 * Mandatory: true
 */
type HueStepSize_129 = number
/**
 * Saturation Step Size
 *
 * Defines the default step size to be used for 'Saturation Step' requests, if
 * that request has no value specified. The Saturation is in relative units
 * (0..1), scaling is 0.001 per unit, so the integers given are at factor 1000.
 *
 * ID: 130
 * MultipleInstances: false
 * Mandatory: true
 */
type SaturationStepSize_130 = number
/**
 * Set Colour
 *
 * This Resource allows to set the colour of a light point using the following
 * arguments:\n- *arg0: Colour x* - final colour x value\n- *arg1: Colour y* -
 * final colour y value\n- *arg2: Time* - transition time with 100ms
 * resolution\n\t\t\t\n**Note:** When the optional argument time is not given,
 * or if its value is empty the default configuration value is used.\nA request
 * on this Resource will immediately update 'Remaining Transition Time' and
 * 'Current Colour' until the Set Colour operation is cloncluded.
 *
 * ID: 131
 * MultipleInstances: false
 * Mandatory: true
 */
type SetColour_131 = string
/**
 * Relative Change Hue
 *
 * This Resource allows to change the hue relatively:\n- *Direction* [mandatory]
 * direction of change\n**Note:** During this process, the 'Current Colour' and
 * 'Remaining Transition Time' are continuously updated. If this Resource is
 * executed while another colour variation process is running, the ongoing
 * process is stopped and the new process begins using the colour values at that
 * specific moment as starting point.\n\t\t\t\nSome examples:\n- `POST
 * coap://<target_IP_address>/<dir>/<Obj_ID>/<obj_instance>/118 0` \nincreases
 * hue.\n- `POST coap://<target_IP_address>/<dir>/<Obj_ID>/<obj_instance>/118 1`
 * \ndecreases hue.
 *
 * ID: 132
 * MultipleInstances: false
 * Mandatory: true
 */
type RelativeChangeHue_132 = boolean
/**
 * Step Hue
 *
 * This resource allows to increase and decrease the hue of the colour light
 * point by a given step size. \nThe following paramters are used:\n- *arg0:
 * Direction* - step direction (true=increase hue, false=decrease hue)\n- *arg1:
 * Step Size* - the size of the step\n- *arg2: Transition Time* - transition
 * time with 100ms resolution\n\t\t\t\t\n**Note:** During this process, the
 * 'Remaining Transition Time' and 'Current Colour' are continuously
 * updated.\nIf this Resource is executed while another colour variation process
 * is running, the ongoing is stopped and this new process is started, using the
 * current colour value as a starting point.
 *
 * ID: 133
 * MultipleInstances: false
 * Mandatory: true
 */
type StepHue_133 = string
/**
 * Relative Change Saturation
 *
 * This Resource allows to change the saturation relatively:\n- *Direction*
 * [mandatory] direction of change\n**Note:** During this process, the 'Current
 * Colour' and 'Remaining Transition Time' are continuously updated.If this
 * Resource is executed while another colour variation process is running, the
 * ongoing process is stopped and the new process begins using the actual colour
 * as starting point.\n\t\t\t\nSome examples:\n- `POST
 * coap://<target_IP_address>/<dir>/<Obj_ID>/<obj_instance>/118 0` \ndecreases
 * saturation.\n- `POST
 * coap://<target_IP_address>/<dir>/<Obj_ID>/<obj_instance>/118 1` \nincreases
 * saturation.
 *
 * ID: 134
 * MultipleInstances: false
 * Mandatory: true
 */
type RelativeChangeSaturation_134 = boolean
/**
 * Step Saturation
 *
 * This resource allows to increase and decrease the saturation of the colour
 * light point by a given step size. \nThe following paramters are used:\n-
 * *arg0: Direction* - step direction (true=increase saturation, false=decrease
 * saturation)\n- *arg1: Step Size* - the size of the step\n- *arg2: Transition
 * Time* - transition time with 100ms resolution\n\t\t\t\t\n**Note:** During
 * this process, the 'Remaining Transition Time' and 'Current Colour' are
 * continuously updated.\nIf this Resource is executed while another colour
 * variation process is running, the ongoing is stopped and this new process is
 * started, using the current colour value as a starting point.
 *
 * ID: 135
 * MultipleInstances: false
 * Mandatory: true
 */
type StepSaturation_135 = string
/**
 * Recall Scene
 *
 * When written, the scene with the given ID is recalled immediately.
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
 * Defines a test event for injection into the system when debug mode is
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
 * The objectURN for oA Logical Colour Light-Point Actuator
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3390@1.1'
