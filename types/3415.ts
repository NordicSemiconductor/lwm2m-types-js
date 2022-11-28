/**
 * Time synchronization
 *
 * The uCIFI time synchronization object enables a device to sync-up its
 * internal clock with a remote NTP server.
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3415.xml
 *
 * ID: 3415
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type Timesynchronization_3415 = Readonly<{
	'1': NTPserveraddress_1
	'2'?: BackupNTPserveraddress_2
	'3'?: NTPperiod_3
	'4'?: Lasttimesync_4
	'5'?: Timesyncerror_5
}>
/**
 * NTP server address
 *
 * Hostname or IP address of the Network Time Protocol server.
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type NTPserveraddress_1 = string
/**
 * Backup NTP server address
 *
 * Hostname or IP address of a backup NTP server to be used in case the main NTP
 * server does not respond.
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: false
 */
type BackupNTPserveraddress_2 = string
/**
 * NTP period
 *
 * Number of hours before which the device tries to reach the NTP server for
 * time synchronization.
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: false
 */
type NTPperiod_3 = string
/**
 * Last time sync
 *
 * Last time at which a successful time synchronization occurred.
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: false
 * Units: h
 */
type Lasttimesync_4 = number
/**
 * Time sync error
 *
 * Set to True in case the latest time synchronization operation failed. Set to
 * False in case the last operation succeeded.
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: false
 */
type Timesyncerror_5 = boolean
/**
 * The objectURN for Time synchronization
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3415'
