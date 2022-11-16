import { readFile, writeFile } from "fs/promises";
import path from "path";
import { keyCleaning } from "./../utils/keyCleaning";
import { ignoredLwM2MObjects } from "./ignoredLwM2MObjects";

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
const getData = (items: any[]) =>
  items.reduce(
    (previous: string[], element: any, index: number) => {
      // DDF value should exist and should be the current stable version of the object
      if (
        !declarationExist(element.DDF[0]) ||
        !isCurrentVersion(element.DDF[0])
      )
        return previous;

      const id = element.ObjectID[0];
      if (ignoredLwM2MObjects.includes(id)) return previous;
      const name = element.Name[0];

      // TODO: add explanation why this is taken as a reference
      if (previous[2] === "") {
        return [
          `import { _${id} } from "./types/${id}";`, // import statement
          `export namespace Object_${id} { export type ${keyCleaning(
            name
          )} = Static<typeof _${id}> }\n`, // namespace declaration
          `_${id}: Type.Optional(_${id})`, // Typebox declaration
        ];
      }

      return [
        `${previous[0]} import { _${id} } from "./types/${id}";`, // import statement
        `${
          previous[1]
        } export namespace Object_${id} { export type ${keyCleaning(
          name
        )} = Static<typeof _${id}> }\n`, // namespace declaration
        `${previous[2]} , _${id}: Type.Optional(_${id})`, // Typebox declaration
      ];
    },
    ["", "", ""]
  );

/**
 *
 */
const execution = async (dir?: string) => {
  const dirpath = dir ?? path.join("./lwm2m-registry-json/DDF.json");
  const ddf = await JSON.parse(await readFile(dirpath, "utf-8"));
  const info = getData(ddf.DDFList.Item);

  // import statements
  const importStatic = ` import { Static } from "@sinclair/typebox";`;
  const importType = `import { Type } from "@sinclair/typebox";`;
  const imports = info[0];

  // objects declaration
  const typeBoxDeclaration = `export const LwM2MType = Type.Object({${info[2]}})`;
  const nameSpaceDeclaration = `export namespace LwM2M {${info[1]}}`;

  // value definition
  const LwM2M = `${imports}\n${importStatic} ${nameSpaceDeclaration}`;
  const LwM2MType = `${imports}\n${importType} ${typeBoxDeclaration}`;
  await writeFile("./LWM2M.ts", LwM2M);
  await writeFile("./LWM2MType.ts", LwM2MType);
};

execution();
