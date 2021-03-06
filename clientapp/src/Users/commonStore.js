import { makeAutoObservable, reaction } from "mobx"

export default class CommonStore {
	error = null
	token = window.localStorage.getItem("jwt")
	appLoaded = false
	commonNumber = 0

	constructor() {
		makeAutoObservable(this)

		reaction(
			() => this.token,
			(token) => {
				if (token) {
					window.localStorage.setItem("jwt", token)
				} else {
					window.localStorage.removeItem("jwt")
				}
			}
		)
	}

	setToken = (token) => {
		this.token = token
	}
	setAppLoaded = () => {
		this.appLoaded = true
	}
}
