import { forwardRef } from 'react'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import { multipleStyles } from '@/utils'
import type { PreviewRef, PreviewProps } from './types'
import styles from './preview.module.scss'

const PreviewBase = forwardRef<PreviewRef, PreviewProps>((props, ref) => {
	const { className, width = 220, height = 220, ...rest } = props

	return <Image className={multipleStyles([styles.img, className])} {...{ width, height, ...rest }} ref={ref} />
})

export type Preview = PreviewRef

export const Preview = observer(PreviewBase)
