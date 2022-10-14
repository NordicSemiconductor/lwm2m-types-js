import xml2js from "xml2js";
import fs from "fs";
const parser = new xml2js.Parser({ attrkey: "ATTR" });

/**
 * load xml schema
 */
const xml = fs.readFileSync(
  "/home/malo/Documents/LWM2M-JSONShcema/1.XML",
  "utf8"
);

/**
 * Check if error and if not create a json file
 * @param error
 * @param result
 */
const writeJson = (error: Error | null, result: any): void => {
  if (error === null) {
    console.log(result);
    fs.writeFileSync(
      "/home/malo/Documents/LWM2M-JSONShcema/1.json",
      JSON.stringify(result)
    );
  } else {
    console.log(error);
  }
};

/**
 * Take an xml schema and 'translate' it to json format
 */
parser.parseString(xml, (error, result) => writeJson(error, result));
