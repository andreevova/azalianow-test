import type { AdData } from '@/data'

export type AdRef = HTMLDivElement

export interface AdProps extends React.HTMLAttributes<HTMLDivElement> {
	data: AdData
}
