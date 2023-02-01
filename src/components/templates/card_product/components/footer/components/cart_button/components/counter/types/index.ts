export type CounterRef = HTMLDivElement

export interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
	value?: number
	onMinus?(): void
	onPlus?(): void
}
