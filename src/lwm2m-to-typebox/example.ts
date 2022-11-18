/* eslint-disable */
import { readFile } from 'fs/promises'
import path from 'node:path'
import { Parser } from 'xml2js'
import { LwM2MJSONfromXML2js } from '../xml2js-to-plain/LwM2MJSONfromXML2js'
import { TypeBoxFactory } from './TypeBoxFactory'

const parser = new Parser({ attrkey: 'ATTR' })
const sourceFile = path.join(process.cwd(), 'lwm2m-registry', '3427.xml')
const xml = await readFile(sourceFile, 'utf-8')
const xmlAsJSON = await parser.parseStringPromise(xml)
const lwm2mDefinition = LwM2MJSONfromXML2js(xmlAsJSON)

console.log(lwm2mDefinition)

export type TypeBoxPropertyDefinition = {}

type TypeBoxType = 'Number' | 'Boolean' | 'String' | 'Integer'

class TypeBoxPropertyFactory extends TypeBoxFactory {
	public readonly key: string
	constructor(key: string, type: TypeBoxType) {
		super()
		this.key = key
	}

	// Marks the property as required
	required() {
		return this
	}

	setTitle(title: string) {
		// FIXME: implement
	}

	// @ts-ignore
	override freeze(): TypeBoxPropertyDefinition {
		// FIXME: implement
		return {}
	}
}

const typeBoxDefFactory = new TypeBoxFactory()
typeBoxDefFactory
	.addComment(`${lwm2mDefinition.ObjectID}: ${lwm2mDefinition.Name}`)
	.addComment('')
	.addComment(`LWM2MVersion: ${lwm2mDefinition.LWM2MVersion}`)
	.addComment(`ObjectVersion: ${lwm2mDefinition.ObjectVersion}`)
	.addComment(`MultipleInstances: ${lwm2mDefinition.MultipleInstances}`)
	.addComment(`Mandatory: ${lwm2mDefinition.Mandatory}`)
	.addDescription(lwm2mDefinition.Description1)

for (const [ObjectID, resource] of Object.entries(lwm2mDefinition.Resources)) {
	const prop = new TypeBoxPropertyFactory(
		ObjectID,
		// @ts-ignore
		getTypeBoxType(resource.Type),
	)
	prop.addDescription(resource.Description)

	if (resource.Mandatory) {
		prop.required()
	}
	prop.setTitle(resource.Name)
	prop.addDescription(resource.Description)

	typeBoxDefFactory.addProperty(prop)
}

// @ts-ignore
const typeBoxDef = typeBoxDefFactory.freeze()

// Next: TypeBoxWriter.write(typeBoxDef, '3427.ts')

//console.log(Pressuremonitoringsensor_3427.toString())
