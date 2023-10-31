import { mkdtemp, writeFile } from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { fromXML } from '../xml2js/definitionFromXML.js'
import { generateObjectType } from './generateObjectType.js'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('generateObjectType()', () => {
	void it('should export the objectURN', async () => {
		const objectDefinition = await fromXML(
			path.join(process.cwd(), 'lwm2m-registry', '6.xml'),
		)

		const source = generateObjectType(objectDefinition)

		const outDir = await mkdtemp(path.join(os.tmpdir(), path.sep))
		const outFile = path.join(outDir, `6.ts`)

		await writeFile(outFile, source, 'utf-8')

		const { objectURN } = await import(outFile)

		assert.equal(objectURN, '6')
	})
})
