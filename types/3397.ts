/**
 * oA Physical Colour Temperature Light-Point Actuator
 *
 * The 'oA_Physical_Colour_Temperature_Light-Point_Actuator' represents a
 * physical tunable white light-point actuator. It is necessary to map at least
 * on Logical Light Point Actuator to control the intensity and one Logical
 * Colour Temperature Light-Point to control the colour temperature to the
 * Physical Colour Temperature Light Point.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3397.xml
 *
 * ID: 3397
 * LWM2MVersion: 1.1
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type oAPhysicalColourTemperatureLight_PointActuator_3397 = Readonly<
	Array<{
		'100': CurrentIntensity_100
		'102': RemainingTransitionTime_102
		'104': MinimumIntensity_104
		'105': MaximumIntensity_105
		'137': CurrentColourTemperature_137
		'138': RemainingColourTemperatureTransitionTime_138
		'907': ErrorStatus_907
		'908': MountingLocation_908
		'910': TotalEnergyUsage_910
		'911': ActualPowerUsage_911
		'930': OperatingHours_930
		'931': AdjustedOperatingHours_931
		'5850': On_Off_5850
		'103'?: PhysicalMinimumIntensity_103
		'110'?: PowerOnBehaviour_110
		'111'?: PowerOnIntensity_111
		'114'?: StoredIntensity_114
		'115'?: SystemFailureIntensity_115
		'155'?: PhysicalMinimumColourTemperature_155
		'156'?: PhysicalMaximumColourTemperature_156
		'157'?: MinimumColourTemperature_157
		'158'?: MaximumColourTemperature_158
		'901'?: DocumentaryDescription_901
		'912'?: AccuracyClass_912
		'4001'?: ObjectVersion_4001
	}>
>
/**
 * Current Intensity
 *
 * This Resource represents the current intensity (0-1). This is a 'real-time'
 * value, which is given independently of any ongoing dimming request.
 *
 * ID: 100
 * MultipleInstances: false
 * Mandatory: true
 */
type CurrentIntensity_100 = number
/**
 * Remaining Transition Time
 *
 * Remaining approximated time of any ongoing 'Set Intensity', 'Step' or
 * 'Switch' process which requires a variation of the light output over a period
 * of time higher or equal to one 100ms interval. When the process is started,
 * the value is equal to the time value selected for the process and it is
 * continuously decreased until completed (time=0), or a 'Stop Dimming' request
 * is received.\n\t\t\t\t\n**NOTE:** If during a request the process reaches the
 * Maximum/Minimum Intensity limits, the time is automatically set to '0' as the
 * process is stopped. Scaling is 100ms per unit
 *
 * ID: 102
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type RemainingTransitionTime_102 = number
/**
 * Minimum Intensity
 *
 * The value set in this Resource limits the minimum output of the Light Point.
 * when performing any transition operation (e.g.
 * Switch(ON),'Dim(DOWN)','Step(DOWN)' or Set_Intensity(x)') the minimum
 * intensity value indicated by this Resource will override any other definition
 * or request input parameter value.\nChanging this Resource stops any
 * transition process, and the 'Remaining Transition Time' and 'Current
 * Intensity' are updated.\n\t\t\t\n**Note:** This value must be greater or
 * equal to 'Physical Minimum Intensity' and smaller or equal to 'Maximum
 * Intensity'. If a Light Point with fixed output is used, the 'Minimum
 * Intensity' and 'Maximum Intensity' MUST be defined with the same value.
 *
 * ID: 104
 * MultipleInstances: false
 * Mandatory: true
 */
type MinimumIntensity_104 = number
/**
 * Maximum Intensity
 *
 * The value set in this Resource limits the maximum output of the Light Point.
 * when performing any transition operation (e.g.
 * Switch(ON),'Dim(UP)','Step(UP)' or Set_Intensity(x)') the maximum intensity
 * value indicated by this Resource will override any other definition or
 * request input parameter value.\nChanging this Resource stops any transition
 * process, and the 'Remaining Transition Time' and 'Current Intensity' are
 * updated.\n\t\t\t\n**Note:** This value must be greater or equal to 'Minimum
 * Intensity'. If a Light Point with fixed output is used, the 'Minimum
 * Intensity' and 'Maximum Intensity' MUST be defined with the same value.
 *
 * ID: 105
 * MultipleInstances: false
 * Mandatory: true
 */
type MaximumIntensity_105 = number
/**
 * Current Colour Temperature
 *
 * This Resource represents the current colour temperature. This is a
 * 'real-time' value, which is given independently of any ongoing change
 * request.
 *
 * ID: 137
 * MultipleInstances: false
 * Mandatory: true
 * Units: K
 */
type CurrentColourTemperature_137 = number
/**
 * Remaining Colour Temperature Transition Time
 *
 * Remaining approximated time of any ongoing 'Set Temperature', 'Step' or
 * 'Switch' process which requires a variation of the light output over a period
 * of time higher or equal to one 100ms interval. When the process is started,
 * the value is equal to the time value selected for the process and it is
 * continuously decreased until completed (time=0), or a 'Stop' request is
 * received.\n\t\t\t\t\n**NOTE:** If during a request the process reaches the
 * Maximum/Minimum colour temperature limits, the time is automatically set to
 * '0' as the process is stopped. Scaling is 100ms per unit
 *
 * ID: 138
 * MultipleInstances: false
 * Mandatory: true
 * Units: ms
 */
type RemainingColourTemperatureTransitionTime_138 = number
/**
 * Error Status
 *
 * Error status is a bit coded value that shows all current errors on the
 * object. The error status changes as soon as a new error occurs or an old one
 * is resolved. Bitwise: 0 (LSB): Hardware_Error, 1: Execution_Limit_LED_Temp,
 * 2: Execution_Limit_Power_Restrictions, 3: Light-Point_Malfunction
 *
 * ID: 907
 * MultipleInstances: false
 * Mandatory: true
 */
type ErrorStatus_907 = number
/**
 * Mounting Location
 *
 * Describes the location of the device within the building. The content of the
 * string is site specific.
 *
 * ID: 908
 * MultipleInstances: false
 * Mandatory: true
 */
type MountingLocation_908 = string
/**
 * Total Energy Usage
 *
 * The total energy usage of the device (accumulated value)
 *
 * ID: 910
 * MultipleInstances: false
 * Mandatory: true
 * Units: Ws
 */
type TotalEnergyUsage_910 = number
/**
 * Actual Power Usage
 *
 * The actual power usage of the device. Scaling is 0.1W per unit
 *
 * ID: 911
 * MultipleInstances: false
 * Mandatory: true
 * Units: W
 */
type ActualPowerUsage_911 = number
/**
 * Operating Hours
 *
 * The total operating hours where the light point is on.
 *
 * ID: 930
 * MultipleInstances: false
 * Mandatory: true
 * Units: h
 */
type OperatingHours_930 = number
/**
 * Adjusted Operating Hours
 *
 * The total operating hours adjusted by the dim level of the luminaire.
 *
 * ID: 931
 * MultipleInstances: false
 * Mandatory: true
 */
type AdjustedOperatingHours_931 = number
/**
 * On/Off
 *
 * On/off control. Boolean value where True is On and False is Off.
 *
 * ID: 5850
 * MultipleInstances: false
 * Mandatory: true
 */
type On_Off_5850 = boolean
/**
 * Physical Minimum Intensity
 *
 * Minimum intensity that can be set for this instance of a Light Point. This
 * value is factory defined by luminaire or gear manufacturer.
 *
 * ID: 103
 * MultipleInstances: false
 * Mandatory: false
 */
type PhysicalMinimumIntensity_103 = number
/**
 * Power On Behaviour
 *
 * Defines the default behaviour of the light point when it is switched 'On'.
 * The following options are possible:\n- *CONFIGURED_ON* intensity goes to the
 * stored default value ('Power On Intensity') [default option]\n- *FULL_ON*
 * intensity always goes to the maximum intensity value allowed\n- *RECALL* if
 * available, the intensity is recalled from 'Stored Intensity', otherwise
 * 'Power On Intensity' is used
 *
 * ID: 110
 * MultipleInstances: false
 * Mandatory: false
 */
type PowerOnBehaviour_110 = number
/**
 * Power On Intensity
 *
 * Defines the default Intensity used in switch operations that result in a 'On'
 * state. It is used if no intensity is given in the switch request payload and
 * if 'Power On Behaviour' is CONFIGURED_ON. When this Resource is not defined,
 * the value to be used should be '1'.\n\t\t\t\t\n**Note:** When setting this
 * value, the Minimum/Maximum intensity limits must be validated. A write
 * request that requires the final value to be adjusted should send a reply
 * message with the corrected value.
 *
 * ID: 111
 * MultipleInstances: false
 * Mandatory: false
 */
type PowerOnIntensity_111 = number
/**
 * Stored Intensity
 *
 * This Resource represents a copy of the last 'Current Intensity' that is
 * bigger than 0, before a power cycle is triggered. It should be updated in NVM
 * whenever a transition process is completed, and optionally if a power cycle
 * is triggered.
 *
 * ID: 114
 * MultipleInstances: false
 * Mandatory: false
 */
type StoredIntensity_114 = number
/**
 * System Failure Intensity
 *
 * This is the intensity value the light point goes to if the connection to the
 * network is lost for longer than 'System Failure Time'.\n\t\t\t\t\n**Note:**
 * When setting the value of this Resource, the limits of 'Minimum Intensity'
 * and 'Maximum Intensity' must be validated. A write operation that requires
 * the final value to be adjusted should result in a reply message with the
 * final corrected value.\nIndependently of the previous limits, a '0' value is
 * allowed and it means, in case of network failure, the 'On/Off Status' is set
 * to 'Off'.
 *
 * ID: 115
 * MultipleInstances: false
 * Mandatory: false
 */
type SystemFailureIntensity_115 = number
/**
 * Physical Minimum Colour Temperature
 *
 * Minimum colour temperature that can be set for this instance of a Light
 * Point. This value is factory defined by luminaire or gear manufacturer.
 *
 * ID: 155
 * MultipleInstances: false
 * Mandatory: false
 * Units: K
 */
type PhysicalMinimumColourTemperature_155 = number
/**
 * Physical Maximum Colour Temperature
 *
 * Maximum colour temperature that can be set for this instance of a Light
 * Point. This value is factory defined by luminaire or gear manufacturer.
 *
 * ID: 156
 * MultipleInstances: false
 * Mandatory: false
 * Units: K
 */
type PhysicalMaximumColourTemperature_156 = number
/**
 * Minimum Colour Temperature
 *
 * The value set in this Resource limits the minimum colour temperature output
 * of the Light Point. When performing any colour temperature transition
 * operation the minimum colour temperature value indicated by this resource
 * will override any other definition or requested input parameter
 * value.\nChanging this resource stops any transition process, and the
 * 'Remaining Colour Temperature Transition Time' and 'Current Colour
 * Temperature' are updated.\n\t\t\t\t\t\n**Note:** This value must be greater
 * or equal to 'Physical Minimum Colour Temperature' and smaller or equal to
 * 'Maximum Colour Temperature'.
 *
 * ID: 157
 * MultipleInstances: false
 * Mandatory: false
 * Units: K
 */
type MinimumColourTemperature_157 = number
/**
 * Maximum Colour Temperature
 *
 * The value set in this resource limits the maximum colour temperature output
 * of the Light Point. When performing any colour temperature transition
 * operation the maximum colour temperature value indicated by this resource
 * will override any other definition or requested input parameter
 * value.\nChanging this resource stops any transition process, and the
 * 'Remaining Colour Temperature Transition Time' and 'Current Colour
 * Temperature' are updated.\n\t\t\t\t\t\n**Note:** This value must be smaller
 * or equal to 'Physical Colour Temperature' and greater or equal to 'Minimum
 * Colour Temperature'.
 *
 * ID: 158
 * MultipleInstances: false
 * Mandatory: false
 * Units: K
 */
type MaximumColourTemperature_158 = number
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
 * Accuracy Class
 *
 * The accuracy class of the energy sensor on the device (using either %
 * accuracy or a letter that defines the accuracy class)
 *
 * ID: 912
 * MultipleInstances: false
 * Mandatory: false
 */
type AccuracyClass_912 = string
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
 * The objectURN for oA Physical Colour Temperature Light-Point Actuator
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3397@1.1'
