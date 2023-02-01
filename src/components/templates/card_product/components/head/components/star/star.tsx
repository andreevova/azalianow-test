import { forwardRef } from 'react'
import { observer } from 'mobx-react-lite'
import { multipleStyles } from '@/utils'
import { StarRef, StarProps } from './types'
import styles from './star.module.scss'

const StarBase = forwardRef<StarRef, StarProps>((props, ref) => {
	const { viewBox = '0 0 14 14', fill = 'black', className, ...rest } = props

	return (
		<svg {...{ viewBox, ...rest }} fill="none" className={multipleStyles([styles.icon, className])} ref={ref}>
			<path
				{...{ fill }}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7 0L8.61892 5.12352L14 5.08673L9.62155 8.21419L11.3233 13.3101L7 10.1183L2.67674 13.3101L4.37845 8.21419L0 5.08673L5.38108 5.12352L7 0Z"
			/>
		</svg>
	)
})

export const Star = observer(StarBase)
