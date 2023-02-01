import { forwardRef } from 'react'
import { observer } from 'mobx-react-lite'
import { multipleStyles } from '@/utils'
import type { AdsTmpRef, AdsTmpProps } from './types'
import { Ad } from './components'
import styles from './ads.module.scss'

const AdsTmpBase = forwardRef<AdsTmpRef, AdsTmpProps>((props, ref) => {
	const { className, title, data, ...rest } = props

	return (
		<div className={multipleStyles([styles.container, className])} {...rest} ref={ref}>
			<h1 className={styles.title}>{title}</h1>

			<svg className={styles.arrow} viewBox="0 0 43 18" fill="none">
				<path d="M33 1L41 9L33 17" />
				<path d="M1 9H41" />
			</svg>

			<div className={styles.list}>
				{data.map(item => (
					<Ad data={item} key={item.id} />
				))}
			</div>
		</div>
	)
})

export type AdsTmp = AdsTmpRef

export const AdsTmp = observer(AdsTmpBase)
