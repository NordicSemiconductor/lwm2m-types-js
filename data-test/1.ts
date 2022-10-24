import { Type } from "@sinclair/typebox";
export const _1 = Type.Object(
  {
    Name: Type.String({ example: "LwM2M Server" }),
    ObjectURN: Type.String({ example: "urn:oma:lwm2m:oma:1:1.2" }),
    LWM2MVersion: Type.Number({ example: 1.2 }),
    ObjectVersion: Type.Number({ example: 1.2 }),
    Resources: Type.Object({
      _0: Type.Number({
        name: "Short Server ID",
        description: "Used as link to associate server Object Instance.",
        minimum: 1,
        maximum: 65534,
      }),
    }),
  },
  {
    description:
      "This LwM2M Objects provides the data related to a LwM2M Server. A Bootstrap-Server has no such an Object Instance associated to it.",
  }
);
