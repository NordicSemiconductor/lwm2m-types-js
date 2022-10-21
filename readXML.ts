import path from "path";
import fs from "fs";
import { execSync } from "child_process";

const EXTENSION = ".xml";
const dirpath = path.join("./LWM2M/XML/lwm2m-registry");

fs.readdir(dirpath, function (err, files) {
  files
    .filter((el) => path.extname(el) === EXTENSION)
    .forEach((element) => {
      const name = element.split(".")[0];
      console.log(`-- processing element ${name} --`);
      execSync(
        `npx tsx ./xml2json.ts ./LWM2M/XML/lwm2m-registry/${element} ./LWM2M/JSON/${name}.json`
      );
    });
});
