const disallowedSpaces = [
	'\u000b', //  Line Tabulation (\v) -
	'\u000c', //  Form Feed (\f) -
	'\u00a0', //  No-Break Space -
	'\u0085', //  Next Line
	'\u1680', //  Ogham Space Mark
	'\u180e', //  Mongolian Vowel Separator -
	'\ufeff', //  Zero Width No-Break Space -
	'\u2000', //  En Quad
	'\u2001', //  Em Quad
	'\u2002', //  En Space -
	'\u2003', //  Em Space -
	'\u2004', //  Three-Per-Em
	'\u2005', //  Four-Per-Em
	'\u2006', //  Six-Per-Em
	'\u2007', //  Figure Space
	'\u2008', //  Punctuation Space -
	'\u2009', //  Thin Space
	'\u200a', //  Hair Space
	'\u200b', //  Zero Width Space -
	'\u2028', //  Line Separator
	'\u2029', //  Paragraph Separator
	'\u202f', //  Narrow No-Break Space
	'\u205f', //  Medium Mathematical Space
	'\u3000', //  Ideographic Space
]

/**
 * Replace irregular whitespace in text, otherwise eslint complains
 *
 * @see https://eslint.org/docs/latest/rules/no-irregular-whitespace
 */
export const cleanWhitespace = (s: string): string =>
	s.replaceAll(new RegExp(`[${disallowedSpaces.join('')}]`, 'g'), ' ')
