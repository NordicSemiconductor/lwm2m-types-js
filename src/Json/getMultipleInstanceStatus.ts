/**
 * Define if the typebox definition is an array instance or an object instance
 * following the allowed options specified in http://openmobilealliance.org/tech/profiles/LWM2M-v1_1.xsd
 */
export const getMultipleInstanceStatus = (
	instanceType: string,
	value: string,
): string => {
	if (instanceType !== 'Multiple' && instanceType !== 'Single')
		throw new Error('Instance type is not allowed')

	const isMultipleInstance = instanceType === 'Multiple'
	return isMultipleInstance ? `Type.Array(${value})` : `${value}`
}
