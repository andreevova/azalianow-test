export const multipleStyles = (styles: (string | undefined | boolean)[]) => {
	return styles.filter(i => !['undefined', 'boolean'].includes(typeof i)).join(' ')
}
