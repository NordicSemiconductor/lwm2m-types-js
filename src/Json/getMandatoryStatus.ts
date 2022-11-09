/**
 * Define if the type box definition of the object is optional or mandatory.
 * following the allowed options specified in http://openmobilealliance.org/tech/profiles/LWM2M-v1_1.xsd
 * @param status
 * @param object
 * @returns
 */
export const getMandatoryStatus = (status: string, object: string) => {
  if (status !== "Mandatory" && status !== "Optional")
    throw new Error("Status specification is not allowed");

  const isMandatory = status === "Mandatory";
  return isMandatory ? `${object}` : `Type.Optional(${object})`;
};
