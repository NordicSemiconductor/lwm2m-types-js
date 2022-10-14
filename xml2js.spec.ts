import { getXml, createJson, main } from "./xml2js";

//TODO: rename => xml2json
describe("xml2js", () => {
  describe("getXml", () => {
    it("should load a xml schema", () => {
      const dir = "/home/Documents/";
      const docName = "something";
      const readXML = jest.fn();
      getXml(dir, docName)(readXML);
      expect(readXML).toBeCalledWith(`${dir}/${docName}.xml`);
    });
  });

  describe("createJson", () => {
    it("should inform if there is an error", () => {
      const error: Error = { name: "error", message: "error message" };
      const result = "";
      const dir = "/home/Documents/";
      const docName = "something";
      expect(() => createJson(error, result, dir, docName)()).toThrow(
        error.message
      );
    });

    it("should create a json file", () => {
      const error = null;
      const result = "{test: 123}";
      const dir = "/home/Documents/";
      const docName = "something";
      const writeJson = jest.fn();

      createJson(error, result, dir, docName)(writeJson);
      expect(writeJson).toBeCalledWith(
        `${dir}/${docName}.json`,
        JSON.stringify(result)
      );
    });
  });

  describe("main", () => {
    it("should translate xml to json", () => {
      const uploadDir = "/home/Documents/";
      const docName = "something";
      const writeDir = "/home/Documents/";
      const xml2json = jest.fn();

      main(uploadDir, docName, writeDir)()(xml2json);
      expect(xml2json).toBeCalledTimes(1);
    });
  });
});
