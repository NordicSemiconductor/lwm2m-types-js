/* eslint-disable */
import { TypeBoxPropertyDefinition } from './example'

/**
 * This is the plain JavaScript object that describes a TypeBox definition
 */
export type TypeBoxDefinition = {
	comment: string
}

export class TypeBoxFactory {
	constructor() {}

	addComment(comment: string) {
		// FIXME: implement
		return this
	}

	addDescription(description: string) {
		// FIXME: implement
		return this
	}

	addProperty(property: TypeBoxPropertyDefinition) {
		// FIXME: implement
		return this
	}

	/**
	 * Returns the plain JavaScript object
	 */
	freeze(): TypeBoxDefinition {
		// FIXME: implement
		// @ts-ignore
		return {}
	}
}
