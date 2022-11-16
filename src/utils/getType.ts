/**
 * Get the equivalent data type
 *
 * @see http://www.openmobilealliance.org/release/lightweightm2m/V1_0_2-20180209-A/OMA-TS-LightweightM2M-V1_0_2-20180209-A.pdf
 */
export const getTypeBoxType = (lwm2mType: string): string => {
  switch (lwm2mType) {
    case "Integer":
      return "Number";
    case "Float":
      return "Number";
    case "Unsigned Integer":
      return "Number";
    case "Boolean":
      return "Boolean";
    case "String":
    case "Opaque":
    case "Objlnk":
      return "String";
    /*
      // TODO: give a solution for this case. https://github.com/sinclairzx81/typebox/issues/2
      case "Time":
        return "Date";
      */
    default:
      return "Any";
  }
}; // TODO: add test case and show examples of use cases
