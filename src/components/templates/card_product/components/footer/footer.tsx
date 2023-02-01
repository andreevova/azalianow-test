import { forwardRef } from 'react'
import { observer } from 'mobx-react-lite'
import { store } from '@/store'
import { multipleStyles, formatterAmount } from '@/utils'
import { FooterRef, FooterProps } from './types'
import { CartButton, FavoriteButton } from './components'
import styles from './footer.module.scss'

const FooterBase = forwardRef<FooterRef, FooterProps>((props, ref) => {
	const { data, className, ...rest } = props

	const quantity = store.cart.findItem(data.id)?.quantity || 1

	const price = formatterAmount().format(quantity * data.price * 70)

	const isFavorite = !!store.favorite.findItem(data.id)

	const handleFavorite = () => {
		if (isFavorite) {
			store.favorite.remove(data.id)
		} else {
			store.favorite.add(data.id)
		}
	}

	return (
		<div className={multipleStyles([styles.container, className])} {...rest} ref={ref}>
			<span className={styles.price}>
				{price} <span>/{quantity > 1 ? `${quantity} ` : ''}шт.</span>
			</span>

			<div className={styles.footer}>
				<CartButton {...{ data }} className={styles.footer__cart_button} />
				<FavoriteButton active={isFavorite} className={styles.footer__favorite_button} onClick={handleFavorite} />
			</div>
		</div>
	)
})

export const Footer = observer(FooterBase)
