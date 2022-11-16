import { parseLwM2MURN } from "./parseLwM2MURN";

describe("parseLwM2MURN()", () => {
  it("should parse a URN with an object version", () =>
    expect(parseLwM2MURN("urn:oma:lwm2m:oma:0:1.2")).toMatchObject({
      ObjectID: "0",
      ObjectVersion: "1.2",
    }));
  it("should parse a URN without an object version", () =>
    expect(parseLwM2MURN("urn:oma:lwm2m:oma:42")).toMatchObject({
      ObjectID: "42",
    }));
  it("should parse a URN with a different extension id ", () =>
    expect(parseLwM2MURN("urn:oma:lwm2m:x:10241")).toMatchObject({
      ObjectID: "10241",
    }));
  it("should not parse invalid URNs", () =>
    expect(parseLwM2MURN("foo")).toBeNull());
});
