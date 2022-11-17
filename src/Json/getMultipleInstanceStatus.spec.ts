import { getMultipleInstanceStatus } from './getMultipleInstanceStatus'

describe('getMultipleInstanceStatus', () => {
	it('Should create a multiple instance type definition', () => {
		const instanceType = 'Multiple'
		const value = ''
		expect(getMultipleInstanceStatus(instanceType, value)).toStrictEqual(
			`Type.Array(${value})`,
		)
	})

	it('Should create a single instance type definition', () => {
		const instanceType = 'Single'
		const value = ''
		expect(getMultipleInstanceStatus(instanceType, value)).toStrictEqual(
			`${value}`,
		)
	})

	it('Should return error when instance type is different than allowed options', () => {
		const instanceType = 'somethingElse'
		const value = ''
		expect(() => getMultipleInstanceStatus(instanceType, value)).toThrow(
			`Instance type is not allowed`,
		)
	})
})
