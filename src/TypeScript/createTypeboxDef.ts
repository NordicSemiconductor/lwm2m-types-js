import { readFile, writeFile } from "fs/promises";
import path from "path";
import { keyCleaning } from "./../utils/keyCleaning";
import { ignoredLwM2MObjects } from "./ignoredLwM2MObjects";
import os from "node:os";
import { tokenizeName } from "../Json/tokenizeName";
import { typeName } from "../Json/json2typebox";

/**
 * The DDF object (https://github.com/OpenMobileAlliance/lwm2m-registry/blob/prod/DDF.xml)
 * contain all the objects that have and had be part of the LwM2M standard. This means that deprecated
 * version of some objects are in this file as well.
 *
 * To know if an item represent the current stable or the deprecated version is convenient to check the DDF key of each Item object.
 * If value of the key contains the following format:
 *  - "version_history/id-of-item.xml"
 * means the item represent a deprecated version of the item.
 * If value of the key constains the following format:
 *  - "id-of-item"
 * meains the item represent the current stable version of the item.
 *
 * @param ddf
 * @returns
 */
const isCurrentVersion = (ddf: string) =>
  ddf.split("version_history/").length === 1;

/**
 * Check if value is not an empty string
 * @param ddf
 * @returns
 */
const declarationExist = (ddf: string) => ddf.length > 0;

/**
 * Iterate the list and construct:
 *  - the import statement of each typebox definition of items from LwM2M standard
 *  - Namespace declaration of each items from LwM2M standard
 *  - TypeBox object containing all the objects from LwM2M standard
 *
 * First element of the returned list is the imports statement as string
 * Second element of the returned list is the namespace declaration as string
 * Third element of the returned list is the typebox declaration as string
 * @param items
 */
const createExports = (items: any[]) =>
  items.map((element: any) => {
    const id = element.ObjectID[0];
    const name = typeName(id, element.Name[0]);
    return `export { ${name} } from "./types/${id}";`;
  });

const createDocumentProps = (items: any[]) => {
  const source = [`import { Type } from "@sinclair/typebox";`];
  source.push(
    ...items.map((element: any) => {
      const id = element.ObjectID[0];

      const name = typeName(id, element.Name[0]);
      return `import { objectURN as ${name}URN, ${name} } from "./types/${id}";`;
    })
  );

  source.push(`export const LwM2MDocument = Type.Object({`);
  source.push(
    ...items.map((element: any) => {
      const id = element.ObjectID[0];
      const name = typeName(id, element.Name[0]);
      return [
        `/**`,
        ` * ${id}: ${element.Name[0]}`,
        ` */`,
        `[${name}URN]: Type.Optional(${name}),`,
      ].join(os.EOL);
    })
  );

  source.push(`},{
    description:
      "Defines a type that can be used to validate JSON documents that encode LwM2M object data.",
  }
);
`);
  return source;
};

/**
 *
 */
const execution = async (dir?: string) => {
  const dirpath = dir ?? path.join("./lwm2m-registry-json/DDF.json");
  const ddf = await JSON.parse(await readFile(dirpath, "utf-8"));

  const types = ddf.DDFList.Item.filter((element: any) => {
    // DDF value should exist and should be the current stable version of the object
    if (!declarationExist(element.DDF[0]) || !isCurrentVersion(element.DDF[0]))
      return false;
    return true;
  }).filter((element: any) => {
    const id = element.ObjectID[0];
    if (ignoredLwM2MObjects.includes(id)) return false;
    return true;
  });

  await writeFile("./LwM2M.ts", createExports(types).join(os.EOL));

  await writeFile(
    "./LwM2MDocument.ts",
    createDocumentProps(types).join(os.EOL)
  );
};

execution();
