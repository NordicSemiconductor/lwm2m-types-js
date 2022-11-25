import { snakeToCammel } from './snakeToCammel'

describe('snakeToCammel', () => {
	it.each([
		['rachLatency_delay_3365', 'RachLatencyDelay_3365'],
		['Single_phaseelectricalmeter_3421', 'SinglePhaseelectricalmeter_3421'],
		['Multi_stateSelector_3348', 'MultiStateSelector_3348'],
		['VolteCallEvent_3381', 'VolteCallEvent_3381'],
	])(
		'should remove snake case format and apply cammel case instead: %s -> %s',
		(value, expected) => {
			expect(snakeToCammel(value)).toBe(expected)
		},
	)
})
