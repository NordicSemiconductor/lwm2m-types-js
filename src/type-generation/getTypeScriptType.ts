/**
 * Get the equivalent data type
 *
 * @see http://www.openmobilealliance.org/release/lightweightm2m/V1_0_2-20180209-A/OMA-TS-LightweightM2M-V1_0_2-20180209-A.pdf
 */
export const getTypeScriptType = (lwm2mType: string): string => {
	switch (lwm2mType) {
		case 'Integer':
		case 'Float':
		case 'Time':
		case 'Unsigned Integer':
			return 'number'
		case 'Boolean':
			return 'boolean'
		case 'String':
		case 'Opaque':
		case 'Objlnk':
		case 'Corelnk': // CoRE Link
			return 'string'
		default:
			throw new Error(`Unexpected LwM2M type: ${lwm2mType}!`)
	}
} // TODO: add test case and show examples of use cases
