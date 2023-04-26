import { defaultLWM2MVersion, defaultObjectVersion } from './createURN.js'

export const parseURN = (
	urn: string,
): {
	ObjectID: string
	ObjectVersion: string
	LWM2MVersion: string
} => {
	let ObjectID = undefined
	let ObjectVersion = defaultObjectVersion
	let LWM2MVersion = defaultLWM2MVersion

	let value = urn

	if (value.includes('@')) {
		LWM2MVersion = value.slice(value.indexOf('@') + 1, value.length)
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
		LWM2MVersion,
	}
}
