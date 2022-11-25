import { appendFile, writeFile } from 'fs/promises'
import { compile } from 'json-schema-to-typescript'
import path from 'node:path'
import { tokenizeName } from 'src/Json/tokenizeName'
import { typeName } from 'src/Json/typeName'
import { deconstructURN } from 'src/utils/deconstructURN'
import LwM2MDocumentSchema from '../../LwM2MDocument.schema.json'
import { toSafeString } from './json-schema-to-typescript-strings'

for (const urn of Object.keys(LwM2MDocumentSchema.properties)) {
	const object = (LwM2MDocumentSchema.properties as any)[`${urn}`] // TODO: fix it
	const isArray = object.type === 'array' ?? false

	const { ObjectID, ObjectVersion, LwM2MVersion } = deconstructURN(urn)

	const MultipleInstances = isArray ? 'Multiple' : 'Single'
	const Mandatory = 'Optional' // TODO: get real value

	const comment = [
		`/**\n`,
		` * ${object.title}\n`,
		` *\n`,
		` * LWM2M Version:  ${LwM2MVersion}\n`,
		` * Object Version: ${ObjectVersion}\n`,
		` * Instance Type: ${MultipleInstances}\n`,
		` * Mandatory Status: ${Mandatory}\n`,
		` */\n`,
	]

	const objectName = object.title.split(':')[1]
	const objectTitle = typeName(ObjectID, objectName)
	object.title = objectTitle

	if (isArray) {
		object.items.title = tokenizeName(objectName)
	}

	let tsTypes = await compile(object, urn, {
		format: false,
		bannerComment: comment.join(''),
		declareExternallyReferenced: true,
	})

	if (isArray) {
		tsTypes = tsTypes.replace(/export /g, '')
		tsTypes = tsTypes.replace(
			`type ${toSafeString(objectTitle)}`,
			`export type ${toSafeString(objectTitle)}`,
		)
	} else {
		tsTypes = tsTypes.replace(/export /g, '')
		tsTypes = tsTypes.replace(
			`interface ${toSafeString(objectTitle)}`,
			`export interface ${toSafeString(objectTitle)}`,
		)
	}

	const exportURN = `\nexport const objectURN = '${urn}'`

	const outFile = path.join(
		process.cwd(),
		'/typeScript-definitions',
		`${ObjectID}.ts`,
	)
	await writeFile(outFile, tsTypes, 'utf-8')
	await appendFile(outFile, exportURN, 'utf-8')
}

// npx eslint --fix .
