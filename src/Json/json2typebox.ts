import { dataCleaning } from "./../utils/dataCleaning";

import { keyCleaning } from "./../utils/keyCleaning";
import { getMandatoryStatus } from "./getMandatoryStatus";
import { getMultipleInstanceStatus } from "./getMultipleInstanceStatus";
import { getResourcesDefinition } from "./getResourcesDefinition";

// TODO: add test case
/**
 * Parse object data, get resources definition and generate the typebox object definition
 */
export const createDefinition = (Lwm2mRegistry: any): string => {
  const description = Lwm2mRegistry.Description1[0];
  const items = Lwm2mRegistry.Resources[0].Item;
  const id: string = Lwm2mRegistry.ObjectID[0];
  const mandatoryStatus = Lwm2mRegistry.Mandatory[0];
  const multipleInstances = Lwm2mRegistry.MultipleInstances[0];

  // object metadata
  const name = `Name: Type.String({examples:["${Lwm2mRegistry.Name[0]}"]})`;
  const objectUrn = `ObjectURN: Type.String({examples:["${Lwm2mRegistry.ObjectURN[0]}"]})`;
  const lwm2mVersion = `LWM2MVersion: Type.Number({examples:[${Lwm2mRegistry.LWM2MVersion[0]}]})`;
  const objectVersion = `ObjectVersion: Type.Number({examples:[${Lwm2mRegistry.ObjectVersion[0]}]})`;

  const resources = `Resources: Type.Object({${getResourcesDefinition(
    items
  )}})`;
  const importTypeBox = `import { Type, Static } from '@sinclair/typebox'`;

  let object = `${name},${objectUrn},${lwm2mVersion},${objectVersion}, ${resources}},{description: "${dataCleaning(
    description
  )}"`;
  object = getMultipleInstanceStatus(
    multipleInstances,
    `Type.Object({${object}})`
  );
  object = getMandatoryStatus(mandatoryStatus, object);

  const typeboxDefinition = `export const _${id} = ${object}`; // FIXME:  { additionalProperties: false },  --> is creating issues. Error message: Expected 1-2 arguments, but got 3.

  const nameSpaceDefinition = `export namespace Object_${id} {export type ${keyCleaning(
    Lwm2mRegistry.Name[0]
  )} =  Static<typeof _${id}>}`;
  return `${importTypeBox}\n${typeboxDefinition}\n${nameSpaceDefinition}`;
};
