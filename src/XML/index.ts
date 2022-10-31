import path from "path";
import fs from "fs";
import { exec } from "child_process";

const EXTENSION = ".xml";
const dirpath = path.join("./LWM2M/XML/lwm2m-registry");

const processFiles = (files: any[]) => {
  files
    .filter((el) => path.extname(el) === EXTENSION)
    .forEach((element) => {
      const name = element.split(".")[0];
      console.log(`-- processing element ${name} --`);
      exec(
        `npx tsx ./src/XML/xml2json.ts ./LWM2M/XML/lwm2m-registry/${element} ./LWM2M/JSON/${name}.json`
      );
    });
};

try {
  fs.readdir(dirpath, (err, files) => {
    if (err) {
      console.log(`Action failed with error ${err}`);
      process.exit(1);
    }
    processFiles(files);
  });
} catch (err) {
  console.log(`Action failed with error ${err}`);
  process.exit(1);
}
