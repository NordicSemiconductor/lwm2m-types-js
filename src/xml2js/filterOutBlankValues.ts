type filterOutBlankValuesFn = {
	(input: null): undefined
	(input: undefined): undefined
	(input: string): string | undefined
	(input: unknown[]): unknown[]
	(input: Record<string, any>): Record<string, any>
}
/**
 * Filters out "blank" values (empty strings, null)
 */
export const filterOutBlankValues: filterOutBlankValuesFn = (
	input: unknown,
) => {
	if (input === null) return undefined
	if (input === undefined) return undefined
	if (typeof input === 'string') {
		if (input.length === 0) return undefined
		return input
	}
	if (typeof input !== 'object') return input as any
	return Object.entries(input).reduce(
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
