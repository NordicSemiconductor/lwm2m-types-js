/**
 * Defines the LwM2M objects that are completely ignored because they have special and/or are not used by devices to provide data.
 */
export const ignoredLwM2MObjects = [
	'0', // LwM2M Server
	'21', // LwM2M OSCORE
	'23', // LwM2M COSE
]
