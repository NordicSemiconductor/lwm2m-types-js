/**
 * Clean up a text so it can be used as a comment.
 */
export const escapeText = (element: string): string =>
	element
		.replaceAll(`"`, "'")
		.replaceAll('‘', "'")
		.replaceAll('’', "'")
		.replaceAll(/\n/g, ' ')
		.replaceAll(/\r/g, ' ')
		.replaceAll(/\t/g, ' ')
