import { action, computed, makeObservable, observable, ObservableMap, runInAction } from 'mobx'

export type ItemsStoreData<I extends ItemsStoreItemData> = I[]

export interface ItemsStoreItemData {
	id: number
}

export type ItemsStoreResolver<P, D> = (params: P) => Promise<D>

export class ItemsStore<P extends {}, D extends ItemsStoreItemData> {
	private readonly resolver: ItemsStoreResolver<P, ItemsStoreData<D>>
	private readonly dataMap: ObservableMap<string, ItemsStoreData<D>>
	private readonly loadingMap: ObservableMap<string, boolean>

	@observable.ref
	private key: string

	constructor(resolver: ItemsStoreResolver<P, ItemsStoreData<D>>, params: Partial<P> = {}) {
		this.resolver = resolver
		this.dataMap = observable.map()
		this.loadingMap = observable.map()
		this.key = JSON.stringify(params)

		makeObservable(this)
	}

	@action
	set(data: (D & ItemsStoreItemData)[]) {
		this.dataMap.set(this.key, [...data])
	}

	@action
	updateItem(key: number, data: D & ItemsStoreItemData) {
		for (const item of this.dataMap.values()) {
			const index = item.findIndex(i => i.id === key)

			if (index !== -1) {
				return Object.assign(item[index], { ...data })
			}
		}
	}

	@computed
	get params() {
		return JSON.parse(this.key) as P
	}

	@computed
	get data() {
		return this.dataMap.get(this.key)
	}

	@computed
	get loading() {
		return !!this.loadingMap.get(this.key)
	}

	resolve = async () => {
		runInAction(() => this.loadingMap.set(this.key, true))

		const data = await this.resolver({ ...this.params })

		runInAction(() => {
			this.loadingMap.set(this.key, false)
			this.dataMap.set(this.key, data)
		})

		return data
	}
}
