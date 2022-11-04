/**
 * Get the equivalent data type
 * @param type
 * @returns string
 */
 export const getType = (type: string): string => {
    switch (type) {
      case "Integer":
        return "Number";
      case "Float":
        return "Number";
      case "Unsigned Integer":
        return "Number";
      case "Boolean":
        return "Boolean";
      case "String":
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