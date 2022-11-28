/**
 * DevCapMgmt
 *
 * This LWM2M Object is dedicated to manage the device capabilities of a device
 * e.g. sensors, communication, etc.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/15.xml
 *
 * ID: 15
 * LWM2MVersion: 1.0
 * ObjectVersion: 2.0
 * MultipleInstances: true
 * Mandatory: false
 */
export type DevCapMgmt_15 = Readonly<
	Array<{
		'0': Property_0
		'1': Group_1
		'4': Enabled_4
		'2'?: Description_2
		'3'?: Attached_3
		'7'?: NotifyEn_7
	}>
>
/**
 * Property
 *
 * List of Device Capabilities inside a given Group.
 * The format is a free list ASCII-represented integers separated by a semi
 * colon. (e.g. 0;1;10)
 * The list of capabilities per Group is given in Appendix B: Device
 * Capabilities Vocabulary
 * executable Resource can work with.
 *
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type Property_0 = string
/**
 * Group
 *
 * Group name of Device Capabilities
 * 0: SENSOR: luminosity, presence,temp,humidity
 * 1: CONTROL: Light, Power, Sound
 * 2: CONNECTIVITY: Bluetooth, wifi, …
 * 3: NAVIGATION: gps, galieo
 * 4: STORAGE: external memory,
 * 5: VISION: cam, video-cam, night_cam.
 * 6: SOUND: speaker, buzzer
 * 7: ANALOG_INPUT: generic input
 * 8: ANALOG_OUTPUT: generic output
 * 9..15: reserved
 *
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type Group_1 = number
/**
 * Enabled
 *
 * This resource indicates whether the Device Capability is enabled regardless
 * whether the Device Capability is attached or not. If the value of this
 * resource is "True" the Device Capability is in Enabled State. If the value is
 * "False" the Device Capability is in Disabled State;
 * The ‘Attached’ and ‘Enabled’ resources are independent. A Device Capability
 * MAY have ‘True’ as value for ‘Enabled’ Resource while having ‘False’ as value
 * for the ‘Attached’ Resource. That means the Device Capability is still not
 * available and can’t be used until it is attached to the Device, but will be
 * useable once the Device Capability is attached.
 *
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type Enabled_4 = boolean
/**
 * Description
 *
 * Device Capability Description
 * (manufacturer specified string)
 *
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type Description_2 = string
/**
 * Attached
 *
 * When the resource doesn’t exist, it means the associated Device Capability is
 * not removable.
 * When this resource is "False", it means the associated Device Capability is
 * removable and is currently not attached to the device.
 * When this resource is "True", it means the associated Device Capability - if
 * removable - is currently attached to the Device.
 * When a Device Capability is not removable, and the "Attached" Resource is
 * present, the "Attached" value but be set to "True".
 *
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type Attached_3 = boolean
/**
 * NotifyEn
 *
 * When the Resources "Enabled" or "Attached" are under "Observation", this
 * resource specifies whether the LWM2M Server MUST be notified when the value
 * of the Resource on "Observation" changed. If the Resource "NotifyEn" is not
 * present or the value is ‘False’, the LWM2M Server will be not notified about
 * this change. If the "NotifyEn" Resource is present and the value is ‘True’,
 * the LWM2M Server will be notified.
 *
 * ID: 7
 * MultipleInstances: false
 * Mandatory: false
 */
type NotifyEn_7 = boolean
/**
 * The objectURN for DevCapMgmt
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '15:2.0'
