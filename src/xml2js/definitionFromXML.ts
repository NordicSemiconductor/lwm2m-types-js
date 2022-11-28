import { readFile } from 'fs/promises'
import { Parser } from 'xml2js'
import type { LwM2MObjectDefinition } from '../lwm2m/LwM2MObjectDefinition'
import { LwM2MJSONfromXML2js } from './LwM2MJSONfromXML2js'

const parser = new Parser({ attrkey: 'ATTR' })
const xmlFileToJSON = async (source: string) => {
	const xmlSource = await readFile(source, 'utf-8')
	return parser.parseStringPromise(xmlSource)
}
export const fromXML = async (
	xmlFile: string,
): Promise<LwM2MObjectDefinition> =>
	LwM2MJSONfromXML2js(await xmlFileToJSON(xmlFile))
