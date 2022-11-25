import { capitalize } from './capitalize'

describe('capitalize', () => {
	it.each([
		['nuSIM_508', 'NuSIM_508'],
		['macTimerStatusEvent_3368', 'MacTimerStatusEvent_3368'],
		['radioLinkMonitoring_3374', 'RadioLinkMonitoring_3374'],
		['VolteCallEvent_3381', 'VolteCallEvent_3381'],
	])('should capitalize first chart of string: %s -> %s', (value, expected) =>
		expect(capitalize(value)).toBe(expected),
	)
})
