import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { lwm2mDefinitions } from '../src/lwm2m/lwm2mDefinitions'
import { generateExports } from '../src/type-generation/generateExports'
import { generateLwM2MDocument } from '../src/type-generation/generateLwM2MDocument'
import { generateObjectType } from '../src/type-generation/generateObjectType'

const outDir = path.join(process.cwd(), 'types')
try {
	await mkdir(outDir)
} catch {
	// Already exists
}

const definitions = await lwm2mDefinitions()

for (const objectDefinition of definitions) {
	const source = generateObjectType(objectDefinition)
	const outfile = path.join(outDir, `${objectDefinition.ObjectID}.ts`)
	console.log(`Writing`, outfile)
	await writeFile(outfile, source, 'utf-8')
}

const exportFile = path.join(outDir, `LwM2M.ts`)
console.log(`Writing`, exportFile)
const exportSource = generateExports(definitions)
await writeFile(exportFile, exportSource, 'utf-8')

const documentFile = path.join(outDir, `LwM2MDocument.ts`)
console.log(`Writing`, documentFile)
const documentSource = generateLwM2MDocument(definitions)
await writeFile(documentFile, documentSource, 'utf-8')
