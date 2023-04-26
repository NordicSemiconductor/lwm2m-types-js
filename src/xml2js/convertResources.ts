import type { Static } from '@sinclair/typebox'
import {
	Mandatory,
	MultipleInstances,
	Operations,
	type Resource,
	type Resources,
} from '../lwm2m/LwM2MObjectDefinition.js'
import { ObjectDef, toLwM2mType } from './LwM2MJSONfromXML2js.js'
import { addIfNotBlank } from './addIfNotBlank.js'
import { parseRangeEnumeration } from './parseRangeEnumeration.js'

export const convertResources = (
	resources: Static<typeof ObjectDef>['Resources'],
): Resources =>
	(resources[0] as Static<typeof ObjectDef>['Resources'][number]).Item.reduce(
		(resources: Resources, current) => {
			const resource: Resource = {
				Name: current.Name[0] as string,
				Operations: current.Operations[0] as unknown as Operations,
				Type: toLwM2mType(current.Type[0]),
				Description: current.Description[0] as string,
				MultipleInstances:
					current.MultipleInstances?.[0] === MultipleInstances.Multiple,
				Mandatory: current.Mandatory?.[0] === Mandatory.Mandatory,
			}

			const RangeEnumeration = current.RangeEnumeration?.[0]?.trim()
			if (RangeEnumeration !== undefined) {
				const parsedRangeEnumeration = parseRangeEnumeration(RangeEnumeration)
				if (parsedRangeEnumeration !== null) {
					resource.RangeEnumeration = parsedRangeEnumeration
				}
			}
			addIfNotBlank(resource, {
				Units: current.Units?.[0],
			})

			return {
				[current.ATTR.ID]: resource,
				...resources,
			}
		},
		{} as Resources,
	)
