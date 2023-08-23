import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { readFileSync } from 'fs'
import { assertThat, is, defined } from 'hamjest'
import { getLwM2MObjectDefinitionFiles } from 'src/lwm2m/getLwM2MObjectDefinitionFiles'
import { fromXML } from 'src/xml2js/definitionFromXML'
import { generateObjectType } from 'src/type-generation/generateObjectType'

const outDir = path.join(process.cwd(), 'e2e-tests/types')
try {
	await mkdir(outDir)
} catch {
	// Already exists
}

/**
 * Get the path of the XML object given by params
 */
const getObjectPath = (objectId: string): string | undefined => {
	const xmlUrls = getLwM2MObjectDefinitionFiles()
	const devicePath = xmlUrls.filter((url) => {
		return url.includes(`/${objectId}.xml`)
	})[0]
	return devicePath
}

/**
 * Read file
 */
const readFile = (objectId: string): Buffer | undefined => {
	const dir = `${outDir}/${objectId}.ts`
	try {
		return readFileSync(dir)
	} catch {
		console.error(`can not read ${dir} file`)
		return undefined
	}
}

/**
 * Generate types definition given the object id
 */
const generateTypes = async (objectId: string): Promise<void> => {
	/**
	 * Get the path where the XML definition of the object is
	 */
	const devicePath = getObjectPath(objectId)
	assertThat(devicePath, is(defined()))

	/**
	 * Get information about the object
	 */
	const objectInfo = await fromXML(devicePath as string)
	assertThat(objectInfo.ObjectID, is(objectId))

	/**
	 * Create .ts file with typescript type definitions of the object
	 */
	const source = generateObjectType(objectInfo)
	const outfile = path.join(outDir, `${objectInfo.ObjectID}.ts`)
	console.log(`Writing`, outfile)
	await writeFile(outfile, source, 'utf-8')

	/**
	 * Read created file
	 */
	const generatedType = readFile(objectId)
	assertThat(generatedType, is(defined()))
}

const main = async () => {
	/**
	 * Generate TypeScript types for object Device, which is id 3 in LwM2M
	 */
	await generateTypes('3')
}

void main()
