import { products } from './products'
import { CartStore } from './cart'
import { FavoriteStore } from './favorite'

export const store = {
	products,
	cart: new CartStore(),
	favorite: new FavoriteStore(),
}
