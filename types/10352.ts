/**
 * Thermal Imager
 *
 * This LWM2M Object includes the Thermal Imager information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10352.xml
 *
 * ID: 10352
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type ThermalImager_10352 = Readonly<{
	'1': HighestTemperature_1
	'2': LowestTemperature_2
	'3': AverageTemperature_3
}>
/**
 * Highest Temperature
 *
 * The Highest Temperature of the thermal imager.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 * Units: Cel
 */
type HighestTemperature_1 = number
/**
 * Lowest Temperature
 *
 * The Lowest Temperature of the thermal imager.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 * Units: Cel
 */
type LowestTemperature_2 = number
/**
 * Average Temperature
 *
 * The Average Temperature of the thermal imager.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 * Units: Cel
 */
type AverageTemperature_3 = number
/**
 * The objectURN for Thermal Imager
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10352'
