/**
 * oA Logical Light-Point Actuator
 *
 * The 'oA Logical Light Point Actuator' represents the logical part of an
 * actuator model for a dimmable light point. The corresponding physical device
 * is a light channel and associated gear (e.g. LED driver).\nThe Object
 * (module) supports several interactions that include basic On/Off as well as
 * Up/Down dimming. Several device configuration parameters are mapped, which
 * relate to behaviour or describe device limitations. For multi-channel
 * luminaires where the configuration per channel may vary significantly (e.g.
 * different max/min values), multiple instances of this Object should be used.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3393.xml
 *
 * ID: 3393
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oALogicalLight_PointActuator_3393 = Readonly<
	Array<{
		'100': TargetOnOff_100
		'101': TargetIntensity_101
		'106': DimmingTime_106
		'108': TransitionTime_108
		'109': StepSize_109
		'117': Switch_117
		'118': Dim_118
		'120': Step_120
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
 * Target OnOff
 *
 * This Resource represents the target on/off status requested to the Light
 * Point. On reset this value should be set to ON. On a Power cycle, the Target
 * intensity is set according to 'On Behaviour'.
 *
 * ID: 100
 * MultipleInstances: false
 * Mandatory: true
 */
type TargetOnOff_100 = boolean
/**
 * Target Intensity
 *
 * This Resource represents the target intensity requested to the Light Point.
 * On reset this value should be set to 1. On a Power cycle, the Target
 * intensity is set according to 'On Behaviour'.
 *
 * ID: 101
 * MultipleInstances: false
 * Mandatory: true
 */
type TargetIntensity_101 = number
/**
 * Dimming Time
 *
 * Defines the time needed to dim the light point from minimum intensity to
 * maximum intensity. The resulting dimming rate is used for every 'Dim'
 * request. Scaling is 100ms per unit
 *
 * ID: 106
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type DimmingTime_106 = number
/**
 * Transition Time
 *
 * Defines the default transition time to be used for 'Set_Intensity' and 'Step'
 * requests, if that request has no value specified. A value of 0 means the
 * transaction is immediate. Scaling is 100ms per unit
 *
 * ID: 108
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type TransitionTime_108 = number
/**
 * Step Size
 *
 * Defines the default step size to be used for 'Step' requests, if that request
 * has no value specified. The value is a factor to the intensity, a value of
 * 0.2 defines a 20% change to the output intensity.
 *
 * ID: 109
 * MultipleInstances: false
 * Mandatory: true
 */
type StepSize_109 = number
/**
 * Switch
 *
 * This Resource allows to perform On/Off Switch operations with additional
 * input arguments on a light point:\n- *arg0: Action* - the action that is to
 * be performed On or Off\n- *arg1: Intensity* - final intensity value\n- *arg2:
 * Time* - transition time with 100ms resolution\n\t\t\t\nEither arg0: Action or
 * arg1: Intensity need to be present.\nSome examples:\n- `POST
 * coap://<target_IP_address>/<dir>/<Obj_ID>/<object-instance>/117
 * {0:false,2:2}` \nor\n`POST
 * coap://<target_IP_address>/<dir>/<Obj_ID>/<object-instance>/117 {1:0,2:2}`
 * \nsets the light point to Off and takes 200ms to set the intensity to '0'\n-
 * `POST coap://<target_IP_address>/<dir>/<Obj_ID>/<object-instance>/117
 * {0:true,2:2}` \nsets the light point to On and takes 200ms to set the
 * intensity to the intensity that was active before the lightpoint was switched
 * off.\n- `POST coap://<target_IP_address>/<dir>/<Obj_ID>/<object-instance>/117
 * {1:1,2:2}` \nsets the light point to On and takes 200ms to set the intensity
 * to '1'\n\t\t\t\n**Note:** When the optional argument time is not given, or if
 * its value is empty the default configuration value is used.\nA request on
 * this Resource will immediately impact the value of 'On/Off Status' and a
 * continuous update of 'Remaining Transition Time' and 'Current Intensity'
 * until the Switch operation is cloncluded.
 *
 * ID: 117
 * MultipleInstances: false
 * Mandatory: true
 */
type Switch_117 = string
/**
 * Dim
 *
 * This Resource allows to perform 'Dim' operations on a light point:\n-
 * *Direction* [mandatory] dim direction (UP=brighter, DOWN=darker)\n**Note:**
 * During this process, the 'Current Intensity' and 'Remaining Transition Time'
 * are continuously updated.If this Resource is written while another intensity
 * variation process is running, the ongoing process is stopped and the dimming
 * process begins using as starting point the intensity value at that specific
 * moment.\n\t\t\t\nSome examples:\n- `POST
 * coap://<target_IP_address>/<dir>/<Obj_ID>/<obj_instance>/118 0` \ndims the
 * light points down.\n- `POST
 * coap://<target_IP_address>/<dir>/<Obj_ID>/<obj_instance>/118 1` \ndims the
 * light point up.\n\t\t\t\t\nDimming is also possible during off. This effects
 * the intensity that 'On' requests without requested intensity will execute.
 *
 * ID: 118
 * MultipleInstances: false
 * Mandatory: true
 */
type Dim_118 = boolean
/**
 * Step
 *
 * This resource allows to increase and decrease the intensity of the light
 * point by a given step size relative to the current intensity. \nE.g. a
 * decrease by 0.2 of a current intensity of 0.5 results in an intensity of
 * 0.4.\nThe following paramters are used:\n- *arg0: Direction* - step direction
 * (true=brighter, false=darker)\n- *arg1: Step Size* - the size of the step,
 * relative to the current intensity\n- *arg2: Transition Time* - transition
 * time with 100ms resolution\n\t\t\t\t\n**Note:** During this process, the
 * 'Remaining Transition Time' and 'Current Intensity' are continuously
 * updated.\nIf this Resource is executed while another intensity variation
 * process is running, the ongoing is stopped and this new process is started,
 * using the current intensity value as a starting point.
 *
 * ID: 120
 * MultipleInstances: false
 * Mandatory: true
 */
type Step_120 = string
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
 * Define a test events to be injected into the system when debug mode is
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
 * The objectURN for oA Logical Light-Point Actuator
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3393@1.1'
