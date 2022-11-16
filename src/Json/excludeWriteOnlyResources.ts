/**
 * This excludes resources which will not report values: Execute and Write-Only.
 *
 * @see http://www.openmobilealliance.org/release/lightweightm2m/V1_0_2-20180209-A/OMA-TS-LightweightM2M-V1_0_2-20180209-A.pdf (5.1.1 Attributes Definitions and Rules)
 */
export const excludeWriteOnlyResources = ({
  Operations,
}: {
  Operations: [string];
}): boolean => !["W", "E"].includes(Operations?.[0]);
