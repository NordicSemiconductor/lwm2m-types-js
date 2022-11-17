import { tokenizeName } from './tokenizeName'

/**
 * This creates the name used for the TypeBox definition.
 */
export const typeName = (id: string, name: string): string =>
	`${tokenizeName(name)}_${id}`
