import os from 'node:os'
import ts from 'typescript'
import type { LwM2MObjectDefinition } from '../lwm2m/LwM2MObjectDefinition'
import { printNode } from './printNode'
import { typeName } from './typeName'

/**
 * This generates the TypeScript source that exports all the individual LwM2M
 * object definitions.
 */
export const generateExports = (
	definitions: LwM2MObjectDefinition[],
): string => {
	const exportDefinitions: ts.Node[] = []
	for (const definition of definitions.sort(
		({ ObjectID: ID1 }, { ObjectID: ID2 }) =>
			parseInt(ID1, 10) - parseInt(ID2, 10),
	)) {
		// Type
		exportDefinitions.push(
			ts.factory.createExportDeclaration(
				undefined,
				false,
				ts.factory.createNamedExports([
					ts.factory.createExportSpecifier(
						true,
						undefined,
						ts.factory.createIdentifier(
							typeName(definition.ObjectID, definition.Name),
						),
					),
				]),
				ts.factory.createStringLiteral(`./${definition.ObjectID}`),
			),
		)
		// URN
		exportDefinitions.push(
			ts.factory.createExportDeclaration(
				undefined,
				false,
				ts.factory.createNamedExports([
					ts.factory.createExportSpecifier(
						false,
						ts.factory.createIdentifier(`objectURN`),
						ts.factory.createIdentifier(
							`${typeName(definition.ObjectID, definition.Name)}_urn`,
						),
					),
				]),
				ts.factory.createStringLiteral(`./${definition.ObjectID}`),
			),
		)
	}
	return exportDefinitions.map(printNode).join(os.EOL)
}
