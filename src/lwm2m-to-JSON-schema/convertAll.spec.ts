import { readdirSync } from 'fs'
import { readFile } from 'fs/promises'
import path from 'node:path'
import { Parser } from 'xml2js'
import { ignoredLwM2MObjects } from '../TypeScript/ignoredLwM2MObjects'
import { LwM2MJSONfromXML2js } from '../xml2js-to-plain/LwM2MJSONfromXML2js'
import { lwM2MDefinitionToJSONSchema } from './lwM2MDefinitionToJSONSchema'
const parser = new Parser({ attrkey: 'ATTR' })

const schemas = readdirSync(path.join(process.cwd(), 'lwm2m-registry'))
	.filter((f) => /^[\d]+\.xml$/.test(f))
	.filter(
		(f: string) =>
			ignoredLwM2MObjects.includes(f.split('.xml')[0] as string) === false,
	)

describe('lwM2MDefinitionToJSONSchema', () => {
	it.each(schemas)(
		'should convert the LwM2M object definitions in %s',
		async (lwm2mXMLSchemaFile) => {
			const sourceFile = path.join(
				process.cwd(),
				'lwm2m-registry',
				lwm2mXMLSchemaFile,
			)
			const xml = await readFile(sourceFile, 'utf-8')
			const xmlAsJSON = await parser.parseStringPromise(xml)
			const lwm2mDefinition = LwM2MJSONfromXML2js(xmlAsJSON)
			const jsonSchema = lwM2MDefinitionToJSONSchema(lwm2mDefinition)
			expect(jsonSchema).not.toBeUndefined()
		},
	)
})
