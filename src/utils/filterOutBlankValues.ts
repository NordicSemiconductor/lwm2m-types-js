/**
 * Filters out "blank" values (empty strings, null)
 */
export const filterOutBlankValues = (input: unknown): unknown => {
	if (input === null) return undefined
	if (typeof input === 'string') {
		if (input.length === 0) return undefined
		return input
	}
	return Object.entries(input as Record<string, any>).reduce(
		(blanksRemoved, [k, v]) => {
			if (Array.isArray(v)) {
				const filtered: any[] = []
				for (const vv of v) {
					const filteredV = filterOutBlankValues(vv)
					if (filteredV !== undefined) filtered.push(filteredV)
				}
				if (filtered.length === 0) return blanksRemoved
				return { ...blanksRemoved, [k]: filtered }
			}
			if (
				v === undefined ||
				(typeof v === 'string' && v.length === 0) ||
				v === null
			)
				return blanksRemoved
			return {
				...blanksRemoved,
				[k]: filterOutBlankValues(v),
			}
		},
		{} as Record<string, any>,
	)
}
