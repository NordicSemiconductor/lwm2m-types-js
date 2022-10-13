const json = require("./1.json");
const fs = require("fs");

//(key: string, type: string, description: string)
const defineType = (
  key,
  type,
  description,
  isOptional,
  rangeEnumeration,
  id,
  units
) => {
  const minimum = rangeEnumeration ? Number(rangeEnumeration[0]) : null;
  const maximun = rangeEnumeration ? Number(rangeEnumeration[1]) : null;

  const val = `Type.${getType(type)}({
    $id: '${id}',
    description: "${description}"
    ${minimum ? `, minimun: ${minimum}` : ""}
    ${minimum ? `, maximun: ${maximun}` : ""}
    ${units ? `, units: '${units}'` : ""}
})`;
  return isOptional ? `${key}: Type.Optional(${val})` : `${key}: ${val}`;
};

const getType = (type) => {
  switch (type) {
    case "Integer":
      return "Number";
    case "Unsigned Integer":
      return "Number";
    case "Boolean":
      return "Boolean";
    case "String":
      return "String";
    default:
      return "Any";
  }
};

const x = json.LWM2M.Object[0].Resources[0].Item.reduce(
  (previousValue, currentValue) => {
    const key = currentValue.Name[0].replaceAll(" ", "_").replaceAll("-", "_");
    const type = currentValue.Type[0];
    const description = currentValue.Description[0]
      .replaceAll(`"`, "'")
      .replaceAll("’", "'")
      .replaceAll("\n", " ");
    const isOptional = currentValue.Mandatory[0] === "Optional";
    const rangeEnumeration = currentValue.RangeEnumeration[0].split("..");
    const id = currentValue.ATTR.ID;
    const units = currentValue.Units[0];

    const newObject = defineType(
      key,
      type,
      description,
      isOptional,
      rangeEnumeration,
      id,
      units
    );
    return previousValue.length === 0
      ? newObject
      : `${previousValue}, ${newObject}`;
  },
  ""
);

const example = `hola : Type.String({
    minLength: 1,
    description: 'Network mode',
    examples: ['LTE-M', 'NB-IoT'],
})`;
const importTypeBox = `import { Type } from '@sinclair/typebox'`;
const description = json.LWM2M.Object[0].Description1[0]
  .replaceAll(`"`, "'")
  .replaceAll("’", "'")
  .replaceAll("\n", " ");
const object = `export const ${json.LWM2M.Object[0].Name[0].replaceAll(
  " ",
  "_"
)} = Type.Object({${x}}, {description: "${description}"})`;

const message = `${importTypeBox}\n ${object}`;
/*
{

}

*/

fs.writeFileSync(
  "/home/malo/Documents/LWM2M-JSONShcema/1.ts",
  message,
  "utf8",
  { flag: "wx" }
);
