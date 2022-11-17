import { Type } from '@sinclair/typebox'
export const _1 = Type.Object(
	{
		Name: Type.String({ examples: ['LwM2M Server'] }),
		ObjectURN: Type.String({ examples: ['urn:oma:lwm2m:oma:1:1.2'] }),
		LWM2MVersion: Type.Number({ examples: [1.2] }),
		ObjectVersion: Type.Number({ examples: [1.2] }),
		Resources: Type.Object({
			Short_Server_ID: Type.Number({
				$id: '0',
				title: 'Short Server ID',
				description: 'Used as link to associate server Object Instance.',
				minimum: 1,
				maximum: 65534,
			}),
		}),
	},
	{
		description:
			'This LwM2M Objects provides the data related to a LwM2M Server. A Bootstrap-Server has no such an Object Instance associated to it.',
	},
)
