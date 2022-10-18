import { getTypebox, defineProperties, main } from "./json2typebox";

describe("json2jsonSchema", () => {
  describe("getTypebox", () => {
    it("Should return a typebox definition in string", () => {
      const key = "Communication_Retry_Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = false;
      const rangeEnumeration = [""];
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        key,
        type,
        description,
        isOptional,
        rangeEnumeration,
        id,
        units
      );
      const result = `Communication_Retry_Count: Type.Number({$id: '16', description: "The number of successive communication attempts before which a communication sequence is considered as failed."})`;

      expect(typeboxDefinition).toContain(`$id: '${id}'`);
      expect(typeboxDefinition).toContain(`description: "${description}"`);
      expect(typeboxDefinition).toBe(result);
    });

    it("Should return a typebox definition in string specifying minimum and maximun value", () => {
      const key = "Communication_Retry_Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = false;
      const rangeEnumeration = ["1", "65534"];
      const minimun = 1;
      const maximun = 65534;
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        key,
        type,
        description,
        isOptional,
        rangeEnumeration,
        id,
        units
      );

      const result = `Communication_Retry_Count: Type.Number({$id: '16', description: "The number of successive communication attempts before which a communication sequence is considered as failed.", minimun: 1, maximun: 65534})`;

      expect(typeboxDefinition).toContain(`minimun: ${minimun}`);
      expect(typeboxDefinition).toContain(`maximun: ${maximun}`);
      expect(typeboxDefinition).toBe(result);
    });

    it("Should return a typebox definition in string specifying units", () => {
      const key = "Communication_Retry_Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = false;
      const rangeEnumeration = [""];
      const id = "16";
      const units = "s";
      const typeboxDefinition = getTypebox(
        key,
        type,
        description,
        isOptional,
        rangeEnumeration,
        id,
        units
      );
      const result = `Communication_Retry_Count: Type.Number({$id: '16', description: "The number of successive communication attempts before which a communication sequence is considered as failed.", units: 's'})`;

      expect(typeboxDefinition).toContain(`units: '${units}'`);
      expect(typeboxDefinition).toBe(result);
    });

    it("Should return a typebox definition in string specifying optional value", () => {
      const key = "Communication_Retry_Count";
      const type = "Unsigned Integer";
      const description =
        "The number of successive communication attempts before which a communication sequence is considered as failed.";
      const isOptional = true;
      const rangeEnumeration = [""];
      const id = "16";
      const units = "";
      const typeboxDefinition = getTypebox(
        key,
        type,
        description,
        isOptional,
        rangeEnumeration,
        id,
        units
      );
      const result = `Communication_Retry_Count: Type.Optional(Type.Number({$id: '16', description: "The number of successive communication attempts before which a communication sequence is considered as failed."}))`;

      expect(typeboxDefinition).toBe(result);
    });
  });

  describe("defineProperties", () => {
    it("Should construct the definition of the object", () => {
      const typeboxDefinition = jest.fn();
      const items = [
        {
          ATTR: { ID: "0" },
          Name: ["Short Server ID"],
          Operations: ["R"],
          MultipleInstances: ["Single"],
          Mandatory: ["Mandatory"],
          Type: ["Integer"],
          RangeEnumeration: ["1..65534"],
          Units: [""],
          Description: ["Used as link to associate server Object Instance."],
        },
      ];

      defineProperties(items, typeboxDefinition);

      expect(typeboxDefinition).toHaveBeenCalledWith(
        "Short_Server_ID", // name
        "Integer", // type
        "Used as link to associate server Object Instance.", // description
        false, // is optional
        ["1", "65534"], // range enumeration
        "0", // id
        "" // units
      );
    });

    it("Should iterates over items and return an string object", () => {
      const items = [
        {
          ATTR: { ID: "0" },
          Name: ["Short Server ID"],
          Operations: ["R"],
          MultipleInstances: ["Single"],
          Mandatory: ["Mandatory"],
          Type: ["Integer"],
          RangeEnumeration: ["1..65534"],
          Units: [""],
          Description: ["Used as link to associate server Object Instance."],
        },
        {
          ATTR: { ID: "1" },
          Name: ["Lifetime"],
          Operations: ["RW"],
          MultipleInstances: ["Single"],
          Mandatory: ["Mandatory"],
          Type: ["Integer"],
          RangeEnumeration: [""],
          Units: ["s"],
          Description: [
            "Specify the lifetime of the registration in seconds (see Client Registration Interface). If the value is set to 0, the lifetime is infinite.",
          ],
        },
      ];

      expect(defineProperties(items)).toBe(
        `Short_Server_ID: Type.Number({$id: '0', description: "Used as link to associate server Object Instance.", minimun: 1, maximun: 65534}), Lifetime: Type.Number({$id: '1', description: "Specify the lifetime of the registration in seconds (see Client Registration Interface). If the value is set to 0, the lifetime is infinite.", units: 's'})`
      );
    });
  });

  describe("main", () => {
    it("Sould transform json object in typebox definition", () => {
      const json = {
        LWM2M: {
          ATTR: {
            "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
            "xsi:noNamespaceSchemaLocation":
              "http://www.openmobilealliance.org/tech/profiles/LWM2M-v1_1.xsd",
          },
          Object: [
            {
              ATTR: { ObjectType: "MODefinition" },
              Name: ["LwM2M Server"],
              Description1: [
                "This LwM2M Objects provides the data related to a LwM2M Server. A Bootstrap-Server has no such an Object Instance associated to it.",
              ],
              ObjectID: ["1"],
              ObjectURN: ["urn:oma:lwm2m:oma:1:1.2"],
              LWM2MVersion: ["1.2"],
              ObjectVersion: ["1.2"],
              MultipleInstances: ["Multiple"],
              Mandatory: ["Mandatory"],
              Resources: [
                {
                  Item: [
                    {
                      ATTR: { ID: "0" },
                      Name: ["Short Server ID"],
                      Operations: ["R"],
                      MultipleInstances: ["Single"],
                      Mandatory: ["Mandatory"],
                      Type: ["Integer"],
                      RangeEnumeration: ["1..65534"],
                      Units: [""],
                      Description: [
                        "Used as link to associate server Object Instance.",
                      ],
                    },
                  ],
                },
              ],
              Description2: [""],
            },
          ],
        },
      };

      const importStatement = "home/documents";
      const getGeneralDescription = jest.fn();
      const getProperties = jest.fn();
      const getName = jest.fn();
      const write = jest.fn();
      main(
        "dir",
        json.LWM2M.Object[0].Description1[0],
        json.LWM2M.Object[0].Resources[0].Item,
        json.LWM2M.Object[0].Name[0]
      )(importStatement, getGeneralDescription, getProperties, getName, write);

      expect(getProperties).toBeCalledWith(
        json.LWM2M.Object[0].Resources[0].Item
      );

      expect(getGeneralDescription).toBeCalledTimes(1);
      expect(getName).toBeCalledTimes(1);
      expect(write).toBeCalledTimes(1);
    });
  });
});
