import { ObjectOptions, TSchema, Type } from '@sinclair/typebox'

export class TypeBoxObjectFactory {
	public title: string | undefined
	public readonly description: string[] = []
	public readonly properties: Record<string, TSchema> = {}

	addToDescription(text: string): TypeBoxObjectFactory {
		this.description.push(text)
		return this
	}

	setTitle(title: string): TypeBoxObjectFactory {
		this.title = title
		return this
	}

	addProperty(key: string, property: TSchema): TypeBoxObjectFactory {
		if (this.properties[key] !== undefined)
			throw new Error(`Property ${key} already defined!`)
		this.properties[key] = property
		return this
	}

	/**
	 * Returns the plain JavaScript object
	 */
	toSchema(): TSchema {
		const meta: ObjectOptions = {}
		if (this.title !== undefined) meta.title = this.title
		if (this.description.length > 0)
			meta.description = this.description.join(' ')
		return Type.Object(this.properties, meta)
	}
}
