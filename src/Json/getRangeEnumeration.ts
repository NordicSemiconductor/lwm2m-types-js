/**
 * Return true if format is invalid, false if it is valid.
 *
 * allowed formats:
 *  1- VALUE
 *  2- VALUE..VALUE
 *  3- VALUE, VALUE, VALUE
 *
 */
export const isInvalidFormat = (element: string): boolean =>
	element.split(/[..]|,/g).some((element) => /\s/.test(element.trim()))

/**
 * Check if format is followed
 * Format:
 *  VALUE..VALUE
 */
export const isRangeFormat = (element: string): boolean =>
	element.length >= 4 && element.split('..').length === 2

/**
 * Check if format is followed
 * Format:
 *  VALUE
 */
export const isSingleEnum = (element: string): boolean =>
	element.split(/[..]|,|' '/g).length === 1

/**
 * Check if format is followed
 * Format:
 *  VALUE, VALUE, VALUE
 */
export const isListEnum = (element: string): boolean =>
	element.split(',').length > 1

/**
 * Check if value is an empty string
 */
const isEmptyValue = (element: string): boolean => element.trim().length === 0

/**
 * Create an object after analyze range enumeration composition.
 * RangeEnumeratioan format definition: http://www.openmobilealliance.org/release/LightweightM2M/V1_1_1-20190617-A/OMA-TS-LightweightM2M_Core-V1_1_1-20190617-A.pdf pag 110
 */
export const getRangeEnumeration = (
	value: string,
): {
	invalidFormat: boolean
	value: number | string | number[] | string[] | null
	dataStruct?: 'enum' | 'range'
} => {
	if (isInvalidFormat(value)) return { invalidFormat: true, value: value }

	if (isEmptyValue(value)) return { invalidFormat: false, value: null }

	if (isSingleEnum(value)) {
		const enumValue = isNaN(+value) ? value : +value
		return { invalidFormat: false, value: enumValue, dataStruct: 'enum' }
	}

	if (isRangeFormat(value)) {
		const [min, max] = value.split('..')
		if (min === undefined || max === undefined)
			return { invalidFormat: true, value: value }
		if (isNaN(+min) || isNaN(+max)) return { invalidFormat: true, value: value }

		return { invalidFormat: false, value: [+min, +max], dataStruct: 'range' }
	}

	if (isListEnum(value)) {
		const isNumberList = value.split(',').some((element) => !isNaN(+element))
		const enumList = isNumberList
			? value.split(',').map((element) => +element)
			: value.split(',')
		return { invalidFormat: false, value: enumList, dataStruct: 'enum' }
	}

	return { invalidFormat: true, value: value }
}
