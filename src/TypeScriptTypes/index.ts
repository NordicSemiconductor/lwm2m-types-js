import { appendFile, writeFile } from 'fs/promises'
import { compile } from 'json-schema-to-typescript'
import path from 'node:path'
import { tokenizeName } from 'src/Json/tokenizeName'
import { typeName } from 'src/Json/typeName'
import { deconstructURN } from 'src/utils/deconstructURN'
import LwM2MDocumentSchema from '../../LwM2MDocument.schema.json'

for (const urn of Object.keys(LwM2MDocumentSchema.properties)) {
	const object = (LwM2MDocumentSchema.properties as any)[`${urn}`] // TODO: fix it

	const { ObjectID, ObjectVersion, LwM2MVersion } = deconstructURN(urn)

	const MultipleInstances = object.type === 'array' ? 'Multiple' : 'Single'
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
	object.title = typeName(ObjectID, objectName)

	if (object.type === 'array') {
		object.items.title = tokenizeName(objectName)
	}

	const tsTypes = await compile(object, urn, {
		format: false,
		bannerComment: comment.join(''),
		declareExternallyReferenced: true,
	})

	// TODO: export only 1 type
	// TODO: remove exports from file programmatically https://nodejs.org/api/fs.html#fs_file_system
	// https://github.com/bcherny/json-schema-to-typescript/issues/202

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
