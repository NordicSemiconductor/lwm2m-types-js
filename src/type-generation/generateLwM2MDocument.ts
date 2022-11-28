import os from 'node:os'
import ts from 'typescript'
import type { LwM2MObjectDefinition } from '../lwm2m/LwM2MObjectDefinition'
import { printNode } from './printNode'
import { typeName } from './typeName'

export const generateLwM2MDocument = (
	definitions: LwM2MObjectDefinition[],
): string => {
	const types: ts.Node[] = []
	for (const definition of definitions) {
		types.push(
			ts.factory.createImportDeclaration(
				undefined,
				ts.factory.createImportClause(
					false,
					undefined,
					ts.factory.createNamedImports([
						ts.factory.createImportSpecifier(
							false,
							undefined,
							ts.factory.createIdentifier(
								typeName(definition.ObjectID, definition.Name),
							),
						),
						ts.factory.createImportSpecifier(
							false,
							ts.factory.createIdentifier(`objectURN`),
							ts.factory.createIdentifier(
								`${typeName(definition.ObjectID, definition.Name)}_urn`,
							),
						),
					]),
				),
				ts.factory.createStringLiteral(`./${definition.ObjectID}`),
			),
		)
	}

	const objectTypeExport = ts.factory.createTypeAliasDeclaration(
		[ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
		ts.factory.createIdentifier(`LwM2MDocument`),
		undefined,
		ts.factory.createTypeReferenceNode('Readonly', [
			ts.factory.createTypeReferenceNode('Partial', [
				ts.factory.createTypeLiteralNode(
					definitions.map((definition) => {
						const p = ts.factory.createPropertySignature(
							undefined,
							ts.factory.createIdentifier(
								`[${typeName(definition.ObjectID, definition.Name)}_urn]`,
							),
							undefined,
							ts.factory.createTypeReferenceNode(
								ts.factory.createIdentifier(
									typeName(definition.ObjectID, definition.Name),
								),
							),
						)
						return p
					}),
				),
			]),
		]),
	)

	types.push(objectTypeExport)

	return types.map(printNode).join(os.EOL)
}
