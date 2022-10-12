const xml2js = require("xml2js");
const fs = require("fs");
const parser = new xml2js.Parser({ attrkey: "ATTR" });

let xml_string = fs.readFileSync(
  "/home/malo/Documents/LWM2M-JSONShcema/1.XML",
  "utf8"
);

parser.parseString(xml_string, function (error, result) {
  if (error === null) {
    console.log(result);
    fs.writeFileSync(
      "/home/malo/Documents/LWM2M-JSONShcema/1.JSON",
      JSON.stringify(result)
    );
  } else {
    console.log(error);
  }
});
