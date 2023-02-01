import type { AdData } from './types'

export const ads: AdData[] = [
	{
		id: 'fa1e9561-a724-479c-a7c9-ec2e50090c1a',
		preview: 'one.png',
		text: '<span><b>- 25%</b></span> на товары для кабинета',
		button: {
			name: 'Выбрать',
			onClick: () => alert('Click :)'),
		},
	},
	{
		id: '4a0f57bb-dcf2-4098-a8b1-e8b79f5ddfe0',
		preview: 'two.png',
		text: 'Скидка <span><b>10%</b></span> на периферию для компьютера',
		button: {
			name: 'Выбрать',
			onClick: () => alert('Did you enjoy clicking? :)'),
		},
	},
]
