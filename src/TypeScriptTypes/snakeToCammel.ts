import { capitalize } from './capitalize'

export const snakeToCammel = (value: string): string => {
	const underscore = value.split('_').slice(0, value.split('_').length - 1)
	const capitalized = underscore.map((element) => capitalize(element)).join('')
	const result = [
		capitalized,
		'_',
		value.split('_').slice(value.split('_').length - 1),
	].join('')
	return result
}
