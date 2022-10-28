import path from "path";
import fs from "fs";
import { execSync } from "child_process";

const EXTENSION = ".xml";
const dirpath = path.join("./LWM2M/XML/lwm2m-registry");

fs.readdir(dirpath, function (err, files) {
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
        execSync(
          `npx tsx ./src/Json/json2typebox-cli.ts ./LWM2M/JSON/${fileName}.json ./LWM2M/TS/${fileName}.ts`
        );
    });
});
