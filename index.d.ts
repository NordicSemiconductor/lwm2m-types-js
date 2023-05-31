export * from './src/type-generation/createURN'
export * from './src/type-generation/parseURN'
export * from './src/validate'
export * from './types/LwM2M'
export * from './types/LwM2MDocument'

export declare const LwM2MDocumentSchema: {
	$schema: 'http://json-schema.org/draft-07/schema#'
	type: 'object'
	$id: string
	title: string
	description: string
	properties: Record<string, any>
}
