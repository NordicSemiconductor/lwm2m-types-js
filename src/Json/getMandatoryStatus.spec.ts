import { getMandatoryStatus } from './getMandatoryStatus'

describe('getMandatoryStatus', () => {
	it('Should create a mandatory instance type definition', () => {
		const instanceType = 'Mandatory'
		const value = ''
		expect(getMandatoryStatus(instanceType, value)).toStrictEqual(`${value}`)
	})

	it('Should create an optional instance type definition', () => {
		const instanceType = 'Optional'
		const value = ''
		expect(getMandatoryStatus(instanceType, value)).toStrictEqual(
			`Type.Optional(${value})`,
		)
	})

	it('Should return error when instance type is different than allowed options', () => {
		const instanceType = 'somethingElse'
		const value = ''
		expect(() => getMandatoryStatus(instanceType, value)).toThrow(
			`Status specification is not allowed`,
		)
	})
})
