import os from 'node:os'
import type { LwM2MObjectDefinition } from '../lwm2m/LwM2MObjectDefinition'
import { createLwM2MObjectType } from './createLwM2MObjectType'
import { createObjectURN } from './createObjectURN'
import { printNode } from './printNode'

export const generateObjectType = (
	objectDefinition: LwM2MObjectDefinition,
): string =>
	[
		...createLwM2MObjectType(objectDefinition),
		createObjectURN(objectDefinition),
	]
		.map(printNode)
		.join(os.EOL)
