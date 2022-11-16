export const parseLwM2MURN = (
  urn: string
): { ObjectID: string; ObjectVersion?: string } | { error: Error } => {
  const match =
    /^urn:oma:lwm2m:(?:oma|ext|x):(?<ObjectID>\d+)(?::(?<ObjectVersion>[0-9]+\.\d+))?/.exec(
      urn
    );
  if (match?.groups === undefined)
    return { error: new Error(`Failed to parse LwM2M URN: '${urn}'`) };
  return {
    ObjectID: match.groups?.ObjectID,
    ObjectVersion: match.groups?.ObjectVersion,
  };
};
