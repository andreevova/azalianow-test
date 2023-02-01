import { action, makeObservable, observable, ObservableMap } from 'mobx'

export interface ItemStoreData {
	[k: string]: any
}

type ItemStoreResolver<D> = (key: string) => Promise<D>

export class ItemStore<D extends ItemStoreData> {
	private readonly resolver: ItemStoreResolver<D>
	private readonly dataMap: ObservableMap<string, D>

	constructor(resolver: ItemStoreResolver<D>) {
		makeObservable(this)
		this.resolver = resolver
		this.dataMap = observable.map()
	}

	async resolve(key: string) {
		const data = await this.resolver(key)
		this.set(data._id, data)
		return data
	}

	get(key: string) {
		return this.dataMap.get(key)
	}

	@action
	set(key: string, data: D) {
		this.dataMap.set(key, data)
	}
}
