import { parseResource } from "./parseResource";

describe("parseResource", () => {
  it.each([
    [
      {
        rangeEnumeration: ["1..65534"],
        mandatory: ["Mandatory"],
        multipleInstances: ["Multiple"],
        type: ["Integer"],
        units: ["s"],
      },
      {
        rangeEnumeration: "1..65534",
        mandatoryStatus: "Mandatory",
        multipleInstances: "Multiple",
        type: "Integer",
        units: "s",
      },
    ],
    [
      {
        rangeEnumeration: ["1,655,34"],
        mandatory: ["Optional"],
        multipleInstances: ["Single"],
        type: ["String"],
        units: [""],
      },
      {
        rangeEnumeration: "1,655,34",
        mandatoryStatus: "Optional",
        multipleInstances: "Single",
        type: "String",
        units: undefined,
      },
    ],
    [
      {
        rangeEnumeration: [""],
        mandatory: ["Optional"],
        multipleInstances: ["Multiple"],
        type: ["String"],
        units: [""],
      },
      {
        rangeEnumeration: undefined,
        mandatoryStatus: "Optional",
        multipleInstances: "Multiple",
        type: "String",
        units: undefined,
      },
    ],
  ])("should parse %j into %j", (value, expected) => {
    const items = [
      {
        ATTR: { ID: "0" },
        Name: ["Short Server ID"],
        Operations: ["R"],
        MultipleInstances: value.multipleInstances,
        Mandatory: value.mandatory,
        Type: value.type,
        RangeEnumeration: value.rangeEnumeration,
        Units: value.units,
        Description: ["Used as link to associate server Object Instance."],
      },
    ];
    expect(parseResource(items[0])).toStrictEqual({
      name: "Short Server ID",
      type: expected.type,
      description: "Used as link to associate server Object Instance.",
      mandatoryStatus: expected.mandatoryStatus,
      multipleInstances: expected.multipleInstances,
      rangeEnumeration: expected.rangeEnumeration,
      id: "0",
      units: expected.units,
    });
  });
});
