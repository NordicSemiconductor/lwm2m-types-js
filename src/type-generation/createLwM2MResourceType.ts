import os from 'node:os'
import ts from 'typescript'
import type { Resource } from '../lwm2m/LwM2MObjectDefinition.js'
import { addDocBlock } from './addDocBlock.js'
import { cleanWhitespace } from './cleanWhitespace.js'
import { wrapLongLines } from './createLwM2MObjectType.js'
import { getTypeScriptType } from './getTypeScriptType.js'
import { typeName } from './typeName.js'

type ResourceType = {
	id: string
	isOptional: boolean
	name: string
	type: ts.TypeAliasDeclaration
}

/**
 * Create the type definition for a resource
 */
export const createResourceType = (
	resourceId: string,
	resource: Resource,
): ResourceType => {
	const name = typeName(resourceId, resource.Name)

	let type = ts.factory.createTypeReferenceNode(
		getTypeScriptType(resource.Type),
	)

	if (resource.MultipleInstances)
		type = ts.factory.createTypeReferenceNode('Array', [type])

	const res = ts.factory.createTypeAliasDeclaration(
		undefined,
		ts.factory.createIdentifier(name),
		undefined,
		type,
	)

	const comment = [
		resource.Name,
		``,
		...cleanWhitespace(resource.Description)
			.split(os.EOL)
			.map(wrapLongLines)
			.flat(),
		``,
		`ID: ${resourceId}`,
		`MultipleInstances: ${resource.MultipleInstances}`,
		`Mandatory: ${resource.Mandatory}`,
	]
	if (resource.Units !== undefined) comment.push(`Units: ${resource.Units}`)

	addDocBlock(comment, res)
	const value = {
		id: resourceId,
		isOptional: resource.Mandatory,
		name,
		type: res,
	}
	return value
}
