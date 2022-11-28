/**
 * VehicleControlUnit
 *
 * This Object provides the information to represent a generic VCU(vehicle
 * control unit).
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10244.xml
 *
 * ID: 10244
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type VehicleControlUnit_10244 = Readonly<{
	'0': VehicleUIState_0
	'1': VehicleSpeed_1
	'10': VehicleChargeVoltage_10
	'11': VehicleChargeCurrent_11
	'12': VehicleChargeRemainingTime_12
	'13': BatteryPackVoltage_13
	'14': BatteryPackCurrent_14
	'15': BatteryPackRemainingCapacity_15
	'16': BatteryPackSOC_16
	'17': BatteryPackSOH_17
	'18': BatteryCellMinVolt_18
	'19': BatteryCellMaxVolt_19
	'2': VehicleShiftStatus_2
	'20': BatteryModuleMinTemp_20
	'21': BatteryModuleMaxTemp_21
	'22': BatteryConnectionStatus_22
	'24': MCUVoltage_24
	'25': MCUTemperature_25
	'26': MotorSpeed_26
	'27': MotorTemperature_27
	'3': VehicleAPPosition_3
	'8': VehicleChargeCableStatus_8
	'9': VehicleChargeStatus_9
	'28'?: MotorOTWarning_28
	'29'?: MCUOTWarning_29
	'30'?: BatteryPackOTWarning_30
	'31'?: MCUfault_31
	'32'?: MotorError_32
	'4'?: VehiclePower_4
	'5'?: VehicleDriveEnergy_5
	'6'?: VehicleEnergyConsumptionEfficiency_6
	'7'?: VehicleEstimatedMileage_7
}>
/**
 * Vehicle UI State
 *
 * The UI state of the vehicle. 0: idle 1: driving 2: charging 3: limp-home
 * 4-15: reserved for future use
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type VehicleUIState_0 = number
/**
 * Vehicle Speed
 *
 * Current speed of the vehicle.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: km/h
 */
type VehicleSpeed_1 = number
/**
 * Vehicle Charge Voltage
 *
 * Charging voltage
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: true
 * Units: V
 */
type VehicleChargeVoltage_10 = number
/**
 * Vehicle Charge Current
 *
 * Charging current
 *
 * ID: 11
 * MultipleInstances: false
 * Mandatory: true
 * Units: A
 */
type VehicleChargeCurrent_11 = number
/**
 * Vehicle Charge Remaining Time
 *
 * Remaining charging time
 *
 * ID: 12
 * MultipleInstances: false
 * Mandatory: true
 * Units: min
 */
type VehicleChargeRemainingTime_12 = number
/**
 * Battery Pack Voltage
 *
 * Voltage of the battery pack
 *
 * ID: 13
 * MultipleInstances: false
 * Mandatory: true
 * Units: V
 */
type BatteryPackVoltage_13 = number
/**
 * Battery Pack Current
 *
 * Current of the battery pack
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: true
 * Units: A
 */
type BatteryPackCurrent_14 = number
/**
 * Battery Pack Remaining Capacity
 *
 * Remaining capacity of the battery pack
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: true
 * Units: Ah
 */
type BatteryPackRemainingCapacity_15 = number
/**
 * Battery Pack SOC
 *
 * SOC(state of charge) of the battery pack
 *
 * ID: 16
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type BatteryPackSOC_16 = number
/**
 * Battery Pack SOH
 *
 * SOH(state of health) of the battery pack
 *
 * ID: 17
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type BatteryPackSOH_17 = number
/**
 * Battery Cell MinVolt
 *
 * Minimum voltage of the battery module (with parallel connection of cells)
 *
 * ID: 18
 * MultipleInstances: false
 * Mandatory: true
 * Units: mV
 */
type BatteryCellMinVolt_18 = number
/**
 * Battery Cell MaxVolt
 *
 * Maximum voltage of the battery module (with parallel connection of cells)
 *
 * ID: 19
 * MultipleInstances: false
 * Mandatory: true
 * Units: mV
 */
type BatteryCellMaxVolt_19 = number
/**
 * Vehicle Shift Status
 *
 * Current shift status of the vehicle. 0: Neutral 1: Forward 2: Reverse
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type VehicleShiftStatus_2 = number
/**
 * Battery Module MinTemp
 *
 * Minimum temperature of the battery module
 *
 * ID: 20
 * MultipleInstances: false
 * Mandatory: true
 * Units: Cel
 */
type BatteryModuleMinTemp_20 = number
/**
 * Battery Module MaxTemp
 *
 * Maximum temperature of the battery module
 *
 * ID: 21
 * MultipleInstances: false
 * Mandatory: true
 * Units: Cel
 */
type BatteryModuleMaxTemp_21 = number
/**
 * Battery Connection Status
 *
 * Whether the battery is connected or not. 0: unconnected 1: connected
 *
 * ID: 22
 * MultipleInstances: false
 * Mandatory: true
 */
type BatteryConnectionStatus_22 = boolean
/**
 * MCU Voltage
 *
 * Voltage of the MCU(motor control unit)
 *
 * ID: 24
 * MultipleInstances: false
 * Mandatory: true
 * Units: V
 */
type MCUVoltage_24 = number
/**
 * MCU Temperature
 *
 * Temperature of MCU(motor control unit)
 *
 * ID: 25
 * MultipleInstances: false
 * Mandatory: true
 * Units: Cel
 */
type MCUTemperature_25 = number
/**
 * Motor Speed
 *
 * Rotational speed of the motor
 *
 * ID: 26
 * MultipleInstances: false
 * Mandatory: true
 * Units: 1/min
 */
type MotorSpeed_26 = number
/**
 * Motor Temperature
 *
 * Temperature of the motor
 *
 * ID: 27
 * MultipleInstances: false
 * Mandatory: true
 * Units: Cel
 */
type MotorTemperature_27 = number
/**
 * Vehicle AP Position
 *
 * Current position of the accelerator pedal.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 * Units: /100
 */
type VehicleAPPosition_3 = number
/**
 * Vehicle Charge Cable Status
 *
 * Whether the charge cable is connected or not. 0: unconnected 1: connected
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 */
type VehicleChargeCableStatus_8 = boolean
/**
 * Vehicle Charge Status
 *
 * Charging status of the vehicle. 1: non-charge mode 2: charging 3: charge
 * completed 4: charging abort abnormally
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: true
 */
type VehicleChargeStatus_9 = number
/**
 * Motor OT Warning
 *
 * Whether the motor is OT or not. 0: normal 1: OT warning
 *
 * ID: 28
 * MultipleInstances: false
 * Mandatory: false
 */
type MotorOTWarning_28 = boolean
/**
 * MCU OT Warning
 *
 * Whether the MCU is OT or not. 0: normal 1: OT warning
 *
 * ID: 29
 * MultipleInstances: false
 * Mandatory: false
 */
type MCUOTWarning_29 = boolean
/**
 * Battery Pack OT Warning
 *
 * Whether the battery pack is OT or not. 0: normal 1: OT warning
 *
 * ID: 30
 * MultipleInstances: false
 * Mandatory: false
 */
type BatteryPackOTWarning_30 = boolean
/**
 * MCU fault
 *
 * Status of MCU. 0: normal 1: level 1 minor fault 2: level 2 critical fault
 *
 * ID: 31
 * MultipleInstances: false
 * Mandatory: false
 */
type MCUfault_31 = boolean
/**
 * Motor Error
 *
 * Status of the battery pack. 0: normal 1: level D25 minor fault 2: level 2
 * critical fault
 *
 * ID: 32
 * MultipleInstances: false
 * Mandatory: false
 */
type MotorError_32 = boolean
/**
 * Vehicle Power
 *
 * Current power of drive output/regenerative braking.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: kW
 */
type VehiclePower_4 = number
/**
 * Vehicle Drive Energy
 *
 * Accumulated drive energy of the vehicle.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 * Units: Wh
 */
type VehicleDriveEnergy_5 = number
/**
 * Vehicle Energy Consumption Efficiency
 *
 * Energy consumption efficiency of the vehicle.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 * Units: Wh/km
 */
type VehicleEnergyConsumptionEfficiency_6 = number
/**
 * Vehicle Estimated Mileage
 *
 * Estimated mileage of current battery capacity.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 * Units: km
 */
type VehicleEstimatedMileage_7 = number
/**
 * The objectURN for VehicleControlUnit
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10244'
