export const tokenizeName = (name: string): string =>
	name
		.replaceAll(' ', '')
		.replaceAll('&', 'and')
		.replace(/^(\d)(.+)/, 'n$1$2')
		.replaceAll(/[^a-z0-9]/gi, '_')
		.replaceAll(/_{2,}/g, '_')
		.replaceAll(/_+$/g, '')
		.trim()
