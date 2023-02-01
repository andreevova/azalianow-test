import { forwardRef } from 'react'
import { observer } from 'mobx-react-lite'
import { multipleStyles } from '@/utils'
import { CounterRef, CounterProps } from './types'
import styles from './counter.module.scss'

const CounterBase = forwardRef<CounterRef, CounterProps>((props, ref) => {
	const { className, value, onMinus = () => {}, onPlus = () => {}, ...rest } = props

	return (
		<div className={multipleStyles([styles.container, className])} {...rest} ref={ref}>
			<div onClick={onMinus} className={styles.button}>
				<svg width="10" height="2" viewBox="0 0 10 2">
					<rect width="10" height="2" />
				</svg>
			</div>

			<span className={styles.value}>{value}</span>

			<div onClick={onPlus} className={styles.button}>
				<svg width="10" height="10" viewBox="0 0 10 10">
					<rect y="4" width="10" height="2" />
					<rect x="6" width="10" height="2" transform="rotate(90 6 0)" />
				</svg>
			</div>
		</div>
	)
})

export const Counter = observer(CounterBase)
