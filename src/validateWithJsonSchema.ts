import Ajv, { ErrorObject, Schema } from 'ajv'

export const validateWithJSONSchema = <ReturnType>(
	schema: Schema,
): ((value: unknown) =>
	| { value: ReturnType }
	| {
			errors: ErrorObject[]
	  }) => {
	const ajv = new Ajv()
	const v = ajv.compile(schema)
	return (value: unknown) => {
		const valid = v(value)
		if (valid !== true) {
			return {
				errors: v.errors as ErrorObject[],
			}
		}
		return { value: value as ReturnType }
	}
}
