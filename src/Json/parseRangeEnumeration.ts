/**
 * Create an object after analyze range enumeration composition.
 * RangeEnumeratioan format definition: http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.pdf page 110
 *
 * Range or Enumeration: this field limits the possible values of a Resource.
 *
 * A range is defined using two numeric values separated by two dots ("..") to
 * indicate the lower and upper limits (inclusive). Enumeration is defined using
 * one or more comma separated values. For the opaque data type, the value in
 * this field represents constraints on the length of the Resource expressed in
 * octets. For example, 1..42 indicates that the Resource can be 1 to 42 octets
 * long. A value of 5,10,15 in this field indicates that the Resource can be
 * 5, 10, or 15 octets long. A value of8 in this field indicates that the
 * Resource is always 8 octets long. For the string data type, a numeric range
 * or enumeration has the same meaning as the opaque data type. Additionally,
 * a comma separated list of quoted strings indicates the enumerated string
 * values. For example, "foo","bar" indicates that the string Resource can only
 * have the value foo or bar.
 */
export const parseRangeEnumeration = (
	value: string,
): null | { enum: (number | string)[] } | { min: number; max: number } => {
	const range = parseRange(value)
	if (range !== null) return range

	const list = parseList(value)
	if (list !== null) return list

	return null
}

const parseRange = (value: string): { min: number; max: number } | null => {
	const [minString, maxString] = value.split('..')
	if (minString === undefined || maxString === undefined) return null
	const min = +minString
	const max = +maxString
	if (isNaN(min) || isNaN(max)) return null
	if (min > max) return null
	return { min: +minString, max: +maxString }
}

const parseList = (value: string): { enum: (number | string)[] } | null => {
	const list = value.split(',')
	const allAreNumbers =
		list.filter((s) => /^\d+$/.test(s)).length == list.length
	if (allAreNumbers) return { enum: list.map((s) => parseInt(s, 10)) }
	const allAreQuotedStrings =
		list.filter((s) => /^"[^"]+"$/.test(s)).length == list.length
	if (allAreQuotedStrings) return { enum: list.map((s) => s.slice(1, -1)) }
	return null
}
