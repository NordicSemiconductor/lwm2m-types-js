export const defaultObjectVersion = '1.0'
export const defaultLwM2MVersion = '1.0'

/**
 *
 *
 */
export const deconstructURN = (
	urn: string,
): {
	ObjectID: string
	ObjectVersion: string
	LwM2MVersion: string
} => {
	let ObjectID = undefined
	let ObjectVersion = defaultObjectVersion
	let LwM2MVersion = defaultLwM2MVersion

	let value = urn

	if (value.includes('@')) {
		LwM2MVersion = value.slice(value.indexOf('@') + 1, value.length)
		value = value.slice(0, value.indexOf('@'))
	}

	if (value.includes(':')) {
		ObjectVersion = value.slice(value.indexOf(':') + 1, value.length)
		value = value.slice(0, value.indexOf(':'))
	}

	ObjectID = value

	return {
		ObjectID,
		ObjectVersion,
		LwM2MVersion,
	}
}
