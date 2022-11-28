export enum LwM2MType {
	Boolean = 'Boolean',
	Float = 'Float',
	Integer = 'Integer',
	UnsignedInteger = 'Unsigned Integer',
	Objlnk = 'Objlnk',
	Corelnk = 'Corelnk',
	Opaque = 'Opaque',
	String = 'String',
	Time = 'Time',
}

export enum Operations {
	Read = 'R',
	ReadWrite = 'RW',
	Write = 'W',
	Execute = 'E',
}

export enum MultipleInstances {
	Multiple = 'Multiple',
	Single = 'Single',
}

export enum Mandatory {
	Mandatory = 'Mandatory',
	Optional = 'Optional',
}

export type Resource = {
	Name: string
	Operations: Operations
	MultipleInstances: boolean
	Mandatory: boolean
	Type: LwM2MType
	RangeEnumeration?:
		| { min: number; max: number }
		| { enum: (number | string)[] }
	Units?: string
	Description: string
}

export type Resources = Record<string, Resource>

export type LwM2MObjectDefinition = {
	Name: string
	Description1: string
	Description2?: string
	ObjectID: string
	ObjectURN: string // 'urn:oma:lwm2m:oma:1:1.2'
	LWM2MVersion: string // "1.2"
	ObjectVersion: string // "1.2"
	MultipleInstances: boolean
	Mandatory: boolean
	Resources: Resources
}
