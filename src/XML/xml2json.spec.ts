import { execSync } from "child_process";
import { readFileSync } from "fs";

describe("xml2json", () => {
  it("should transform xml schema into json format and create a new file with the result of the transformation", () => {
    execSync(
      "npx tsx ./src/XML/xml2json.ts ./data-test/1.xml ./data-test/1.json"
    );
    const writtenSchema = readFileSync("./data-test/1.json", "utf-8");
    const expectedSchema = {
      LWM2M: {
        ATTR: {
          "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
          "xsi:noNamespaceSchemaLocation":
            "http://www.openmobilealliance.org/tech/profiles/LWM2M-v1_1.xsd",
        },
        Object: [
          {
            ATTR: { ObjectType: "MODefinition" },
            Name: ["LwM2M Server"],
            Description1: [
              "This LwM2M Objects provides the data related to a LwM2M Server. A Bootstrap-Server has no such an Object Instance associated to it.",
            ],
            ObjectID: ["1"],
            ObjectURN: ["urn:oma:lwm2m:oma:1:1.2"],
            LWM2MVersion: ["1.2"],
            ObjectVersion: ["1.2"],
            MultipleInstances: ["Multiple"],
            Mandatory: ["Mandatory"],
            Resources: [
              {
                Item: [
                  {
                    ATTR: { ID: "0" },
                    Name: ["Short Server ID"],
                    Operations: ["R"],
                    MultipleInstances: ["Single"],
                    Mandatory: ["Mandatory"],
                    Type: ["Integer"],
                    RangeEnumeration: ["1..65534"],
                    Units: [""],
                    Description: [
                      "Used as link to associate server Object Instance.",
                    ],
                  },
                ],
              },
            ],
            Description2: [""],
          },
        ],
      },
    };
    expect(JSON.parse(writtenSchema)).toEqual(expectedSchema);
  });
});
