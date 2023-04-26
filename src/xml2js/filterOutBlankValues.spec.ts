import { readFile } from 'fs/promises'
import path from 'node:path'
import { Parser } from 'xml2js'
import { filterOutBlankValues } from './filterOutBlankValues.js'

describe('filterOutBlankValues()', () => {
	it('should remove blank values from objects', () => {
		const filtered = filterOutBlankValues({ foo: 'bar', blank: '' })
		expect(filtered).not.toHaveProperty('blank')
		expect(filtered).toHaveProperty('foo')
		expect((filtered as Record<string, any>).foo).toEqual('bar')
	})
	it('should also work for objects with arrays', () => {
		const filtered = filterOutBlankValues({ foo: ['bar'], blank: [''] })
		expect(filtered).not.toHaveProperty('blank')
		expect(filtered).toHaveProperty('foo')
		expect((filtered as Record<string, any>).foo).toEqual(['bar'])
	})

	it('should remove arrays with blank strings', () => {
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
		expect(sanitized).toMatchObject(expected)
		expect(sanitized).not.toHaveProperty('RangeEnumeration')
	})

	it('should filter out values recursively', async () => {
		const parser = new Parser({ attrkey: 'ATTR' })
		const sourceFile = path.join(process.cwd(), 'lwm2m-registry', '3427.xml')
		const xml = await readFile(sourceFile, 'utf-8')
		const xmlAsJSON = await parser.parseStringPromise(xml)
		const filtered = filterOutBlankValues(xmlAsJSON)
		expect((filtered as any).LWM2M?.Object[0]).not.toHaveProperty(
			'Description2',
		)
		expect(
			(filtered as any).LWM2M?.Object[0].Resources[0].Item[0],
		).not.toHaveProperty('RangeEnumeration')
	})
})
