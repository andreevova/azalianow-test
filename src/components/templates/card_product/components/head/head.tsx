import { forwardRef } from 'react'
import { observer } from 'mobx-react-lite'
import { formatterNumberDecl, multipleStyles } from '@/utils'
import { HeadRef, HeadProps } from './types'
import { Stars } from './components'
import styles from './head.module.scss'

const reviewsDecl = formatterNumberDecl(['отзыв', 'отзыва', 'отзывов'])

const HeadBase = forwardRef<HeadRef, HeadProps>((props, ref) => {
	const { data, className, ...rest } = props

	return (
		<div className={multipleStyles([styles.container, className])} {...rest} ref={ref}>
			<span className={styles.category}>{data.category}</span>

			<div className={styles.reviews}>
				<Stars rate={data.rating.rate} />
				<span className={styles.reviews__count}>{reviewsDecl.formatWithDigit(data.rating.count)}</span>
			</div>
		</div>
	)
})

export type Head = HeadRef

export const Head = observer(HeadBase)
