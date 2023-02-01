import { ProductData } from '@/api/interfaces'

export type CartButtonRef = HTMLDivElement

export interface CartButtonProps extends React.HTMLAttributes<HTMLDivElement> {
	data: ProductData
}
