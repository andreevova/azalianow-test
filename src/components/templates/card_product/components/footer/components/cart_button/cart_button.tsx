import { forwardRef, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { store } from '@/store'
import { multipleStyles } from '@/utils'
import { CartButtonRef, CartButtonProps } from './types'
import { Counter } from './components'
import styles from './cart_button.module.scss'

const CartButtonBase = forwardRef<CartButtonRef, CartButtonProps>((props, ref) => {
	const { data, className, ...rest } = props

	const cartItem = store.cart.findItem(data.id)

	const quantity = cartItem?.quantity || 1

	const [count, setCount] = useState(quantity)

	const handleAddToCart = () => {
		if (!cartItem) {
			return store.cart.add({
				...data,
				quantity: count,
			})
		}

		store.cart.remove(data.id)
	}

	return (
		<div className={multipleStyles([styles.container, className])} {...rest} ref={ref}>
			<button onClick={handleAddToCart} className={multipleStyles([styles.button, !!cartItem && styles['button-active']])}>
				{!!cartItem ? 'В корзине' : 'В корзину'}
			</button>

			{!cartItem && (
				<div className={styles.counter_wrapper}>
					<Counter
						value={count}
						onMinus={() => setCount(count > 1 ? count - 1 : 1)}
						onPlus={() => setCount(count + 1)}
						className={styles.counter}
					/>
				</div>
			)}
		</div>
	)
})

export const CartButton = observer(CartButtonBase)
