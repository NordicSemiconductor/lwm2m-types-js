import { execSync } from "child_process";

execSync("npx tsx ./getXML");
execSync("npx tsx ./readXML");
execSync("npx tsx ./readJson");
execSync("npx tsx ./createTypeboxDef");
execSync("rm -r ./LWM2M/JSON && rm -r ./LWM2M/XML ");
