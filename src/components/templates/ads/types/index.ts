import type { AdProps } from '../components/ad/types'

export type AdsTmpRef = HTMLDivElement

export interface AdsTmpProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string
	data: AdProps['data'][]
}
