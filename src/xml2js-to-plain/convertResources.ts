import { Static } from '@sinclair/typebox'
import { Operations } from 'src/Json/parseResource'
import { addIfNotBlank } from './addIfNotBlank'
import { ObjectDef, Resource, Resources } from './LwM2MJSONfromXML2js'

export const convertResources = (
	resources: Static<typeof ObjectDef>['Resources'],
): Static<typeof Resources> =>
	(resources[0] as Static<typeof ObjectDef>['Resources'][number]).Item.reduce(
		(resources: Static<typeof Resources>, current) => {
			const resource = {
				Name: current.Name[0] as string,
				Operations: current.Operations[0] as unknown as Operations,
				Type: current.Type[0] as string,
				Description: current.Description[0] as string,
			} as unknown as Static<typeof Resource>

			addIfNotBlank(resource, {
				MultipleInstances: current.MultipleInstances?.[0],
			})
			addIfNotBlank(resource, {
				Mandatory: current.Mandatory?.[0],
			})
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
		{} as Static<typeof Resources>,
	)
