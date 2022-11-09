import { createResourceDefinition } from "./createResourceDefinition";
import { parseResource } from "./parseResource";

/**
 * Iterates over the items, parse data and construct the typebox definition of each resource
 */
export const getResourcesDefinition = (items: any[]) =>
  items
    .map(parseResource)
    .map((element) =>
      createResourceDefinition(
        element.name,
        element.type,
        element.description,
        element.mandatoryStatus,
        element.multipleInstances,
        element.rangeEnumeration,
        element.id,
        element.units
      )
    )
    .reduce((previus, current, index) => {
      return index === 0 ? current : `${previus}, ${current}`;
    }, "");
