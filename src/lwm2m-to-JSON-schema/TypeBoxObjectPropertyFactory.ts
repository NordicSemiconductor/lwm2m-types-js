import { NumericOptions, TSchema, Type } from '@sinclair/typebox'

export abstract class TypeBoxObjectPropertyFactory {
	public title: string | undefined = undefined
	setTitle(title: string): TypeBoxObjectPropertyFactory {
		this.title = title
		return this
	}

	public readonly description: string[] = []
	addToDescription(text: string): TypeBoxObjectPropertyFactory {
		this.description.push(text)
		return this
	}

	public required = false
	require(): TypeBoxObjectPropertyFactory {
		this.required = true
		return this
	}

	toProperty(concreteProp: TSchema): TSchema {
		if (!this.required) concreteProp = Type.Optional(concreteProp)
		return concreteProp
	}

	meta(): {
		title?: string
		description?: string
	} {
		const m: {
			/** Title of this schema */
			title?: string
			/** Description of this schema */
			description?: string
		} = {}
		if (this.title !== undefined) m.title = this.title
		if (this.description.length > 0) m.description = this.description.join(' ')
		return m
	}
}
export class TypeBoxNumberObjectPropertyFactory extends TypeBoxObjectPropertyFactory {
	public readonly options: NumericOptions = {}

	override setTitle(title: string): TypeBoxNumberObjectPropertyFactory {
		super.setTitle(title)
		return this
	}

	override addToDescription(text: string): TypeBoxNumberObjectPropertyFactory {
		super.addToDescription(text)
		return this
	}

	override require(): TypeBoxNumberObjectPropertyFactory {
		super.require()
		return this
	}

	setRange(min: number, max: number): TypeBoxNumberObjectPropertyFactory {
		if (min > max)
			throw new Error(`min (${min}) must be smaller then max (${max})!`)
		this.options.minimum = min
		this.options.maximum = max
		return this
	}

	override toProperty(): TSchema {
		return super.toProperty(
			Type.Number({
				...this.meta(),
				...this.options,
			}),
		)
	}
}
export class TypeBoxIntegerObjectPropertyFactory extends TypeBoxObjectPropertyFactory {
	public readonly options: NumericOptions = {}

	override setTitle(title: string): TypeBoxIntegerObjectPropertyFactory {
		super.setTitle(title)
		return this
	}

	override addToDescription(text: string): TypeBoxIntegerObjectPropertyFactory {
		super.addToDescription(text)
		return this
	}

	override require(): TypeBoxIntegerObjectPropertyFactory {
		super.require()
		return this
	}

	setRange(min: number, max: number): TypeBoxIntegerObjectPropertyFactory {
		if (min > max)
			throw new Error(`min (${min}) must be smaller then max (${max})!`)
		this.options.minimum = min
		this.options.maximum = max
		return this
	}

	override toProperty(): TSchema {
		return super.toProperty(
			Type.Integer({
				...this.meta(),
				...this.options,
			}),
		)
	}
}
export class TypeBoxBooleanObjectPropertyFactory extends TypeBoxObjectPropertyFactory {
	override toProperty(): TSchema {
		return super.toProperty(Type.Boolean(this.meta()))
	}

	override setTitle(title: string): TypeBoxBooleanObjectPropertyFactory {
		super.setTitle(title)
		return this
	}

	override addToDescription(text: string): TypeBoxBooleanObjectPropertyFactory {
		super.addToDescription(text)
		return this
	}

	override require(): TypeBoxBooleanObjectPropertyFactory {
		super.require()
		return this
	}
}
