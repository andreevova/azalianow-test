import { api } from '@/api'
import { ProductData } from '@/api/interfaces'
import { ItemsStore } from './abstract'

export const products = new ItemsStore<{}, ProductData>(api.products.list)
