import os from 'node:os'
import { TypeBoxFactory } from './TypeBoxFactory'

describe.skip('TypeBoxFactory()', () => {
	it('can be instantiated', () =>
		expect(new TypeBoxFactory()).toBeInstanceOf(TypeBoxFactory))
	test('that comments can be added', () => {
		const f = new TypeBoxFactory()
		f.addComment('foo')
		f.addComment('')
		f.addComment('bar')

		expect(f.freeze()).toMatchObject({
			comment: ['foo', '', 'bar'].join(os.EOL),
		})
	})
})
