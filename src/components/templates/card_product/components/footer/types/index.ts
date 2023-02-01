import { ProductData } from '@/api/interfaces'

export type FooterRef = HTMLDivElement

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	data: ProductData
}
