import { readFile } from 'fs/promises'
import path from 'node:path'
import { Parser } from 'xml2js'
import {
	LwM2MType,
	Operations,
	type LwM2MObjectDefinition,
} from '../lwm2m/LwM2MObjectDefinition.js'
import { LwM2MJSONfromXML2js } from './LwM2MJSONfromXML2js.js'
import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

const parser = new Parser({ attrkey: 'ATTR' })

void describe('LwM2MJSONfromXML2js()', () => {
	void it('should turn LwM2M definitions parsed using xml2js into plain LwM2M object definitions', async () => {
		const sourceFile = path.join(process.cwd(), 'lwm2m-registry', '2.xml')
		const xml = await readFile(sourceFile, 'utf-8')
		const value = await parser.parseStringPromise(xml)

		const expected: LwM2MObjectDefinition = {
			Name: 'LwM2M Access Control',
			Description1:
				'Access Control Object is used to check whether the LwM2M Server has access right for performing an operation.',
			ObjectID: '2',
			ObjectURN: 'urn:oma:lwm2m:oma:2:1.1',
			LWM2MVersion: '1.0',
			ObjectVersion: '1.1',
			MultipleInstances: true,
			Mandatory: false,
			Resources: {
				'0': {
					Name: 'Object ID',
					Operations: Operations.Read,
					MultipleInstances: false,
					Mandatory: true,
					Type: LwM2MType.Integer,
					RangeEnumeration: { min: 1, max: 65534 },
					Description:
						'Resources 0 and 1 point to the Object Instance for which the Instances of the ACL Resource of that Access Control Object Instance are applicable.',
				},
				'2': {
					Name: 'ACL',
					Operations: Operations.ReadWrite,
					MultipleInstances: true,
					Mandatory: false,
					Type: LwM2MType.Integer,
					RangeEnumeration: { min: 0, max: 31 },
					Description:
						'The Resource Instance ID MUST be the Short Server ID of a certain LwM2M Server for which associated access rights are contained in the Resource Instance value.\r\nThe Resource Instance ID 0 is a specific ID, determining the ACL Instance which contains the default access rights.\r\nEach bit set in the Resource Instance value, grants an access right to the LwM2M Server to the corresponding operation.\r\nThe bit order is specified as below.\r\n1st LSB: R(Read, Observe, Write-Attributes)\r\n2nd LSB: W(Write)\r\n3rd LSB: E(Execute)\r\n4th LSB: D(Delete)\r\n5th LSB: C(Create)\r\nOther bits are reserved for future use.',
				},
			},
		}

		const result = LwM2MJSONfromXML2js(value)

		assert.deepEqual(
			{
				...result,
				Resources: {
					'0': result.Resources[0],
					'2': result.Resources[2],
				},
			},
			expected,
		)
		assert.equal('Description2' in result, false)
		assert.equal('Units' in (result.Resources[0] ?? {}), false)
	})

	void it("Should check 'invalid' input value", () => {
		assert.throws(() => LwM2MJSONfromXML2js({}))
	})
})
