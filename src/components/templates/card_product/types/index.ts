import { ProductData } from '@/api/interfaces'

export type CardProductTmpRef = HTMLDivElement

export interface CardProductTmpProps extends React.HTMLAttributes<HTMLDivElement> {
	data: ProductData
}
