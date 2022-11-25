import { toSafeString } from './json-schema-to-typescript-strings'

describe('json-schema-to-typescript-strings', () => {
	it.each([
		['rachLatency_delay_3365', 'RachLatencyDelay_3365'],
		['Single_phaseelectricalmeter_3421', 'SinglePhaseelectricalmeter_3421'],
		['Multi_stateSelector_3348', 'MultiStateSelector_3348'],
		['nuSIM_508', 'NuSIM_508'],
		['macTimerStatusEvent_3368', 'MacTimerStatusEvent_3368'],
		['radioLinkMonitoring_3374', 'RadioLinkMonitoring_3374'],
		['VolteCallEvent_3381', 'VolteCallEvent_3381'],
	])(
		'should transform string in the way the library json-schema-to-typescript is transforming strings',
		(value, expected) => {
			expect(toSafeString(value)).toBe(expected)
		},
	)
})
