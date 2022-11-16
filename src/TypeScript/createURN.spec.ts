import { createURN } from "./createURN";

describe("createURN()", () => {
  it("should create a fully qualified URN", () =>
    expect(
      createURN({
        omaNamespace: "ext",
        ObjectVersion: "1.1",
        LwM2MVersion: "1.2",
        ObjectID: "42",
      })
    ).toEqual(`ext:42:1.1@1.2`));
  it("should omit the LwM2M version if it is 1.0", () =>
    expect(
      createURN({
        omaNamespace: "ext",
        ObjectVersion: "1.1",
        LwM2MVersion: "1.0",
        ObjectID: "42",
      })
    ).toEqual(`ext:42:1.1`));
  it("should omit the object version if it is 1.0", () =>
    expect(
      createURN({
        omaNamespace: "ext",
        ObjectVersion: "1.0",
        LwM2MVersion: "1.2",
        ObjectID: "42",
      })
    ).toEqual(`ext:42@1.2`));
  it("should omit the object version and the LwM2M version if both are 1.0", () =>
    expect(
      createURN({
        omaNamespace: "ext",
        ObjectVersion: "1.0",
        LwM2MVersion: "1.0",
        ObjectID: "42",
      })
    ).toEqual(`ext:42`));
});
