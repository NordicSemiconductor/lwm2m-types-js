import {
	getRangeEnumeration,
	isInvalidFormat,
	isListEnum,
	isRangeFormat,
	isSingleEnum,
} from './getRangeEnumeration'

describe('isInvalidFormat', () => {
	it.each([
		['0..255 bytes', true],
		['1..64 Bytes', true],
		['0..255 Gigabyte', true],
		['no valid case', true],
		['\r\n    0..255 bytes    \r\n ', true],
		['AVAILABLE; UNAVAILABLE', true],
		['0; 3.8..20.5', true],
		['<7 to >12.5', true],
		['2 Instances', true],
		['1: normal\r\n\t\t\t\t2: remote\r\n\t\t\t\t3: local', true],
	])('Should check invalid format: %p', (value, expected) =>
		expect(isInvalidFormat(value)).toStrictEqual(expected),
	)

	it.each([
		['', false],
		['\r\n        ', false],
		['\r\n        \r\n ', false],
		['ValidCase', false],
		['\r\n    0..255    \r\n ', false],
		['\r\n    1,2,3    \r\n ', false],
		['\r\n    1    \r\n ', false],
		['0', false],
		['value', false],
		['0..125', false],
		['1..256', false],
		['16,32,48', false],
		['0..2^28-1', false],
		['8-Bits', false],
	])('Should check valid format: %p', (value, expected) =>
		expect(isInvalidFormat(value)).toStrictEqual(expected),
	)
})

describe('isRangeFormat', () => {
	it.each([
		['..', false],
		['1..', false],
		['..2', false],
		['0..2', true],
		['-10..-2', true],
		['0..2..10', false],
		['1', false],
		['1,2,3,4', false],
	])('Should check if range format is followed: %p -> %p', (value, expected) =>
		expect(isRangeFormat(value)).toStrictEqual(expected),
	)
})

describe('isSingleEnum', () => {
	it.each([
		['1', true],
		['1     ', true],
		['\n1', true],
		['\n\t1', true],
		['\n\t1\n\t', true],
		['1,2,3,4', false],
		['0..2', false],
		['-10..-2', false],
	])(
		'Should check if single enum format is followed: %p -> %p',
		(value, expected) => expect(isSingleEnum(value)).toStrictEqual(expected),
	)
})

describe('isListEnum', () => {
	it.each([
		['1,2,3,4', true],
		['-1,2,-3,4', true],
		['1.2.3.4', false],
		['0..2', false],
		['1', false],
	])(
		'Should check if list enum format is followed: %p -> %p',
		(value, expected) => expect(isListEnum(value)).toStrictEqual(expected),
	)
})

describe('getRangeEnumeration', () => {
	it.each([
		['', { invalidFormat: false, value: null }],
		['\r\n        ', { invalidFormat: false, value: null }],
		['\r\n        \r\n ', { invalidFormat: false, value: null }],
		[
			'\r\n    0..255 bytes    \r\n ',
			{ invalidFormat: true, value: '\r\n    0..255 bytes    \r\n ' },
		],
		[
			'\r\n    0..255    \r\n ',
			{ invalidFormat: false, value: [0, 255], dataStruct: 'range' },
		],
		[
			'\r\n    1,2,3    \r\n ',
			{ invalidFormat: false, value: [1, 2, 3], dataStruct: 'enum' },
		],
		[
			'\r\n    1    \r\n ',
			{ invalidFormat: false, value: 1, dataStruct: 'enum' },
		],
		['0', { invalidFormat: false, value: 0, dataStruct: 'enum' }],
		['value', { invalidFormat: false, value: 'value', dataStruct: 'enum' }],
		['0..125', { invalidFormat: false, value: [0, 125], dataStruct: 'range' }],
		['1..256', { invalidFormat: false, value: [1, 256], dataStruct: 'range' }],
		[
			'16,32,48',
			{ invalidFormat: false, value: [16, 32, 48], dataStruct: 'enum' },
		],
		['0..255 bytes', { invalidFormat: true, value: '0..255 bytes' }],
		['1..64 Bytes', { invalidFormat: true, value: '1..64 Bytes' }],
		['0..255 Gigabyte', { invalidFormat: true, value: '0..255 Gigabyte' }],
		['0..2^28-1', { invalidFormat: true, value: '0..2^28-1' }],
		['no valid case', { invalidFormat: true, value: 'no valid case' }],
		['8-Bits', { invalidFormat: false, value: '8-Bits', dataStruct: 'enum' }],
	])('Should return range enumeration object: %p -> %p', (value, expected) =>
		expect(getRangeEnumeration(value)).toStrictEqual(expected),
	)
})
