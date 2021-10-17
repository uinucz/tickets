import { computed, makeAutoObservable, runInAction } from "mobx"
import { useContext, createContext } from "react"
import userService from "./userService"
import { store } from "./store"
import { observable } from "mobx"

export default class UserStore {
	user = null
	//token = null
	appLoaded = false

	constructor() {
		makeAutoObservable(this)
	}

	get isLoggedin() {
		return !!this.user
	}

	login = async (creds) => {
		try {
			const user = await userService.login(creds)
			store.commonStore.setToken(user.token)
			window.localStorage.setItem("jwt", user.token)
			runInAction(() => (this.user = user))
		} catch (error) {
			throw error
		}
	}
	logout = () => {
		store.commonStore.setToken(null)
		window.localStorage.removeItem("jwt")
		this.user = null
	}
	register = async (creds) => {
		try {
			const user = await userService.register(creds)
			store.commonStore.setToken(user.token)
			window.localStorage.setItem("jwt", user.token)
			runInAction(() => (this.user = user))
		} catch (error) {
			throw error
		}
	}

	getUser = async () => {
		try {
			const user = await userService.current()
			runInAction(() => (this.user = user))
		} catch (error) {
			console.log(error)
		}
	}
}
