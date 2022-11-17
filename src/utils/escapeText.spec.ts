import { escapeText } from './escapeText'
describe('escapeText', () => {
	it.each([
		[
			`"`,
			`Periodic voltage measurements that are "logged" into CBOR structure payload`,
			"Periodic voltage measurements that are 'logged' into CBOR structure payload",
		],
		[
			'’',
			'Array of channels which the access point has determined are ‘in use’.',
			"Array of channels which the access point has determined are 'in use'.",
		],
		[
			'\n',
			'Link to the target resource in CoRE Link Format [RFC6690](https://tools.ietf.org/html/rfc6690)\nNote taht the default for this entry is always the receiving object /4009/#/923. When Group communication is applied, the /#/ is determined by the group handling mechanisms and can be omitted.',
			'Link to the target resource in CoRE Link Format [RFC6690](https://tools.ietf.org/html/rfc6690) Note taht the default for this entry is always the receiving object /4009/#/923. When Group communication is applied, the /#/ is determined by the group handling mechanisms and can be omitted.',
		],
		[
			'\r',
			'Examples of Interval Period include:-\r30 = Every 30 seconds',
			'Examples of Interval Period include:- 30 = Every 30 seconds',
		],
		[
			'\t',
			'The Coverage Enhancement levels are defined and specified in 3GPP TS 36.331 and 36.213.\t0: No Coverage Enhancement in the serving cell',
			'The Coverage Enhancement levels are defined and specified in 3GPP TS 36.331 and 36.213. 0: No Coverage Enhancement in the serving cell',
		],
	])(
		'Should remove %s (forbiten characters) from string',
		(forbiten, text, expected) => {
			// characters are consider forbiten because those would cause an error if any is present on the object's description.
			expect(escapeText(text)).toBe(expected)
		},
	)
})
