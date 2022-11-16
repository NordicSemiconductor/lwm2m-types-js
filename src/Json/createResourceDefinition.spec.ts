import {
  createResourceDefinition,
  createLiteralDefinition,
  createEnumDefinition,
} from "./createResourceDefinition";
import { Mandatory, MultipleInstances } from "./parseResource";

describe("createResourceDefinition", () => {
  it("Should return a typebox definition in string", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = Mandatory.Mandatory;
    const multipleInstances = MultipleInstances.Single;
    const rangeEnumeration = "";
    const id = "16";
    const typeboxDefinition = createResourceDefinition({
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
    });
    const result = `_16: Type.Number(${JSON.stringify({
      title: "Communication Retry Count",
      description:
        "The number of successive communication attempts before which a communication sequence is considered as failed.",
    })})`;

    expect(typeboxDefinition).toContain(`"title":"${name}"`);
    expect(typeboxDefinition).toContain(`"description":"${description}"`);
    expect(typeboxDefinition).toBe(result);
  });

  it("Should return a typebox definition in string specifying minimum and maximum value", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = Mandatory.Mandatory;
    const multipleInstances = MultipleInstances.Single;
    const rangeEnumeration = "1..65534";
    const minimum = 1;
    const maximum = 65534;
    const id = "16";
    const typeboxDefinition = createResourceDefinition({
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
    });

    const result = `_16: Type.Number(${JSON.stringify({
      title: "Communication Retry Count",
      description:
        "The number of successive communication attempts before which a communication sequence is considered as failed.",
      minimum: 1,
      maximum: 65534,
    })})`;

    expect(typeboxDefinition).toContain(`"minimum":${minimum}`);
    expect(typeboxDefinition).toContain(`"maximum":${maximum}`);
    expect(typeboxDefinition).toBe(result);
  });

  it("Should return a typebox definition in string specifying optional value", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = Mandatory.Optional;
    const multipleInstances = MultipleInstances.Single;
    const rangeEnumeration = "";
    const id = "16";
    const typeboxDefinition = createResourceDefinition({
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
    });
    const result = `_16: Type.Optional(Type.Number(${JSON.stringify({
      title: "Communication Retry Count",
      description:
        "The number of successive communication attempts before which a communication sequence is considered as failed.",
    })}))`;

    expect(typeboxDefinition).toBe(result);
  });

  it("Should return a typebox definition in string specifying mandatory value", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = Mandatory.Mandatory;
    const multipleInstances = MultipleInstances.Single;
    const rangeEnumeration = "";
    const id = "16";
    const typeboxDefinition = createResourceDefinition({
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
    });
    const result = `_16: Type.Number(${JSON.stringify({
      title: "Communication Retry Count",
      description:
        "The number of successive communication attempts before which a communication sequence is considered as failed.",
    })})`;

    expect(typeboxDefinition).toBe(result);
  });

  it("Should return a typebox definition in string specifying it is a multiple instance", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = Mandatory.Mandatory;
    const multipleInstances = MultipleInstances.Multiple;
    const rangeEnumeration = "";
    const id = "16";
    const typeboxDefinition = createResourceDefinition({
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
    });
    const result = `_16: Type.Array(Type.Number(${JSON.stringify({
      title: "Communication Retry Count",
      description:
        "The number of successive communication attempts before which a communication sequence is considered as failed.",
    })}))`;

    expect(typeboxDefinition).toBe(result);
  });

  it("Should return a typebox definition in string specifying it is a single instance", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = Mandatory.Mandatory;
    const multipleInstances = MultipleInstances.Single;
    const rangeEnumeration = "";
    const id = "16";
    const typeboxDefinition = createResourceDefinition({
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
    });
    const result = `_16: Type.Number(${JSON.stringify({
      title: "Communication Retry Count",
      description:
        "The number of successive communication attempts before which a communication sequence is considered as failed.",
    })})`;

    expect(typeboxDefinition).toBe(result);
  });

  it("Should check typebox definition when rangeEnumeration format is a range", () => {
    const name = "name";
    const type = "Integer";
    const description = "Description.";
    const mandatoryStatus = Mandatory.Mandatory;
    const multipleInstances = MultipleInstances.Single;
    const rangeEnumeration = "0..255";
    const id = "16";
    const typeboxDefinition = createResourceDefinition({
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
    });
    const result = `_16: Type.Number(${JSON.stringify({
      title: "name",
      description: "Description.",
      minimum: 0,
      maximum: 255,
    })})`;

    expect(typeboxDefinition).toBe(result);
  });

  it("Should check typebox definition when rangeEnumeration format is a single instance", () => {
    const name = "name";
    const type = "Integer";
    const description = "Description.";
    const mandatoryStatus = Mandatory.Mandatory;
    const multipleInstances = MultipleInstances.Single;
    const rangeEnumeration = "0";
    const id = "16";
    const typeboxDefinition = createResourceDefinition({
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
    });
    const result = `_16: Type.Literal(0 ,${JSON.stringify({
      title: "name",
      description: "Description.",
    })})`;

    expect(typeboxDefinition).toBe(result);
  });

  it("Should check typebox definition when rangeEnumeration format is a list", () => {
    const name = "name";
    const type = "Integer";
    const description = "Description.";
    const mandatoryStatus = Mandatory.Mandatory;
    const multipleInstances = MultipleInstances.Single;
    const rangeEnumeration = "0, 1, 2";
    const id = "16";
    const typeboxDefinition = createResourceDefinition({
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
    });
    const result = `_16: Type.Union([Type.Literal(0 ),Type.Literal(1 ),Type.Literal(2 )],${JSON.stringify(
      { title: "name", description: "Description." }
    )})`;

    expect(typeboxDefinition).toBe(result);
  });

  it.each([
    [
      "0..255 bytes",
      `_16: Type.Number(${JSON.stringify({
        title: "name",
        description:
          "Description. RangeEnumeration is not following the defined standard by openmobilealliance.org and for that reason value is not contemplate in the type definition. Original RangeEnumeration value: '0..255 bytes'.",
      })})`,
    ],
    [
      "1: normal\r\n\t\t\t\t2: remote\r\n\t\t\t\t3: local",
      `_16: Type.Number(${JSON.stringify({
        title: "name",
        description:
          "Description. RangeEnumeration is not following the defined standard by openmobilealliance.org and for that reason value is not contemplate in the type definition. Original RangeEnumeration value: '1: normal      2: remote      3: local'.",
      })})`,
    ],
    [
      "<7 to >12.5",
      `_16: Type.Number(${JSON.stringify({
        title: "name",
        description:
          "Description. RangeEnumeration is not following the defined standard by openmobilealliance.org and for that reason value is not contemplate in the type definition. Original RangeEnumeration value: '<7 to >12.5'.",
      })})`,
    ],
  ])(
    "Should check typebox definition when rangeEnumeration format is invalid",
    (rangeEnumeration, expected) => {
      const name = "name";
      const type = "Integer";
      const description = "Description.";
      const mandatoryStatus = Mandatory.Mandatory;
      const multipleInstances = MultipleInstances.Single;
      const id = "16";
      const typeboxDefinition = createResourceDefinition({
        name,
        type,
        description,
        mandatoryStatus,
        multipleInstances,
        rangeEnumeration,
        id,
      });

      expect(typeboxDefinition).toBe(expected);
    }
  );
});

describe("createLiteralDefinition", () => {
  it.each([
    [
      { isString: true, isUnion: false, value: "a", props: {} },
      `Type.Literal('a' ,{})`,
    ],
    [
      { isString: false, isUnion: false, value: 1, props: {} },
      `Type.Literal(1 ,{})`,
    ],
  ])("Should create a 'Literal' typebox definition", (params, expected) => {
    expect(
      createLiteralDefinition(
        params.isString,
        params.isUnion,
        params.value,
        params.props
      )
    ).toBe(expected);
  });
});

describe("createEnumDefinition", () => {
  it.each([
    [{ value: "a", props: {} }, `Type.Literal('a' ,{})`],
    [{ value: 1, props: {} }, `Type.Literal(1 ,{})`],
    [
      { value: [1, 2, 3], props: {} },
      `Type.Union([Type.Literal(1 ),Type.Literal(2 ),Type.Literal(3 )],{})`,
    ],
    [
      { value: ["a", "b", "c"], props: {} },
      `Type.Union([Type.Literal('a' ),Type.Literal('b' ),Type.Literal('c' )],{})`,
    ],
  ])("Should create a 'Enum' typebox definition", (params, expected) => {
    expect(createEnumDefinition(params.value, params.props)).toBe(expected);
  });
});
