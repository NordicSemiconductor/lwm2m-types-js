import { execSync } from "child_process";
import { readFileSync } from "fs";

describe("json2typebox-cli", () => {
  it("should transform json object into typebox definition format and create a new file with the result of the transformation", () => {
    execSync(
      "npx tsx ./json2typebox-cli.ts ./data-test/1.json ./data-test/1.ts"
    );
    const writtenSchema = readFileSync("./data-test/1.ts", "utf-8");
    // FIXME: { additionalProperties: false }, removed temporaly
    const expectedSchema = `import { Type } from '@sinclair/typebox'
 export const _1 = Type.Object({Name: Type.String({example:"LwM2M Server"}),ObjectURN: Type.String({example:"urn:oma:lwm2m:oma:1:1.2"}),LWM2MVersion: Type.Number({example:1.2}),ObjectVersion: Type.Number({example:1.2}), Resources: Type.Object({_0: Type.Number({name: 'Short Server ID', description: "Used as link to associate server Object Instance.", minimum: 1, maximum: 65534})})},{description: "This LwM2M Objects provides the data related to a LwM2M Server. A Bootstrap-Server has no such an Object Instance associated to it."})`;
    expect(writtenSchema).toEqual(expectedSchema);
  });
});
