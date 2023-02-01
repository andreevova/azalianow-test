import { forwardRef } from 'react'
import { observer } from 'mobx-react-lite'
import { MainRef, MainProps } from './types'
import styles from './main.module.scss'

const MainBase = forwardRef<MainRef, MainProps>((props, ref) => {
	const { children, ...rest } = props

	return (
		<main className={styles.main} {...rest} ref={ref}>
			{children}
		</main>
	)
})

export type Main = MainRef

export const Main = observer(MainBase)
