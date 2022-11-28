import { readdirSync } from 'fs'
import path from 'node:path'
import { ignoredLwM2MObjects } from './ignoredLwM2MObjects'

/**
 * Return files that follow the following rules:
 * - Is a XML file
 * - Name of file is numeric
 * - Object is not part of ignored LwM2M objects list
 */
export const getLwM2MObjectDefinitionFiles = (): string[] => {
	const folder = 'lwm2m-registry'
	const dir = path.join(process.cwd(), folder)
	const xmlFiles = readdirSync(dir)
		.filter((f) => f.endsWith('.xml'))
		.filter((f) => /^[0-9]+\.xml$/.test(path.parse(f).base))
		.filter((file) => {
			const sourceFile = path.join(process.cwd(), file)
			const ObjectID = path.parse(sourceFile).name
			return !ignoredLwM2MObjects.includes(ObjectID)
		})
		.map((file) => path.join(dir, file))
	return xmlFiles
}
