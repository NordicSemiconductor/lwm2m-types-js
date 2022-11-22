import type { Static } from '@sinclair/typebox'
import { parseRangeEnumeration } from '../Json/parseRangeEnumeration'
import { Mandatory, MultipleInstances, Operations } from '../Json/parseResource'
import { addIfNotBlank } from './addIfNotBlank'
import {
	ObjectDef,
	Resource,
	Resources,
	toLwM2mType,
} from './LwM2MJSONfromXML2js'

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
					if ('enum' in parsedRangeEnumeration) {
						resource.RangeEnumeration = parsedRangeEnumeration.enum
					} else {
						resource.RangeEnumeration = parsedRangeEnumeration
					}
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
