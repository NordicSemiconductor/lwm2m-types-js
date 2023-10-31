import { readFile } from 'fs/promises'
import path from 'node:path'
import { Parser } from 'xml2js'
import { filterOutBlankValues } from './filterOutBlankValues.js'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

void describe('filterOutBlankValues()', () => {
	void it('should remove blank values from objects', () => {
		const filtered = filterOutBlankValues({ foo: 'bar', blank: '' })
		assert.equal('blank' in filtered, false)
		assert.equal('foo' in filtered, true)
		assert.equal(filtered.foo, 'bar')
	})
	void it('should also work for objects with arrays', () => {
		const filtered = filterOutBlankValues({ foo: ['bar'], blank: [''] })
		assert.equal('blank' in filtered, false)
		assert.equal('foo' in filtered, true)
		assert.deepEqual(filtered.foo, ['bar'])
	})

	void it('should remove arrays with blank strings', () => {
		const input = {
			ATTR: { ID: '0' },
			Name: ['Short Server ID'],
			RangeEnumeration: [''],
		}
		const expected = {
			ATTR: { ID: '0' },
			Name: ['Short Server ID'],
		}
		const sanitized = filterOutBlankValues(input)
		assert.deepEqual(sanitized, expected)
		assert.equal('RangeEnumeration' in sanitized, false)
	})

	void it('should filter out values recursively', async () => {
		const parser = new Parser({ attrkey: 'ATTR' })
		const sourceFile = path.join(process.cwd(), 'lwm2m-registry', '3427.xml')
		const xml = await readFile(sourceFile, 'utf-8')
		const xmlAsJSON = await parser.parseStringPromise(xml)
		const filtered = filterOutBlankValues(xmlAsJSON as Record<string, any>)
		assert.equal(
			'Description2' in (filtered.LWM2M.Object[0] as Record<string, any>),
			false,
		)
		assert.equal(
			'RangeEnumeration' in
				(filtered.LWM2M?.Object[0].Resources[0].Item[0] as Record<string, any>),
			false,
		)
	})
})
