import { readFile, writeFile } from "fs/promises";
import path from "path";
import { keyCleaning } from "./json2typebox";

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
 *
 * First element of the returned list is the imports statement as string
 * Second element of the returned list is the namespace declaration as string
 * @param items
 */
const getData = (items: any[]) =>
  items.reduce(
    (previous: string[], element: any, index: number) => {
      // DDF value should exist and should be the current stable version of the object
      if (
        !declarationExist(element.DDF[0].length) ||
        !isCurrentVersion(element.DDF[0])
      )
        return previous;

      const id = element.ObjectID[0];
      const name = element.Name[0];
      if (index === 0) {
        return [
          `import { _${id} } from "./LWM2M/TS/${id}";`, // import statement
          `export namespace Object_${id} { export type ${keyCleaning(
            name
          )} = Static<typeof _${id}> }\n`, // namespace declaration
        ];
      }

      return [
        `${previous[0]} import { _${id} } from "./LWM2M/TS/${id}";`, // import statement
        `${
          previous[1]
        } export namespace Object_${id} { export type ${keyCleaning(
          name
        )} = Static<typeof _${id}> }\n`, // namespace declaration
      ];
    },
    ["", ""]
  );

/**
 *
 */
const execution = async (dir?: string) => {
  const dirpath = dir ?? path.join("./LWM2M/JSON/DDF.json");
  const ddf = await JSON.parse(await readFile(dirpath, "utf-8"));
  const info = getData(ddf.DDFList.Item);
  const importStatic = ` import { Static } from "@sinclair/typebox";`;
  const imports = info[0];
  const declarationStatement = `export namespace LwM2M {${info[1]}}`;
  const LwM2M = `${imports}\n${importStatic} ${declarationStatement}`;
  await writeFile("./LWM2M.ts", LwM2M);
};

execution();
