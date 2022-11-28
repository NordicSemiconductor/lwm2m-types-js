import ts from 'typescript'
import type { LwM2MObjectDefinition } from '../lwm2m/LwM2MObjectDefinition'
import { addDocBlock } from './addDocBlock'
import { createURN } from './createURN'

export const createObjectURN = ({
	Name,
	ObjectID,
	ObjectVersion,
	LWM2MVersion: LWM2MVersion,
}: LwM2MObjectDefinition): ts.Node => {
	const objectURNExport = ts.factory.createVariableStatement(
		[ts.factory.createToken(ts.SyntaxKind.ExportKeyword)],
		ts.factory.createVariableDeclarationList(
			[
				ts.factory.createVariableDeclaration(
					ts.factory.createIdentifier(`objectURN`),
					undefined,
					undefined,
					ts.factory.createStringLiteral(
						createURN({
							ObjectID,
							ObjectVersion,
							LWM2MVersion: LWM2MVersion,
						}),
					),
				),
			],
			ts.NodeFlags.Const,
		),
	)

	addDocBlock(
		[
			`The objectURN for ${Name}`,
			'Used in the JSON schema for the LwM2M document definition as a key.',
		],
		objectURNExport,
	)
	return objectURNExport
}
