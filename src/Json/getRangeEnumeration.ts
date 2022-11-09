// TODO: add description
// TODO: Update when this issue is resolved https://github.com/OpenMobileAlliance/lwm2m-registry/issues/690
// https://github.com/OpenMobileAlliance/lwm2m-registry/pull/685
/**
 *
 * @param rangeEnumeration
 * @returns
 */
export const getRangeEnumeration = (
  rangeEnumeration: string
): [...(number | null)[]] | null => {
  //TODO: define if null or undefine
  if (rangeEnumeration.length === 0) return null; // empty string case

  if (rangeEnumeration.includes("..")) {
    const minAndMax = rangeEnumeration.split("..");

    const minimum = minAndMax[0]
      ? Number(minAndMax[0].replace(/\D/g, ""))
      : null;
    const maximum = minAndMax[1]
      ? Number(minAndMax[1].replace(/\D/g, ""))
      : null;
    return [minimum, maximum];
  }

  if (rangeEnumeration.split(",").length > 1)
    return rangeEnumeration
      .split(",")
      .map((element: string) => Number(element));

  return null; // no valid case
};
