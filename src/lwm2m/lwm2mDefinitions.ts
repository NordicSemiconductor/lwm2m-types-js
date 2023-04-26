import { getLwM2MObjectDefinitionFiles } from '../lwm2m/getLwM2MObjectDefinitionFiles.js'
import type { LwM2MObjectDefinition } from '../lwm2m/LwM2MObjectDefinition.js'
import { fromXML } from '../xml2js/definitionFromXML.js'

/**
 * Returns all LwM2M object definitions
 */
export const lwm2mDefinitions = async (): Promise<LwM2MObjectDefinition[]> =>
	(await Promise.all(getLwM2MObjectDefinitionFiles().map(fromXML))).sort(
		({ ObjectID: ID1 }, { ObjectID: ID2 }) =>
			parseInt(ID1, 10) - parseInt(ID2, 10),
	)
