import { Static } from '@sinclair/typebox'
import { Mandatory, MultipleInstances, Operations } from '../Json/parseResource'
import { addIfNotBlank } from './addIfNotBlank'
import { ObjectDef, Resource, Resources } from './LwM2MJSONfromXML2js'

export const convertResources = (
	resources: Static<typeof ObjectDef>['Resources'],
): Resources =>
	(resources[0] as Static<typeof ObjectDef>['Resources'][number]).Item.reduce(
		(resources: Resources, current) => {
			const resource: Resource = {
				Name: current.Name[0] as string,
				Operations: current.Operations[0] as unknown as Operations,
				Type: current.Type[0] as string,
				Description: current.Description[0] as string,
				MultipleInstances:
					current.MultipleInstances?.[0] === MultipleInstances.Multiple,
				Mandatory: current.Mandatory?.[0] === Mandatory.Mandatory,
			}

			addIfNotBlank(resource, {
				RangeEnumeration: current.RangeEnumeration?.[0],
			})
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
