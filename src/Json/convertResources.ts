import { Static } from '@sinclair/typebox'
import { addIfNotBlank } from './addIfNotBlank'
import { ObjectDef, Resources } from './LwM2MJSONfromXML2js'

export const convertResources = (
	resources: Static<typeof ObjectDef>['Resources'],
): Static<typeof Resources> =>
	resources[0]?.Item.reduce((accumulator: any, current: any) => {
		accumulator[current.ATTR.ID] = {
			Name: current.Name[0],
			Operations: current.Operations[0],
			MultipleInstances: current.MultipleInstances[0],
			Mandatory: current.Mandatory[0],
			Type: current.Type[0],
			RangeEnumeration: current.RangeEnumeration[0],
			Description: current.Description[0],
		}
		addIfNotBlank(accumulator[current.ATTR.ID], {
			Units: current.Units[0],
		})
		return accumulator
	}, {})
