import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { createLwm2mJsonSchemaDocument } from 'src/JSON-Schema'

const document = await createLwm2mJsonSchemaDocument()

await writeFile(
	path.join(process.cwd(), 'LwM2MDocument.schema.json'),
	JSON.stringify(document),
	'utf-8',
)
