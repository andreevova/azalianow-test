import { request } from '@/api/request'
import { ProductData } from '@/api/interfaces'

export const list = () => {
	return request<ProductData[]>({ url: '/products', method: 'get' })
}
