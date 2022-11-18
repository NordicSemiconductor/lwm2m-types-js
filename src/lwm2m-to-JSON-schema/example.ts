import chalk from 'chalk'
import { readdir, readFile } from 'fs/promises'
import path from 'node:path'
import { Parser } from 'xml2js'
import { LwM2MJSONfromXML2js } from '../xml2js-to-plain/LwM2MJSONfromXML2js'
import { lwM2MDefinitionToJSONSchema } from './lwM2MDefinitionToJSONSchema'
const parser = new Parser({ attrkey: 'ATTR' })

try {
	for (const f of (await readdir(path.join(process.cwd(), 'lwm2m-registry')))
		.filter((f) => /^[\d]+\.xml$/.test(f))
		.filter((f) => !['0.xml'].includes(f))) {
		const sourceFile = path.join(process.cwd(), 'lwm2m-registry', f)
		const xml = await readFile(sourceFile, 'utf-8')
		const xmlAsJSON = await parser.parseStringPromise(xml)

		console.log(chalk.yellow(`Parsing ${sourceFile} ...`))

		const lwm2mDefinition = LwM2MJSONfromXML2js(xmlAsJSON)
		const typeBoxDef = lwM2MDefinitionToJSONSchema(lwm2mDefinition)
		console.log(JSON.stringify(typeBoxDef, null, 2))
	}
} catch (err) {
	console.error(chalk.red(err))
}
