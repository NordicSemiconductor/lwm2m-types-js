export const defaultObjectVersion = '1.0'
export const defaultLWM2MVersion = '1.0'

/**
 * Construct the URN including the LwM2M version in one string how will be used in the JSON document.
 *
 * The format is an extended version of the LwM2M URN: `<"oma"|"ext"|"x">:<ObjectID>:<ObjectVersion>@<LWM2MVersion>` (where `ObjectVersion` and/or `LWM2MVersion` can be omitted if it is `1.0` ).
 */
export const createURN = ({
	ObjectID,
	ObjectVersion,
	LWM2MVersion,
}: {
	ObjectID: number
	ObjectVersion: string
	LWM2MVersion: string
}): string =>
	`${ObjectID}${
		ObjectVersion !== defaultObjectVersion ? `:${ObjectVersion}` : ''
	}${LWM2MVersion !== defaultLWM2MVersion ? `@${LWM2MVersion}` : ''}`
