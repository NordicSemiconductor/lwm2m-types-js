import { createResourceDefinition } from "./createResourceDefinition";

describe("createResourceDefinition", () => {
  it("Should return a typebox definition in string", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = "Mandatory";
    const multipleInstances = "Single";
    const rangeEnumeration = null;
    const id = "16";
    const units = "";
    const typeboxDefinition = createResourceDefinition(
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
      units
    );
    const result = `_16: Type.Number({title: 'Communication Retry Count', description: \"The number of successive communication attempts before which a communication sequence is considered as failed.\"})`;

    expect(typeboxDefinition).toContain(`title: '${name}'`);
    expect(typeboxDefinition).toContain(`description: "${description}"`);
    expect(typeboxDefinition).toBe(result);
  });

  it("Should return a typebox definition in string specifying minimum and maximum value", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = "Mandatory";
    const multipleInstances = "Single";
    const rangeEnumeration = [1, 65534];
    const minimum = 1;
    const maximum = 65534;
    const id = "16";
    const units = "";
    const typeboxDefinition = createResourceDefinition(
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
      units
    );

    const result = `_16: Type.Number({title: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed.", minimum: 1, maximum: 65534})`;

    expect(typeboxDefinition).toContain(`minimum: ${minimum}`);
    expect(typeboxDefinition).toContain(`maximum: ${maximum}`);
    expect(typeboxDefinition).toBe(result);
  });

  it("Should return a typebox definition in string specifying units", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = "Mandatory";
    const multipleInstances = "Single";
    const rangeEnumeration = null;
    const id = "16";
    const units = "s";
    const typeboxDefinition = createResourceDefinition(
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
      units
    );
    const result = `_16: Type.Number({title: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed.", units: 's'})`;

    expect(typeboxDefinition).toContain(`units: '${units}'`);
    expect(typeboxDefinition).toBe(result);
  });

  it("Should return a typebox definition in string specifying optional value", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = "Optional";
    const multipleInstances = "Single";
    const rangeEnumeration = null;
    const id = "16";
    const units = "";
    const typeboxDefinition = createResourceDefinition(
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
      units
    );
    const result = `_16: Type.Optional(Type.Number({title: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed."}))`;

    expect(typeboxDefinition).toBe(result);
  });

  it("Should return a typebox definition in string specifying mandatory value", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = "Mandatory";
    const multipleInstances = "Single";
    const rangeEnumeration = null;
    const id = "16";
    const units = "";
    const typeboxDefinition = createResourceDefinition(
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
      units
    );
    const result = `_16: Type.Number({title: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed."})`;

    expect(typeboxDefinition).toBe(result);
  });

  it("Should return a typebox definition in string specifying it is a multiple instance", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = "Mandatory";
    const multipleInstances = "Multiple";
    const rangeEnumeration = null;
    const id = "16";
    const units = "";
    const typeboxDefinition = createResourceDefinition(
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
      units
    );
    const result = `_16: Type.Array(Type.Number({title: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed."}))`;

    expect(typeboxDefinition).toBe(result);
  });

  it("Should return a typebox definition in string specifying it is a single instance", () => {
    const name = "Communication Retry Count";
    const type = "Unsigned Integer";
    const description =
      "The number of successive communication attempts before which a communication sequence is considered as failed.";
    const mandatoryStatus = "Mandatory";
    const multipleInstances = "Single";
    const rangeEnumeration = null;
    const id = "16";
    const units = "";
    const typeboxDefinition = createResourceDefinition(
      name,
      type,
      description,
      mandatoryStatus,
      multipleInstances,
      rangeEnumeration,
      id,
      units
    );
    const result = `_16: Type.Number({title: 'Communication Retry Count', description: "The number of successive communication attempts before which a communication sequence is considered as failed."})`;

    expect(typeboxDefinition).toBe(result);
  });
});
