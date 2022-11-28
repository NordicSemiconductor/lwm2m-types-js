/**
 * Edge computing manager
 *
 * The uCIFI edge computing manager object defines the capability of a device to
 * run scripts on the device itself.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3436.xml
 *
 * ID: 3436
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type Edgecomputingmanager_3436 = Readonly<{
	'1'?: Maxnumberofscripts_1
	'2'?: Numberoffreeslotsforscripts_2
	'3'?: Maxnumberofconditions_3
	'4'?: Numberoffreeslotsforconditions_4
	'5'?: Edge_computingcapabilities_5
}>
/**
 * Max number of scripts
 *
 * Maximum number of scripts supported by the device.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: false
 */
type Maxnumberofscripts_1 = number
/**
 * Number of free slots for scripts
 *
 * Number of free slots to store new scripts.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type Numberoffreeslotsforscripts_2 = number
/**
 * Max number of conditions
 *
 * Maximum number of conditions supported by the device.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Maxnumberofconditions_3 = number
/**
 * Number of free slots for conditions
 *
 * Number of free slots to store new conditions.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 */
type Numberoffreeslotsforconditions_4 = number
/**
 * Edge-computing capabilities
 *
 * Vendor-specific resource to share the capabilities of the devices as regards
 * to edge computing.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Edge_computingcapabilities_5 = string
/**
 * The objectURN for Edge computing manager
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3436'
