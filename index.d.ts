export * from './src/type-generation/createURN.js'
export * from './src/type-generation/getURN.js'
export * from './src/type-generation/parseURN.js'
export * from './src/validate.js'
export * from './types/LwM2M.js'
export * from './types/LwM2MDocument.js'

export declare const LwM2MDocumentSchema: {
	$schema: 'http://json-schema.org/draft-07/schema#'
	type: 'object'
	$id: string
	title: string
	description: string
	properties: Record<string, any>
}
