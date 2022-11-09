import { getResourcesDefinition } from "./getResourcesDefinition";

describe("getResourcesDefinition", () => {
  it("Should construct a typebox definition of the item", async () => {
    const typeboxDefinition = jest.fn();
    const items = [
      {
        ATTR: { ID: "0" },
        Name: ["Short Server ID"],
        Operations: ["R"],
        MultipleInstances: ["Single"],
        Mandatory: ["Mandatory"],
        Type: ["Integer"],
        RangeEnumeration: ["1..65534"],
        Units: [""],
        Description: ["Used as link to associate server Object Instance."],
      },
    ];
    const result = `_0: Type.Number({title: 'Short Server ID', description: \"Used as link to associate server Object Instance.\", minimum: 1, maximum: 65534})`;
    expect(getResourcesDefinition(items)).toBe(result);
  });
});
