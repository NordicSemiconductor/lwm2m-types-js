import path from "path";
import fs from "fs";
import { exec } from "child_process";

const EXTENSION = ".xml";
const dirpath = path.join("./LWM2M/XML/lwm2m-registry");

const processFiles = (files: any[]) =>
  files
    .filter((el) => path.extname(el) === EXTENSION)
    .forEach((element) => {
      const fileName = element.split(".")[0];
      console.log(`-- processing element ${fileName} --`);
      if (
        !["Common", "DDF", "LWM2M_senml_units", "LWM2M-v1_1", "LWM2M"].includes(
          fileName
        )
      )
        exec(
          `npx tsx ./src/Json/json2typebox-cli.ts ./LWM2M/JSON/${fileName}.json ./LWM2M/TS/${fileName}.ts`
        );
    });

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
