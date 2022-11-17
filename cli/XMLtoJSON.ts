import { readdirSync } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import path from 'node:path'
import { Parser } from 'xml2js'
const parser = new Parser({ attrkey: 'ATTR' })

const inputDir = process.argv[process.argv.length - 2] ?? ''
const outDir = process.argv[process.argv.length - 1] ?? ''

const xmlFiles = readdirSync(inputDir).filter((f) => f.endsWith('.xml'))

for (const file of xmlFiles.map((file) => path.join(inputDir, file))) {
	const sourceFile = path.join(process.cwd(), file)
	const xml = await readFile(sourceFile, 'utf-8')
	const convertedSchema = await parser.parseStringPromise(xml)
	const outFile = path.join(
		process.cwd(),
		outDir,
		`${path.parse(sourceFile).name}.json`,
	)
	console.log(sourceFile, '->', outFile)
	await writeFile(outFile, JSON.stringify(convertedSchema), 'utf-8')
}
