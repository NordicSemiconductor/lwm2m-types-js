import { tokenizeName } from './tokenizeName.js'

/**
 * This creates the name used for the type definition.
 */
export const typeName = (objectId: string, objectName: string): string =>
	`${tokenizeName(objectName)}_${objectId}`
