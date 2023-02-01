import { action, makeObservable, observable, IObservableValue } from 'mobx'

const KEY = '@favorites'

export class FavoriteStore {
	private readonly data: IObservableValue<number[]>

	constructor() {
		makeObservable(this)
		this.data = observable.box<number[]>([])
	}

	resolve() {
		this.set(storage.get())
	}

	get() {
		return this.data.get()
	}

	findItem(id: number) {
		return this.get().find(item => item === id)
	}

	@action
	set(data: number[]) {
		storage.set(data)
		this.data.set(data)
	}

	@action
	add(id: number) {
		const index = this.get().findIndex(item => item === id)

		if (index === -1) {
			this.get().push(id)
		}

		storage.add(id)
	}

	@action
	remove(id: number) {
		storage.remove(id)
		this.data.set([...this.get().filter(item => item !== id)])
	}
}

const storage = {
	get(): number[] {
		return JSON.parse(localStorage.getItem(KEY) || '[]')
	},

	set(data: number[]) {
		localStorage.setItem(KEY, JSON.stringify(data))
	},

	add(id: number) {
		const favorites = [...this.get()]

		const index = favorites.findIndex(item => item === id)

		if (index === -1) {
			favorites.push(id)
		}

		this.set(favorites)
	},

	remove(id: number) {
		this.set(this.get().filter(item => item !== id))
	},
}
