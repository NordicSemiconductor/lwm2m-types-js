import { exec } from "child_process";
import fs from "fs";
import path from "path";

const cloneRepo = new Promise((resolve, reject) => {
  // find . -name '*.xml' -exec cp '{}' ./otherFolder ';'

  exec(
    `mkdir ./LWM2M && cd ./LWM2M && mkdir XML && mkdir JSON && mkdir TS && cd XML && git clone git@github.com:OpenMobileAlliance/lwm2m-registry.git && cd lwm2m-registry `,
    (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      }
      resolve(() => {
        // stdout ? stdout : stderr
        fs.readdir(".", function (rr: any, files: any[]) {
          const txtFiles = files.filter((el) => path.extname(el) === ".txt");
          // do something with your files, by the way they are just filenames...
          console.log(txtFiles);
        });
      });
    }
  );
});

const execution = async () => {
  await cloneRepo;
};

execution;
