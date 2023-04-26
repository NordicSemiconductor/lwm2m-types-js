import os from 'node:os'
import type { LwM2MObjectDefinition } from '../lwm2m/LwM2MObjectDefinition.js'
import { createLwM2MObjectType } from './createLwM2MObjectType.js'
import { createObjectURN } from './createObjectURN.js'
import { printNode } from './printNode.js'

export const generateObjectType = (
	objectDefinition: LwM2MObjectDefinition,
): string =>
	[
		...createLwM2MObjectType(objectDefinition),
		createObjectURN(objectDefinition),
	]
		.map(printNode)
		.join(os.EOL)
