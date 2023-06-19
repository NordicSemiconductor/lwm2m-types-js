/**
 * Given the object id of a LwM2M element should return its URN as it is defined in src/type-generation/createURN.ts
 */
export const getURN = async (objectId: string): Promise<string | undefined> => {
	const url = `../../types/${objectId}.js`
	const urn = await import(url)
		.then(({ objectURN }) => objectURN)
		.catch(() => undefined)

	if (urn === undefined) {
		return undefined
	}

	return urn
}
