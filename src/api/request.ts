import axios, { AxiosRequestConfig } from 'axios'

const api = axios.create({
	baseURL: 'https://fakestoreapi.com',
})

interface Query extends AxiosRequestConfig {}

export const request = async <T>(query: Query) => {
	try {
		const res = await api.request({ ...query })
		return res.data as T
	} catch (err: any) {
		throw { success: false }
	}
}
