/**
 * Device Extension
 *
 * The uCIFI device extension is an extension to the standard Lightweight M2M
 * device (object ID 3) using the resource called "ExtDevInfo" (resource ID 22).
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3410.xml
 *
 * ID: 3410
 * LWM2MVersion: 1.0
 * ObjectVersion: 2.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type DeviceExtension_3410 = Readonly<{
	'2': Manufactureridentifier_2
	'1'?: GTINmodelnumber_1
	'3'?: User_givenname_3
	'4'?: Assetidentifier_4
	'5'?: Installationdate_5
	'6'?: Softwareupdate_6
	'7'?: Maintenance_7
	'9'?: Deviceoperatinghours_9
	'10'?: Additionalfirmwareinformation_10
	'11'?: DSTStart_11
	'12'?: DSTEnd_12
	'13'?: DSTOffset_13
	'14'?: Uptime_14
	'15'?: RFDdevice_15
}>
/**
 * Manufacturer identifier
 *
 * Unique identifier of the manufacturer of the control device, equivalent to
 * IEEE's OUI (Organizational Unique Identifier). This value should be a
 * Hexadecimal value. This value may be used by an online uCIFI product catalog
 * server, for software modules to retrieve the data model of a device using
 * this attribute associated with the model number on the "Device" (Id=3)
 * object.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type Manufactureridentifier_2 = string
/**
 * GTIN model number
 *
 * Standard global trade-in international number for the control device.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type GTINmodelnumber_1 = string
/**
 * User-given name
 *
 * User-readable name of the device set by the user.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type User_givenname_3 = string
/**
 * Asset identifier
 *
 * Identifier of the asset (e.g. meter, luminaire, container) that is controlled
 * by the device.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type Assetidentifier_4 = string
/**
 * Installation date
 *
 * Installation date of the device.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Installationdate_5 = number
/**
 * Software update
 *
 * Set to True while software within the device is being updated.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: false
 */
type Softwareupdate_6 = boolean
/**
 * Maintenance
 *
 * Set to True when the device is in maintenance mode.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type Maintenance_7 = boolean
/**
 * Device operating hours
 *
 * Cumulated number of hours during which the device has been powered on.
 *
 * ID: 9
 * MultipleInstances: false
 * Mandatory: false
 * Units: h
 */
type Deviceoperatinghours_9 = number
/**
 * Additional firmware information
 *
 * Additional information about peripheral firmware versions. The format is left
 * to the vendor.
 *
 * ID: 10
 * MultipleInstances: false
 * Mandatory: false
 */
type Additionalfirmwareinformation_10 = string
/**
 * DST Start
 *
 * The precise date and UTC time during the year when Daylight Saving Time
 * begins, represented as Unix Time.
 *
 * ID: 11
 * MultipleInstances: true
 * Mandatory: false
 * Units: s
 */
type DSTStart_11 = Array<number>
/**
 * DST End
 *
 * The precise date and UTC time during the year when Daylight Saving Time ends,
 * represented as Unix Time.
 *
 * ID: 12
 * MultipleInstances: true
 * Mandatory: false
 */
type DSTEnd_12 = Array<number>
/**
 * DST Offset
 *
 * The amount by which the UTC offset changes when Daylight Saving Time is in
 * effect, represented as ISO 8601 time offset format. A DST offset of one hour
 * is represented as "01:00"
 *
 * ID: 13
 * MultipleInstances: true
 * Mandatory: false
 */
type DSTOffset_13 = Array<string>
/**
 * Uptime
 *
 * Number of seconds since the last reboot of the device.
 *
 * ID: 14
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Uptime_14 = number
/**
 * RFD device
 *
 * Set to true if the device is a Reduce Functional Device running on battery.
 *
 * ID: 15
 * MultipleInstances: false
 * Mandatory: false
 */
type RFDdevice_15 = boolean
/**
 * The objectURN for Device Extension
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3410:2.0'
