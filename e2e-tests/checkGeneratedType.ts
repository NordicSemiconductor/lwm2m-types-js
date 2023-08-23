import type { Device_3 } from './types/3.js'

/**
 * Check if created type is valid given a known valid object
 */
const device: Device_3 = {
	'0': 'Nordic Semiconductor ASA',
	'1': 'Thingy:91',
	'2': '351358815340515',
	'3': '22.8.1+0',
	'7': [2754],
	'11': [0],
	'13': 1675874731,
	'16': 'UQ',
	'19': '3.2.1',
}
console.log(device)

// File should compile using npx tsx
