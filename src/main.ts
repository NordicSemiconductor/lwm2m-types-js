import { execSync } from "child_process";

execSync("npx tsx ./src/pre-steps");
//execSync("cd ./LWM2M/XML/lwm2m-registry && ls");
execSync("npx tsx ./src/XML/index");
execSync("npx tsx ./src/Json/index");
execSync("npx tsx ./src/TypeScript/createTypeboxDef");
execSync("rm -r ./LWM2M/JSON && rm -r ./LWM2M/XML ");
execSync("echo process finished");
