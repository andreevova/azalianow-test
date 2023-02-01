export interface AdData {
	id: string
	preview: string
	text: string
	button: {
		name: string
		onClick?(): void
	}
}
