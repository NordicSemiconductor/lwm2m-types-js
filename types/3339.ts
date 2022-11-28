/**
 * Audio Clip
 *
 * This IPSO object should be used for a speaker that plays a pre-recorded audio
 * clip or an audio output that is sent elsewhere. For example, an elevator
 * which announces the floor of the building. A resource is provided to store
 * the clip, a dimmer resource controls the relative sound level of the
 * playback, and a duration resource limits the maximum playback time. After the
 * duration time is reached, any remaining samples in the clip are ignored, and
 * the clip player will be ready to play another clip.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3339.xml
 *
 * ID: 3339
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type AudioClip_3339 = Readonly<
	Array<{
		'5522': Clip_5522
		'5524'?: Duration_5524
		'5548'?: Level_5548
		'5750'?: ApplicationType_5750
	}>
>
/**
 * Clip
 *
 * Audio clip that is playable (e.g., a short audio recording indicating the
 * floor in an elevator).
 *
 * ID: 5522
 * MultipleInstances: false
 * Mandatory: true
 */
type Clip_5522 = string
/**
 * Duration
 *
 * The duration of the sound once trigger.
 *
 * ID: 5524
 * MultipleInstances: false
 * Mandatory: false
 * Units: s
 */
type Duration_5524 = number
/**
 * Level
 *
 * Used to represent a level control such as audio volume.
 *
 * ID: 5548
 * MultipleInstances: false
 * Mandatory: false
 * Units: /100
 */
type Level_5548 = number
/**
 * Application Type
 *
 * The application type of the sensor or actuator as a string depending on the
 * use case.
 *
 * ID: 5750
 * MultipleInstances: false
 * Mandatory: false
 */
type ApplicationType_5750 = string
/**
 * The objectURN for Audio Clip
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3339'
