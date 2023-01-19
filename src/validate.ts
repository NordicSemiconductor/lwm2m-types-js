import LwM2MDocumentSchema from '../LwM2MDocument.schema.json' assert { type: 'json' }
import type { LwM2MDocument } from '../types/LwM2MDocument'
import { validateWithJSONSchema } from './validateWithJsonSchema.js'

/**
 * Validate a JSON document against the LwM2M Document Schema
 */
export const validate =
	validateWithJSONSchema<LwM2MDocument>(LwM2MDocumentSchema)
