import Ajv, { KeywordCxt, _, type ErrorObject, type Schema } from 'ajv'

export const validateWithJSONSchema = <ReturnType>(
	schema: Schema,
): ((value: unknown) =>
	| { value: ReturnType }
	| {
			errors: ErrorObject[]
	  }) => {
	const ajv = new Ajv()

	unixTimestampKeyword(ajv)

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

/**
 * Adds support for the keyword "unixTimestamp", which allows to infer from the
 * schema that this value is supposed to be a LwM2M Timestamp.
 *
 * @see http://www.openmobilealliance.org/release/lightweightm2m/V1_0-20170208-A/OMA-TS-LightweightM2M-V1_0-20170208-A.pdf (Page 96)
 *
 * Time (Unix Time): A signed integer representing the number of seconds since
 * Jan 1st, 1970 in the UTC time zone.
 * Represented as an ASCII integer.
 * For example, 1476186613 seconds since Jan 01 1970, which represents Tuesday,
 * 11-Oct-16 11:50:13 UTC, are represented as the ASCII string "1476186613",
 * which has 10 characters/bytes.
 */
export const unixTimestampKeyword = (ajv: Ajv): void => {
	const minUnixTimestamp = 0 // 1 Jan 1970, 00:00:00 UTC
	const maxUnixTimestamp = 9999999999 // 20 Nov 2286, 17:46:39 UTC
	ajv.addKeyword({
		keyword: 'unixTimestamp',
		type: 'number',
		schemaType: 'boolean',
		code: (cxt: KeywordCxt) => {
			cxt.fail(
				_`${cxt.data} < ${minUnixTimestamp} || ${cxt.data} > ${maxUnixTimestamp}`,
			)
		},
		error: {
			message:
				'Timestamps must be expressed as an integer between 11111111111 and 9999999999, for example "1476186613" seconds since Jan 01 1970, which represents 2016-10-11T11:50:13.000Z',
		},
	})
}
