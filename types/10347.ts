/**
 * Screen
 *
 * This LWM2M Object includes robot screen information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10347.xml
 *
 * ID: 10347
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type Screen_10347 = Readonly<{
	'1': ScreenStatus_1
	'2'?: StartupPage_2
	'3'?: CurrentDisplayingPageorCurrentScreenPlayList_3
}>
/**
 * Screen Status
 *
 * The status of the camera, 1:On, 0:Off.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type ScreenStatus_1 = boolean
/**
 * Startup Page
 *
 * The Startup Page of the screen.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type StartupPage_2 = string
/**
 * Current Displaying Page or Current Screen Play List
 *
 * Current Displaying Page or Current Screen Play List.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type CurrentDisplayingPageorCurrentScreenPlayList_3 = string
/**
 * The objectURN for Screen
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10347'
