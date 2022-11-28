/**
 * PagingDRX
 *
 * Paging DRX information
 *
 * @see https://github.com/OpenMobileAlliance/lwm2m-registry/raw/prod/3375.xml
 *
 * ID: 3375
 * LWM2MVersion: 1.0
 * ObjectVersion: 1.0
 * MultipleInstances: false
 * Mandatory: false
 */
export type PagingDRX_3375 = Readonly<{
	'2': pagingCycle_2
	'3': DrxNb_3
	'4': ueID_4
	'5': drxSysFrameNumOffset_5
	'6': drxSubFrameNumOffset_6
	'6032': dlEarfcn_6032
	'6034': pci_6034
}>
/**
 * pagingCycle
 *
 * Paging Cycle
 *
 * ID: 2
 * MultipleInstances: false
 * Mandatory: true
 */
type pagingCycle_2 = number
/**
 * DrxNb
 *
 * DRX NB
 *
 * ID: 3
 * MultipleInstances: false
 * Mandatory: true
 */
type DrxNb_3 = number
/**
 * ueID
 *
 * IMSI mod 1024
 *
 * ID: 4
 * MultipleInstances: false
 * Mandatory: true
 */
type ueID_4 = number
/**
 * drxSysFrameNumOffset
 *
 * drxSysFrameNumOffset is used to obtain the starting system frame number for
 * DRX cycle
 *
 * ID: 5
 * MultipleInstances: false
 * Mandatory: true
 */
type drxSysFrameNumOffset_5 = number
/**
 * drxSubFrameNumOffset
 *
 * drxSubFrameNumOffset is used to obtain the starting sub frame number for DRX
 * cycle
 *
 * ID: 6
 * MultipleInstances: false
 * Mandatory: true
 */
type drxSubFrameNumOffset_6 = number
/**
 * dlEarfcn
 *
 * EARFCN - frequency
 *
 * ID: 6032
 * MultipleInstances: false
 * Mandatory: true
 */
type dlEarfcn_6032 = number
/**
 * pci
 *
 * PCI.
 *
 * ID: 6034
 * MultipleInstances: false
 * Mandatory: true
 */
type pci_6034 = number
/**
 * The objectURN for PagingDRX
 * Used in the JSON schema for the LwM2M document definition as a key.
 */
export const objectURN = '3375'
