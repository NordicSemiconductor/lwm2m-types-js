/**
 * oA Basic Control
 *
 * The 'oA Basic Control' represents a common basic interface for a Control
 * Function. This allows to have vendor specific (executing) control functions
 * using diverse object numbers to be interfaced for the basic functionality in
 * a common way. The object provides the basic functionality required for an
 * OpenAIS control object.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3387.xml
 *
 * ID: 3387
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oABasicControl_3387 = Readonly<
	Array<{
		'800': ControlFunctionStatus_800
		'801': ControlObjectMode_801
		'803': ControlledApplicationGroupID_803
		'806': Push_ButtonEventConfiguration_806
		'807': PresenceSensorEventConfiguration_807
		'812': GhostStatus_812
		'813': SupersedeHeartbeatTime_813
		'909': ExecutingObject_909
		'4001'?: ObjectVersion_4001
		'802'?: GhostConfiguration_802
		'805'?: SupersedeHeartbeat_805
		'811'?: Active_Controller_List_811
		'901'?: DocumentaryDescription_901
		'905'?: DebugModeEnabled_905
		'906'?: InjectTestEvent_906
		'924'?: ObjectEnabled_924
	}>
>
/**
 * Control Function Status
 *
 * Current behaviour status of the control function:\n* **0: disabled** (The
 * control function is disabled (see Object_Enabled). The control logic is still
 * enabled and processes incoming events and updates the current state, but
 * doesn't create outgoing events. No sensor or actuator mimicking actions are
 * performed when in disabled mode.)\n* **1: normal** (The local control is
 * fully operational, a superior control object can override the actual control
 * using the northbound interface, but has no guarantee that a sensor or User
 * Interface event overrides this without any warning.)\n* **2: remote** (No
 * actuator actions related to sensor signals received via the eastbound
 * interface are performed. The Remote state is e.g. used to allow the superior
 * control to handle the actuators individually through the westbound interface,
 * using its own algorithms.)\n* **3: local** (Set to local, a control object
 * will no longer execute requests coming through the northbound interface. The
 * sensor mimicking and the control status setting remains operational. This
 * operating mode isolates the control object from superior control objects, and
 * may be used e.g. to support troubleshooting and error triage handling.)\n*
 * **255: non responsive** (internal failure)
 *
 * ID: 800
 * MultipleInstances: false
 * Mandatory: true
 */
type ControlFunctionStatus_800 = number
/**
 * Control Object Mode
 *
 * Configures the mode of this control function instance, see
 * Control_Function_Status.
 *
 * ID: 801
 * MultipleInstances: false
 * Mandatory: true
 */
type ControlObjectMode_801 = number
/**
 * Controlled Application Group ID
 *
 * Application Group ID of the controlled actuators.
 *
 * ID: 803
 * MultipleInstances: false
 * Mandatory: true
 */
type ControlledApplicationGroupID_803 = number
/**
 * Push-Button Event Configuration
 *
 * Configures the reaction on button events: Bitwise: 0 (LSB): switch-on, 1:
 * switch-off, 2: darker, 3: brighter, 4: save \n**Reaction on CLICK event:**\n*
 * If the switch-on and switch-off bits are not set, the CLICK event is
 * ignored.\n* If only the switch-on bit is set, the CLICK event always switches
 * to On-State.\n* If only the switch-off bit is set, the CLICK event always
 * switches to Off-State.\n* If the switch-on and switch-off bits are set, the
 * CLICK event toggles between Off-State and On-State.\n\t\t\t\t\t\n**Reaction
 * on HOLD event:**\n* If the darker and brighter bits are not set, the HOLD
 * event is ignored.\n* If only the darker bit is set, the HOLD event always
 * starts a dim darker process.\n* If only the brighter bit is set, the HOLD
 * event always starts a dim brighter process.\n* If the darker and brighter
 * bits are set, the HOLD event is allowed to toggle the dimming direction for
 * each new dimming process.\n\t\t\t\t\t\n**Reaction on DOUBLE-CLICK event:**\n*
 * If the save bit is not set, the DOUBLE-CLICK event is ignored.\n* If the save
 * bit is set, the DOUBLE-CLICK event saves the current situation.
 *
 * ID: 806
 * MultipleInstances: false
 * Mandatory: true
 */
type Push_ButtonEventConfiguration_806 = number
/**
 * Presence Sensor Event Configuration
 *
 * Configures the reaction on presence sensor events: Bitwise: 0 (LSB):
 * presence, 1: absence \n* The presence bit enables or disables activities
 * based on the presence event. \n *Note: This setting may allow to set the
 * 'only off' behavior.*\n* The absence bit enables or disables activities based
 * on the absence event.
 *
 * ID: 807
 * MultipleInstances: false
 * Mandatory: true
 */
type PresenceSensorEventConfiguration_807 = number
/**
 * Ghost Status
 *
 * Indicates if the control function is in ghost mode. In ghost mode, no
 * actuator commands are sent out, all operation is kept internal. The
 * northbound interface with the mimicked sensor and status values are provided.
 * This ghost status may be used e.g. as a backup control object that can jump
 * in when the operational control object fails and stops setting the superseded
 * status.
 *
 * ID: 812
 * MultipleInstances: false
 * Mandatory: true
 */
type GhostStatus_812 = boolean
/**
 * Supersede Heartbeat Time
 *
 * The default time another active controller is assumed to take over (see
 * Supersede_Heartbeat).
 *
 * ID: 813
 * MultipleInstances: false
 * Mandatory: true
 * Units: s
 */
type SupersedeHeartbeatTime_813 = number
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
 * Ghost Configuration
 *
 * Configures if this control function instance is in ghost mode (see
 * Ghost_Status).
 *
 * ID: 802
 * MultipleInstances: false
 * Mandatory: false
 */
type GhostConfiguration_802 = boolean
/**
 * Supersede Heartbeat
 *
 * This resource is used by active control functions (in the same application
 * group) to take over the control functionality. By writing this resource, the
 * IP address of the origin CoAP client is added to the
 * Active-Controller-List.\nIf no heartbeat is received after the specified time
 * the not sending controller is taken out of the active controller list again,
 * if there are no more active controllers this controller takes over: This is a
 * fall-back to normal or local operation, if superseding control fails/gets
 * lost.\n\t\t\t\t\nIf the Ghost Configuration is TRUE, the Control Function
 * Status changes to 'ghost' if a controller is active.\n\t\t\t\t\nIf operation
 * mode is set to remote, it will be reset to normal if the active controller
 * list gets empty.
 *
 * ID: 805
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type SupersedeHeartbeat_805 = number
/**
 * Active-Controller-List
 *
 * IP Address of the Controller that has taken over control. The list also
 * contains the time the other control function is considered to be active. This
 * time can be refreshed by periodic execution of the
 * Ghost_Heartbeat.\n\t\t\t\t\nThis list only has entries if the control
 * function is in ghost mode (see Control_Function_Status). When the
 * Remaining_Active_Time of one entry expires, the entry is removed. If this
 * results in an empty list, the Control_Function_Status changes the state to
 * the mode configured in Control_Object_Mode if the state is not 'disabled'.
 *
 * ID: 811
 * MultipleInstances: true
 * Mandatory: false
 */
type Active_Controller_List_811 = string
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
 * Defines the test event to be injected into the system when debug mode is
 * enabled. Event definition is vendor specific.
 *
 * ID: 906
 * MultipleInstances: false
 * Mandatory: false
 */
type InjectTestEvent_906 = number
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
 * The objectURN for oA Basic Control
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3387@1.1'
