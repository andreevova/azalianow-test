import { ProductData } from '@/api/interfaces'

export type HeadRef = HTMLDivElement

export interface HeadProps extends React.HTMLAttributes<HTMLDivElement> {
	data: ProductData
}
