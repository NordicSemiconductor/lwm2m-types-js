import S, { JSONSchema } from 'fluent-json-schema'
import { readdirSync } from 'fs'
import { readFile } from 'fs/promises'
import path from 'node:path'
import { Parser } from 'xml2js'
import { lwM2MDefinitionToJSONSchema } from '../lwm2m-to-JSON-schema/lwM2MDefinitionToJSONSchema'
import { ignoredLwM2MObjects } from '../TypeScript/ignoredLwM2MObjects'
import { createURN } from '../utils/createURN'
import { parseLwM2MURN } from '../utils/parseLwM2MURN'
import { LwM2MJSONfromXML2js } from '../xml2js-to-plain/LwM2MJSONfromXML2js'
const parser = new Parser({ attrkey: 'ATTR' })

/**
 * Return files that follow the following rules:
 * - Is a XML file
 * - Name of file is numeric
 * - Object is not part of ignored LwM2M objects list
 */
const getXMLfiles = () => {
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

/**
 * Return formated ID
 */
const generateId = (data: {
	urn: string
	ObjectVersion: string
	LWM2MVersion: string
}): string => {
	const parsedURN = parseLwM2MURN(data.urn)
	const version = data.ObjectVersion ?? parsedURN?.ObjectVersion ?? '1.0' // default
	return createURN({
		ObjectID: parsedURN?.ObjectID ?? '',
		ObjectVersion: version,
		LwM2MVersion: data.LWM2MVersion ?? '1.0', // default
	})
}

/**
 * Given the source of a XML file, create its JSON Schema definition and its URN
 */
export const createJsonSchema = async (
	sourceFile: string,
): Promise<{
	jsonSchema: Record<string, any>
	id: string
}> => {
	const xml = await readFile(sourceFile, 'utf-8')
	const xmlAsJSON = await parser.parseStringPromise(xml)
	const lwm2mDefinition = LwM2MJSONfromXML2js(xmlAsJSON)
	const jsonSchema = lwM2MDefinitionToJSONSchema(lwm2mDefinition)
	const id = generateId({
		urn: lwm2mDefinition.ObjectURN,
		LWM2MVersion: lwm2mDefinition.LWM2MVersion,
		ObjectVersion: lwm2mDefinition.ObjectVersion,
	})
	return { jsonSchema, id }
}

/**
 * Create the LWM2M JSON Schema document
 */
export const createLwm2mJsonSchemaDocument = async (): Promise<
	Record<string, any>
> => {
	const xmlFiles = getXMLfiles()
	let lwm2mDocument = S.object()
		.id(
			'https://github.com/NordicSemiconductor/lwm2m-typebox-types-js/blob/saga/LwM2MDocument.schema.json',
		)
		.title('LwM2M JSON Schema')
		.description('JSON schema for expressing LwM2M resources as JSON')

	for (const xml of xmlFiles) {
		const { jsonSchema, id } = await createJsonSchema(xml)
		lwm2mDocument = lwm2mDocument.prop(id, jsonSchema as JSONSchema)
	}

	return lwm2mDocument.valueOf()
}
