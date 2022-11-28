import ts from 'typescript'

export const addDocBlock = (comment: string[], node: ts.Node): void => {
	ts.addSyntheticLeadingComment(
		node,
		ts.SyntaxKind.MultiLineCommentTrivia,
		`*\n * ${comment.join('\n * ')} \n `,
		true,
	)
}
