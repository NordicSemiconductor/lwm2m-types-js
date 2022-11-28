/**
 * Camera
 *
 * This LWM2M Object includes camera information.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/10340.xml
 *
 * ID: 10340
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type Camera_10340 = Readonly<
	Array<{
		'1': CameraName_1
		'2': CameraStatus_2
		'3': ConnectionStatus_3
		'4': WorkingStatus_4
		'5': LocalRecording_5
		'6': ImageMatting_6
		'7': CameraSnapshot_7
		'8': CameraRecording_8
	}>
>
/**
 * Camera Name
 *
 *
 * Human readable camera name
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type CameraName_1 = string
/**
 * Camera Status
 *
 * The status of the camera, 1:Enabled, 0:Disabled.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type CameraStatus_2 = boolean
/**
 * Connection Status
 *
 * The Connection Status of the camera, 1:On, 0:Off.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type ConnectionStatus_3 = boolean
/**
 * Working Status
 *
 * The Working Status of the camera, 0:Recording, 1:Playing, 2:Paused.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type WorkingStatus_4 = number
/**
 * Local Recording
 *
 * If Local Recording is enabled or not, 1:Enabled, 0:Disabled.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type LocalRecording_5 = boolean
/**
 * Image Matting
 *
 * If Image Matting is enabled or not, 1:Enabled, 0:Disabled.
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type ImageMatting_6 = boolean
/**
 * Camera Snapshot
 *
 * If Camera Snapshot is enabled or not(in Dangerous Situation),
 * 1:Enabled, 0:Disabled.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: true
 */
type CameraSnapshot_7 = boolean
/**
 * Camera Recording
 *
 * If Camera Recording is enabled or not(in Dangerous Situation),
 * 1:Enabled, 0:Disabled.
 *
 * ID: 8
 * MultipleInstances: false
 * Mandatory: true
 */
type CameraRecording_8 = boolean
/**
 * The objectURN for Camera
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '10340'
