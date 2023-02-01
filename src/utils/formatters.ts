export const formatterNumberDecl = (words: string[]) => ({
	format(num: number) {
		const n = isNaN(num) ? 0 : num
		return words[n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2]
	},

	formatWithDigit(num: number) {
		return `${num} ${this.format(num)}`
	},
})

export const formatterAmount = (locale?: string, options?: Intl.NumberFormatOptions | undefined) => {
	const formatter = new Intl.NumberFormat(locale || 'RU', {
		style: 'currency',
		currency: 'RUB',
		minimumFractionDigits: 0,
		...options,
	})

	return {
		format: (amount: number) => {
			return formatter.format(amount)
		},
	}
}
