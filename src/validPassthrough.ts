import { validate } from './validate'

export type GenericLwM2MObject = Record<string, number | string | boolean>
export type GenericLwM2MDocument = Record<
	string,
	GenericLwM2MObject | Array<GenericLwM2MObject>
>
/**
 * Takes a LwM2M JSON document and removes all invalid object definitions.
 */
export const validPassthrough = (
	input: GenericLwM2MDocument,
): {
	/**
	 * Contains the valid object definitions (according to the LwM2M object registry)
	 */
	valid: GenericLwM2MDocument
	/**
	 * Contains all other parts of the input that were invalid
	 */
	invalid: GenericLwM2MDocument
} => {
	const valid: GenericLwM2MDocument = {}
	const invalid: GenericLwM2MDocument = {}

	for (const [id, definition] of Object.entries(input)) {
		const maybeValid = validate({ [id]: definition })
		if ('errors' in maybeValid) {
			invalid[id] = definition
		} else {
			valid[id] = definition
		}
	}

	return {
		valid,
		invalid,
	}
}
