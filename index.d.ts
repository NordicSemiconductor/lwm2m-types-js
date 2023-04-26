export * from './src/type-generation/createURN.ts'
export * from './src/type-generation/parseURN.ts'
export * from './src/validate.ts'
export * from './types/LwM2M.ts'
export * from './types/LwM2MDocument.ts'

export declare const LwM2MDocumentSchema: {
	$schema: 'http://json-schema.org/draft-07/schema#'
	type: 'object'
	$id: string
	title: string
	description: string
	properties: Record<string, any>
}
