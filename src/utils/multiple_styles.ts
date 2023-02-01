export const multipleStyles = (styles: (string | undefined)[]) => {
	return styles.filter(i => i !== undefined).join(' ')
}
