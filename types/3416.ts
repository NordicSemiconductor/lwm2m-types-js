/**
 * Outdoor lamp controller
 *
 * The uCIFI outdoor lamp controller object provides attributes to control,
 * command and monitor outdoor luminaires in streets, in tunnels, on roads and
 * for illumination of park and gardens.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3416.xml
 *
 * ID: 3416
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Outdoorlampcontroller_3416 = Readonly<
	Array<{
		'1': Command_1
		'3': Dimminglevel_3
		'2'?: Commandinaction_2
		'4'?: Defaultdimminglevel_4
		'5'?: Lampfailure_5
		'6'?: Lampfailurereason_6
		'7'?: Controlgearfailure_7
		'8'?: Controlgearfailurereason_8
		'9'?: Relayfailure_9
		'10'?: Dayburner_10
		'11'?: Cyclingfailure_11
		'12'?: Controlgearcommunicationfailure_12
		'13'?: SchedulerID_13
		'14'?: Invalidscheduler_14
		'15'?: Lampoperatinghours_15
		'17'?: LampONtimestamp_17
		'18'?: Lampswitchcounter_18
		'20'?: Controlgearstartcounter_20
		'21'?: Controlgeartemperature_21
		'22'?: Controlgearthermalderating_22
		'23'?: Controlgearthermalderatingcounter_23
		'25'?: Controlgearthermalshutdown_25
		'26'?: Controlgearthermalshutdowncounter_26
		'28'?: Outputport_28
		'29'?: Standbymode_29
		'30'?: Constantlightoutput_30
		'31'?: Cleaningfactorenabled_31
		'32'?: Cleaningperiod_32
		'33'?: Initiallampcleaningfactor_33
		'34'?: Lampcleaningdate_34
		'35'?: Controltype_35
		'36'?: NominalLampwattage_36
		'37'?: Minimumdimminglevel_37
		'38'?: Minimumlampwattage_38
		'39'?: Lightcolortemperaturecommand_39
		'40'?: Actuallightcolortemperature_40
		'41'?: Virtualpoweroutput_41
		'42'?: Voltageatmaxdimlevel_42
		'43'?: Voltageatmindimlevel_43
		'44'?: Lightsourcevoltage_44
		'45'?: Lightsourcecurrent_45
		'46'?: Lightsourceactivepower_46
		'47'?: Lightsourceactiveenergy_47
	}>
>
/**
 * Command
 *
 * Command (e.g. manual override, scheduler) sent to the outdoor lamp
 * controller.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type Command_1 = number
/**
 * Dimming level
 *
 * Dimming level (0 for OFF and 100% for ON) measured on the outdoor lamp
 * controller.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type Dimminglevel_3 = number
/**
 * Command in action
 *
 * For outdoor lighting applications, the command in action (this resource) may
 * differ from a command that was sent (resource ID: 1), due to LPWAN network
 * constraints and/or light adjustments within the lamp’s control gear (e.g.
 * virtual power settings). The command in action is the actual value of the
 * command in action in the outdoor lamp controller.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Commandinaction_2 = number
/**
 * Default dimming level
 *
 * The default dimming level that the outdoor lamp controller applies when the
 * device is powered ON.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Defaultdimminglevel_4 = number
/**
 * Lamp failure
 *
 * Set to True if the outdoor lamp controller detects that the lamp is not
 * producing light while it is expected to (e.g. the lamp is broken).
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Lampfailure_5 = boolean
/**
 * Lamp failure reason
 *
 * Description of the reason why the lamp failed (e.g. low power on a LED
 * engine, no consumption detected while relay closed).
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Lampfailurereason_6 = number
/**
 * Control gear failure
 *
 * Set to True in case the control gear has a failure. Outdoor lamp controllers
 * may read the control gear failure from a DALI bus or by analyzing a 0-10
 * volts interface to the control gear.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type Controlgearfailure_7 = boolean
/**
 * Control gear failure reason
 *
 * Description of the reason why the control gear failed. You may refer to the
 * DiiA list of possible control gear failures.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: false
 */
type Controlgearfailurereason_8 = number
/**
 * Relay failure
 *
 * Set to True if the outdoor lamp controller detects that its relay is not
 * operating as it is expected to.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 */
type Relayfailure_9 = boolean
/**
 * Day burner
 *
 * Set to True in case the lamp is ON while it should be OFF (e.g. day burner).
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type Dayburner_10 = boolean
/**
 * Cycling failure
 *
 * Set to True if the outdoor lamp controller detects that the lamp is switching
 * ON and OFF too often.
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: false
 */
type Cyclingfailure_11 = boolean
/**
 * Control gear communication failure
 *
 * Set to True in case the control gear (e.g. LED driver) does not answer on the
 * DALI bus.
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: false
 */
type Controlgearcommunicationfailure_12 = boolean
/**
 * Scheduler ID
 *
 * Identifier(s) of the scheduler(s) that are assigned to the Command of this
 * outdoor lamp controller.
 *
 * ID: 13
 * MultipleInstances: true
 * Mandatory: false
 */
type SchedulerID_13 = number
/**
 * Invalid scheduler
 *
 * Set to True when one of the schedulers can’t be executed or is not supported
 * by the outdoor lamp controller. Otherwise set to False.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 */
type Invalidscheduler_14 = boolean
/**
 * Lamp operating hours
 *
 * Cumulated number of hours during which the lamp has been ON with a strictly
 * positive dimming level.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 * Units: h
 */
type Lampoperatinghours_15 = number
/**
 * Lamp ON timestamp
 *
 * Last date and time at which the lamp switched ON, i.e. from no light to light
 * (e.g. power off to power on and/or dim level = 0 to dim level > 0).
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: false
 */
type LampONtimestamp_17 = number
/**
 * Lamp switch counter
 *
 * Number of times the lamp was switched from ON to OFF since the last lamp
 * switch counter reset.
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: false
 */
type Lampswitchcounter_18 = number
/**
 * Control gear start counter
 *
 * Number of times the control gear was switched from ON to OFF.
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: false
 */
type Controlgearstartcounter_20 = number
/**
 * Control gear temperature
 *
 * Temperature measured by the control gear and transmitted to the device
 * through DALI, Zhaga D4i or equivalent.
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: false
 * Units: Cel
 */
type Controlgeartemperature_21 = number
/**
 * Control gear thermal derating
 *
 * Set to True if the control gear has derated the light source due to high
 * temperature.
 *
 * ID: 22
 * MultipleInstances: false
 * Mandatory: false
 */
type Controlgearthermalderating_22 = boolean
/**
 * Control gear thermal derating counter
 *
 * Number of time the control gear has derated the light source due to a high
 * temperature, since last counter reset.
 *
 * ID: 23
 * MultipleInstances: false
 * Mandatory: false
 */
type Controlgearthermalderatingcounter_23 = number
/**
 * Control gear thermal shutdown
 *
 * Set to True if the control gear has shut the light source down due to high
 * temperature.
 *
 * ID: 25
 * MultipleInstances: false
 * Mandatory: false
 */
type Controlgearthermalshutdown_25 = boolean
/**
 * Control gear thermal shutdown counter
 *
 * Number of times the control gear has shutdown the light source since last
 * counter reset.
 *
 * ID: 26
 * MultipleInstances: false
 * Mandatory: false
 */
type Controlgearthermalshutdowncounter_26 = number
/**
 * Output port
 *
 * Address or reference of the output port (e.g. DALI port address or 1-10 volt
 * output) in case of multiple control gears.
 *
 * ID: 28
 * MultipleInstances: false
 * Mandatory: false
 */
type Outputport_28 = number
/**
 * Standby mode
 *
 * Set to True if the outdoor lamp controller should keep its relay closed
 * (control gear is powered ON) when command and/or dimming level is equal to 0.
 * Set to False if the outdoor lamp controller should open its relay (control
 * gear is not powered ON) when command and/or dimming level is equal to 0.
 *
 * ID: 29
 * MultipleInstances: false
 * Mandatory: false
 */
type Standbymode_29 = boolean
/**
 * Constant light output
 *
 * Set to True to activate Constant Light Output dimming correction on the
 * outdoor lamp controller. Set to False to deactivate Constant Light Output.
 *
 * ID: 30
 * MultipleInstances: false
 * Mandatory: false
 */
type Constantlightoutput_30 = boolean
/**
 * Cleaning factor enabled
 *
 * Light output of a luminaire may depend on the lamp cleaning factor. Cleaning
 * factor may be used as a light output compensation. Set to True to activate
 * lamp cleaning correction on the outdoor lamp controller. Set to False to
 * deactivate the lamp cleaning correction.
 *
 * ID: 31
 * MultipleInstances: false
 * Mandatory: false
 */
type Cleaningfactorenabled_31 = boolean
/**
 * Cleaning period
 *
 * Number of days after which cleaning factor is back to 100%.
 *
 * ID: 32
 * MultipleInstances: false
 * Mandatory: false
 */
type Cleaningperiod_32 = number
/**
 * Initial lamp cleaning factor
 *
 * Initial lamp cleaning correction factor to multiply to the command when the
 * luminaire is cleaned, at the lamp cleaning date.
 *
 * ID: 33
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Initiallampcleaningfactor_33 = number
/**
 * Lamp cleaning date
 *
 * Date at which the luminaire was last (or will be next) cleaned and the lamp
 * cleaning factor should be set to the initial lamp cleaning factor.
 *
 * ID: 34
 * MultipleInstances: false
 * Mandatory: false
 */
type Lampcleaningdate_34 = number
/**
 * Control type
 *
 * Type of control system with whioch the outdoor lamp controller switches, dims
 * and monitors the lamp. The possible control types are: 0: No dimming control,
 * 1 : DALI part 201 - Device Type 0, 2 : DALI part 202 - Device Type 1, 3 :
 * DALI part 203 - Device Type 2, 4 : DALI part 204 - Device Type 3, 5 : DALI
 * part 205 - Device Type 4, 6 : DALI part 206 - Device Type 5, 7 : DALI part
 * 207 - Device Type 6, 8 : DALI part 208 - Device Type 7, 9 : DALI part 209 -
 * Device Type 8, 10 : 0-10V, 11 : PWM, 12 : PWM_N, 13 : Other
 *
 * ID: 35
 * MultipleInstances: false
 * Mandatory: false
 */
type Controltype_35 = number
/**
 * Nominal Lamp wattage
 *
 * Active power of the light source at 100% dimming level.
 *
 * ID: 36
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type NominalLampwattage_36 = number
/**
 * Minimum dimming level
 *
 * Minimum dimming level under which the lamp will most probably not operate.
 *
 * ID: 37
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Minimumdimminglevel_37 = number
/**
 * Minimum lamp wattage
 *
 * Expected active power of the light source at its minimum dimming level. This
 * value may be used to detect failure at low dimming level.
 *
 * ID: 38
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type Minimumlampwattage_38 = number
/**
 * Light color temperature command
 *
 * Latest light color temperature command sent to the lamp actuator.
 *
 * ID: 39
 * MultipleInstances: false
 * Mandatory: false
 * Units: K
 */
type Lightcolortemperaturecommand_39 = string
/**
 * Actual light color temperature
 *
 * The actual light color temperature of the light source.
 *
 * ID: 40
 * MultipleInstances: false
 * Mandatory: false
 * Units: K
 */
type Actuallightcolortemperature_40 = string
/**
 * Virtual power output
 *
 * Percentage of nominal power at which the light source should be set when the
 * Command is set to 100%.
 *
 * ID: 41
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Virtualpoweroutput_41 = number
/**
 * Voltage at max dim level
 *
 * Voltage level on the control port that corresponds to maximum dimming level.
 * This applies only if Control Type = 0-10V.
 *
 * ID: 42
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Voltageatmaxdimlevel_42 = number
/**
 * Voltage at min dim level
 *
 * Voltage level on the control port that corresponds to minimum dimming level.
 * This applies only if Control Type = 0-10V.
 *
 * ID: 43
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Voltageatmindimlevel_43 = number
/**
 * Light source voltage
 *
 * Voltage (usually DC voltage) to the light source or generic load, measured at
 * the output of the control gear.
 *
 * ID: 44
 * MultipleInstances: false
 * Mandatory: false
 * Units: V
 */
type Lightsourcevoltage_44 = number
/**
 * Light source current
 *
 * Current (usually DC current) delivered by the control gear to the light
 * source or generic load, measured at the output of the control gear.
 *
 * ID: 45
 * MultipleInstances: false
 * Mandatory: false
 * Units: A
 */
type Lightsourcecurrent_45 = number
/**
 * Light source active power
 *
 * Active power of the light source or generic load, measured at the output of
 * the control gear.
 *
 * ID: 46
 * MultipleInstances: false
 * Mandatory: false
 * Units: W
 */
type Lightsourceactivepower_46 = number
/**
 * Light source active energy
 *
 * Cumulated active energy consumption of the light source or generic load,
 * measured at the output of the control gear.
 *
 * ID: 47
 * MultipleInstances: false
 * Mandatory: false
 * Units: kWh
 */
type Lightsourceactiveenergy_47 = number
/**
 * The objectURN for Outdoor lamp controller
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3416'
