/**
 * emmStateValue
 *
 * EMM context information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3361.xml
 *
 * ID: 3361
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type emmStateValue_3361 = Readonly<{
	'0': EmmState_0
	'1': emmSubstate_1
}>
/**
 * EmmState
 *
 * 1 = EmmNull
 * 2 = EmmDeregistered
 * 3 = EmmRegisteredInitiated
 * 4 = EmmRegistered
 * 5 = EmmTrackingAreaUpdatingInitiated
 * 6 = EmmServiceRequestInitiated
 * 7 = EmmDeregisteredInitiated
 *
 * ID: 0
 * MultipleInstances: false
 * Mandatory: true
 */
type EmmState_0 = number
/**
 * emmSubstate
 *
 * -- If EMM state is EmmDeregistered(2), EMM sub-state
 * -- EmmDeregisteredNoImsi(1)
 * -- EmmDeregisteredPlmnSearch(2)
 * -- EmmDeregisteredAttachNeeded(3)
 * -- EmmDeregisteredNoCellAvailable(4)
 * -- EmmDeregisteredAttemptingToAttach(5)
 * -- EmmDeregisteredNormalService(6)
 * -- EmmDeregisteredLimitedService(7)
 * -- If EMM state is EmmRegistered(4), EMM sub-state
 * -- EmmRegisteredNormalService(1)
 * -- EmmRegisteredUpdateNeeded(2)
 * -- EmmRegisteredAttemptingToUpdate(3)
 * -- EmmRegisteredNoCellAvailable(4)
 * -- EmmRegisteredPlmnSearch(5)
 * -- EmmRegisteredLimitedService(6)
 * -- EmmRegisteredImsiDetachInitiated(7)
 * -- EmmRegisteredAttemptingToUpdateMm(8)
 * -- Others use invalid EMM Substate value (0)
 *
 *
 * ID: 1
 * MultipleInstances: false
 * Mandatory: true
 */
type emmSubstate_1 = number
/**
 * The objectURN for emmStateValue
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3361'
