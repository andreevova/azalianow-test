import { forwardRef, useMemo } from 'react'
import { observer } from 'mobx-react-lite'
import { multipleStyles } from '@/utils'
import { Star } from '../star'
import { StarsRef, StarsProps } from './types'
import styles from './stars.module.scss'

const widthStar = 14

const StarsBase = forwardRef<StarsRef, StarsProps>((props, ref) => {
	const { className, rate = 0, ...rest } = props

	const percent = useMemo(() => {
		const remainder = Number(String(rate).split('.')[1] || 0)
		const remainderInPercent = widthStar * (remainder / 10)

		const length = Math.floor(rate)

		return [...Array(length)].map(() => 18).reduce((a: number, b: number) => a + b, remainderInPercent)
	}, [rate])

	return (
		<div className={multipleStyles([styles.container, className])} {...rest} ref={ref}>
			<div className={styles.stars}>
				{[...Array(5)].map((_, i) => (
					<Star fill="#e9e9eb" className={styles.star} key={i} />
				))}
			</div>

			<div className={styles.stars_fill} style={{ width: `${percent}px` }}>
				<div className={styles.stars_fill__wrapper}>
					{[...Array(5)].map((_, i) => (
						<Star fill="#f26a61" className={styles.star} key={i} />
					))}
				</div>
			</div>
		</div>
	)
})

export const Stars = observer(StarsBase)
