/**
 * Wrap long lines
 */
export const wrap =
	(maxLength: number) =>
	(text: string): string[] =>
		text.split(' ').reduce(
			(chunks, word) => {
				const current = chunks[chunks.length - 1] ?? ''
				if (current.length + word.length > maxLength) {
					chunks.push(word)
				} else {
					chunks[chunks.length - 1] = `${current} ${word}`.trim()
				}
				return chunks
			},
			[''],
		)
