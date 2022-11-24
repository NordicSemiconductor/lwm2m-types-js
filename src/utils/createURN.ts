import { defaultLwM2MVersion, defaultObjectVersion } from './deconstructURN'

/**
 * Construct the URN including the LwM2M version in one string how will be used in the JSON document.
 *
 * The format is an extended version of the LwM2M URN: `<"oma"|"ext"|"x">:<ObjectID>:<ObjectVersion>@<LwM2MVersion>` (where `ObjectVersion` and/or `LwM2MVersion` can be omitted if it is `1.0` ).
 */
export const createURN = ({
	ObjectID,
	ObjectVersion,
	LwM2MVersion,
}: {
	ObjectID: string
	ObjectVersion: string
	LwM2MVersion: string
}): string =>
	`${ObjectID}${
		ObjectVersion !== defaultObjectVersion ? `:${ObjectVersion}` : ''
	}${LwM2MVersion !== defaultLwM2MVersion ? `@${LwM2MVersion}` : ''}`
