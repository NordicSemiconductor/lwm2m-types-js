import xml2js from "xml2js";
import fs from "fs";
const parser = new xml2js.Parser({ attrkey: "ATTR" });

/**
 * load xml schema
 */
const xml = (dir: string, name: string) =>
  fs.readFileSync(`${dir}/${name}.xml`, "utf8"); // TODO: define method as param

/**
 * Check if error and if not create a json file
 * @param error
 * @param result
 */
const writeJson = (
  error: Error | null,
  result: any,
  dir: string,
  name: string
): void => {
  if (error === null) {
    console.log(result);
    fs.writeFileSync(`${dir}/${name}.json`, JSON.stringify(result)); // TODO: define method as param
  } else {
    console.log(error);
  }
};

/**
 * Take a xml schema and 'translate' it to json format.
 * Then write the result in a json file
 */
const main =
  (uploadDir: string, name: string, writeDir: string) =>
  (
    xmlFile = () => xml(uploadDir, name),
    write = (error: Error | null, result: any) =>
      writeJson(error, result, writeDir, name)
  ) =>
    parser.parseString(xmlFile(), (error, result) => write(error, result));

main(
  "/home/malo/Documents/LWM2M-JSONShcema",
  "1",
  "/home/malo/Documents/LWM2M-JSONShcema"
)();
