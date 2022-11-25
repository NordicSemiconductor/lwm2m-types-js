import deburr from 'lodash.deburr'
import trim from 'lodash.trim'
import upperFirst from 'lodash.upperfirst'

/**
 *
 * Follows the 'toSafeString' method from 'json-schema-to-typescript' lib
 *
 * Convert a string that might contain spaces or special characters to one that
 * can safely be used as a TypeScript interface or enum name.
 *
 * https://github.com/bcherny/json-schema-to-typescript/blob/34de194e87cd54f43809efae110732569e0891c1/src/utils.ts#L339
 *
 */
export const toSafeString = (string: string): string => {
	// identifiers in javaScript/ts:
	// First character: a-zA-Z | _ | $
	// Rest: a-zA-Z | _ | $ | 0-9

	return upperFirst(
		// remove accents, umlauts, ... by their basic latin letters
		deburr(string)
			// replace chars which are not valid for typescript identifiers with whitespace
			.replace(/(^\s*[^a-zA-Z_$])|([^a-zA-Z_$\d])/g, ' ')
			// uppercase leading underscores followed by lowercase
			.replace(/^_[a-z]/g, (match) => match.toUpperCase())
			// remove non-leading underscores followed by lowercase (convert snake_case)
			.replace(/_[a-z]/g, (match) =>
				// eslint-disable-next-line @typescript-eslint/restrict-plus-operands
				match.slice(1, 1 + match.length).toUpperCase(),
			)
			// uppercase letters after digits, dollars
			.replace(/([\d$]+[a-zA-Z])/g, (match) => match.toUpperCase())
			// uppercase first letter after whitespace
			.replace(/\s+([a-zA-Z])/g, (match) => trim(match.toUpperCase()))
			// remove remaining whitespace
			.replace(/\s/g, ''),
	)
}
