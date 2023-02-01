import { forwardRef } from 'react'
import { observer } from 'mobx-react-lite'
import { multipleStyles } from '@/utils'
import { CardProductTmpRef, CardProductTmpProps } from './types'
import { Preview, Head, Footer } from './components'
import styles from './card_product.module.scss'

const CardProductTmpBase = forwardRef<CardProductTmpRef, CardProductTmpProps>((props, ref) => {
	const { data, className, ...rest } = props

	const shownHit = data.rating.count > 300

	return (
		<div className={multipleStyles([styles.container, className])} {...rest} ref={ref}>
			<Preview src={data.image} alt={data.title} className={styles.preview} />

			<Head {...{ data }} className={styles.head} />

			<p className={styles.title}>{data.title}</p>

			<p className={styles.text}>{data.description}</p>

			<Footer {...{ data }} className={styles.footer} />

			{shownHit && <div className={styles.hit}>Хит</div>}
		</div>
	)
})

export const CardProductTmp = observer(CardProductTmpBase)
