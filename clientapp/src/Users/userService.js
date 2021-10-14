import axios from "axios"
import { store } from "./store"
const baseUrl = "https://localhost:44377/Account"

axios.interceptors.request.use((config) => {
	const token = store.commonStore.token
	if (token) config.headers.Authorization = `Bearer ${token}`
	return config
})

const login = async (body) => {
	const response = await axios.post(baseUrl + "/login", body)
	console.log("loggin in")
	return response.data
}
const register = async (body) => {
	const response = await axios.post(baseUrl + "/register", body)
	return response.data
}
const current = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

export default { login, register, current }
