import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { createLwm2mJsonSchemaDocument } from '../src/JSON-Schema/createLwm2mJsonSchemaDocument.js'

const document = await createLwm2mJsonSchemaDocument()

const outfile = path.join(process.cwd(), 'LwM2MDocument.schema.json')
console.log(`Writing`, outfile)
await writeFile(outfile, JSON.stringify(document), 'utf-8')
