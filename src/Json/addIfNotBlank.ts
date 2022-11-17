/**
 * Helper function to add input to the object, but only if input is not considered empty
 */
export const addIfNotBlank = (
	object: Record<string, any>,
	input: Record<string, any>,
): void => {
	const values = Object.values(input)
	if (values.length > 1)
		throw new Error(`Not implemented for inputs with more than one element!`)
	const value = values[0]
	if (value !== undefined && value !== '') {
		// modify the object!
		Object.assign(object, input)
	}
}
