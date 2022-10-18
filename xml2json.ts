import xml2js from "xml2js";
import fs from "fs";
import config from "./config/config";
const parser = new xml2js.Parser({ attrkey: "ATTR" });

/**
 * load xml schema
 */
export const getXml =
  (dir: string, name: string) =>
  (read = (route: string) => fs.readFileSync(route, "utf8")): string =>
    read(`${dir}/${name}.xml`);

/**
 * Check if error and if not create a json file
 * @param error
 * @param result
 */
export const createJson =
  (error: Error | null, result: any, dir: string, name: string) =>
  (
    write = (route: string, json: string) => fs.writeFileSync(route, json)
  ): void => {
    if (error === null) {
      console.log(result);
      write(`${dir}/${name}.json`, JSON.stringify(result));
    } else {
      console.log(error);
      throw new Error(error.message);
    }
  };

/**
 * Take a xml schema and 'translate' it to json format.
 * Then write the result in a json file
 */
export const main =
  (uploadDir: string, name: string, writeDir: string) =>
  (
    xmlFile = () => getXml(uploadDir, name)(),
    writeJson = (error: Error | null, result: any) =>
      createJson(error, result, writeDir, name)()
  ) =>
  (
    xml2json = () =>
      parser.parseString(xmlFile(), (error, result) => writeJson(error, result))
  ) =>
    xml2json();

main(config.COPY_DIR, "1", config.PASTE_DIR)()();
