export const parseLwM2MURN = (
	urn: string,
): {
	ObjectID: string
	ObjectVersion?: string
	ObjectNamespace: 'oma' | 'ext' | 'x'
} | null => {
	const match =
		/^urn:oma:lwm2m:(?<namespace>oma|ext|x):(?<ObjectID>\d+)(?::(?<ObjectVersion>[0-9]+\.\d+))?/.exec(
			urn,
		)
	if (match?.groups === undefined) return null
	return {
		ObjectID: match.groups?.ObjectID as string,
		ObjectVersion: match.groups?.ObjectVersion as string,
		ObjectNamespace: match.groups?.namespace as 'oma' | 'ext' | 'x',
	}
}
