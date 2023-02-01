import { isEqual, omit } from 'lodash'
import { action, makeObservable, observable, IObservableValue, computed } from 'mobx'
import { ProductData } from '@/api/interfaces'

const KEY = '@cart'

export interface Data extends ProductData {
	quantity: number
}

export class CartStore {
	private readonly data: IObservableValue<Data[]>

	constructor() {
		makeObservable(this)
		this.data = observable.box<Data[]>([])
	}

	resolve() {
		this.set(storage.get())
	}

	get() {
		return this.data.get()
	}

	findItem(id: number) {
		return this.get().find(item => item.id === id)
	}

	@action
	set(data: Data[]) {
		storage.set(data)
		this.data.set(data)
	}

	@action
	add(data: Data) {
		const index = this.get().findIndex(item => equalData(item, data))

		if (index !== -1) {
			this.get()[index].quantity += data.quantity
		} else {
			this.get().push(data)
		}

		storage.add(data)
	}

	@action
	remove(id: number) {
		storage.remove(id)
		this.data.set([...this.get().filter(item => item.id !== id)])
	}
}

const storage = {
	get(): Data[] {
		return JSON.parse(localStorage.getItem(KEY) || '[]')
	},

	set(data: Data[]) {
		localStorage.setItem(KEY, JSON.stringify(data))
	},

	add(data: Data) {
		const cart = [...this.get()]

		const index = cart.findIndex(item => equalData(item, data))

		if (index !== -1) {
			cart[index].quantity += data.quantity
		} else {
			cart.push(data)
		}

		this.set(cart)
	},

	remove(id: number) {
		this.set(this.get().filter(item => item.id !== id))
	},
}

const equalData = (first: Data, last: Data) => {
	return isEqual(omit(first, ['quantity']), omit(last, ['quantity']))
}
