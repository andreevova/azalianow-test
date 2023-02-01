import { forwardRef } from 'react'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { multipleStyles } from '@/utils'
import type { AdRef, AdProps } from './types'
import styles from './ad.module.scss'

const AdBase = forwardRef<AdRef, AdProps>((props, ref) => {
	const { className, data, ...rest } = props

	return (
		<div className={multipleStyles([styles.container, className])} {...rest} ref={ref}>
			<div className={styles.preview}>
				<Image src={`/ads/${data.preview}`} width={140} height={140} alt="" className={styles.preview__img} />
			</div>

			<div className={styles.info}>
				<div className={styles.info__wrapper}>
					<p className={styles.info__text} dangerouslySetInnerHTML={{ __html: data.text }} />

					<button className={styles.info__button} onClick={data.button.onClick}>
						<span>{data.button.name}</span>
					</button>
				</div>
			</div>
		</div>
	)
})

export type Ad = AdRef

export const Ad = observer(AdBase)
